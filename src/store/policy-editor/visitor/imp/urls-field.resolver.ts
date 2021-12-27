import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { UrlsFieldFactory } from "./urls-field.factory";
import { policyJsonFieldRemover } from "../services/policy-json.field-remover";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import {
  AllowRenderingInFrames,
  HostNameTypeEnum,
  URLElement,
  URLMethod,
  URLProtocol,
} from "../../../../model/policy-schema/policy.definitions";

export class UrlsFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<URLElement>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<URLElement>(
      this.rowIndex,
      this.dispatch,
      this.json,
      this.basePath
    );
  }

  key(): string {
    return "";
  }

  get hasAdvancedRows(): boolean {
    return true;
  }

  get basePath(): string {
    return "urls";
  }

  getAdvancedRows(): GridFieldValue[] {
    const fieldFactory = new UrlsFieldFactory(this.dispatch, this.json);

    return [
      this.gridFieldValueFactory.createDropListFieldControl(
        "Protocol",
        "protocol",
        fieldFactory,
        Object.values(URLProtocol)
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Method",
        "method",
        fieldFactory,
        Object.values(URLMethod)
      ),
      this.gridFieldValueFactory.createTextEditControl(
        "Path",
        "name",
        fieldFactory
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Type",
        "type",
        fieldFactory,
        Object.values(HostNameTypeEnum)
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check Signatures",
        "attackSignaturesCheck",
        fieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check Metachars",
        "metacharsOnUrlCheck",
        fieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Can change domain cookie",
        "canChangeDomainCookie",
        fieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Clickjacking Protection",
        "clickjackingProtection",
        fieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Is Allowed",
        "isAllowed",
        fieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Mandatory Body",
        "mandatoryBody",
        fieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Disallow File Upload Of Executables",
        "disallowFileUploadOfExecutables",
        fieldFactory
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Allow Rendering in frames",
        "allowRenderingInFrames",
        fieldFactory,
        Object.values(AllowRenderingInFrames)
      ),
      this.gridFieldValueFactory.createTextEditControl(
        "Allow Rendering in frames only from",
        "allowRenderingInFramesOnlyFrom",
        fieldFactory
      ),
      this.gridFieldValueFactory.createTextEditControl(
        "Operation Id",
        "operationId",
        fieldFactory
      ),
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        policyJsonFieldRemover(currentJson, this.basePath, this.rowIndex);
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    const fieldFactory = new UrlsFieldFactory(this.dispatch, this.json);
    return [
      this.gridFieldValueFactory.createDropListFieldControl(
        "Protocol",
        "protocol",
        fieldFactory,
        Object.values(URLProtocol)
      ),
      this.gridFieldValueFactory.createTextEditControl(
        "Method",
        "method",
        fieldFactory
      ),
      this.gridFieldValueFactory.createTextEditControl(
        "Path",
        "name",
        fieldFactory
      ),
    ];
  }
}
