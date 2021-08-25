import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";

import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";

export class ServerTechnologiesFieldResolver
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

  getBasicRows(): GridFieldValue[] {
    return [
      {
        title: "",
        errorPath: [
          `instance.server-technologies[${this.rowIndex}].serverTechnologyName`,
        ],
        controlInfo: new LabelFieldControl(this.json.serverTechnologyName),
      },
    ];
  }

  remove() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy["server-technologies"].splice(this.rowIndex, 1);
        if (currentJson.policy["server-technologies"].length === 0) {
          delete currentJson.policy["server-technologies"];
        }
      })
    );
  }
}
