import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";

import { get as _get } from "lodash";
import { ServerTechnologiesFieldResolver } from "../../imp/server-technologies-field.resolver";

export class ServerTechnologiesVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): { titles: string[]; visitors: FieldResolverVisitor[] } {
    const titles = ["Server Technology Name"];

    if (_get(this.json, "policy.server-technologies") === undefined)
      return {
        titles: [],
        visitors: [] as FieldResolverVisitor[],
      };

    const visitors: FieldResolverVisitor[] = this.json.policy[
      "server-technologies"
    ].map((s: any, index: number) => {
      return new ServerTechnologiesFieldResolver(index, this.dispatch, s);
    });

    return {
      titles,
      visitors,
    };
  }
}
