import { MitigationBrowser } from "../../../../model/policy-schema/policy.definitions.nap.custom";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { defaultMitigationsBrowser } from "../../../../model/policy-editor.defaults.model";

export class BotDefenseBrowsersFactory extends VisitorFactoryBase<MitigationBrowser> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      "policy.bot-defense.mitigations.browsers",
      dispatch,
      json,
      defaultMitigationsBrowser
    );
  }
}
