import { PolicyEditorDispatch } from "../../policy-editor.types";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { MitigationsSignature } from "../../../../model/policy-schema/policy.definitions";
import { defaultMitigationsSignature } from "../../../../model/policy-editor.defaults.model";

export class BotDefenseSignaturesFactory extends VisitorFactoryBase<MitigationsSignature> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      "policy.bot-defense.mitigations.signatures",
      dispatch,
      json,
      defaultMitigationsSignature
    );
  }
}
