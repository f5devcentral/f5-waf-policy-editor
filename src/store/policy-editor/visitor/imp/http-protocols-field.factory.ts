import { HTTPProtocol } from "../../../../model/policy-schema/policy.definitions";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { defaultHttpProtocols } from "../../../../model/policy-editor.defaults.model";

export class HttpProtocolsFieldFactory extends VisitorFactoryBase<HTTPProtocol> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super(
      "policy.blocking-settings.http-protocols",
      dispatch,
      json,
      defaultHttpProtocols
    );
  }
}
