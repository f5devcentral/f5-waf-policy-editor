import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { HTTPProtocol } from "../../../model/policy-schema/policy.definitions";

const supportedEvasions: string[] = ["Directory traversals"];

export class EvasionsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): Promise<void> {
    let anyNotSupportedFlag = false;
    policyObj.forEach((x: HTTPProtocol) => {
      if (supportedEvasions.includes(x.description ?? "")) {
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.success,
            x.description
          )
        );
      } else {
        anyNotSupportedFlag = true;
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.notSupported,
            x.description
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

    return Promise.resolve();
  }
}
