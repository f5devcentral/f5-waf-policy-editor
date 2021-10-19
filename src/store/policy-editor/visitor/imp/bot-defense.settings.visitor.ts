import { set as _set } from "lodash";
import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { defaultBotDefenceSettings } from "../../../../model/policy-editor.defaults.model";
import { TableFieldValueFactory } from "../base/table-field-value.factory";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class BotDefenseSettingsVisitor
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
    return "bot-defense.settings";
  }

  getBasicRows(): GridFieldValue[] {
    return [
      this.tableFieldValueFactory.createCheckBoxFieldControl(
        "Enabled",
        "isEnabled"
      ),
    ];
  }

  create() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        _set(
          currentJson,
          "policy.bot-defense.settings",
          defaultBotDefenceSettings(0, undefined)
        );
      })
    );
  }

  remove() {}
}
