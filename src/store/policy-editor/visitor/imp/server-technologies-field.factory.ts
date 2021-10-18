import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { ServerTechnology } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class ServerTechnologiesFieldFactory extends VisitorFactoryBase<ServerTechnology> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.server-technologies", dispatch, json);
  }
}
