import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { UrlsFieldResolver } from "../../imp/urls-field.resolver";
import { createDefaultValues } from "../default-values.factory";

export class UrlsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Protocol", "Method", "Path"];
    const urls = _get(this.json, "policy.urls");

    const visitors: FieldResolverVisitor[] = urls
      ? this.json.policy.urls.map((m: any, index: number) => {
          return new UrlsFieldResolver(index, this.dispatch, m);
        })
      : [];

    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      "policy.urls",
      "name",
      (json: any) => new UrlsFieldResolver(-1, this.dispatch, json)
    );

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
