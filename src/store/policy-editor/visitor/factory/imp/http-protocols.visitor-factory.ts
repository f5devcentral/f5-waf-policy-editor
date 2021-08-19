import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";

import { get as _get } from "lodash";
import { HttpProtocolsFieldResolver } from "../../imp/http-protocols-field.resolver";

export class HttpProtocolsVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): { titles: string[]; visitors: FieldResolverVisitor[] } {
    const titles = ["Description", "Enabled", "Max Headers", "Max Params"];

    if (
      _get(this.json, "policy.blocking-settings.http-protocols") === undefined
    )
      return { titles: [], visitors: [] };

    const visitors: FieldResolverVisitor[] = this.json.policy[
      "blocking-settings"
    ]["http-protocols"].map((e: any, index: number) => {
      return new HttpProtocolsFieldResolver(index, this.dispatch, e);
    });

    return {
      titles,
      visitors,
    };
  }
}
