import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";

export class ThreadCampaignsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    this.context.strategyLog.add(
      new StrategyLogItemModel(fullPath, KeyParsingResultEnum.partially)
    );

    return Promise.resolve();
  }
}
