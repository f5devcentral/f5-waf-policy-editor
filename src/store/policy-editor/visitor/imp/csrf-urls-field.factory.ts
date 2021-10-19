import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { CSRFURL } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { defaultCsrfUrl } from "../../../../model/policy-editor.defaults.model";

export class CsrfUrlsFieldFactory extends VisitorFactoryBase<CSRFURL> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.csrf-urls", dispatch, json, defaultCsrfUrl);
  }
}
