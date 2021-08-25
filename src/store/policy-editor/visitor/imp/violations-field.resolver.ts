import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";

import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { set as _set } from "lodash";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";
import { CheckboxFieldControl } from "../../../../component/policy-editor/controls/field-control/checkbox.field-control";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { ViolationsNginxConst } from "../../../../model/nginx-const/violations.nginx-const";

export class ViolationsFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private allViolations: any;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.allViolations = ViolationsNginxConst.getAllViolations();
  }

  private resolveViolationTitle(name: string): string {
    const item = this.allViolations.find((x: any) => x.name === name);
    if (!item) return name;

    return item.title;
  }

  key(): string {
    return this.resolveViolationTitle(this.json.name);
  }

  get hasAdvancedRows(): boolean {
    return false;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
  }

  getBasicRows(): GridFieldValue[] {
    return [
      {
        title: "",
        errorPath: [
          `instance.blocking-settings.violations[${this.rowIndex}].name`,
        ],
        controlInfo: new LabelFieldControl(
          this.resolveViolationTitle(this.json.name)
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
        if (currentJson.policy["blocking-settings"].violations.length === 0) {
          delete currentJson.policy["blocking-settings"].violations;
        }
        if (Object.keys(currentJson.policy["blocking-settings"]).length === 0) {
          delete currentJson.policy["blocking-settings"];
        }
      })
    );
  }
}
