import * as React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { TableCell, TableCellProps } from "@material-ui/core";
import { IControlInfo } from "../control-info.interface";

export class TextEditFieldControl implements IControlInfo {
  constructor(
    private currentValue: string,
    private onValueChange: (value: string | number) => void,
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
        id={props.key}
        fullWidth
        value={this.currentValue ?? ""}
        onChange={(e) => {
          const value = e.target.value ?? "";
          try {
            const numberValue = parseFloat(value);
            if (!isNaN(numberValue)) {
              this.onValueChange(numberValue);
            } else {
              this.onValueChange(value);
            }
          } catch (e) {
            this.onValueChange(value);
          }
        }}
        {...this.controlProps}
        {...props}
      />
    );
  }
}
