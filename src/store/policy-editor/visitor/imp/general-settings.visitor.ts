import { get as _get, set as _set } from "lodash";
import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid.field-value.control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { defaultGeneralSettings } from "../../../../model/policy-editor.defaults.model";

export class GeneralSettingsVisitor
  extends BaseVisitor
  implements FieldResolverVisitor, FieldFactoryVisitor<void>
{
  getRows(): GridFieldValue[] {
    return [
      {
        title: "Policy Name",
        value: _get(this.json, "policy.name"),
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonVisit((currentJson) =>
              _set(currentJson, "policy.name", text)
            )
          ),
      },
      {
        title: "Application Language",
        value: _get(this.json, "policy.applicationLanguage"),
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonVisit((currentJson) =>
              _set(currentJson, "policy.applicationLanguage", text)
            )
          ),
      },
      {
        title: "Enforcement Mode",
        value: _get(this.json, "policy.enforcementMode"),
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonVisit((currentJson) =>
              _set(currentJson, "policy.enforcementMode", text)
            )
          ),
      },
      {
        title: "Template",
        value: _get(this.json, "policy.template.name"),
        onChange: (text) =>
          this.dispatch(
            policyEditorJsonVisit((currentJson) =>
              _set(currentJson, "policy.template.name", text)
            )
          ),
      },
    ];
  }

  create() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        _set(currentJson, "policy", defaultGeneralSettings);
      })
    );
  }
}
