import * as React from "react";

import { TableCell } from "@material-ui/core";
import { IControlInfo } from "../control-info.interface";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export class DropListFieldControl implements IControlInfo {
  constructor(
    private currentValue: string,
    private onValueChange: (value: string) => void,
    private items: string[]
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
      <Select
        style={{
          width: "100%",
        }}
        value={this.currentValue}
        onChange={(e) => this.onValueChange(e.target.value as string)}
        {...props}
      >
        {this.items.map((x) => (
          <MenuItem value={x}>{x}</MenuItem>
        ))}
      </Select>
    );
  }
}
