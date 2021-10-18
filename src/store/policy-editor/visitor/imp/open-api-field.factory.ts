import { OpenAPIFile } from "../../../../model/policy-schema/policy.definitions";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class OpenApiFieldFactory extends VisitorFactoryBase<OpenAPIFile> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.open-api-files", dispatch, json);
  }
}
