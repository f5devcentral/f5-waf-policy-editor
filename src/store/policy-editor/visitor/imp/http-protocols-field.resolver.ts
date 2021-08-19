import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { set as _set } from "lodash";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { HTTPProtocolDescription } from "../../../../model/policy-schema/policy.definitions";
import { NumberEditFieldControl } from "../../../../component/policy-editor/controls/field-control/number-edit.field-control";

export class HttpProtocolsFieldResolver
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
    const path = `blocking-settings.http-protocols[${this.rowIndex}]`;

    return [
      {
        title: "Description",
        errorPath: [`instance.${path}.description`],
        controlInfo: new DropListFieldControl(
          this.json.description,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.${path}.description`, value);
              })
            );
          },
          Object.values(HTTPProtocolDescription)
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
        title: "Max Headers",
        errorPath: [`instance.${path}.maxHeaders`],
        controlInfo: new NumberEditFieldControl(
          this.json.maxHeaders,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.${path}.maxHeaders`, parseInt(value));
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
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.${path}.maxParams`, parseInt(value));
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
