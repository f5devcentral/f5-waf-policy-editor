import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { SignatureSetsFieldFactory } from "./signature-sets-field.factory";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { SignatureSet } from "../../../../model/policy-schema/policy.definitions";

export class SignatureSetsFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<SignatureSet>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<SignatureSet>(
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
    return "signature-sets";
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy["signature-sets"].splice(this.rowIndex, 1);

        if (currentJson.policy["signature-sets"].length === 0)
          delete currentJson.policy["signature-sets"];
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    const signatureSetsFieldFactory = new SignatureSetsFieldFactory(
      this.dispatch,
      this.json
    );

    return [
      this.gridFieldValueFactory.createLabelFieldControl("Name", "name"),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Alarm",
        "alarm",
        signatureSetsFieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Block",
        "block",
        signatureSetsFieldFactory
      ),
    ];
  }
}
