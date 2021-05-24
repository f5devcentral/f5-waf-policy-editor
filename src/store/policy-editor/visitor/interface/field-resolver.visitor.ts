import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";

export interface FieldResolverVisitor {
  getRows(): GridFieldValue[];
  remove(): void;
}
