import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicySignature } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class SignaturesFieldFactory extends VisitorFactoryBase<PolicySignature> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.signatures", dispatch, json);
  }
}
