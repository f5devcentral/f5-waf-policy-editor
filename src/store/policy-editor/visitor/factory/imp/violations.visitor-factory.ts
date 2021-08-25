import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";

import { get as _get } from "lodash";
import { ViolationsFieldResolver } from "../../imp/violations-field.resolver";
import defaultPolicy from "../../../../../model/nginx-const/defaut-policy.nginx.json";

export class ViolationsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Violation", "Alarm", "Block"];

    if (_get(this.json, "policy['blocking-settings'].violations") === undefined)
      return {
        titles: [],
        visitors: [] as FieldResolverVisitor[],
        default: [] as FieldResolverVisitor[],
      };

    const visitors: FieldResolverVisitor[] = this.json.policy[
      "blocking-settings"
    ].violations.map((s: any, index: number) => {
      return new ViolationsFieldResolver(index, this.dispatch, s);
    });

    const defValues: FieldResolverVisitor[] = defaultPolicy.policy[
      "blocking-settings"
    ].violations
      .reduce((r, v) => {
        if (
          this.json.policy["blocking-settings"].violations.find((x: any) => {
            return v.name === x.name;
          }) === undefined
        ) {
          r.push(v);
        }

        return r;
      }, [] as any)
      .map((s: any) => {
        return new ViolationsFieldResolver(-1, this.dispatch, s);
      });

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
