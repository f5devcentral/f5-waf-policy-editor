import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { PolicyEditorDispatch } from "../../../policy-editor.types";
import { WhitelistIpResolver } from "../../imp/whitelist-ip.resolver";

export class WhitelistIpVisitorFactory extends FieldResolverVisitorFactory<WhitelistIpResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      WhitelistIpResolver,
      dispatch,
      json,
      ["Block Requests", "Description", "IP Address", "IP Mask"],
      "policy.whitelist-ips",
      (json) => JSON.stringify(json)
    );
  }
}
