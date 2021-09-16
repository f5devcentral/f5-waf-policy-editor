import { get as _get, set as _set } from "lodash";
import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { defaultBotDefenceSettings } from "../../../../model/policy-editor.defaults.model";

export class BotDefenseSettingsVisitor
  extends BaseVisitor
  implements FieldResolverVisitor, FieldFactoryVisitor<void>
{
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
      {
        title: "Enabled",
        errorPath: ["instance.bot-defense.settings.isEnabled"],
        controlInfo: new CheckboxFieldControl(
          _get(this.json, "policy.bot-defense.settings.isEnabled"),
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  "policy.bot-defense.settings.isEnabled",
                  value
                )
              )
            )
        ),
      },
    ];
  }

  create() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        _set(
          currentJson,
          "policy.bot-defense.settings",
          defaultBotDefenceSettings()
        );
      })
    );
  }

  remove() {}
}
