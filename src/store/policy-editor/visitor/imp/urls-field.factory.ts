import { URLElement } from "../../../../model/policy-schema/policy.definitions";
import { VisitorFactoryBase } from "../base/visitor-factory.base";
import { PolicyEditorDispatch } from "../../policy-editor.types";

export class UrlsFieldFactory extends VisitorFactoryBase<URLElement> {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    super("policy.urls", dispatch, json);
  }
  // create(defaultFunc, url): void {
  //   this.dispatch(
  //     policyEditorJsonVisit((currentJson) => {
  //       const path = "policy.urls";
  //       let urls = _get(currentJson, path);
  //       if (!urls) {
  //         _set(currentJson, path, [] as any);
  //         urls = _get(currentJson, path);
  //       }
  //
  //       const schemaService = new PolicySchemaService();
  //       const val = schemaService.shrinkToRequired(
  //         defaultUrls(urls.length, url),
  //         "urls[]"
  //       );
  //
  //       urls.push(val);
  //     })
  //   );
  // }
}
