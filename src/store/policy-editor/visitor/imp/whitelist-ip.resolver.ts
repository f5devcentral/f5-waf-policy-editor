import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { GridFieldValueFactory } from "../base/grid-field-value.factory";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { WhitelistIP } from "../../../../model/policy-schema/policy.definitions";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { get as _get, unset as _unset } from "lodash";
import { WhitelistIpFactory } from "./whitelist-ip.factory";

export class WhitelistIpResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  private visitorControlFactory: GridFieldValueFactory<WhitelistIP>;

  constructor(
    public rowIndex: number,
    protected dispatch: PolicyEditorDispatch,
    protected json: any
  ) {
    super(dispatch, json);

    this.visitorControlFactory = new GridFieldValueFactory<WhitelistIP>(
      rowIndex,
      dispatch,
      json,
      this.basePath
    );
  }

  key(): string {
    return JSON.stringify(this.json);
  }

  get hasAdvancedRows(): boolean {
    return false;
  }
  get basePath(): string {
    return "whitelist-ips";
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
    const fieldFactory = new WhitelistIpFactory(this.dispatch, this.json);

    return [
      this.visitorControlFactory.createDropListFieldControl(
        "Block Requests",
        "blockRequests",
        fieldFactory,
        ["always", "never", "policy-default"]
      ),
      this.visitorControlFactory.createTextEditControl(
        "Description",
        "description",
        fieldFactory
      ),
      this.visitorControlFactory.createTextEditControl(
        "IP Address",
        "ipAddress",
        fieldFactory
      ),
      this.visitorControlFactory.createTextEditControl(
        "IP Mask",
        "ipMask",
        fieldFactory
      ),
    ];
  }
}
