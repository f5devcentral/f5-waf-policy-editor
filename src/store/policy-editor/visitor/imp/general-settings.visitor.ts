import { set as _set } from "lodash";
import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { defaultGeneralSettings } from "../../../../model/policy-editor.defaults.model";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { TableFieldValueFactory } from "../base/table-field-value.factory";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class GeneralSettingsVisitor
  extends BaseVisitor
  implements FieldResolverVisitor, FieldFactoryVisitor<void>
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
    return "";
  }

  getBasicRows(): GridFieldValue[] {
    return [
      {
        title: "Policy Type",
        errorPath: [""],
        controlInfo: new DropListFieldControl("", "App Protect", () => {}, [
          "App Protect",
          "Advanced WAF",
        ]),
      },
      this.tableFieldValueFactory.createTextEditFieldControl(
        "Policy Name",
        "name"
      ),
      this.tableFieldValueFactory.createTextEditFieldControl(
        "Application Language",
        "applicationLanguage"
      ),
      this.tableFieldValueFactory.createTextEditFieldControl(
        "Enforcement Mode",
        "enforcementMode"
      ),
      this.tableFieldValueFactory.createTextEditFieldControl(
        "Template",
        "template.name"
      ),
    ];
  }

  create() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        _set(currentJson, "policy", defaultGeneralSettings);
      })
    );
  }

  remove(): void {}
}
