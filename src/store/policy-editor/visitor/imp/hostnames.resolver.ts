import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { HostName } from "../../../../model/policy-schema/policy.definitions";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { HostnamesFactory } from "./hostnames.factory";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, unset as _unset } from "lodash";

export class HostnamesResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private visitorControlFactory: GridFieldValueFactory<HostName>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.visitorControlFactory = new GridFieldValueFactory<HostName>(
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
    return "host-names";
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
    const fieldFactory = new HostnamesFactory(this.dispatch, this.json);

    return [
      this.visitorControlFactory.createTextEditControl(
        "Name",
        "name",
        fieldFactory
      ),
      this.visitorControlFactory.createCheckBoxFieldControl(
        "Include Subdomains",
        "includeSubdomains",
        fieldFactory
      ),
    ];
  }
}
