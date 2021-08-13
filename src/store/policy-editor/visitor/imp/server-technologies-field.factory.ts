import { get as _get, set as _set } from "lodash";
import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { defaultServerTechnologies } from "../../../../model/policy-editor.defaults.model";

export type ServerTechnologiesFieldCreateProps = {
  serverTechnologyName: string;
};

export class ServerTechnologiesFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<ServerTechnologiesFieldCreateProps>
{
  create(props: ServerTechnologiesFieldCreateProps): void {
    const path = "policy.server-technologies";
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        let st = _get(currentJson, path);
        if (!st) {
          _set(currentJson, path, [] as any);
          st = _get(currentJson, path);
        }

        st.push(defaultServerTechnologies(props.serverTechnologyName));
      })
    );
  }
}
