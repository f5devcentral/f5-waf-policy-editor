import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultSignatureSets } from "../../../../model/policy-editor.defaults.model";
import { SignatureSet } from "../../../../model/policy-schema/policy.definitions";

export class SignatureSetsFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<SignatureSet>
{
  create(signatureSet?: SignatureSet): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.signature-sets";
        let signatureSets = _get(currentJson, path);
        if (!signatureSets) {
          _set(currentJson, path, [] as any);
          signatureSets = _get(currentJson, path);
        }

        signatureSets.push(signatureSet ?? defaultSignatureSets());
      })
    );
  }
}
