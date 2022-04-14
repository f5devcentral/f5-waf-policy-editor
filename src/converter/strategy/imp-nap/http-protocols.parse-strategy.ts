import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { supportedHttpProtocols } from "../athena.const";

export class HttpProtocolsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    for (const protocol of policyObj) {
      if (
        supportedHttpProtocols[protocol.description] &&
        (protocol.enabled === undefined || protocol.enabled)
      ) {
        this.context.markSupportedViolation(
          supportedHttpProtocols[protocol.description]
        );
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.success,
            protocol.description
          )
        );
      } else {
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.notSupported,
            protocol.description
          )
        );
      }
    }

    return Promise.resolve();
  }
}
