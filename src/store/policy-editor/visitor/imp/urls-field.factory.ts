import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultUrls } from "../../../../model/policy-editor.defaults.model";
import { URLElement } from "../../../../model/policy-schema/policy.definitions";

export class UrlsFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<URLElement>
{
  create(url?: URLElement): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.urls";
        let urls = _get(currentJson, path);
        if (!urls) {
          _set(currentJson, path, [] as any);
          urls = _get(currentJson, path);
        }

        urls.push(defaultUrls(urls.length, url));
      })
    );
  }
}
