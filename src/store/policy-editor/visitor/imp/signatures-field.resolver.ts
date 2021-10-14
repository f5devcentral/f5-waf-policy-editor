import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { PolicySignature } from "../../../../model/policy-schema/policy.definitions";
import { SignaturesFieldFactory } from "./signatures-field.factory";

export class SignaturesFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<PolicySignature>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<PolicySignature>(
      this.rowIndex,
      this.dispatch,
      this.json,
      this.basePath
    );
  }

  key(): string {
    return "";
  }

  get hasAdvancedRows(): boolean {
    return false;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
  }

  get basePath(): string {
    return "signatures";
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy.signatures.splice(this.rowIndex, 1);

        if (currentJson.policy.signatures.length === 0)
          delete currentJson.policy.signatures;
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    const fieldFactory = new SignaturesFieldFactory(this.dispatch, this.json);

    return [
      this.gridFieldValueFactory.createTextEditControl(
        "Name",
        "name",
        fieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Enabled",
        "enabled",
        fieldFactory
      ),
      this.gridFieldValueFactory.createNumberEditControl(
        "Signature Id",
        "signatureId",
        fieldFactory
      ),
      this.gridFieldValueFactory.createTextEditControl(
        "Tag",
        "tag",
        fieldFactory
      ),
    ];
  }
}
