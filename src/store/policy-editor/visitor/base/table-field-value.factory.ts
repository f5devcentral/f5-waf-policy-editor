import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { get as _get, set as _set } from "lodash";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";

export class TableFieldValueFactory {
  constructor(
    protected dispatch: PolicyEditorDispatch,
    protected json: any,
    protected basePath: string
  ) {}

  private errorPath(valuePath: string): string[] {
    return [`instance.${this.basePath}.${valuePath}`];
  }

  private policyPath(valuePath: string): string {
    return `policy.${this.basePath}.${valuePath}`;
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
}
