import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultHeaders } from "../../../../model/policy-editor.defaults.model";

export class HeadersFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<void>
{
  create(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.headers";
        let fileTypes = _get(currentJson, path);
        if (!fileTypes) {
          _set(currentJson, path, [] as any);
          fileTypes = _get(currentJson, path);
        }

        fileTypes.push(defaultHeaders());
      })
    );
  }
}
