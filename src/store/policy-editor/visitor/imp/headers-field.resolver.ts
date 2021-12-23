import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { HeadersFieldFactory } from "./headers-field.factory";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import {
  Header,
  HostNameTypeEnum,
} from "../../../../model/policy-schema/policy.definitions";

export class HeadersFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<Header>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<Header>(
      this.rowIndex,
      this.dispatch,
      this.json,
      this.basePath
    );
  }

  key(): string {
    return this.json.name;
  }

  get hasAdvancedRows(): boolean {
    return true;
  }

  get basePath(): string {
    return "headers";
  }

  getAdvancedRows(): GridFieldValue[] {
    const headersFiledFactory = new HeadersFieldFactory(
      this.dispatch,
      this.json
    );

    return [
      this.gridFieldValueFactory.createTextEditControl(
        "Header Name",
        "name",
        headersFiledFactory
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Type",
        "type",
        headersFiledFactory,
        Object.values(HostNameTypeEnum)
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Mandatory",
        "mandatory",
        headersFiledFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check Signatures",
        "checkSignatures",
        headersFiledFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Normalize HTML",
        "htmlNormalization",
        headersFiledFactory
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Decode Value As Base64",
        "decodeValueAsBase64",
        headersFiledFactory,
        ["disabled", "enabled", "required"]
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Allow Repeated",
        "allowRepeatedOccurrences",
        headersFiledFactory
      ),
    ];
  }

  getBasicRows(): GridFieldValue[] {
    const headersFiledFactory = new HeadersFieldFactory(
      this.dispatch,
      this.json
    );

    return [
      this.gridFieldValueFactory.createTextEditControl(
        "Header Name",
        "name",
        headersFiledFactory
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Type",
        "type",
        headersFiledFactory,
        Object.values(HostNameTypeEnum)
      ),
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy.headers.splice(this.rowIndex, 1);

        if (currentJson.policy.headers.length === 0)
          delete currentJson.policy.headers;
      })
    );
  }
}
