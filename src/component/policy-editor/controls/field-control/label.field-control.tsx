import * as React from "react";
import { IControlInfo } from "../grid.field-value.control";
import Typography from "@material-ui/core/Typography";
import { TableCell } from "@material-ui/core";

export class LabelFieldControl implements IControlInfo {
  constructor(private currentValue: string) {}

  createCell(children: JSX.Element, props: any): JSX.Element {
    return (
      <TableCell size="small" {...props}>
        {children}
      </TableCell>
    );
  }

  createControl(props: any): JSX.Element {
    return (
      <Typography {...props} variant={"caption"}>
        {this.currentValue}
      </Typography>
    );
  }
}
