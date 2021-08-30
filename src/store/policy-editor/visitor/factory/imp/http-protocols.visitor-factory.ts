import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";

import { get as _get } from "lodash";
import { HttpProtocolsFieldResolver } from "../../imp/http-protocols-field.resolver";
import { createDefaultValues } from "../default-values.factory";

export class HttpProtocolsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Description", "Enabled", "Max Headers", "Max Params"];

    const httpProtocols = _get(
      this.json,
      "policy.blocking-settings.http-protocols"
    );
    const visitors: FieldResolverVisitor[] = httpProtocols
      ? httpProtocols.map((e: any, index: number) => {
          return new HttpProtocolsFieldResolver(index, this.dispatch, e);
        })
      : [];

    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      "policy.blocking-settings.http-protocols",
      "description",
      (json: any) => new HttpProtocolsFieldResolver(-1, this.dispatch, json)
    );

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
