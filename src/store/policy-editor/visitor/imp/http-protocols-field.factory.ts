import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";

import { get as _get, set as _set } from "lodash";
import { HTTPProtocol } from "../../../../model/policy-schema/policy.definitions";

export class HttpProtocolsFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<HTTPProtocol>
{
  create(httpProtocol: HTTPProtocol): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.blocking-settings.http-protocols";
        let evasions = _get(currentJson, path);
        if (!evasions) {
          _set(currentJson, path, [] as any);
          evasions = _get(currentJson, path);
        }

        evasions.push(httpProtocol);
      })
    );
  }
}
