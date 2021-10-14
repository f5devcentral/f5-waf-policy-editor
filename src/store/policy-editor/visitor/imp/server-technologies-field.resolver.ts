import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { ServerTechnology } from "../../../../model/policy-schema/policy.definitions";

export class ServerTechnologiesFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<ServerTechnology>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<ServerTechnology>(
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
    return "server-technologies";
  }

  getBasicRows(): GridFieldValue[] {
    return [
      this.gridFieldValueFactory.createLabelFieldControl(
        "",
        "serverTechnologyName"
      ),
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
