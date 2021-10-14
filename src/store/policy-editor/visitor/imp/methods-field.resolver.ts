import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { MethodElement } from "../../../../model/policy-schema/policy.definitions";
import { MethodsFieldFactory } from "./methods-field.factory";

export class MethodsFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<MethodElement>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<MethodElement>(
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
    return false;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
  }

  get basePath(): string {
    return "methods";
  }

  getBasicRows(): GridFieldValue[] {
    const fieldFactory = new MethodsFieldFactory(this.dispatch, this.json);

    return [
      this.gridFieldValueFactory.createTextEditControl(
        "Name",
        "name",
        fieldFactory
      ),
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
