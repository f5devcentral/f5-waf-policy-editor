import { GridFieldValue } from "../../../component/policy-editor/controls/grid.field-value.control";
import { policyEditorJsonFieldUpdate } from "../policy-editor.actions";

export class GeneralSettingsVisitor {
  constructor(private dispatch: any, private json: any) {}

  getRows(): GridFieldValue[] {
    return [
      {
        title: "Policy Name",
        value: this.json.policy.name,
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonFieldUpdate(
              (currentJson) => (currentJson.policy.name = text)
            )
          ),
      },
      {
        title: "Application Language",
        value: this.json.policy.applicationLanguage,
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonFieldUpdate(
              (currentJson) => (currentJson.policy.applicationLanguage = text)
            )
          ),
      },
      {
        title: "Enforcement Mode",
        value: this.json.policy.enforcementMode,
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonFieldUpdate(
              (currentJson) => (currentJson.policy.enforcementMode = text)
            )
          ),
      },
      {
        title: "Template",
        value: this.json.policy.template.name,
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonFieldUpdate(
              (currentJson) => (currentJson.policy.template.name = text)
            )
          ),
      },
    ];
  }
}
