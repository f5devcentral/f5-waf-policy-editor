import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, unset as _unset } from "lodash";
import { DataGuardEnforcementUrlsFactory } from "./data-guard.enforcementUrls.factory";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";

export class DataGuardEnforcementUrlsResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<string>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<string>(
      this.rowIndex,
      this.dispatch,
      this.json,
      this.basePath
    );
  }

  key(): string {
    return this.json;
  }

  get hasAdvancedRows(): boolean {
    return false;
  }

  get basePath(): string {
    return "data-guard.enforcementUrls";
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        _get(currentJson, `policy.${this.basePath}`).splice(this.rowIndex, 1);
        if (_get(currentJson, `policy.${this.basePath}`).length === 0) {
          _unset(currentJson, `policy.${this.basePath}`);
        }
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    const fieldFactory = new DataGuardEnforcementUrlsFactory(
      this.dispatch,
      this.json
    );

    return [
      this.rowIndex === -1
        ? this.gridFieldValueFactory.createLabelFieldControl("", this.json)
        : this.gridFieldValueFactory.createTextEditControl(
            this.json,
            "",
            fieldFactory
          ),
    ];
  }
}
