import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set } from "lodash";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { NumberEditFieldControl } from "../../../../component/policy-editor/controls/field-control/number-edit.field-control";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";
import { HttpProtocolsFieldFactory } from "./http-protocols-field.factory";

export class HttpProtocolsFieldResolver
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
    return this.json.description;
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
        currentJson.policy["blocking-settings"]["http-protocols"].splice(
          this.rowIndex,
          1
        );

        if (
          currentJson.policy["blocking-settings"]["http-protocols"].length === 0
        ) {
          delete currentJson.policy["blocking-settings"]["http-protocols"];
        }

        if (Object.keys(currentJson.policy["blocking-settings"]).length === 0) {
          delete currentJson.policy["blocking-settings"];
        }
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    const fieldFactory = new HttpProtocolsFieldFactory(
      this.dispatch,
      this.json
    );
    const path = `blocking-settings.http-protocols[${this.rowIndex}]`;

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
          this.rowIndex === -1
            ? fieldFactory.create({
                ...this.json,
                enabled: value,
              })
            : this.dispatch(
                policyEditorJsonVisit((currentJson) => {
                  _set(currentJson, `policy.${path}.enabled`, value);
                })
              );
        }),
      },
      {
        title: "Max Headers",
        errorPath: [`instance.${path}.maxHeaders`],
        controlInfo: new NumberEditFieldControl(
          this.json.maxHeaders,
          (value) => {
            this.rowIndex === -1
              ? fieldFactory.create({
                  ...this.json,
                  maxHeaders: parseInt(value),
                })
              : this.dispatch(
                  policyEditorJsonVisit((currentJson) => {
                    _set(
                      currentJson,
                      `policy.${path}.maxHeaders`,
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
        title: "Max Params",
        errorPath: [`instance.${path}.maxParams`],
        controlInfo: new NumberEditFieldControl(
          this.json.maxParams,
          (value) => {
            this.rowIndex === -1
              ? fieldFactory.create({
                  ...this.json,
                  maxParams: parseInt(value),
                })
              : this.dispatch(
                  policyEditorJsonVisit((currentJson) => {
                    _set(
                      currentJson,
                      `policy.${path}.maxParams`,
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
