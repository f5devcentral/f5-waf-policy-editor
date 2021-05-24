import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { TableCell } from "@material-ui/core";
import { IControlInfo } from "../control-info.interface";

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
