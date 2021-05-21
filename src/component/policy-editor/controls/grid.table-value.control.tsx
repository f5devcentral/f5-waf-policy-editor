import * as React from "react";
import { FieldResolverVisitor } from "../../../store/policy-editor/visitor/interface/field-resolver.visitor";
import { TableContainer } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { GridFieldValue } from "./grid.field-value.control";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

export type GridTableValueProps = {
  titles: string[];
  visitors: FieldResolverVisitor[];
};

export const GridTableValueControl: React.FunctionComponent<GridTableValueProps> =
  ({ titles, visitors }) => {
    const createValueControl: (
      item: GridFieldValue,
      onChange: any
    ) => JSX.Element = (item: GridFieldValue, onChange) => {
      switch (typeof item.value) {
        case "boolean": {
          return (
            <Checkbox
              checked={item.value}
              onChange={(e) => onChange(e.target.checked)}
            />
          );
        }
        default: {
          return <Typography>{item.value}</Typography>;
        }
      }
    };

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {titles.map((x, index) => (
                <TableCell key={index}>{x}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {visitors.map((v, vIndex) => (
              <TableRow key={vIndex}>
                {v.getRows().map((item, itemIndex) => (
                  <TableCell key={itemIndex}>
                    {createValueControl(item, item.onChange)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
