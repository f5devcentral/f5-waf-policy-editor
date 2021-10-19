import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { DataGuard } from "../../../../model/policy-schema/policy.definitions";
import { TableFieldValueFactory } from "../base/table-field-value.factory";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set } from "lodash";
import { defaultDataGuard } from "../../../../model/policy-editor.defaults.model";

export class DataGuardVisitor
  extends BaseVisitor
  implements FieldResolverVisitor, FieldFactoryVisitor<DataGuard>
{
  private tableFieldValueFactory: TableFieldValueFactory;

  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(dispatch, json);

    this.tableFieldValueFactory = new TableFieldValueFactory(
      dispatch,
      json,
      this.basePath
    );
  }

  get rowIndex() {
    return 0;
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
    return "data-guard";
  }

  remove(): void {}

  getBasicRows(): GridFieldValue[] {
    return [
      this.tableFieldValueFactory.createCheckBoxFieldControl(
        "Credit Card Numbers",
        "creditCardNumbers"
      ),
      this.tableFieldValueFactory.createCheckBoxFieldControl(
        "Enabled",
        "enabled"
      ),
      this.tableFieldValueFactory.createDropListFieldControl(
        "Enforcement Mode",
        "enforcementMode",
        ["enforce-urls-in-list", "ignore-urls-in-list"]
      ),
      this.tableFieldValueFactory.createCheckBoxFieldControl(
        "Mask Data",
        "maskData"
      ),
      this.tableFieldValueFactory.createCheckBoxFieldControl(
        "SSN",
        "usSocialSecurityNumbers"
      ),
    ];
  }

  create() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        _set(
          currentJson,
          `policy.${this.basePath}`,
          defaultDataGuard(0, undefined)
        );
      })
    );
  }

  callDefault(order?: number, item?: DataGuard): DataGuard {
    return defaultDataGuard(order ?? 0, item);
  }
}
