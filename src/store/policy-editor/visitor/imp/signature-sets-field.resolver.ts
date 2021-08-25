import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { set as _set } from "lodash";
import { SignatureSetsNginxConst } from "../../../../model/nginx-const/signature-sets.nginx-const";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";

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
    return "";
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

    return [
      {
        title: "Name",
        errorPath: [`instance.${path}.name`],
        controlInfo: new DropListFieldControl(
          this.json.name,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.${path}.name`, value);
              })
            );
          },
          SignatureSetsNginxConst.getAllNames()
        ),
      },
      {
        title: "Alarm",
        errorPath: [`instance.${path}.alarm`],
        controlInfo: new CheckboxFieldControl(this.json.alarm, (value) => {
          this.dispatch(
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
          this.dispatch(
            policyEditorJsonVisit((currentJson) => {
              _set(currentJson, `policy.${path}.block`, value);
            })
          );
        }),
      },
    ];
  }
}
