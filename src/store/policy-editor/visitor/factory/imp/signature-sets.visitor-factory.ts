import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { SignatureSetsFieldResolver } from "../../imp/signature-sets-field.resolver";

export class SignatureSetsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): { titles: string[]; visitors: FieldResolverVisitor[] } {
    const titles = ["Name", "Alarm", "Block"];

    if (_get(this.json, "policy.signature-sets") === undefined)
      return { titles: [], visitors: [] };

    const visitors: FieldResolverVisitor[] = this.json.policy[
      "signature-sets"
    ].map((e: any, index: number) => {
      return new SignatureSetsFieldResolver(index, this.dispatch, e);
    });

    return {
      titles,
      visitors,
    };
  }
}
