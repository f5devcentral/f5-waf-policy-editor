import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { LabelFieldControl } from "../../../../component/policy-editor/controls/field-control/label.field-control";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { ViolationsNginxConst } from "../../../../model/nginx-const/violations.nginx-const";
import { ViolationsFieldFactory } from "./violations-field.factory";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { BlockingSettingsViolation } from "../../../../model/policy-schema/policy.definitions";

export class ViolationsFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private allViolations: any;
  private gridFieldValueFactory: GridFieldValueFactory<BlockingSettingsViolation>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.allViolations = ViolationsNginxConst.getAllViolations();

    this.gridFieldValueFactory =
      new GridFieldValueFactory<BlockingSettingsViolation>(
        this.rowIndex,
        this.dispatch,
        this.json,
        this.basePath
      );
  }

  private resolveViolationTitle(name: string): string {
    const item = this.allViolations.find((x: any) => x.name === name);
    if (!item) return name;

    return item.title;
  }

  get basePath(): string {
    return "blocking-settings.violations";
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
    const fieldFactory = new ViolationsFieldFactory(this.dispatch, this.json);

    return [
      {
        title: "",
        errorPath: [`instance.[${this.basePath}][${this.rowIndex}].name`],
        controlInfo: new LabelFieldControl(
          this.resolveViolationTitle(this.json.name)
        ),
      },
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Alarm",
        "alarm",
        fieldFactory
      ),
      this.gridFieldValueFactory.createCheckBoxFieldControl(
        "Block",
        "block",
        fieldFactory
      ),
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
