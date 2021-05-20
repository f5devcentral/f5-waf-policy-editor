import * as React from "react";
import { FieldResolverVisitor } from "../../../store/policy-editor/visitor/interface/field-resolver.visitor";

export type GridTableValueProps = {
  titles: string[];
  visitors: FieldResolverVisitor[];
};

export const GridTableValueControl: React.FunctionComponent<GridTableValueProps> =
  ({ titles, visitors }) => {
    return <div />;
  };
