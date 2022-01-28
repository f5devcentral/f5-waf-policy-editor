import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { BlockingSettingsViolation } from "../../../model/policy-schema/policy.definitions";
import { WaitEventEnum } from "./wait-event.enum";
import { WaitEventUtil } from "../../../utils/wait-event.util";
import { blockAlarmUtil } from "./block-alarm.util";
import { AllowedResponseCodesParseStrategy } from "./allowed-response-codes.parse-strategy";

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
      switch (x.name) {
        case "VIOL_HTTP_RESPONSE_STATUS": {
          if (blockAlarmUtil(x, !!this.context.athenaFirewallDto.blocking)) {
            const strategy = new AllowedResponseCodesParseStrategy(
              this.context
            );

            await strategy.parse(
              this.context.policyContainer.policy.general?.allowedResponseCodes,
              "policy.general.allowedResponseCodes"
            );
          }

          this.context.strategyLog.add(
            new StrategyLogItemModel(
              fullPath,
              KeyParsingResultEnum.success,
              x.name
            )
          );
          break;
        }
        default:
          anyNotSupportedFlag =
            anyNotSupportedFlag ||
            this.defaultProcessing(policyObj, fullPath, x);
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
