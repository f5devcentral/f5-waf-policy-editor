import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { defaultDataGuardEnforcementUrls } from "../../../../model/policy-editor.defaults.model";

export class DataGuardEnforcementUrlsFactory extends VisitorFactoryBase<string> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      "policy.data-guard.enforcementUrls",
      dispatch,
      json,
      defaultDataGuardEnforcementUrls
    );
  }
}
