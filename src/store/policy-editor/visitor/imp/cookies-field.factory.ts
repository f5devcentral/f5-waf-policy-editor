import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { Cooky } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultCookie } from "../../../../model/policy-editor.defaults.model";

export class CookiesFieldFactory extends VisitorFactoryBase<Cooky> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.cookies", dispatch, json);
  }

  create(item?: Cooky) {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = this.path;
        let urls = _get(currentJson, path);
        if (!urls) {
          _set(currentJson, path, [] as any);
          urls = _get(currentJson, path);
        }

        urls.push(defaultCookie(urls.length, item));
      })
    );
  }
}
