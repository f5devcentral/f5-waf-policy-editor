import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";

import { get as _get, set as _set } from "lodash";
import { defaultEvasions } from "../../../../model/policy-editor.defaults.model";

export class EvasionsFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<void>
{
  create(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.blocking-settings.evasions";
        let evasions = _get(currentJson, path);
        if (!evasions) {
          _set(currentJson, path, [] as any);
          evasions = _get(currentJson, path);
        }

        evasions.push(defaultEvasions());
      })
    );
  }
}
