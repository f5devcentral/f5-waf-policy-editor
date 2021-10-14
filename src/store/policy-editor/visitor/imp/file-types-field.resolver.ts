import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { FileTypesFieldFactory } from "./file-types-field.factory";
import { policyJsonFieldRemover } from "../services/policy-json.field-remover";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import {
  Filetype,
  HostNameTypeEnum,
} from "../../../../model/policy-schema/policy.definitions";

export class FileTypesFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<Filetype>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<Filetype>(
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
    return "filetypes";
  }

  getBasicRows(): GridFieldValue[] {
    const fileTypesFiledFactory = new FileTypesFieldFactory(
      this.dispatch,
      this.json
    );

    return [
      this.gridFieldValueFactory.createTextEditControl(
        "Filetype Name",
        "name",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Type",
        "type",
        fileTypesFiledFactory,
        Object.values(HostNameTypeEnum)
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

  getAdvancedRows(): GridFieldValue[] {
    const fileTypesFiledFactory = new FileTypesFieldFactory(
      this.dispatch,
      this.json
    );

    return [
      this.gridFieldValueFactory.createTextEditControl(
        "Filetype Name",
        "name",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createDropListFieldControl(
        "Type",
        "type",
        fileTypesFiledFactory,
        Object.values(HostNameTypeEnum)
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Allowed",
        "allowed",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check URL Length",
        "checkUrlLength",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createNumberEditControl(
        "URL Length",
        "urlLength",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check QS Length",
        "checkQueryStringLength",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createNumberEditControl(
        "QS Length",
        "queryStringLength",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check POST Data Length",
        "checkPostDataLength",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createNumberEditControl(
        "POST Data Length",
        "postDataLength",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check Request Length",
        "checkRequestLength",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createNumberEditControl(
        "Request Length",
        "requestLength",
        fileTypesFiledFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Check Response",
        "responseCheck",
        fileTypesFiledFactory
      ),
    ];
  }
}
