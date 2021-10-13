import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class ResponseCodesFactory extends VisitorFactoryBase<number> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.general.allowedResponseCodes", dispatch, json);
  }
}
