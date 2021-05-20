import { GridFieldValue } from "../../../../component/policy-editor/controls/grid.field-value.control";

export interface FieldResolverVisitor {
  getRows(): GridFieldValue[];
}
