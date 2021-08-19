import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultSignatures } from "../../../../model/policy-editor.defaults.model";

export class SignaturesFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<void>
{
  create(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.signatures";
        let signatureSets = _get(currentJson, path);
        if (!signatureSets) {
          _set(currentJson, path, [] as any);
          signatureSets = _get(currentJson, path);
        }

        signatureSets.push(defaultSignatures());
      })
    );
  }
}
