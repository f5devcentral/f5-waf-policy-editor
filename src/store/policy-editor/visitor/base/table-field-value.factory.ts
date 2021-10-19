import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { get as _get, set as _set } from "lodash";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";

export class TableFieldValueFactory {
  constructor(
    protected dispatch: PolicyEditorDispatch,
    protected json: any,
    protected basePath: string
  ) {}

  private errorPath(valuePath: string): string[] {
    if (this.basePath.length === 0) return [`instance.${valuePath}`];

    return [`instance.${this.basePath}.${valuePath}`];
  }

  private policyPath(valuePath: string): string {
    if (this.basePath.length === 0) return `policy.${valuePath}`;

    return `policy.${this.basePath}.${valuePath}`;
  }

  createLabelFieldControl(title: string, valuePath: string): GridFieldValue {
    return {
      title,
      errorPath: this.errorPath(valuePath),
      controlInfo: new LabelFieldControl(valuePath, _get(this.json, valuePath)),
    };
  }

  createDropListFieldControl(
    title: string,
    valuePath: string,
    items: string[]
  ): GridFieldValue {
    return {
      title,
      errorPath: this.errorPath(valuePath),
      controlInfo: new DropListFieldControl(
        valuePath,
        "",
        _get(this.json, valuePath),
        (value) =>
          this.dispatch(
            policyEditorJsonVisit((currentJson) => {
              _set(currentJson, this.policyPath(valuePath), value);
            })
          ),
        items
      ),
    };
  }

  createCheckBoxFieldControl(title: string, valuePath: string): GridFieldValue {
    return {
      title,
      errorPath: this.errorPath(valuePath),
      controlInfo: new CheckboxFieldControl(
        valuePath,
        _get(this.json, this.policyPath(valuePath)),
        (value) =>
          this.dispatch(
            policyEditorJsonVisit((currentJson) =>
              _set(currentJson, this.policyPath(valuePath), value)
            )
          )
      ),
    };
  }

  createTextEditFieldControl(
    title: string,
    valuePath: string,
    props?: any
  ): GridFieldValue {
    return {
      title,
      errorPath: this.errorPath(valuePath),
      controlInfo: new TextEditFieldControl(
        valuePath,
        _get(this.json, this.policyPath(valuePath)),
        "",
        (value) =>
          this.dispatch(
            policyEditorJsonVisit((currentJson) =>
              _set(currentJson, this.policyPath(valuePath), value)
            )
          ),
        undefined,
        { variant: "outlined", size: "small" },
        props ? { ...props } : undefined
      ),
    };
  }
}
