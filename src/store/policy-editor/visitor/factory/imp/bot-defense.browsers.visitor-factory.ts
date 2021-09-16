import { PolicyEditorDispatch } from "../../../policy-editor.types";
import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { BotDefenseBrowsersResolver } from "../../imp/bot-defense.browsers.resolver";

export class BotDefenseBrowsersVisitorFactory extends FieldResolverVisitorFactory<BotDefenseBrowsersResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      BotDefenseBrowsersResolver,
      dispatch,
      json,
      ["Name", "Action", "Max Version", "Min Version"],
      "policy.bot-defense.mitigations.browsers",
      "name"
    );
  }
}
