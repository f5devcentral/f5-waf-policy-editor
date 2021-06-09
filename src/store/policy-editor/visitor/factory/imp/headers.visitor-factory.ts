import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { HeadersFieldResolver } from "../../imp/headers-field.resolver";

export class HeadersVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): { titles: string[]; visitors: FieldResolverVisitor[] } {
    const titles = ["Header Name", "Type"];

    if (_get(this.json, "policy.headers") === undefined) {
      return {
        titles: [],
        visitors: [] as FieldResolverVisitor[],
      };
    }

    const visitors: FieldResolverVisitor[] = this.json.policy.headers.map(
      (h: any, index: number) => {
        return new HeadersFieldResolver(index, this.dispatch, h);
      }
    );

    return {
      titles,
      visitors,
    };
  }
}
