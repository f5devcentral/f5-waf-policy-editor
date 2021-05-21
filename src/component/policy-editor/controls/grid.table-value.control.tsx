import * as React from "react";
import { FieldResolverVisitor } from "../../../store/policy-editor/visitor/interface/field-resolver.visitor";
import {
  createStyles,
  Tab,
  TableContainer,
  withStyles,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { GridFieldValue } from "./grid.field-value.control";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { DeleteForeverRounded } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.contrastText,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

export type GridTableValueProps = {
  titles: string[];
  visitors: FieldResolverVisitor[];
};

export const GridTableValueControl: React.FunctionComponent<GridTableValueProps> =
  ({ titles, visitors }) => {
    const createValueCell: (
      item: GridFieldValue,
      onChange: any
    ) => JSX.Element = (item: GridFieldValue, onChange) => {
      switch (typeof item.value) {
        case "boolean": {
          return (
            <TableCell padding={"checkbox"} size="small" align="center">
              <Checkbox
                size="small"
                checked={item.value}
                color="primary"
                onChange={(e) => onChange(e.target.checked)}
              />
            </TableCell>
          );
        }
        default: {
          return (
            <TableCell size="small">
              <Typography variant={"caption"}>{item.value}</Typography>
            </TableCell>
          );
        }
      }
    };

    return (
      <TableContainer component={Box}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell padding={"checkbox"} size="small" align="center">
                <Checkbox size="small" color="primary" />
              </StyledTableCell>

              {titles.map((x, index) => (
                <StyledTableCell key={index}>
                  <Typography color="primary">{x}</Typography>
                </StyledTableCell>
              ))}
              <StyledTableCell>
                <Typography>
                  <Button color="primary" variant="contained">
                    Remove
                  </Button>
                </Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visitors.map((v, vIndex) => (
              <StyledTableRow key={vIndex}>
                <StyledTableCell
                  padding={"checkbox"}
                  size="small"
                  align="center"
                >
                  <Checkbox size="small" color="primary" />
                </StyledTableCell>
                {v
                  .getRows()
                  .map((item, itemIndex) =>
                    createValueCell(item, item.onChange)
                  )}
                <TableCell size="small" align="center">
                  <IconButton size="small">
                    <DeleteForeverRounded />
                  </IconButton>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
