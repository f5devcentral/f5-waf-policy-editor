import { PolicyEditorDispatch } from "../../policy-editor.types";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set, get as _get } from "lodash";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { NumberEditFieldControl } from "../../../../component/policy-editor/controls/field-control/number-edit.field-control";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";

export class GridFieldValueFactory<T> {
  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any,
    protected basePath: string
  ) {}

  private errorPath(valuePath: string): string[] {
    return [`instance.${this.basePath}[${this.rowIndex}].${valuePath}`];
  }

  private policyPath(valuePath: string): string {
    return `policy.${this.basePath}[${this.rowIndex}].${valuePath}`;
  }

  createCheckBoxFieldControl(
    title: string,
    valuePath: string,
    fieldFactory: FieldFactoryVisitor<T>
  ): GridFieldValue {
    return {
      title,
      errorPath: this.errorPath(valuePath),
      controlInfo: new CheckboxFieldControl(
        _get(this.json, valuePath),
        (value) =>
          this.rowIndex === -1
            ? fieldFactory.create({
                ...this.json,
                [valuePath]: value,
              })
            : this.dispatch(
                policyEditorJsonVisit((currentJson) =>
                  _set(currentJson, this.policyPath(valuePath), value)
                )
              )
      ),
    };
  }

  createDropListFieldControl(
    title: string,
    valuePath: string,
    fieldFactory: FieldFactoryVisitor<T>,
    items: string[]
  ): GridFieldValue {
    return {
      title,
      errorPath: this.errorPath(valuePath),
      controlInfo: new DropListFieldControl(
        _get(this.json, valuePath),
        (value) =>
          this.rowIndex === -1
            ? fieldFactory.create({
                ...this.json,
                [valuePath]: value,
              })
            : this.dispatch(
                policyEditorJsonVisit((currentJson) => {
                  _set(currentJson, this.policyPath(valuePath), value);
                })
              ),
        items
      ),
    };
  }

  createNumberEditControl(
    title: string,
    valuePath: string,
    fieldFactory: FieldFactoryVisitor<T>
  ): GridFieldValue {
    return {
      title,
      errorPath: this.errorPath(valuePath),
      controlInfo: new NumberEditFieldControl(
        _get(this.json, valuePath),
        (value) => {
          this.rowIndex === -1
            ? fieldFactory.create({
                ...this.json,
                [valuePath]: value,
              })
            : this.dispatch(
                policyEditorJsonVisit((currentJson) => {
                  _set(currentJson, this.policyPath(valuePath), value);
                })
              );
        }
      ),
    };
  }

  createTextEditControl(
    title: string,
    valuePath: string,
    fieldFactory: FieldFactoryVisitor<T>
  ): GridFieldValue {
    return {
      title,
      errorPath: this.errorPath(valuePath),
      controlInfo: new TextEditFieldControl(
        _get(this.json, valuePath),
        (value) => {
          this.rowIndex === -1
            ? fieldFactory.create({
                ...this.json,
                [valuePath]: value,
              })
            : this.dispatch(
                policyEditorJsonVisit((currentJson) => {
                  _set(currentJson, this.policyPath(valuePath), value);
                })
              );
        }
      ),
    };
  }
}
