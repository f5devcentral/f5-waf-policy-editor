import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { WaitEventEnum } from "./wait-event.enum";

export class EnforcementModeParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): Promise<void> {
    switch (policyObj) {
      case "blocking": {
        this.context.athenaFirewallDto.blocking = {};
        break;
      }
      case "transparent": {
        this.context.athenaFirewallDto.monitoring = {};
        break;
      }
      default: {
        this.context.conversionFailed = true;
        this.context.strategyLog.add(
          new StrategyLogItemModel(fullPath, KeyParsingResultEnum.notSupported)
        );
        return Promise.resolve();
      }
    }

    this.context.strategyLog.add(
      new StrategyLogItemModel(fullPath, KeyParsingResultEnum.success)
    );

    this.context.waitEvents[WaitEventEnum.enforcementMode].releaseEvent();

    return Promise.resolve();
  }
}
