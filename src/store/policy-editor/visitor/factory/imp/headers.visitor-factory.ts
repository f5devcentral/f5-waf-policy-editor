import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { HeadersFieldResolver } from "../../imp/headers-field.resolver";
import { createDefaultValues } from "../default-values.factory";

export class HeadersVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Name", "Type"];

    const headers = _get(this.json, "policy.headers");

    const visitors: FieldResolverVisitor[] = headers
      ? this.json.policy.headers.map((h: any, index: number) => {
          return new HeadersFieldResolver(index, this.dispatch, h);
        })
      : [];
    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      "policy.headers",
      "name",
      (json: any) => new HeadersFieldResolver(-1, this.dispatch, json)
    );

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
