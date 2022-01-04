import * as React from "react";

import { TableCell } from "@mui/material";
import { IControlInfo } from "../control-info.interface";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import withStyles from "@mui/styles/withStyles";

const TableAutocomplete = withStyles(() => ({
  input: {
    padding: "6px !important",
  },
  inputRoot: {
    padding: "0px !important",
  },
}))(Autocomplete);

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
        <TableAutocomplete
          id={this.currentPath}
          onChange={(e, value) => this.onValueChange(value as string)}
          options={this.items}
          freeSolo={true}
          value={this.currentValue}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                ...props,
              }}
              variant="outlined"
              placeholder={this.hintValue}
              value={this.currentValue}
              onChange={(e) => this.onValueChange(e.target.value)}
            />
          )}
        />
      </Box>
    );
  }
}
