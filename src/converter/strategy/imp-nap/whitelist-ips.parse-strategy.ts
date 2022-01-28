import { ParseStrategyBase } from "../parse-strategy.base";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";

export class WhitelistIpsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    this.context.strategyLog.add(
      new StrategyLogItemModel(fullPath, KeyParsingResultEnum.success)
    );

    return Promise.resolve();
  }
}
