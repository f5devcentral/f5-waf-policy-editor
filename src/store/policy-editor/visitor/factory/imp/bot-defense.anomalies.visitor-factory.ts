import { BotDefenseAnomaliesResolver } from "../../imp/bot-defense.anomalies.resolver";
import { PolicyEditorDispatch } from "../../../policy-editor.types";
import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";

export class BotDefenseAnomaliesVisitorFactory extends FieldResolverVisitorFactory<BotDefenseAnomaliesResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      BotDefenseAnomaliesResolver,
      dispatch,
      json,
      ["Name", "Action", "Score Threshold"],
      "policy.bot-defense.mitigations.anomalies",
      "name"
    );
  }
}
