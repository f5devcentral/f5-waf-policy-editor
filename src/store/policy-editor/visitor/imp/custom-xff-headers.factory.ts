import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class CustomXffHeadersFactory extends VisitorFactoryBase<string> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.general.customXffHeaders", dispatch, json);
  }
}
