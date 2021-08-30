import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { EvasionsFieldResolver } from "../../imp/evasions-field.resolver";
import { createDefaultValues } from "../default-values.factory";
import { get as _get } from "lodash";

export class EvasionsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Description", "Enabled", "Max Decoding Passes"];

    const evasions = _get(this.json, "policy['blocking-settings'].evasions");
    const visitors: FieldResolverVisitor[] = evasions
      ? evasions.map((e: any, index: number) => {
          return new EvasionsFieldResolver(index, this.dispatch, e);
        })
      : [];

    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      "policy.blocking-settings.evasions",
      "description",
      (json: any) => new EvasionsFieldResolver(-1, this.dispatch, json)
    );

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
