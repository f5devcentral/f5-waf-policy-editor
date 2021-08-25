import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set } from "lodash";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { NumberEditFieldControl } from "../../../../component/policy-editor/controls/field-control/number-edit.field-control";

export class SignaturesFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  constructor(
    protected rowIndex: number,
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
        currentJson.policy.signatures.splice(this.rowIndex, 1);

        if (currentJson.policy.signatures.length === 0)
          delete currentJson.policy.signatures;
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    const path = `signatures[${this.rowIndex}]`;
    return [
      {
        title: "Name",
        errorPath: [`instance.${path}.name`],
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.signatures[${this.rowIndex}].name`,
                  text
                );
              })
            ),
          {},
          { variant: "outlined", size: "small" }
        ),
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
        title: "Signature Id",
        errorPath: [`instance.${path}.signatureId`],
        controlInfo: new NumberEditFieldControl(
          this.json.signatureId,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.${path}.signatureId`,
                  parseInt(value)
                );
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Tag",
        errorPath: [`instance.${path}.tag`],
        controlInfo: new TextEditFieldControl(
          this.json.tag,
          (text) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.signatures[${this.rowIndex}].tag`,
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
}
