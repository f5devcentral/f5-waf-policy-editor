import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { TableCell, TableCellProps } from "@mui/material";
import { IControlInfo } from "../control-info.interface";

export class TextEditFieldControl implements IControlInfo {
  constructor(
    private currentPath: string,
    private currentValue: string,
    private hintValue: string,
    private onValueChange: (value: string | number) => void,
    private cellProps?: TableCellProps,
    private controlProps?: TextFieldProps,
    private makeNumber?: boolean
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
        {...props}
        variant={"outlined"}
        id={this.currentPath}
        fullWidth
        value={this.currentValue ?? ""}
        placeholder={this.currentValue ? undefined : this.hintValue}
        onChange={(e) => {
          const value = e.target.value ?? "";
          try {
            const numberValue = parseFloat(value);
            if (!isNaN(numberValue) && this.makeNumber) {
              this.onValueChange(numberValue);
            } else {
              this.onValueChange(value);
            }
          } catch (e) {
            this.onValueChange(value);
          }
        }}
      />
    );
  }
}
