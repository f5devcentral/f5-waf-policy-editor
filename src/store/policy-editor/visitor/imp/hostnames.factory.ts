import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { HostName } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { defaultHostname } from "../../../../model/policy-editor.defaults.model";

export class HostnamesFactory extends VisitorFactoryBase<HostName> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.host-names", dispatch, json, defaultHostname);
  }
}
