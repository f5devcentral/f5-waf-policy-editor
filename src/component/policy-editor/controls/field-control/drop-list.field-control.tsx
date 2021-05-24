import * as React from "react";

import { TableCell } from "@material-ui/core";
import { IControlInfo } from "../control-info.interface";

export class DropListFieldControl implements IControlInfo {
  createCell(children: JSX.Element, props: any): JSX.Element {
    return (
      <TableCell size="small" {...props}>
        {children}
      </TableCell>
    );
  }

  createControl(props: any): JSX.Element {
    return <div />;
  }
}
