import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";

export class AllowedResponseCodesParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): Promise<void> {
    if (!policyObj) return Promise.resolve();

    policyObj.forEach((code: number) => {
      if (!this.context.athenaFirewallDto.allowed_response_codes) {
        this.context.athenaFirewallDto.allowed_response_codes = {
          response_code: [code.toString()],
        };
      } else {
        this.context.athenaFirewallDto.allowed_response_codes.response_code.push(
          code.toString()
        );
      }
    });

    this.context.strategyLog.add(
      new StrategyLogItemModel(fullPath, KeyParsingResultEnum.success)
    );

    return Promise.resolve();
  }
}
