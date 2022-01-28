import { ParseStrategyBase } from "./parse-strategy.base";

export class IgnoreParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    return Promise.resolve();
  }
}
