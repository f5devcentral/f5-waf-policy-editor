import * as React from "react";

import { TableCell } from "@mui/material";
import { IControlInfo } from "../control-info.interface";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export class DropListFieldControl implements IControlInfo {
  constructor(
    private currentPath: string,
    private currentValue: string,
    private hintValue: string,
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
              placeholder={this.hintValue}
            />
          )}
        />
      </Box>
    );
  }
}
