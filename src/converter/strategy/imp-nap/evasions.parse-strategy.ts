import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";

export class EvasionsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): void {
    this.context.strategyLog.add(
      new StrategyLogItemModel(fullPath, KeyParsingResultEnum.partially)
    );
  }
}
