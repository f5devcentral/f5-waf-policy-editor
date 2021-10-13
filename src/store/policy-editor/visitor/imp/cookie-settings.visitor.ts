import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { CookieSettings } from "../../../../model/policy-schema/policy.definitions";
import { TableFieldValueFactory } from "../base/table-field-value.factory";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set } from "lodash";
import { defaultCookieSettings } from "../../../../model/policy-editor.defaults.model";

export class CookieSettingsVisitor
  extends BaseVisitor
  implements FieldResolverVisitor, FieldFactoryVisitor<CookieSettings>
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
    return "cookie-settings";
  }

  remove(): void {}

  create() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        _set(currentJson, `policy.${this.basePath}`, defaultCookieSettings());
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    return [
      this.tableFieldValueFactory.createTextEditFieldControl(
        "Maximum Cookie Header Length",
        "maximumCookieHeaderLength",
        { makeNumber: true }
      ),
    ];
  }
}
