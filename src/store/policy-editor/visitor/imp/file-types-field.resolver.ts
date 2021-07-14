import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { set as _set } from "lodash";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";

export class FileTypesFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  constructor(
    protected rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);
  }

  get hasAdvancedRows(): boolean {
    return true;
  }

  getBasicRows(): GridFieldValue[] {
    return [
      {
        title: "Filetype Name",
        errorPath: [`instance.filetypes[${this.rowIndex}].name`],
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].name`,
                  text
                );
              })
            ),
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Type",
        errorPath: [`instance.filetypes[${this.rowIndex}].type`],
        controlInfo: new DropListFieldControl(
          this.json.type,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].type`,
                  value
                )
              )
            ),
          ["explicit", "wildcard"]
        ),
      },
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy.filetypes.splice(this.rowIndex, 1);

        if (currentJson.policy.filetypes.length === 0)
          delete currentJson.policy.filetypes;
      })
    );
  }

  getAdvancedRows(): GridFieldValue[] {
    return [
      {
        title: "Filetype Name",
        errorPath: [`instance.filetypes[${this.rowIndex}].name`],
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].name`,
                  text
                );
              })
            ),
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Type",
        errorPath: [`instance.filetypes[${this.rowIndex}].type`],
        controlInfo: new DropListFieldControl(
          this.json.type,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].type`,
                  value
                )
              )
            ),
          ["explicit", "wildcard"]
        ),
      },
      {
        title: "Allowed",
        errorPath: [`instance.filetypes[${this.rowIndex}].allowed`],
        controlInfo: new CheckboxFieldControl(this.json.allowed, (value) =>
          this.dispatch(
            policyEditorJsonVisit((currentJson) =>
              _set(
                currentJson,
                `policy.filetypes[${this.rowIndex}].allowed`,
                value
              )
            )
          )
        ),
      },
      {
        title: "Check URL Length",
        errorPath: [`instance.filetypes[${this.rowIndex}].checkUrlLength`],
        controlInfo: new CheckboxFieldControl(
          this.json.checkUrlLength,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].checkUrlLength`,
                  value
                )
              )
            )
        ),
      },
      {
        title: "URL Length",
        errorPath: [`instance.filetypes[${this.rowIndex}].urlLength`],
        controlInfo: new TextEditFieldControl(
          this.json.urlLength,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].urlLength`,
                  value
                )
              )
            ),
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Check QS Length",
        errorPath: [
          `instance.filetypes[${this.rowIndex}].checkQueryStringLength`,
        ],
        controlInfo: new CheckboxFieldControl(
          this.json.checkQueryStringLength,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].checkQueryStringLength`,
                  value
                )
              )
            )
        ),
      },
      {
        title: "QS Length",
        errorPath: [`instance.filetypes[${this.rowIndex}].queryStringLength`],
        controlInfo: new TextEditFieldControl(
          this.json.queryStringLength,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].queryStringLength`,
                  value
                )
              )
            ),
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Check POST Data Length",
        errorPath: [`instance.filetypes[${this.rowIndex}].checkPostDataLength`],
        controlInfo: new CheckboxFieldControl(
          this.json.checkPostDataLength,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].checkPostDataLength`,
                  value
                )
              )
            )
        ),
      },
      {
        title: "POST Data Length",
        errorPath: [`instance.filetypes[${this.rowIndex}].postDataLength`],
        controlInfo: new TextEditFieldControl(
          this.json.postDataLength,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].postDataLength`,
                  value
                )
              )
            ),
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Check Request Length",
        errorPath: [`instance.filetypes[${this.rowIndex}].checkRequestLength`],
        controlInfo: new CheckboxFieldControl(
          this.json.checkRequestLength,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].checkRequestLength`,
                  value
                )
              )
            )
        ),
      },
      {
        title: "Request Length",
        errorPath: [`instance.filetypes[${this.rowIndex}].requestLength`],
        controlInfo: new TextEditFieldControl(
          this.json.requestLength,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].requestLength`,
                  value
                )
              )
            ),
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Check Response",
        errorPath: [`instance.filetypes[${this.rowIndex}].responseCheck`],
        controlInfo: new CheckboxFieldControl(
          this.json.responseCheck,
          (value) =>
            this.dispatch(
              policyEditorJsonVisit((currentJson) =>
                _set(
                  currentJson,
                  `policy.filetypes[${this.rowIndex}].responseCheck`,
                  value
                )
              )
            )
        ),
      },
    ];
  }
}
