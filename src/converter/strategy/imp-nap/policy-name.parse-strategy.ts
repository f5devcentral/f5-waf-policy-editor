import { ParseStrategyBase } from "../parse-strategy.base";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";

export class PolicyNameParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): Promise<void> {
    this.context.athenaFirewallMetadataDto.name = policyObj
      .split("_")
      .join("-");
    this.context.strategyLog.add(
      new StrategyLogItemModel(fullPath, KeyParsingResultEnum.success, "")
    );

    return Promise.resolve();
  }
}
