import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";

import { get as _get } from "lodash";
import { MethodsFieldResolver } from "../../imp/methods-field.resolver";

export class MethodsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Method Name"];

    if (_get(this.json, "policy.methods") === undefined) {
      return {
        titles: [],
        visitors: [] as FieldResolverVisitor[],
        default: [] as FieldResolverVisitor[],
      };
    }

    const visitors: FieldResolverVisitor[] = this.json.policy.methods.map(
      (m: any, index: number) => {
        return new MethodsFieldResolver(index, this.dispatch, m);
      }
    );

    return {
      titles,
      visitors,
      default: [] as FieldResolverVisitor[],
    };
  }
}
