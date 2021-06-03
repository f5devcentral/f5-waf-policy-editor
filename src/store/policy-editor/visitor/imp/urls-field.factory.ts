import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set } from "lodash";
import { defaultUrls } from "../../../../model/policy-editor.defaults.model";

export class UrlsFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<void>
{
  create(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        const path = "policy.urls";
        let urls = _get(currentJson, path);
        if (!urls) {
          _set(currentJson, path, [] as any);
          urls = _get(currentJson, path);
        }

        urls.push(defaultUrls());
      })
    );
  }
}
