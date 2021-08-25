import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { set as _set } from "lodash";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";

export class HeadersFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);
  }

  key(): string {
    return "";
  }

  get hasAdvancedRows(): boolean {
    return true;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [
      {
        title: "Header Name",
        errorPath: [`instance.headers[${this.rowIndex}].name`],
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.headers[${this.rowIndex}].name`,
                  text
                );
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Type",
        errorPath: [`instance.headers[${this.rowIndex}].type`],
        controlInfo: new DropListFieldControl(
          this.json.type,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.headers[${this.rowIndex}].type`,
                  value
                );
              })
            );
          },
          ["explicit", "wildcard"]
        ),
      },
      {
        title: "Mandatory",
        errorPath: [`instance.headers[${this.rowIndex}].mandatory`],
        controlInfo: new CheckboxFieldControl(this.json.mandatory, (value) => {
          this.dispatch(
            policyEditorJsonVisit((currentJson) => {
              _set(
                currentJson,
                `policy.headers[${this.rowIndex}].mandatory`,
                value
              );
            })
          );
        }),
      },
      {
        title: "Check Signatures",
        errorPath: [`instance.headers[${this.rowIndex}].checkSignatures`],
        controlInfo: new CheckboxFieldControl(
          this.json.checkSignatures,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.headers[${this.rowIndex}].checkSignatures`,
                  value
                );
              })
            );
          }
        ),
      },
      {
        title: "Normalize HTML",
        errorPath: [`instance.headers[${this.rowIndex}].htmlNormalization`],
        controlInfo: new CheckboxFieldControl(
          this.json.htmlNormalization,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.headers[${this.rowIndex}].htmlNormalization`,
                  value
                );
              })
            );
          }
        ),
      },
      {
        title: "Decode Base64",
        errorPath: [`instance.headers[${this.rowIndex}].decodeValueAsBase64`],
        controlInfo: new CheckboxFieldControl(
          this.json.decodeValueAsBase64 === "enabled",
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.headers[${this.rowIndex}].decodeValueAsBase64`,
                  value ? "enabled" : "disabled"
                );
              })
            );
          }
        ),
      },
      {
        title: "Allow Repeated",
        errorPath: [
          `instance.headers[${this.rowIndex}].allowRepeatedOccurrences`,
        ],
        controlInfo: new CheckboxFieldControl(
          this.json.allowRepeatedOccurrences,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.headers[${this.rowIndex}].allowRepeatedOccurrences`,
                  value
                );
              })
            );
          }
        ),
      },
    ];
  }

  getBasicRows(): GridFieldValue[] {
    return [
      {
        title: "",
        errorPath: [`instance.headers[${this.rowIndex}].name`],
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.headers[${this.rowIndex}].name`,
                  text
                );
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "",
        errorPath: [`instance.headers[${this.rowIndex}].type`],
        controlInfo: new DropListFieldControl(
          this.json.type,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.headers[${this.rowIndex}].type`,
                  value
                );
              })
            );
          },
          ["explicit", "wildcard"]
        ),
      },
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
