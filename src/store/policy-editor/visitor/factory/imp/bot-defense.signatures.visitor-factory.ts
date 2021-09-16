import { PolicyEditorDispatch } from "../../../policy-editor.types";
import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { BotDefenseSignaturesResolver } from "../../imp/bot-defense.signatures.resolver";

export class BotDefenseSignaturesVisitorFactory extends FieldResolverVisitorFactory<BotDefenseSignaturesResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      BotDefenseSignaturesResolver,
      dispatch,
      json,
      ["Name", "Action"],
      "policy.bot-defense.mitigations.signatures",
      "name"
    );
  }
}
