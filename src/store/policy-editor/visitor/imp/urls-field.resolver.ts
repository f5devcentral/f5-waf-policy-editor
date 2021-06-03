import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";

import { set as _set } from "lodash";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";

export class UrlsFieldResolver
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
    return true;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [
      {
        title: "Name",
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.urls[${this.rowIndex}].name`, text);
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Method",
        controlInfo: new TextEditFieldControl(
          this.json.method,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.urls[${this.rowIndex}].method`, text);
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Protocol",
        controlInfo: new DropListFieldControl(
          this.json.protocol,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.urls[${this.rowIndex}].protocol`,
                  text
                );
              })
            );
          },
          ["http", "https"]
        ),
      },
      {
        title: "Type",
        controlInfo: new DropListFieldControl(
          this.json.type,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.urls[${this.rowIndex}].type`, text);
              })
            );
          },
          ["explicit", "wildcard"]
        ),
      },
      {
        title: "Check Signatures",
        controlInfo: new CheckboxFieldControl(
          this.json.attackSignaturesCheck,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.urls[${this.rowIndex}].attackSignaturesCheck`,
                  value
                );
              })
            );
          }
        ),
      },
      {
        title: "Check Metachars",
        controlInfo: new CheckboxFieldControl(
          this.json.metacharsOnUrlCheck,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.urls[${this.rowIndex}].metacharsOnUrlCheck`,
                  value
                );
              })
            );
          }
        ),
      },
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy.urls.splice(this.rowIndex, 1);
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    return [
      {
        title: "",
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.urls[${this.rowIndex}].name`, text);
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "",
        controlInfo: new CheckboxFieldControl(
          this.json.attackSignaturesCheck,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.urls[${this.rowIndex}].attackSignaturesCheck`,
                  value
                );
              })
            );
          }
        ),
      },
      {
        title: "",
        controlInfo: new CheckboxFieldControl(
          this.json.metacharsOnUrlCheck,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.urls[${this.rowIndex}].metacharsOnUrlCheck`,
                  value
                );
              })
            );
          }
        ),
      },
    ];
  }
}
