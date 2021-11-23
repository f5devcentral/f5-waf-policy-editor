import * as React from "react";
import Typography from "@mui/material/Typography";
import { TableCell } from "@mui/material";
import { IControlInfo } from "../control-info.interface";

export class LabelFieldControl implements IControlInfo {
  constructor(private currentPath: string, private currentValue: string) {}

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
