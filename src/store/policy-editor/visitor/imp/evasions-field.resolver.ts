import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { EvasionsFieldFactory } from "./evasions-field.factory";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { Evasion } from "../../../../model/policy-schema/policy.definitions";

export class EvasionsFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<Evasion>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<Evasion>(
      this.rowIndex,
      this.dispatch,
      this.json,
      this.basePath
    );
  }

  get basePath(): string {
    return "blocking-settings.evasions";
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
    const fieldFactory = new EvasionsFieldFactory(this.dispatch, this.json);

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
        "Max Decoding Passes",
        "maxDecodingPasses",
        fieldFactory
      ),
    ];
  }
}
