import { FieldResolverVisitorFactory } from "../../base/field-resolver-visitor.factory";
import { HostnamesResolver } from "../../imp/hostnames.resolver";
import { PolicyEditorDispatch } from "../../../policy-editor.types";

export class HostnamesVisitorFactory extends FieldResolverVisitorFactory<HostnamesResolver> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      HostnamesResolver,
      dispatch,
      json,
      ["Name", "Include Subdomains"],
      "policy.host-names",
      "name"
    );
  }
}
