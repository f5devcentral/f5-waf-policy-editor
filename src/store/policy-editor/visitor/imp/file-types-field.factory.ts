import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultFileTypes } from "../../../../model/policy-editor.defaults.model";
import { Filetype } from "../../../../model/policy-schema/policy.definitions";

export class FileTypesFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<Filetype>
{
  create(filetype?: Filetype): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.filetypes";
        let fileTypes = _get(currentJson, path);
        if (!fileTypes) {
          _set(currentJson, path, [] as any);
          fileTypes = _get(currentJson, path);
        }

        fileTypes.push(filetype ?? defaultFileTypes(fileTypes.length));
      })
    );
  }
}
