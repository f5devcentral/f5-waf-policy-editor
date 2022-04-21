import { AthenaAction } from "../../model/athena-common.model";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { ParseStrategyBase } from "../parse-strategy.base";

export class MethodsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): Promise<void> {
    if (!this.context.athenaServicePolicy["methods"]) {
      this.context.athenaServicePolicy["methods"] = {
        metadata: {
          name: "methods",
          namespace: "{{NAMESPACE}}",
        },
        spec: {
          any_server: {},
          algo: "FIRST_MATCH",
          rule_list: {
            rules: [],
          },
        },
      };
    }

    policyObj.forEach((m: any) => {
      this.context.athenaServicePolicy["methods"].spec.rule_list?.rules.push({
        metadata: {
          name: (m.name as string).toLowerCase(),
        },
        spec: {
          action: AthenaAction.NEXT_POLICY,
          http_method: {
            methods: [m.name],
          },
          waf_action: {
            none: {},
          },
          challenge_action: "DEFAULT_CHALLENGE",
        },
      });
    });

    this.context.athenaServicePolicy["methods"].spec.rule_list?.rules.push({
      metadata: {
        name: "any",
      },
      spec: {
        action: !!this.context.athenaFirewallDto.blocking
          ? AthenaAction.DENY
          : AthenaAction.NEXT_POLICY,
        challenge_action: "DEFAULT_CHALLENGE",
        waf_action: {
          none: {},
        },
      },
    });

    this.context.strategyLog.add(
      new StrategyLogItemModel(fullPath, KeyParsingResultEnum.success)
    );

    return Promise.resolve();
  }
}
