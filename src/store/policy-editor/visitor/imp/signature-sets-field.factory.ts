import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultSignatureSets } from "../../../../model/policy-editor.defaults.model";

export class SignatureSetsFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<void>
{
  create(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.signature-sets";
        let signatureSets = _get(currentJson, path);
        if (!signatureSets) {
          _set(currentJson, path, [] as any);
          signatureSets = _get(currentJson, path);
        }

        signatureSets.push(defaultSignatureSets());
      })
    );
  }
}
