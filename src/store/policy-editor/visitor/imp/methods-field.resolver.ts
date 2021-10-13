import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";

import { set as _set } from "lodash";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";

export class MethodsFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);
  }

  key(): string {
    return this.json.name;
  }

  get hasAdvancedRows(): boolean {
    return false;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
  }

  get basePath(): string {
    return "";
  }

  getBasicRows(): GridFieldValue[] {
    return [
      {
        title: "",
        errorPath: [`instance.methods[${this.rowIndex}].name`],
        controlInfo:
          this.rowIndex === -1
            ? new LabelFieldControl(this.json.name)
            : new TextEditFieldControl(
                this.json.name,
                (text) =>
                  this.dispatch(
                    policyEditorJsonVisit((currentJson) => {
                      _set(
                        currentJson,
                        `policy.methods[${this.rowIndex}].name`,
                        text
                      );
                    })
                  ),
                {},
                { variant: "outlined", size: "small" }
              ),
      },
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy.methods.splice(this.rowIndex, 1);

        if (currentJson.policy.methods.length === 0)
          delete currentJson.policy.methods;
      })
    );
  }
}
