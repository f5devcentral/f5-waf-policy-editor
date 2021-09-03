import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";

import { set as _set } from "lodash";
import { DropListFieldControl } from "../../../../component/policy-editor/controls/field-control/drop-list.field-control";
import { UrlsFieldFactory } from "./urls-field.factory";

export class UrlsFieldResolver
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
        title: "Protocol",
        errorPath: [`instance.urls[${this.rowIndex}].protocol`],
        controlInfo: new DropListFieldControl(
          this.json.protocol,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.urls[${this.rowIndex}].protocol`,
                  text
                );
              })
            );
          },
          ["http", "https"]
        ),
      },
      {
        title: "Method",
        errorPath: [`instance.urls[${this.rowIndex}].method`],
        controlInfo: new TextEditFieldControl(
          this.json.method,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.urls[${this.rowIndex}].method`, text);
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
      {
        title: "Path",
        errorPath: [`instance.urls[${this.rowIndex}].name`],
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.urls[${this.rowIndex}].name`, text);
              })
            );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },

      {
        title: "Type",
        errorPath: [`instance.urls[${this.rowIndex}].type`],
        controlInfo: new DropListFieldControl(
          this.json.type,
          (text) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(currentJson, `policy.urls[${this.rowIndex}].type`, text);
              })
            );
          },
          ["explicit", "wildcard"]
        ),
      },
      {
        title: "Check Signatures",
        errorPath: [`instance.urls[${this.rowIndex}].attackSignaturesCheck`],
        controlInfo: new CheckboxFieldControl(
          this.json.attackSignaturesCheck,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.urls[${this.rowIndex}].attackSignaturesCheck`,
                  value
                );
              })
            );
          }
        ),
      },
      {
        title: "Check Metachars",
        errorPath: [`instance.urls[${this.rowIndex}].metacharsOnUrlCheck`],
        controlInfo: new CheckboxFieldControl(
          this.json.metacharsOnUrlCheck,
          (value) => {
            this.dispatch(
              policyEditorJsonVisit((currentJson) => {
                _set(
                  currentJson,
                  `policy.urls[${this.rowIndex}].metacharsOnUrlCheck`,
                  value
                );
              })
            );
          }
        ),
      },
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy.urls.splice(this.rowIndex, 1);

        if (currentJson.policy.urls.length === 0) {
          delete currentJson.policy.urls;
        }
      })
    );
  }

  getBasicRows(): GridFieldValue[] {
    const fieldFactory = new UrlsFieldFactory(this.dispatch, this.json);

    return [
      {
        title: "",
        errorPath: [`instance.urls[${this.rowIndex}].protocol`],
        controlInfo: new DropListFieldControl(
          this.json.protocol,
          (text) => {
            this.rowIndex === -1
              ? fieldFactory.create({
                  ...this.json,
                  protocol: text,
                })
              : this.dispatch(
                  policyEditorJsonVisit((currentJson) => {
                    _set(
                      currentJson,
                      `policy.urls[${this.rowIndex}].protocol`,
                      text
                    );
                  })
                );
          },
          ["http", "https"]
        ),
      },
      {
        title: "",
        errorPath: [`instance.urls[${this.rowIndex}].method`],
        controlInfo: new TextEditFieldControl(
          this.json.method,
          (text) => {
            this.rowIndex === -1
              ? fieldFactory.create({
                  ...this.json,
                  method: text,
                })
              : this.dispatch(
                  policyEditorJsonVisit((currentJson) => {
                    _set(
                      currentJson,
                      `policy.urls[${this.rowIndex}].method`,
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
        errorPath: [`instance.urls[${this.rowIndex}].name`],
        controlInfo: new TextEditFieldControl(
          this.json.name,
          (text) => {
            this.rowIndex === -1
              ? fieldFactory.create({
                  ...this.json,
                  name: text,
                })
              : this.dispatch(
                  policyEditorJsonVisit((currentJson) => {
                    _set(
                      currentJson,
                      `policy.urls[${this.rowIndex}].name`,
                      text
                    );
                  })
                );
          },
          {},
          { variant: "outlined", size: "small" }
        ),
      },
    ];
  }
}
