import { Filetype } from "../../../../model/policy-schema/policy.definitions";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class FileTypesFieldFactory extends VisitorFactoryBase<Filetype> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.filetypes", dispatch, json);
  }
}
