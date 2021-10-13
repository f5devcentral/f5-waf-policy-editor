import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { CSRFURL } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultCsrfUrl } from "../../../../model/policy-editor.defaults.model";

export class CsrfUrlsFieldFactory extends VisitorFactoryBase<CSRFURL> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.csrf-urls", dispatch, json);
  }

  create(item?: CSRFURL) {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = this.path;
        let urls = _get(currentJson, path);
        if (!urls) {
          _set(currentJson, path, [] as any);
          urls = _get(currentJson, path);
        }

        urls.push(defaultCsrfUrl(urls.length, item));
      })
    );
  }
}
