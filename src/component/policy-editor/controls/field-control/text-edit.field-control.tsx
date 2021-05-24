import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { TableCell } from "@material-ui/core";
import { IControlInfo } from "../control-info.interface";

export class TextEditFieldControl implements IControlInfo {
  constructor(
    private currentValue: string,
    private onValueChange: (value: string) => void
  ) {}

  createCell(children: JSX.Element, props: any): JSX.Element {
    return (
      <TableCell size="small" {...props}>
        {children}
      </TableCell>
    );
  }

  createControl(props: any): JSX.Element {
    return (
      <TextField
        {...props}
        value={this.currentValue ?? ""}
        onChange={(e) => this.onValueChange(e.target.value)}
      />
    );
  }
}
