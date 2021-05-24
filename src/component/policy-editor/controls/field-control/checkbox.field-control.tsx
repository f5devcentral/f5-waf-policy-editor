import * as React from "react";

import { IControlInfo } from "../grid.field-value.control";
import Checkbox from "@material-ui/core/Checkbox";
import { TableCell } from "@material-ui/core";

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
