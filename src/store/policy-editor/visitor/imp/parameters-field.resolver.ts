import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set } from "lodash";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";

export class ParametersFieldResolver
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
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].name`,
                  text
                );
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Type",
        controlInfo: new DropListFieldControl(
          this.json.type,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].type`,
                  value
                );
              })
            );
          },
          ["explicit", "wildcard"]
        ),
      },
      {
        title: "Level",
        controlInfo: new DropListFieldControl(
          this.json.level,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].level`,
                  value
                );
              })
            );
          },
          ["global"]
        ),
      },
      {
        title: "Location",
        controlInfo: new DropListFieldControl(
          this.json.location,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].location`,
                  value
                );
              })
            );
          },
          ["any"]
        ),
      },
      {
        title: "Value type",
        controlInfo: new DropListFieldControl(
          this.json.valueType,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].valueType`,
                  value
                );
              })
            );
          },
          ["auto-detect"]
        ),
      },
      {
        title: "Allow Empty Value",
        controlInfo: new CheckboxFieldControl(
          this.json.allowEmptyValue,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].allowEmptyValue`,
                  value
                );
              })
            );
          }
        ),
      },
      {
        title: "Check Max Value Length",
        controlInfo: new CheckboxFieldControl(
          this.json.checkMaxValueLength,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].checkMaxValueLength`,
                  value
                );
              })
            );
          }
        ),
      },
      {
        title: "Allow Repeated",
        controlInfo: new CheckboxFieldControl(
          this.json.allowRepeatedParameterName,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].allowRepeatedParameterName`,
                  value
                );
              })
            );
          }
        ),
      },
      {
        title: "Sensitive",
        controlInfo: new CheckboxFieldControl(
          this.json.sensitiveParameter,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].sensitiveParameter`,
                  value
                );
              })
            );
          }
        ),
      },

      {
        title: "Check Attack Signatures",
        controlInfo: new CheckboxFieldControl(
          this.json.attackSignaturesCheck,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].attackSignaturesCheck`,
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
          this.json.checkMetachars,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].checkMetachars`,
                  value
                );
              })
            );
          }
        ),
      },
      {
        title: "Check Metachars on Value",
        controlInfo: new CheckboxFieldControl(
          this.json.metacharsOnParameterValueCheck,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].metacharsOnParameterValueCheck`,
                  value
                );
              })
            );
          }
        ),
      },
    ];
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
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].name`,
                  text
                );
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "",
        controlInfo: new DropListFieldControl(
          this.json.type,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].type`,
                  value
                );
              })
            );
          },
          ["explicit", "wildcard"]
        ),
      },
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy.parameters.splice(this.rowIndex, 1);
      })
    );
  }
}
