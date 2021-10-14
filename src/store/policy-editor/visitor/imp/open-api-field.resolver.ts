import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { OpenAPIFile } from "../../../../model/policy-schema/policy.definitions";
import { OpenApiFieldFactory } from "./open-api-field.factory";

export class OpenApiFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<OpenAPIFile>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<OpenAPIFile>(
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
    return "open-api-files";
  }

  getBasicRows(): GridFieldValue[] {
    const fieldFactory = new OpenApiFieldFactory(this.dispatch, this.json);

    return [
      this.gridFieldValueFactory.createTextEditControl(
        "Link",
        "link",
        fieldFactory
      ),
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy["open-api-files"].splice(this.rowIndex, 1);

        if (currentJson.policy["open-api-files"].length === 0) {
          delete currentJson.policy["open-api-files"];
        }
      })
    );
  }
}
