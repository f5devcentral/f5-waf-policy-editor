import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { HttpProtocolsFieldFactory } from "./http-protocols-field.factory";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { HTTPProtocol } from "../../../../model/policy-schema/policy.definitions";

export class HttpProtocolsFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<HTTPProtocol>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<HTTPProtocol>(
      this.rowIndex,
      this.dispatch,
      this.json,
      this.basePath
    );
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

  get basePath(): string {
    return "blocking-settings.http-protocols";
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

    return [
      this.gridFieldValueFactory.createLabelFieldControl(
        "Description",
        "description"
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Enabled",
        "enabled",
        fieldFactory
      ),
      this.gridFieldValueFactory.createNumberEditControl(
        "Max Headers",
        "maxHeaders",
        fieldFactory
      ),
      this.gridFieldValueFactory.createNumberEditControl(
        "Max Params",
        "maxParams",
        fieldFactory
      ),
    ];
  }
}
