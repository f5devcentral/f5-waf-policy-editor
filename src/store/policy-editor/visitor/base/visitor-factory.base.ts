import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { PolicyEditorDispatch } from "../../policy-editor.types";

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

  create(item: T) {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        let arr = _get(currentJson, this.path);
        if (!arr) {
          _set(currentJson, this.path, [] as any);
          arr = _get(currentJson, this.path);
        }

        arr.push(item);
      })
    );
  }
}
