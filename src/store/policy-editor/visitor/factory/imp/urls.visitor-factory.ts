import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { UrlsFieldResolver } from "../../imp/urls-field.resolver";

export class UrlsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Protocol", "Method", "Path"];

    if (_get(this.json, "policy.urls") === undefined) {
      return {
        titles: [],
        visitors: [] as FieldResolverVisitor[],
        default: [] as FieldResolverVisitor[],
      };
    }

    const visitors: FieldResolverVisitor[] = this.json.policy.urls.map(
      (m: any, index: number) => {
        return new UrlsFieldResolver(index, this.dispatch, m);
      }
    );

    return {
      titles,
      visitors,
      default: [] as FieldResolverVisitor[],
    };
  }
}
