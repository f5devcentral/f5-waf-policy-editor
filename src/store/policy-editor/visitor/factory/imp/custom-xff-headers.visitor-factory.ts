import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { CustomXffHeadersResolver } from "../../imp/custom-xff-headers.resolver";
import { PolicyEditorDispatch } from "../../../policy-editor.types";

export class CustomXffHeadersVisitorFactory extends FieldResolverVisitorFactory<CustomXffHeadersResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      CustomXffHeadersResolver,
      dispatch,
      json,
      ["XFF Header"],
      "policy.general.customXffHeaders",
      undefined
    );
  }
}
