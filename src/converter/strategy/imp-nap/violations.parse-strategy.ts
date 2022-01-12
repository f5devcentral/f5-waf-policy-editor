import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { BlockingSettingsViolation } from "../../../model/policy-schema/policy.definitions";

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
  parse(policyObj: any, fullPath: string): void {
    let anyNotSupportedFlag = false;
    policyObj.forEach((x: BlockingSettingsViolation) => {
      if (supportedViolations.includes(x.name ?? "")) {
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.success,
            x.name
          )
        );
      } else {
        anyNotSupportedFlag = true;
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.notSupported,
            x.name
          )
        );
      }
    });

    this.context.strategyLog.add(
      new StrategyLogItemModel(
        fullPath,
        anyNotSupportedFlag
          ? KeyParsingResultEnum.partially
          : KeyParsingResultEnum.success
      )
    );
  }
}
