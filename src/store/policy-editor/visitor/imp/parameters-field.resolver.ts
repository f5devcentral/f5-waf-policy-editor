import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { ParametersFieldFactory } from "./parameters-field.factory";
import {
  HostNameTypeEnum,
  Level,
  ParameterElement,
  ParameterLocation,
  ValueType,
} from "../../../../model/policy-schema/policy.definitions";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";

export class ParametersFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<ParameterElement>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<ParameterElement>(
      this.rowIndex,
      this.dispatch,
      this.json,
      this.basePath
    );
  }

  key(): string {
    return this.json.name;
  }

  get hasAdvancedRows(): boolean {
    return true;
  }

  get basePath(): string {
    return "parameters";
  }

  getAdvancedRows(): GridFieldValue[] {
    const parametersFieldFactory = new ParametersFieldFactory(
      this.dispatch,
      this.json
    );

    return [
      this.gridFieldValueFactory.createTextEditControl(
        "Name",
        "name",
        parametersFieldFactory
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Type",
        "type",
        parametersFieldFactory,
        Object.values(HostNameTypeEnum)
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Level",
        "level",
        parametersFieldFactory,
        Object.values(Level)
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Location",
        "parameterLocation",
        parametersFieldFactory,
        Object.values(ParameterLocation)
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Value type",
        "valueType",
        parametersFieldFactory,
        Object.values(ValueType)
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Allow Empty Value",
        "allowEmptyValue",
        parametersFieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check Max Value Length",
        "checkMaxValueLength",
        parametersFieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Allow Repeated",
        "allowRepeatedParameterName",
        parametersFieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Sensitive",
        "sensitiveParameter",
        parametersFieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check Attack Signatures",
        "attackSignaturesCheck",
        parametersFieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check Metachars",
        "checkMetachars",
        parametersFieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check Metachars on Value",
        "metacharsOnParameterValueCheck",
        parametersFieldFactory
      ),
    ];
  }

  getBasicRows(): GridFieldValue[] {
    const parametersFieldFactory = new ParametersFieldFactory(
      this.dispatch,
      this.json
    );

    return [
      this.gridFieldValueFactory.createTextEditControl(
        "Name",
        "name",
        parametersFieldFactory
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Type",
        "type",
        parametersFieldFactory,
        Object.values(HostNameTypeEnum)
      ),
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
