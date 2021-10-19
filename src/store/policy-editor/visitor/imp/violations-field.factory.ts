import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { BlockingSettingsViolation } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { defaultBlockingSettingsViolations } from "../../../../model/policy-editor.defaults.model";

export class ViolationsFieldFactory extends VisitorFactoryBase<BlockingSettingsViolation> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      "policy.blocking-settings.violations",
      dispatch,
      json,
      defaultBlockingSettingsViolations
    );
  }
}
