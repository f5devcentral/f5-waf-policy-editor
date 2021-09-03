import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultParameters } from "../../../../model/policy-editor.defaults.model";
import { ParameterElement } from "../../../../model/policy-schema/policy.definitions";

export class ParametersFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<ParameterElement>
{
  create(parameter?: ParameterElement): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.parameters";
        let fileTypes = _get(currentJson, path);
        if (!fileTypes) {
          _set(currentJson, path, [] as any);
          fileTypes = _get(currentJson, path);
        }

        fileTypes.push(parameter ?? defaultParameters());
      })
    );
  }
}
