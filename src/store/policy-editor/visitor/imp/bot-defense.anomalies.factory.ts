import { MitigationAnomaly } from "../../../../model/policy-schema/policy.definitions.nap.custom";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { VisitorFactoryBase } from "../base/visitor-factory.base";

export class BotDefenseAnomaliesFactory extends VisitorFactoryBase<MitigationAnomaly> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.bot-defense.mitigations.anomalies", dispatch, json);
  }
}
