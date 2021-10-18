import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { MethodElement } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class MethodsFieldFactory extends VisitorFactoryBase<MethodElement> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.methods", dispatch, json);
  }
}
