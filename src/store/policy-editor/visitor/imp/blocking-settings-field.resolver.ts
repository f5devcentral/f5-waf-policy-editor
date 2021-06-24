import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";

import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { set as _set } from "lodash";
import { Policy } from "f5-waf-policy";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";

export class BlockingSettingsFieldResolver
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
    return false;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
  }

  getBasicRows(): GridFieldValue[] {
    const policy = new Policy();
    const allViolations = policy.getAllViolations();

    const resolveViolationTitle: (name: string) => string = (name: string) => {
      const item = allViolations.find((x: any) => x.name === name);
      if (!item) return name;

      return item.title;
    };

    return [
      {
        title: "",
        errorPath: [
          `instance.blocking-settings.violations[${this.rowIndex}].name`,
        ],
        controlInfo: new LabelFieldControl(
          resolveViolationTitle(this.json.name)
        ),
      },
      {
        errorPath: [
          `instance.blocking-settings.violations[${this.rowIndex}].alarm`,
        ],
        controlInfo: new CheckboxFieldControl(this.json.alarm, (text) => {
          this.dispatch(
            policyEditorJsonVisit((currentJson) => {
              _set(
                currentJson,
                `policy.blocking-settings.violations[${this.rowIndex}].alarm`,
                text
              );
            })
          );
        }),
        title: "",
      },
      {
        title: "",
        errorPath: [
          `instance.blocking-settings.violations[${this.rowIndex}].block`,
        ],
        controlInfo: new CheckboxFieldControl(this.json.block, (text) => {
          this.dispatch(
            policyEditorJsonVisit((currentJson) => {
              _set(
                currentJson,
                `policy.blocking-settings.violations[${this.rowIndex}].block`,
                text
              );
            })
          );
        }),
      },
    ];
  }

  remove() {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        currentJson.policy["blocking-settings"].violations.splice(
          this.rowIndex,
          1
        );
      })
    );
  }
}
