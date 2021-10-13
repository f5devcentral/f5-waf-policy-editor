import { BaseFieldResolverVisitorFactory } from "../interface/base.field-resolver-visitor-factory";
import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { FileTypesFieldResolver } from "../../imp/file-types-field.resolver";

import { get as _get } from "lodash";
import { createDefaultValues } from "../default-values.factory";

export class FileTypesVisitorFactory extends BaseFieldResolverVisitorFactory {
  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const titles = ["Name", "Type"];
    const fileTypes = _get(this.json, "policy.filetypes");

    const visitors: FieldResolverVisitor[] = fileTypes
      ? this.json.policy.filetypes.map((ft: any, index: number) => {
          return new FileTypesFieldResolver(index, this.dispatch, ft);
        })
      : [];
    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      "policy.filetypes",
      "name",
      (json: any) => new FileTypesFieldResolver(-1, this.dispatch, json)
    );

    return {
      titles,
      visitors,
      default: defValues,
    };
  }
}
