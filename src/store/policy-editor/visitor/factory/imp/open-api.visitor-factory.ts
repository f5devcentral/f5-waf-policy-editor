import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { OpenApiFieldResolver } from "../../imp/open-api-field.resolver";

export class OpenApiVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Link"];

    if (_get(this.json, "policy.open-api-files") === undefined) {
      return {
        titles: [],
        visitors: [] as FieldResolverVisitor[],
        default: [] as FieldResolverVisitor[],
      };
    }

    const visitors: FieldResolverVisitor[] = this.json.policy[
      "open-api-files"
    ].map((m: any, index: number) => {
      return new OpenApiFieldResolver(index, this.dispatch, m);
    });

    return {
      titles,
      visitors,
      default: [] as FieldResolverVisitor[],
    };
  }
}
