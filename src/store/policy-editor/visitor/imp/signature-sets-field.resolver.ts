import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { set as _set } from "lodash";
import { SignatureSetsNginxConst } from "../../../../model/nginx-const/signature-sets.nginx-const";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { SignatureSetsFieldFactory } from "./signature-sets-field.factory";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";

export class SignatureSetsFieldResolver
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
    return false;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
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
    const path = `signature-sets[${this.rowIndex}]`;
    const signatureSetsFieldFactory = new SignatureSetsFieldFactory(
      this.dispatch,
      this.json
    );

    return [
      {
        title: "Name",
        errorPath: [`instance.${path}.name`],
        controlInfo: new LabelFieldControl(this.json.name),
      },
      {
        title: "Alarm",
        errorPath: [`instance.${path}.alarm`],
        controlInfo: new CheckboxFieldControl(this.json.alarm, (value) => {
          this.rowIndex === -1
            ? signatureSetsFieldFactory.create({
                ...this.json,
                alarm: value,
              })
            : this.dispatch(
                policyEditorJsonVisit((currentJson) => {
                  _set(currentJson, `policy.${path}.alarm`, value);
                })
              );
        }),
      },
      {
        title: "Block",
        errorPath: [`instance.${path}.block`],
        controlInfo: new CheckboxFieldControl(this.json.block, (value) => {
          this.rowIndex === -1
            ? signatureSetsFieldFactory.create({
                ...this.json,
                block: value,
              })
            : this.dispatch(
                policyEditorJsonVisit((currentJson) => {
                  _set(currentJson, `policy.${path}.block`, value);
                })
              );
        }),
      },
    ];
  }
}
