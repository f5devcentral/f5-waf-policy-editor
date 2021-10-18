import { ParameterElement } from "../../../../model/policy-schema/policy.definitions";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class ParametersFieldFactory extends VisitorFactoryBase<ParameterElement> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.parameters", dispatch, json);
  }
}
