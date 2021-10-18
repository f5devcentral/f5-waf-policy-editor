import { SignatureSet } from "../../../../model/policy-schema/policy.definitions";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class SignatureSetsFieldFactory extends VisitorFactoryBase<SignatureSet> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.signature-sets", dispatch, json);
  }
}
