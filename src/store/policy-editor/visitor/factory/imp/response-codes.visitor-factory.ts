import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { ResponseCodesResolver } from "../../imp/response-codes.resolver";
import { PolicyEditorDispatch } from "../../../policy-editor.types";

export class ResponseCodesVisitorFactory extends FieldResolverVisitorFactory<ResponseCodesResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      ResponseCodesResolver,
      dispatch,
      json,
      ["Response Code"],
      "policy.general.allowedResponseCodes",
      undefined
    );
  }
}
