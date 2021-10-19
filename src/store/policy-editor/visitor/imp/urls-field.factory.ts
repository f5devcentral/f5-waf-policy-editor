import { URLElement } from "../../../../model/policy-schema/policy.definitions";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { defaultUrls } from "../../../../model/policy-editor.defaults.model";

export class UrlsFieldFactory extends VisitorFactoryBase<URLElement> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.urls", dispatch, json, defaultUrls);
  }
}
