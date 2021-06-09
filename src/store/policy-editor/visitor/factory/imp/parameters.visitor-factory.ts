import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { ParametersFieldResolver } from "../../imp/parameters-field.resolver";

export class ParametersVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): { titles: string[]; visitors: FieldResolverVisitor[] } {
    const titles = ["Name", "Type"];

    if (_get(this.json, "policy.parameters") === undefined) {
      return {
        titles: [],
        visitors: [] as FieldResolverVisitor[],
      };
    }

    const visitors: FieldResolverVisitor[] = this.json.policy.parameters.map(
      (m: any, index: number) => {
        return new ParametersFieldResolver(index, this.dispatch, m);
      }
    );

    return {
      titles,
      visitors,
    };
  }
}
