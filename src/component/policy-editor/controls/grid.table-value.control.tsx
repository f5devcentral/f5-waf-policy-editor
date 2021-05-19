import * as React from "react";
import {BaseVisitor} from "../../../store/policy-editor/visitor/base.visitor";

export type GridTableValueProps = {
    titles: string[],
    visitors: BaseVisitor[]
}

export const GridTableValueControl: React.FunctionComponent<GridTableValueProps> = ({
    titles, visitors
}) => {
    return <div />
}