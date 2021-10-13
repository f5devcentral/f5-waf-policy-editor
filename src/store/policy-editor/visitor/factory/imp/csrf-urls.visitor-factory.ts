import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { CsrfUrlsFieldResolver } from "../../imp/csrf-urls-field.resolver";
import { PolicyEditorDispatch } from "../../../policy-editor.types";

export class CsrfUrlsVisitorFactory extends FieldResolverVisitorFactory<CsrfUrlsFieldResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      CsrfUrlsFieldResolver,
      dispatch,
      json,
      ["Enforcement Action", "Method", "Url"],
      "policy.csrf-urls",
      (json) => `${json.url}::${json.method}`
    );
  }
}
