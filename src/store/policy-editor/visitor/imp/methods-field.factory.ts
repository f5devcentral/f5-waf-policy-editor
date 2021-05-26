import { get as _get, set as _set } from "lodash";

import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { defaultMethods } from "../../../../model/policy-editor.defaults.model";

export class MethodsFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<void>
{
  create(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.methods";
        let methods = _get(currentJson, path);
        if (!methods) {
          _set(currentJson, path, [] as any);
          methods = _get(currentJson, path);
        }

        methods.push(defaultMethods());
      })
    );
  }
}
