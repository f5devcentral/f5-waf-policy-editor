import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { BlockingSettingsViolation } from "../../../model/policy-schema/policy.definitions";
import { WaitEventEnum } from "./wait-event.enum";
import { WaitEventUtil } from "../../../utils/wait-event.util";
import { ParseContextModel } from "../../model/parse-context.model";
import { HttpResponseStatusViolationParseStrategy } from "./violations.parse-strategy/http-response-status.violation.parse-strategy";
import { ThreatCampaignViolationParseStrategy } from "./violations.parse-strategy/threat-campaign.violation.parse-strategy";
import { blockAlarmUtil } from "./block-alarm.util";
import { HttpProtocolsParseStrategy } from "./http-protocols.parse-strategy";
import { EvasionsParseStrategy } from "./evasions.parse-strategy";
import { FiletypesParseStrategy } from "./filetypes.parse-strategy";
import { MethodsParseStrategy } from "./methods.parse-strategy";
import { get as _get } from "lodash";
import { AthenaAction } from "../../model/athena-common.model";

export class ViolationsParseStrategy extends ParseStrategyBase {
  private readonly violationParsers: { [key: string]: () => ParseStrategyBase };
  private readonly processedServicePolocyViolations: { [key: string]: boolean };

  constructor(protected context: ParseContextModel) {
    super(context);

    this.violationParsers = {};
    this.violationParsers["VIOL_HTTP_RESPONSE_STATUS"] = () =>
      new HttpResponseStatusViolationParseStrategy(context);
    this.violationParsers["VIOL_THREAT_CAMPAIGN"] = () =>
      new ThreatCampaignViolationParseStrategy(context);
    this.processedServicePolocyViolations = {};
  }

  private async defaultProcessing(
    policyObj: any,
    fullPath: string,
    x: BlockingSettingsViolation
  ): Promise<boolean> {
    if (blockAlarmUtil(policyObj, !!this.context.athenaFirewallDto.blocking)) {
      this.processedServicePolocyViolations[policyObj.name] = true;
    }

    switch (policyObj.name) {
      case "VIOL_FILETYPE": {
        if (
          blockAlarmUtil(policyObj, !!this.context.athenaFirewallDto.blocking)
        ) {
          this.context.markSupportedViolation(policyObj.name);
          const parser = new FiletypesParseStrategy(this.context);
          if (this.context.policyContainer.policy.filetypes) {
            await parser.parse(
              this.context.policyContainer.policy.filetypes,
              "policy.filetypes"
            );
          }
        }
        return true;
      }
      case "VIOL_METHOD": {
        if (
          blockAlarmUtil(policyObj, !!this.context.athenaFirewallDto.blocking)
        ) {
          this.context.markSupportedViolation(policyObj.name);
          const parser = new MethodsParseStrategy(this.context);
          if (this.context.policyContainer.policy.methods) {
            await parser.parse(
              this.context.policyContainer.policy.methods,
              "policy.methods"
            );
          }
        }
        return true;
      }
      case "VIOL_MANDATORY_HEADER":
      case "VIOL_HTTP_RESPONSE_STATUS":
      case "VIOL_REQUEST_MAX_LENGTH":
      case "VIOL_FILE_UPLOAD":
      case "VIOL_FILE_UPLOAD_IN_BODY":
      case "VIOL_XML_MALFORMED":
      case "VIOL_JSON_MALFORMED":
      case "VIOL_ASM_COOKIE_MODIFIED": {
        if (
          blockAlarmUtil(policyObj, !!this.context.athenaFirewallDto.blocking)
        ) {
          this.context.markSupportedViolation(policyObj.name);
        }
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.success,
            policyObj.name
          )
        );
        return true;
      }
      case "VIOL_HTTP_PROTOCOL": {
        if (
          blockAlarmUtil(policyObj, !!this.context.athenaFirewallDto.blocking)
        ) {
          const parser = new HttpProtocolsParseStrategy(this.context);
          if (
            this.context.policyContainer.policy["blocking-settings"] &&
            this.context.policyContainer.policy["blocking-settings"][
              "http-protocols"
            ]
          ) {
            await parser.parse(
              this.context.policyContainer.policy["blocking-settings"][
                "http-protocols"
              ],
              "policy.blocking-settings.http-protocols"
            );
          }
        }
        return true;
      }
      case "VIOL_EVASION": {
        if (
          blockAlarmUtil(policyObj, !!this.context.athenaFirewallDto.blocking)
        ) {
          const parser = new EvasionsParseStrategy(this.context);
          if (
            this.context.policyContainer.policy["blocking-settings"] &&
            this.context.policyContainer.policy["blocking-settings"]["evasions"]
          ) {
            await parser.parse(
              this.context.policyContainer.policy["blocking-settings"][
                "evasions"
              ],
              "policy.blocking-settings.http-evasions"
            );
          }
        }
        return true;
      }
      case "VIOL_ATTACK_SIGNATURE": {
        return true;
      }
      default: {
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.notSupported,
            x.name
          )
        );

        return false;
      }
    }
  }

  async addMissedServicePolicies(): Promise<void> {
    const servicePolicyViolations: {
      [key: string]: { factory: () => ParseStrategyBase; path: string };
    } = {
      VIOL_FILETYPE: {
        factory: () =>
          new FiletypesParseStrategy(this.context, AthenaAction.NEXT_POLICY),
        path: "policy.filetypes",
      },
      VIOL_METHOD: {
        factory: () =>
          new MethodsParseStrategy(this.context, AthenaAction.NEXT_POLICY),
        path: "policy.methods",
      },
    };

    const keys = Object.keys(servicePolicyViolations);
    for await (const x of keys) {
      if (!this.processedServicePolocyViolations[x]) {
        const parser = servicePolicyViolations[x].factory();
        await parser.parse(
          _get(this.context.policyContainer, servicePolicyViolations[x].path),
          servicePolicyViolations[x].path
        );
      }
    }
  }

  async parse(policyObj: any, fullPath: string) {
    this.context.waitEvents[WaitEventEnum.violations] = new WaitEventUtil();
    await this.context.waitEvents[WaitEventEnum.enforcementMode].waitEvent();

    let anyNotSupportedFlag = false;
    for await (const x of policyObj) {
      if (this.violationParsers[x.name]) {
        const parser = this.violationParsers[x.name]();
        await parser.parse(x, fullPath);
      } else {
        anyNotSupportedFlag =
          (await this.defaultProcessing(x, fullPath, x)) || anyNotSupportedFlag;
      }
    }

    this.context.strategyLog.add(
      new StrategyLogItemModel(
        fullPath,
        anyNotSupportedFlag
          ? KeyParsingResultEnum.partially
          : KeyParsingResultEnum.success
      )
    );

    this.addMissedServicePolicies();
    this.context.waitEvents[WaitEventEnum.violations].releaseEvent();
  }
}
