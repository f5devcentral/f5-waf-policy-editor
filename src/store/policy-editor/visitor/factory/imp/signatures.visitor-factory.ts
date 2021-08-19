import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { SignaturesFieldResolver } from "../../imp/signatures-field.resolver";

export class SignaturesVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): { titles: string[]; visitors: FieldResolverVisitor[] } {
    const titles = ["Name", "Enabled", "Signature Id", "Tag"];

    if (_get(this.json, "policy.signatures") === undefined)
      return { titles: [], visitors: [] };

    const visitors: FieldResolverVisitor[] = this.json.policy["signatures"].map(
      (e: any, index: number) => {
        return new SignaturesFieldResolver(index, this.dispatch, e);
      }
    );

    return {
      titles,
      visitors,
    };
  }
}
