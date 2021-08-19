import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";

import { get as _get } from "lodash";
import { EvasionsFieldResolver } from "../../imp/evasions-field.resolver";

export class EvasionsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): { titles: string[]; visitors: FieldResolverVisitor[] } {
    const titles = ["Description", "Enabled", "Max Decoding Passes"];

    if (_get(this.json, "policy.blocking-settings.evasions") === undefined)
      return { titles: [], visitors: [] };

    const visitors: FieldResolverVisitor[] = this.json.policy[
      "blocking-settings"
    ].evasions.map((e: any, index: number) => {
      return new EvasionsFieldResolver(index, this.dispatch, e);
    });

    return {
      titles,
      visitors,
    };
  }
}
