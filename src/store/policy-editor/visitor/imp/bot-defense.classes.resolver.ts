import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import {
  Class,
  ClassAction,
} from "../../../../model/policy-schema/policy.definitions";
import { BotDefenseClassesFactory } from "./bot-defense.classes.factory";
import { get as _get, unset as _unset } from "lodash";

export class BotDefenseClassesResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private visitorControlFactory: GridFieldValueFactory<Class>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.visitorControlFactory = new GridFieldValueFactory<Class>(
      rowIndex,
      dispatch,
      json,
      this.basePath
    );
  }

  key(): string {
    return this.json.name;
  }

  get hasAdvancedRows(): boolean {
    return false;
  }

  get basePath(): string {
    return "bot-defense.mitigations.classes";
  }

  getAdvancedRows(): GridFieldValue[] {
    return [];
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

  getBasicRows(): GridFieldValue[] {
    const fieldFactory = new BotDefenseClassesFactory(this.dispatch, this.json);

    return [
      this.visitorControlFactory.createTextEditControl(
        "Name",
        "name",
        fieldFactory
      ),
      this.visitorControlFactory.createDropListFieldControl(
        "Action",
        "action",
        fieldFactory,
        Object.values(ClassAction)
      ),
    ];
  }
}
