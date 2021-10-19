import { PolicyEditorDispatch } from "../../policy-editor.types";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set, get as _get } from "lodash";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { NumberEditFieldControl } from "../../../../component/policy-editor/controls/field-control/number-edit.field-control";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";

export class GridFieldValueFactory<T> {
  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any,
    protected basePath: string
  ) {}

  private errorPath(valuePath: string): string[] {
    if (valuePath.length === 0)
      return [`instance.${this.basePath}[${this.rowIndex}]`];

    return [`instance.${this.basePath}[${this.rowIndex}].${valuePath}`];
  }

  private policyPath(valuePath: string): string {
    if (valuePath.length === 0)
      return `policy.${this.basePath}[${this.rowIndex}]`;

    return `policy.${this.basePath}[${this.rowIndex}].${valuePath}`;
  }

  createLabelFieldControl(title: string, valuePath: string) {
    return {
      title,
      errorPath: this.errorPath(valuePath),
      controlInfo: new LabelFieldControl(valuePath, _get(this.json, valuePath)),
    };
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
        valuePath,
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
        valuePath,
        _get(this.json, valuePath),
        (fieldFactory.callDefault(undefined) as any)[valuePath],
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
        valuePath,
        valuePath.length === 0 ? this.json : _get(this.json, valuePath),
        (fieldFactory.callDefault(undefined) as any)[valuePath],
        (value) => {
          this.rowIndex === -1
            ? fieldFactory.create({
                ...this.json,
                [valuePath]: parseInt(value),
              })
            : this.dispatch(
                policyEditorJsonVisit((currentJson) => {
                  _set(
                    currentJson,
                    this.policyPath(valuePath),
                    parseInt(value)
                  );
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
        valuePath,
        valuePath.length === 0 ? this.json : _get(this.json, valuePath),
        (fieldFactory.callDefault(undefined) as any)[valuePath],
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
        },
        undefined,
        { variant: "outlined", size: "small" }
      ),
    };
  }
}
