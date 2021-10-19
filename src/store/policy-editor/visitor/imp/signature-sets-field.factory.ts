import { SignatureSet } from "../../../../model/policy-schema/policy.definitions";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { defaultSignatureSets } from "../../../../model/policy-editor.defaults.model";

export class SignatureSetsFieldFactory extends VisitorFactoryBase<SignatureSet> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.signature-sets", dispatch, json, defaultSignatureSets);
  }
}
