import { BaseVisitor } from "../interface/base.visitor";
import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { GridFieldValue } from "../../../../component/policy-editor/controls/grid.field-value.control";

export class BlockingSettingsFieldResolver
  extends BaseVisitor
  implements FieldResolverVisitor
{
  getRows(): GridFieldValue[] {
    return [];
  }
}
