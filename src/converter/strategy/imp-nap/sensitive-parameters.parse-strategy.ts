import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";

export class SensitiveParametersParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    if (!this.context.athenaFirewallDto.custom_anonymization) {
      this.context.athenaFirewallDto.custom_anonymization = {
        anonymization_config: []
      };
    }

    policyObj.forEach((p: any) => {
      this.context.athenaFirewallDto.custom_anonymization?.anonymization_config.push({
        query_parameter: {
          query_param_name: p.name,
        },
      });
    });

    this.context.strategyLog.add(
      new StrategyLogItemModel(fullPath, KeyParsingResultEnum.success)
    );

    return Promise.resolve();
  }
}
