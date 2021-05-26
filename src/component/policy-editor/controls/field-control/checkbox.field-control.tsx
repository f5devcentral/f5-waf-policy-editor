import * as React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import { TableCell } from "@material-ui/core";
import { IControlInfo } from "../control-info.interface";

export class CheckboxFieldControl implements IControlInfo {
  constructor(
    private currentValue: boolean,
    private onValueChange: (value: boolean) => void
  ) {}

  createCell(children: JSX.Element, props: any): JSX.Element {
    return (
      <TableCell size="small" padding="checkbox" align="center" {...props}>
        {children}
      </TableCell>
    );
  }

  createControl(props: any): JSX.Element {
    return (
      <Checkbox
        size="small"
        checked={this.currentValue}
        color="primary"
        onChange={(e) => this.onValueChange(e.target.checked)}
        {...props}
      />
    );
  }
}
