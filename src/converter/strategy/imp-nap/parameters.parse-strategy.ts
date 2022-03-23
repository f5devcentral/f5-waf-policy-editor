import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import {
  ParameterElement,
  ParameterLocation,
} from "../../../model/policy-schema/policy.definitions";

export class ParametersParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    if (!this.context.athenaFirewallDto.custom_anonymization) {
      this.context.athenaFirewallDto.custom_anonymization = {
        anonymization_config: []
      };
    }
    let anyNotSensitiveFound = false;

    const addCookie = (name: string) => {
      if (!this.context.athenaFirewallDto.custom_anonymization) return;
      this.context.athenaFirewallDto.custom_anonymization.anonymization_config.push({
        cookie: {
          cookie_name: name,
        },
      });
    };
    const addHeader = (name: string) => {
      if (!this.context.athenaFirewallDto.custom_anonymization) return;

      this.context.athenaFirewallDto.custom_anonymization.anonymization_config.push({
        http_header: {
          header_name: name,
        },
      });
    };
    const addQuery = (name: string) => {
      if (!this.context.athenaFirewallDto.custom_anonymization) return;

      this.context.athenaFirewallDto.custom_anonymization.anonymization_config.push({
        query_parameter: {
          query_param_name: name,
        },
      });
    };

    policyObj.forEach((p: ParameterElement) => {
      switch (true) {
        case p.sensitiveParameter &&
          p.parameterLocation === ParameterLocation.Any: {
            addQuery(p.name);
            addHeader(p.name);
            addCookie(p.name);
            break;
          }
        case p.sensitiveParameter &&
          p.parameterLocation === ParameterLocation.Query: {
            addQuery(p.name);
            break;
          }
        case p.sensitiveParameter &&
          (p.parameterLocation === ParameterLocation.Cookie || p.isCookie): {
            addQuery(p.name);
            break;
          }
        case p.sensitiveParameter &&
          (p.parameterLocation === ParameterLocation.Header || p.isHeader): {
            addHeader(p.name);
            break;
          }
        default:
          anyNotSensitiveFound = true;
          break;
      }
    });

    this.context.strategyLog.add(
      new StrategyLogItemModel(
        fullPath,
        anyNotSensitiveFound
          ? KeyParsingResultEnum.partially
          : KeyParsingResultEnum.success
      )
    );

    return Promise.resolve();
  }
}
