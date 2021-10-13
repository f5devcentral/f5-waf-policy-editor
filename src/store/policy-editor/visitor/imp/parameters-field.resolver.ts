import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set } from "lodash";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { ParametersFieldFactory } from "./parameters-field.factory";
import {
  HostNameTypeEnum,
  Level,
  ParameterLocation,
  ValueType,
} from "../../../../model/policy-schema/policy.definitions";

export class ParametersFieldResolver
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
    return true;
  }

  get basePath(): string {
    return "";
  }

  getAdvancedRows(): GridFieldValue[] {
    return [
      {
        title: "Name",
        errorPath: [`instance.parameters[${this.rowIndex}].type`],
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
        errorPath: [`instance.parameters[${this.rowIndex}].type`],
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
          Object.values(HostNameTypeEnum)
        ),
      },
      {
        title: "Level",
        errorPath: [`instance.parameters[${this.rowIndex}].level`],
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
          Object.values(Level)
        ),
      },
      {
        title: "Location",
        errorPath: [`instance.parameters[${this.rowIndex}].parameterLocation`],
        controlInfo: new DropListFieldControl(
          this.json.location,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.parameters[${this.rowIndex}].parameterLocation`,
                  value
                );
              })
            );
          },
          Object.values(ParameterLocation)
        ),
      },
      {
        title: "Value type",
        errorPath: [`instance.parameters[${this.rowIndex}].valueType`],
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
          Object.values(ValueType)
        ),
      },
      {
        title: "Allow Empty Value",
        errorPath: [`instance.parameters[${this.rowIndex}].allowEmptyValue`],
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
        errorPath: [
          `instance.parameters[${this.rowIndex}].checkMaxValueLength`,
        ],
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
        errorPath: [
          `instance.parameters[${this.rowIndex}].allowRepeatedParameterName`,
        ],
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
        errorPath: [`instance.parameters[${this.rowIndex}].sensitiveParameter`],
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
        errorPath: [
          `instance.parameters[${this.rowIndex}].attackSignaturesCheck`,
        ],
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
        errorPath: [`instance.parameters[${this.rowIndex}].checkMetachars`],
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
        errorPath: [
          `instance.parameters[${this.rowIndex}].metacharsOnParameterValueCheck`,
        ],
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
    const parametersFieldFactory = new ParametersFieldFactory(
      this.dispatch,
      this.json
    );

    return [
      {
        title: "",
        errorPath: [`instance.parameters[${this.rowIndex}].name`],
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) => {
            this.rowIndex === -1
              ? parametersFieldFactory.create({
                  ...this.json,
                  name: text,
                })
              : this.dispatch(
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
        errorPath: [`instance.parameters[${this.rowIndex}].type`],
        controlInfo: new DropListFieldControl(
          this.json.type,
          (value) => {
            this.rowIndex === -1
              ? parametersFieldFactory.create({
                  ...this.json,
                  type: value,
                })
              : this.dispatch(
                  policyEditorJsonVisit((currentJson) => {
                    _set(
                      currentJson,
                      `policy.parameters[${this.rowIndex}].type`,
                      value
                    );
                  })
                );
          },
          Object.values(HostNameTypeEnum)
        ),
      },
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy.parameters.splice(this.rowIndex, 1);

        if (currentJson.policy.parameters.length === 0) {
          delete currentJson.policy.parameters;
        }
      })
    );
  }
}
