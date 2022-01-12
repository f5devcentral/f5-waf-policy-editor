import { ParseStrategyBase } from "./parse-strategy.base";
import { ParseStrategyFactory } from "./parse-strategy.factory";
import { KeyParsingResultEnum } from "../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../model/strategy-log-item.model";

export class PassOverParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): void {
    const parserFactory = new ParseStrategyFactory();

    Object.keys(policyObj).forEach((k) => {
      const currentPath = `${fullPath}.${k}`;
      try {
        const parser = parserFactory.create(this.context, currentPath);
        if (parser) {
          parser.parse(policyObj[k], currentPath);
        }
      } catch (e) {
        const err = (e as any).toString();
        this.context.strategyLog.add(
          new StrategyLogItemModel(currentPath, KeyParsingResultEnum.error, err)
        );
      }
    });
  }
}
