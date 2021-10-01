import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { CSRFProtection } from "../../../../model/policy-schema/policy.definitions";
import { TableFieldValueFactory } from "../base/table-field-value.factory";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set } from "lodash";
import { defaultCsrfProtection } from "../../../../model/policy-editor.defaults.model";

export class CsrfProtectionVisitor
  extends BaseVisitor
  implements FieldResolverVisitor, FieldFactoryVisitor<CSRFProtection>
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
    return "csrf-protection";
  }

  remove(): void {}

  create() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        _set(currentJson, `policy.${this.basePath}`, defaultCsrfProtection());
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    return [
      this.tableFieldValueFactory.createCheckBoxFieldControl(
        "CSRF Protection Enabled",
        "enabled"
      ),
      this.tableFieldValueFactory.createTextEditFieldControl(
        "Expiration time in seconds",
        "expirationTimeInSeconds"
      ),
      this.tableFieldValueFactory.createCheckBoxFieldControl(
        "SSL Only",
        "sslOnly"
      ),
    ];
  }
}
