import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { BlockingSettingsViolation } from "../../../model/policy-schema/policy.definitions";
import { WaitEventEnum } from "./wait-event.enum";
import { WaitEventUtil } from "../../../utils/wait-event.util";
import { ParseContextModel } from "../../model/parse-context.model";
import { HttpResponseStatusViolationParseStrategy } from "./violations.parse-strategy/http-response-status.violation.parse-strategy";
import { ThreatCampaignViolationParseStrategy } from "./violations.parse-strategy/threat-campaign.violation.parse-strategy";

const supportedViolations: string[] = [
  "VIOL_FILETYPE",
  "VIOL_METHOD",
  "VIOL_MANDATORY_HEADER",
  "VIOL_HTTP_RESPONSE_STATUS",
  "VIOL_REQUEST_MAX_LENGTH",
  "VIOL_FILE_UPLOAD",
  "VIOL_FILE_UPLOAD_IN_BODY",
  "VIOL_XML_MALFORMED",
  "VIOL_JSON_MALFORMED",
  "VIOL_ASM_COOKIE_MODIFIED",
  "VIOL_HTTP_PROTOCOL",
  "VIOL_EVASION",
];

export class ViolationsParseStrategy extends ParseStrategyBase {
  private readonly violationParsers: { [key: string]: () => ParseStrategyBase };

  constructor(protected context: ParseContextModel) {
    super(context);

    this.violationParsers = {};
    this.violationParsers["VIOL_HTTP_RESPONSE_STATUS"] = () =>
      new HttpResponseStatusViolationParseStrategy(context);
    this.violationParsers["VIOL_THREAT_CAMPAIGN"] = () =>
      new ThreatCampaignViolationParseStrategy(context);
  }

  private defaultProcessing(
    policyObj: any,
    fullPath: string,
    x: BlockingSettingsViolation
  ) {
    if (supportedViolations.includes(x.name ?? "")) {
      this.context.strategyLog.add(
        new StrategyLogItemModel(fullPath, KeyParsingResultEnum.success, x.name)
      );

      return true;
    } else {
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
          anyNotSupportedFlag || this.defaultProcessing(policyObj, fullPath, x);
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

    this.context.waitEvents[WaitEventEnum.violations].releaseEvent();
  }
}
