import { Evasion } from "../../../../model/policy-schema/policy.definitions";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class EvasionsFieldFactory extends VisitorFactoryBase<Evasion> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.blocking-settings.evasions", dispatch, json);
  }
}
