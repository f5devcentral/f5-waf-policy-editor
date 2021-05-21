import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { BlockingSettingsFieldResolver } from "../../imp/blocking-settings-field.resolver";

import { get as _get } from "lodash";

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
      return new BlockingSettingsFieldResolver(index, this.dispatch, s);
    });

    return {
      titles,
      visitors,
    };
  }
}
