import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { SignatureSetsFieldResolver } from "../../imp/signature-sets-field.resolver";
import { createDefaultValues } from "../default-values.factory";

export class SignatureSetsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Name", "Alarm", "Block"];

    const signatureSets = _get(this.json, "policy.signature-sets");

    const visitors: FieldResolverVisitor[] = signatureSets
      ? this.json.policy["signature-sets"].map((e: any, index: number) => {
          return new SignatureSetsFieldResolver(index, this.dispatch, e);
        })
      : [];
    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      "policy.signature-sets",
      "name",
      (json: any) => new SignatureSetsFieldResolver(-1, this.dispatch, json)
    );

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
