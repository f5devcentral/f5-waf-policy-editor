import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { FileTypesFieldResolver } from "../../imp/file-types-field.resolver";

import { get as _get } from "lodash";

export class FileTypesVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): { titles: string[]; visitors: FieldResolverVisitor[] } {
    const titles = ["Name", "Type"];

    if (_get(this.json, "policy.filetypes") === undefined) {
      return {
        titles: [],
        visitors: [] as FieldResolverVisitor[],
      };
    }

    const visitors: FieldResolverVisitor[] = this.json.policy.filetypes.map(
      (ft: any, index: number) => {
        return new FileTypesFieldResolver(index, this.dispatch, ft);
      }
    );

    return {
      titles,
      visitors,
    };
  }
}
