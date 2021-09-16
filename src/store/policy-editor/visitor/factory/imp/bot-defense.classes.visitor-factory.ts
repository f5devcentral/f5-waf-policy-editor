import { PolicyEditorDispatch } from "../../../policy-editor.types";
import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { BotDefenseClassesResolver } from "../../imp/bot-defense.classes.resolver";

export class BotDefenseClassesVisitorFactory extends FieldResolverVisitorFactory<BotDefenseClassesResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      BotDefenseClassesResolver,
      dispatch,
      json,
      ["Name", "Action"],
      "policy.bot-defense.mitigations.classes",
      "name"
    );
  }
}
