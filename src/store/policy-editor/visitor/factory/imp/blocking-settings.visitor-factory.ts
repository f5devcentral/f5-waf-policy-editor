import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";

import { get as _get } from "lodash";
import { ViolationsFieldResolver } from "../../imp/violations-field.resolver";

export class BlockingSettingsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): { titles: string[]; visitors: FieldResolverVisitor[] } {
    const titles = ["Violation", "Alarm", "Block"];

    if (_get(this.json, "policy['blocking-settings'].violations") === undefined)
      return {
        titles: [],
        visitors: [] as FieldResolverVisitor[],
      };

    const visitors: FieldResolverVisitor[] = this.json.policy[
      "blocking-settings"
    ].violations.map((s: any, index: number) => {
      return new ViolationsFieldResolver(index, this.dispatch, s);
    });

    return {
      titles,
      visitors,
    };
  }
}
