import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { get as _get } from "lodash";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { ParametersFieldResolver } from "../../imp/parameters-field.resolver";
import { createDefaultValues } from "../default-values.factory";

export class ParametersVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Name", "Type"];

    const parameters = _get(this.json, "policy.parameters");

    const visitors: FieldResolverVisitor[] = parameters
      ? this.json.policy.parameters.map((m: any, index: number) => {
          return new ParametersFieldResolver(index, this.dispatch, m);
        })
      : [];
    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      "policy.parameters",
      "name",
      (json: any) => new ParametersFieldResolver(-1, this.dispatch, json)
    );

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
