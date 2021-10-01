import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { CookiesFieldResolver } from "../../imp/cookies-field.resolver";
import { PolicyEditorDispatch } from "../../../policy-editor.types";

export class CookiesFieldVisitorFactory extends FieldResolverVisitorFactory<CookiesFieldResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      CookiesFieldResolver,
      dispatch,
      json,
      ["Name", "Type"],
      "policy.cookies",
      "name"
    );
  }
}
