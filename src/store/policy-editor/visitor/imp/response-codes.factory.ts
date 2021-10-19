import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { defaultResponseCode } from "../../../../model/policy-editor.defaults.model";

export class ResponseCodesFactory extends VisitorFactoryBase<number> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      "policy.general.allowedResponseCodes",
      dispatch,
      json,
      defaultResponseCode
    );
  }
}
