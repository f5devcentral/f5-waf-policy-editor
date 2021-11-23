import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { TableCell, TableCellProps } from "@mui/material";
import { IControlInfo } from "../control-info.interface";

export class NumberEditFieldControl implements IControlInfo {
  constructor(
    private currentPath: string,
    private currentValue: string,
    private hintValue: string,
    private onValueChange: (value: string) => void,
    private cellProps?: TableCellProps,
    private controlProps?: TextFieldProps
  ) {}

  createCell(children: JSX.Element, props: any): JSX.Element {
    return (
      <TableCell size="small" {...this.cellProps} {...props}>
        {children}
      </TableCell>
    );
  }

  createControl(props: any): JSX.Element {
    if (props.startAdornment) {
      props.InputProps = {
        startAdornment: props.startAdornment,
      };
    }
    return (
      <TextField
        type="number"
        fullWidth
        value={this.currentValue ?? ""}
        placeholder={this.currentValue ? undefined : this.hintValue}
        onChange={(e) => this.onValueChange(e.target.value)}
        {...this.controlProps}
        {...props}
      />
    );
  }
}
