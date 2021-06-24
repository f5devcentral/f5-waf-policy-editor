import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";

import { get as _get, set as _set } from "lodash";
import { OpenAPIFile } from "../../../../model/policy-schema/policy";
import { defaultOpenApi } from "../../../../model/policy-editor.defaults.model";

export class OpenApiFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<void>
{
  create() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.open-api-files";
        let files = _get(currentJson, path) as OpenAPIFile[];
        if (!files) {
          _set(currentJson, path, [] as OpenAPIFile[]);
          files = _get(currentJson, path) as OpenAPIFile[];
        }

        files.push(defaultOpenApi());
      })
    );
  }
}
