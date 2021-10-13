import { PolicyEditorDispatch } from "../../policy-editor.types";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { Class } from "../../../../model/policy-schema/policy.definitions";

export class BotDefenseClassesFactory extends VisitorFactoryBase<Class> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.bot-defense.mitigations.classes", dispatch, json);
  }
}
