import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { ViolationsFieldResolver } from "../../imp/violations-field.resolver";
import { createDefaultValues } from "../default-values.factory";

import { get as _get } from "lodash";

export class ViolationsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Violation", "Alarm", "Block"];

    const violations = _get(
      this.json,
      "policy['blocking-settings'].violations"
    );
    const visitors: FieldResolverVisitor[] = violations
      ? violations.map((s: any, index: number) => {
          return new ViolationsFieldResolver(index, this.dispatch, s);
        })
      : [];

    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      "policy.blocking-settings.violations",
      "name",
      (json: any) => new ViolationsFieldResolver(-1, this.dispatch, json)
    );

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
