import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";

import { get as _get } from "lodash";
import { MethodsFieldResolver } from "../../imp/methods-field.resolver";
import { createDefaultValues } from "../default-values.factory";

export class MethodsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Method Name"];
    const methods = _get(this.json, "policy.methods");

    const visitors: FieldResolverVisitor[] = methods
      ? this.json.policy.methods.map((m: any, index: number) => {
          return new MethodsFieldResolver(index, this.dispatch, m);
        })
      : [];

    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      "policy.methods",
      "name",
      (json: any) => new MethodsFieldResolver(-1, this.dispatch, json)
    );

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
