import { GridFieldValue } from "../../../component/policy-editor/controls/grid.field-value.control";
import { policyEditorJsonFieldUpdate } from "../policy-editor.actions";
import { get as _get, set as _set } from "lodash";

export class GeneralSettingsVisitor {
  constructor(private dispatch: any, private json: any) {}

  getRows(): GridFieldValue[] {
    return [
      {
        title: "Policy Name",
        value: _get(this.json, "policy.name"),
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonFieldUpdate((currentJson) =>
              _set(currentJson, "policy.name", text)
            )
          ),
      },
      {
        title: "Application Language",
        value: _get(this.json, "policy.applicationLanguage"),
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonFieldUpdate((currentJson) =>
              _set(currentJson, "policy.applicationLanguage", text)
            )
          ),
      },
      {
        title: "Enforcement Mode",
        value: _get(this.json, "policy.enforcementMode"),
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonFieldUpdate((currentJson) =>
              _set(currentJson, "policy.enforcementMode", text)
            )
          ),
      },
      {
        title: "Template",
        value: _get(this.json, "policy.template.name"),
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonFieldUpdate((currentJson) =>
              _set(currentJson, "policy.template.name", text)
            )
          ),
      },
    ];
  }
}
