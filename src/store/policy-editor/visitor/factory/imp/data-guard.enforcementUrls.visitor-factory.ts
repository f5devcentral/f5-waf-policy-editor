import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { PolicyEditorDispatch } from "../../../policy-editor.types";
import { DataGuardEnforcementUrlsResolver } from "../../imp/data-guard.enforcementUrls.resolver";

export class DataGuardEnforcementUrlsVisitorFactory extends FieldResolverVisitorFactory<DataGuardEnforcementUrlsResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      DataGuardEnforcementUrlsResolver,
      dispatch,
      json,
      ["Enforcement Url"],
      "policy.data-guard.enforcementUrls",
      undefined
    );
  }
}
