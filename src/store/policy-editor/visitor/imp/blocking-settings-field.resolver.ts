import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid.field-value.control";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { set as _set } from "lodash";

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
  getRows(): GridFieldValue[] {
    return [
      {
        value: this.json.name,
        title: "",
        onChange: () => {},
      },
      {
        value: this.json.alarm,
        title: "",
        onChange: (text) => {
          this.dispatch(
            policyEditorJsonVisit((currentJson) => {
              _set(
                currentJson,
                `policy.blocking-settings.violations[${this.rowIndex}].alarm`,
                text
              );
            })
          );
        },
      },
      {
        value: this.json.block,
        title: "",
        onChange: (text) => {
          this.dispatch(
            policyEditorJsonVisit((currentJson) => {
              _set(
                currentJson,
                `policy.blocking-settings.violations[${this.rowIndex}].block`,
                text
              );
            })
          );
        },
      },
    ];
  }
}
