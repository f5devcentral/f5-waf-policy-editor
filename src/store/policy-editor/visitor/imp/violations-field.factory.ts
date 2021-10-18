import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { BlockingSettingsViolation } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class ViolationsFieldFactory extends VisitorFactoryBase<BlockingSettingsViolation> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.blocking-settings.violations", dispatch, json);
  }
}
