import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { supportedEvasions } from "../athena.const";

export class EvasionsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): Promise<void> {
    for (const evasion of policyObj) {
      if (supportedEvasions[evasion.description]) {
        this.context.markSupportedViolation(
          supportedEvasions[evasion.description]
        );
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.success,
            policyObj.description
          )
        );
      } else {
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.notSupported,
            policyObj.description
          )
        );
      }
    }

    return Promise.resolve();
  }
}
