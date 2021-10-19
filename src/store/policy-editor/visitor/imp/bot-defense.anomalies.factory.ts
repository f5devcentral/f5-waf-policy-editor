import { MitigationAnomaly } from "../../../../model/policy-schema/policy.definitions.nap.custom";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { defaultMitigationsAnomaly } from "../../../../model/policy-editor.defaults.model";

export class BotDefenseAnomaliesFactory extends VisitorFactoryBase<MitigationAnomaly> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      "policy.bot-defense.mitigations.anomalies",
      dispatch,
      json,
      defaultMitigationsAnomaly
    );
  }
}
