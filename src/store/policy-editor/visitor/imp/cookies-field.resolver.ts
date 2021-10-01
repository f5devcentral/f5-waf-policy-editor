import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { Cooky } from "../../../../model/policy-schema/policy.definitions";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { CookiesFieldFactory } from "./cookies-field.factory";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, unset as _unset } from "lodash";

export class CookiesFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private visitorControlFactory: GridFieldValueFactory<Cooky>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.visitorControlFactory = new GridFieldValueFactory<Cooky>(
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
    return true;
  }

  get basePath(): string {
    return "cookies";
  }

  getAdvancedRows(): GridFieldValue[] {
    const fieldFactory = new CookiesFieldFactory(this.dispatch, this.json);

    return [
      this.visitorControlFactory.createTextEditControl(
        "Name",
        "name",
        fieldFactory
      ),
      this.visitorControlFactory.createCheckBoxFieldControl(
        "Accessible Only Through The Http Protocol",
        "accessibleOnlyThroughTheHttpProtocol",
        fieldFactory
      ),
      this.visitorControlFactory.createCheckBoxFieldControl(
        "Attack Signatures Check",
        "attackSignaturesCheck",
        fieldFactory
      ),
      this.visitorControlFactory.createDropListFieldControl(
        "Decode Value As Base64",
        "decodeValueAsBase64",
        fieldFactory,
        ["disabled", "enabled", "required"]
      ),
      this.visitorControlFactory.createDropListFieldControl(
        "Enforcement Type",
        "enforcementType",
        fieldFactory,
        ["allow", "enforce"]
      ),
      this.visitorControlFactory.createDropListFieldControl(
        "Insert Same Site Attribute",
        "insertSameSiteAttribute",
        fieldFactory,
        ["lax", "none", "none-value", "strict"]
      ),
      this.visitorControlFactory.createCheckBoxFieldControl(
        "Secured Over Https Connection",
        "securedOverHttpsConnection",
        fieldFactory
      ),
      this.visitorControlFactory.createDropListFieldControl(
        "Type",
        "type",
        fieldFactory,
        ["explicit", "wildcard"]
      ),
    ];
  }

  getBasicRows(): GridFieldValue[] {
    const fieldFactory = new CookiesFieldFactory(this.dispatch, this.json);

    return [
      this.visitorControlFactory.createTextEditControl(
        "Name",
        "name",
        fieldFactory
      ),
      this.visitorControlFactory.createDropListFieldControl(
        "Type",
        "type",
        fieldFactory,
        ["explicit", "wildcard"]
      ),
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
