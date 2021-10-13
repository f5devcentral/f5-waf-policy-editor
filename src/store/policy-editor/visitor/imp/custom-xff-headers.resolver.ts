import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, set as _set, unset as _unset } from "lodash";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
// import { CustomXffHeadersFactory } from "./custom-xff-headers.factory";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";
import { TextEditFieldControl } from "../../../../component/policy-editor/controls/field-control/text-edit.field-control";

export class CustomXffHeadersResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private gridFieldValueFactory: GridFieldValueFactory<string>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.gridFieldValueFactory = new GridFieldValueFactory<string>(
      this.rowIndex,
      this.dispatch,
      this.json,
      this.basePath
    );
  }

  key(): string {
    return this.json;
  }

  get hasAdvancedRows(): boolean {
    return false;
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
  }

  get basePath(): string {
    return "general.customXffHeaders";
  }

  getBasicRows(): GridFieldValue[] {
    // const fieldFactory = new CustomXffHeadersFactory(this.dispatch, this.json);

    return [
      {
        title: "",
        errorPath: [`instance.${this.basePath}[${this.rowIndex}]`],
        controlInfo:
          this.rowIndex === -1
            ? new LabelFieldControl(this.json)
            : new TextEditFieldControl(
                this.json,
                (text) =>
                  this.dispatch(
                    policyEditorJsonVisit((currentJson) => {
                      _set(
                        currentJson,
                        `policy.${this.basePath}[${this.rowIndex}]`,
                        text
                      );
                    })
                  ),
                {},
                { variant: "outlined", size: "small" }
              ),
      },
    ];
  }

  remove(): void {
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        _get(currentJson, `policy.${this.basePath}`).splice(this.rowIndex, 1);
        if (_get(currentJson, `policy.${this.basePath}`).length === 0) {
          _unset(currentJson, `policy.${this.basePath}`);
        }
      })
    );
  }
}
