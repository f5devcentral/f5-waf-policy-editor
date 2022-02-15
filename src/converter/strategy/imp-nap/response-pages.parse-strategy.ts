import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { ResponsePage } from "../../../model/policy-schema/policy.definitions";
import base64 from "base-64";

export class ResponsePagesParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    const updated = policyObj.some((x: ResponsePage) => {
      if (x.responseContent) {
        this.context.athenaFirewallDto.blocking_page = {
          blocking_page: base64.encode(x.responseContent),
        };
        return true;
      }
      return false;
    });

    this.context.strategyLog.add(
      new StrategyLogItemModel(
        fullPath,
        updated
          ? policyObj.length === 1
            ? KeyParsingResultEnum.success
            : KeyParsingResultEnum.partially
          : KeyParsingResultEnum.notSupported
      )
    );

    return Promise.resolve();
  }
}
