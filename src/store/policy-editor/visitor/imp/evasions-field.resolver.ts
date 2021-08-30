import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set } from "lodash";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { NumberEditFieldControl } from "../../../../component/policy-editor/controls/field-control/number-edit.field-control";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";

export class EvasionsFieldResolver
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
    return "";
  }

  get hasAdvancedRows(): boolean {
    return false;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy["blocking-settings"].evasions.splice(
          this.rowIndex,
          1
        );

        if (currentJson.policy["blocking-settings"].evasions.length === 0)
          delete currentJson.policy["blocking-settings"].evasions;
        if (Object.keys(currentJson.policy["blocking-settings"]).length === 0) {
          delete currentJson.policy["blocking-settings"];
        }
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    const path = `blocking-settings.evasions[${this.rowIndex}]`;

    return [
      {
        title: "Description",
        errorPath: [`instance.${path}.description`],
        controlInfo: new LabelFieldControl(this.json.description),
      },
      {
        title: "Enabled",
        errorPath: [`instance.${path}.enabled`],
        controlInfo: new CheckboxFieldControl(this.json.enabled, (value) => {
          this.dispatch(
            policyEditorJsonVisit((currentJson) => {
              _set(currentJson, `policy.${path}.enabled`, value);
            })
          );
        }),
      },
      {
        title: "Max Decoding Passes",
        errorPath: [`instance.${path}.maxDecodingPasses`],
        controlInfo: new NumberEditFieldControl(
          this.json.maxDecodingPasses,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.${path}.maxDecodingPasses`,
                  parseInt(value)
                );
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
    ];
  }
}
