import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { Cooky } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class CookiesFieldFactory extends VisitorFactoryBase<Cooky> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.cookies", dispatch, json);
  }
}
