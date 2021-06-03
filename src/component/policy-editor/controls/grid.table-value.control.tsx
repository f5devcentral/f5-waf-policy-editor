import * as React from "react";
import { FieldResolverVisitor } from "../../../store/policy-editor/visitor/interface/field-resolver.visitor";
import { createStyles, TableContainer, withStyles } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteForeverRounded from "@material-ui/icons/DeleteForeverRounded";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useEffect, useState } from "react";

import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { AdvancedSettingsDialog } from "../dialogs/advanced-settings.dialog";
import { GridFieldValueControl } from "./grid.field-value.control";

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
  settingsName?: string;
  titles: string[];
  visitors: FieldResolverVisitor[];
};

export const GridTableValueControl: React.FunctionComponent<GridTableValueProps> =
  ({ settingsName, titles, visitors }) => {
    const [selected, setSelected] = useState([] as boolean[]);
    const [advancedSettingsDialogOpen, setAdvancedSettingsDialogOpen] =
      useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const onOpenAdvancedSettingsDialog = (index: number) => {
      setSelectedItemIndex(index);
      setAdvancedSettingsDialogOpen(true);
    };
    const onCloseAdvancedSettingsDialog = () =>
      setAdvancedSettingsDialogOpen(false);

    useEffect(() => {
      setSelected(new Array<boolean>(visitors.length).fill(false));
    }, [visitors.length]);

    const allSelected = !selected.some((x) => !x);
    const anySelected = selected.some((x) => x);

    const onRemoveSelected: () => void = () => {
      let removedOffset = 0;
      for (let i = 0; i < selected.length; i++) {
        if (selected[i]) {
          visitors[i - removedOffset].remove();
          removedOffset++;
        }
      }
    };

    const createAdvancedSettingsControls: (
      itemIndex: number
    ) => JSX.Element | undefined = (itemIndex) => {
      if (itemIndex < 0) return undefined;

      return (
        <GridFieldValueControl rows={visitors[itemIndex].getAdvancedRows()} />
      );
    };

    if (!visitors || visitors.length === 0) return <React.Fragment />;

    return (
      <React.Fragment>
        <AdvancedSettingsDialog
          title={settingsName ?? ""}
          open={advancedSettingsDialogOpen}
          handleClose={onCloseAdvancedSettingsDialog}
        >
          {advancedSettingsDialogOpen &&
            createAdvancedSettingsControls(selectedItemIndex)}
        </AdvancedSettingsDialog>
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell
                  padding={"checkbox"}
                  size="small"
                  align="center"
                >
                  <Checkbox
                    checked={allSelected}
                    size="small"
                    color="primary"
                    onChange={(e) => {
                      setSelected([
                        ...selected.map((x) => e.currentTarget.checked),
                      ]);
                    }}
                  />
                </StyledTableCell>

                {titles.map((x, index) => (
                  <StyledTableCell key={index}>
                    <Typography color="primary">{x}</Typography>
                  </StyledTableCell>
                ))}
                <StyledTableCell align="center">
                  <Typography>
                    <Button
                      disabled={!anySelected}
                      color="primary"
                      variant="contained"
                      onClick={() => onRemoveSelected()}
                    >
                      Remove
                    </Button>
                  </Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visitors.map((v, vIndex) => (
                <StyledTableRow key={vIndex}>
                  <TableCell style={{ width: "24px" }}>
                    {v.hasAdvancedRows ? (
                      <IconButton
                        size="small"
                        onClick={() => onOpenAdvancedSettingsDialog(vIndex)}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    ) : undefined}
                  </TableCell>
                  <StyledTableCell
                    padding={"checkbox"}
                    size="small"
                    align="center"
                  >
                    <Checkbox
                      size="small"
                      color="primary"
                      checked={selected[vIndex] ?? false}
                      onChange={(e) => {
                        selected[vIndex] = e.currentTarget.checked;
                        setSelected([...selected]);
                      }}
                    />
                  </StyledTableCell>
                  {v
                    .getBasicRows()
                    .map((item, index) =>
                      item.controlInfo.createCell(
                        item.controlInfo.createControl({ key: index })
                      )
                    )}
                  <TableCell size="small" align="center" padding="checkbox">
                    <IconButton
                      size="small"
                      onClick={() => {
                        v.remove();
                      }}
                    >
                      <DeleteForeverRounded />
                    </IconButton>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  };
