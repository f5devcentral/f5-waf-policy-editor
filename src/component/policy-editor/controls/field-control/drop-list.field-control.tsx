import * as React from "react";

import { TableCell } from "@material-ui/core";
import { IControlInfo } from "../control-info.interface";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

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
      <Box>
        <Autocomplete
          value={this.currentValue}
          onChange={(e, value) => this.onValueChange(value as string)}
          options={this.items}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{ ...params.InputProps, ...props }}
              variant="outlined"
            />
          )}
        />
      </Box>
    );
  }
}
