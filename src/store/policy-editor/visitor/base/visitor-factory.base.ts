import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { PolicySchemaService } from "../../../../model/policy-schema/policy-schema.service";
import _ from "lodash";

export class VisitorFactoryBase<T>
  extends BaseVisitor
  implements FieldFactoryVisitor<T>
{
  constructor(
    protected path: string,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);
  }

  create(defaultFunc: (orderNumber: number, value?: T) => T, item?: T): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        let arr = _get(currentJson, this.path);
        if (!arr) {
          _set(currentJson, this.path, [] as any);
          arr = _get(currentJson, this.path);
        }

        const value = defaultFunc(arr.length, item);
        if (_.isString(value) || _.isNumber(value)) {
          arr.push(value);
        } else {
          const schemaService = new PolicySchemaService();
          const schemaPath = this.path.replace("policy.", "");
          const shrunk = schemaService.shrinkToRequired(
            value,
            `${schemaPath}[]`
          );

          arr.push(shrunk);
        }
      })
    );
  }
}
