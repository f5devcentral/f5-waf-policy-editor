import * as React from "react";
import { IControlInfo } from "../grid.field-value.control";
import { TableCell } from "@material-ui/core";

export class DropListFieldControl implements IControlInfo {
  createCell(children: JSX.Element, props: any): JSX.Element {
    return (
      <TableCell size="small" {...props}>
        {children}
      </TableCell>
    );
  }

  createControl(props: any): JSX.Element {
    return <div />;
  }
}
