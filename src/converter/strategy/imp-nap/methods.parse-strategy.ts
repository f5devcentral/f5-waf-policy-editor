import { AthenaAction } from "../../model/athena-common.model";
import { ParseStrategyBase } from "../parse-strategy.base";

export class MethodsParseStrategy extends ParseStrategyBase {
    parse(policyObj: any, fullPath: string): Promise<void> {
        console.log(policyObj);

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
                        rules: []
                    }
                }
            }
        }

        policyObj.forEach((m: any) => {
            this.context.athenaServicePolicy["methods"].spec.rule_list?.rules.push({
                metadata: {
                    name: (m.name as string).toLowerCase(),
                },
                spec: {
                    action: (m.allowed === undefined || m.allowed) ? AthenaAction.ALLOW : AthenaAction.DENY,
                    http_method: {
                        methods: [m.name]
                    },
                    waf_action: {
                        none: {}
                    },
                    challenge_action: "DEFAULT_CHALLENGE",
                }
            })
        });

        return Promise.resolve();
    }
}