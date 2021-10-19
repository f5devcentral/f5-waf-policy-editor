import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { WhitelistIP } from "../../../../model/policy-schema/policy.definitions";
import { defaultWhitelistIPs } from "../../../../model/policy-editor.defaults.model";

export class WhitelistIpFactory extends VisitorFactoryBase<WhitelistIP> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.whitelist-ips", dispatch, json, defaultWhitelistIPs);
  }
}
