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
import EditIcon from "@material-ui/icons/Edit";
import { useEffect, useState } from "react";

import { AdvancedSettingsDialog } from "../dialogs/advanced-settings.dialog";
import { GridFieldValueControl } from "./grid.field-value.control";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { DragIndicator } from "@material-ui/icons";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { ErrorFieldControlAdornment } from "./field-control/error.field-control-adornment";
import Chip from "@material-ui/core/Chip";

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
  dnd?: boolean;
  onDragEnd?: (result: DropResult, provided: ResponderProvided) => void;
};

const getItemStyle: (
  defaultFlag: boolean,
  isDragging: boolean,
  draggableStyle: any
) => any = (defaultFlag, isDragging, draggableStyle) => ({
  ...draggableStyle,

  ...(isDragging && {
    background: "rgb(235,235,235)",
  }),

  ...(defaultFlag && {
    background: "#CFF4D2",
  }),
});

const DroppableComponent = (props: any) => {
  return (
    <Droppable droppableId={"1"} direction="vertical">
      {(provided) => {
        return (
          <TableBody
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...props}
          >
            {props.children}
            {provided.placeholder}
          </TableBody>
        );
      }}
    </Droppable>
  );
};

export const GridTableValueControl: React.FunctionComponent<GridTableValueProps> =
  ({ settingsName, titles, visitors, dnd, onDragEnd }) => {
    const [selected, setSelected] = useState([] as boolean[]);
    const [advancedSettingsDialogOpen, setAdvancedSettingsDialogOpen] =
      useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const { jsonValidationErrors } = usePolicyEditorState();

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
      const batchDeleteArr: number[] = [];

      for (let i = 0; i < selected.length; i++) {
        if (selected[i]) {
          batchDeleteArr.push(visitors[i].rowIndex);
        }
      }

      // make sure that items will be deleted from
      // top to bottom, so the correct shifts can be applied
      batchDeleteArr.sort((a, b) => a - b);

      batchDeleteArr.forEach((rowIndex, index) => {
        // just any visitor will suit the aim. move the visitor index
        // to the rowIndex of the one to be deleted minus shift (as some were deleted before)
        visitors[0].rowIndex = rowIndex - index;

        // delete one by one :)
        visitors[0].remove();
      });
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

    const table = (
      <TableContainer
        component={Box}
        style={{
          maxHeight: "400px",
          overflow: "scroll",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell padding={"checkbox"} size="small" align="center">
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
              {dnd && <StyledTableCell />}
              <StyledTableCell />
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
          <TableBody component={dnd ? DroppableComponent : TableBody}>
            {visitors.map((v, vIndex) => {
              const gKey =
                v.rowIndex === -1 ? `def-${vIndex}` : `val-${v.rowIndex}`;
              const defaultFlag = v.rowIndex === -1;
              const row = (
                <React.Fragment key={gKey}>
                  <StyledTableCell
                    padding={"checkbox"}
                    size="small"
                    align="center"
                  >
                    {defaultFlag ? (
                      <Chip label="default" size="small" variant="outlined" />
                    ) : (
                      <Checkbox
                        size="small"
                        color="primary"
                        checked={selected[vIndex] ?? false}
                        onChange={(e) => {
                          selected[vIndex] = e.currentTarget.checked;
                          setSelected([...selected]);
                        }}
                      />
                    )}
                  </StyledTableCell>
                  {v.getBasicRows().map((item, index) => {
                    const error = jsonValidationErrors.filter((x) =>
                      item.errorPath
                        ? item.errorPath.find((err) => err === x.property)
                        : false
                    );
                    const hasError: boolean = error && error.length > 0;
                    const startAdornment = hasError ? (
                      <ErrorFieldControlAdornment
                        errorMessage={error[0].message}
                      />
                    ) : undefined;

                    return item.controlInfo.createCell(
                      item.controlInfo.createControl({
                        key: `control_${index}`,
                        error: hasError,
                        fullWidth: true,
                        hiddenLabel: true,
                        margin: "dense",
                        startAdornment: hasError ? startAdornment : undefined,
                      }),
                      { key: `cell_${index}` }
                    );
                  })}
                  {dnd && (
                    <TableCell
                      style={{
                        width: "24px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                      }}
                    >
                      {!defaultFlag && <DragIndicator />}
                    </TableCell>
                  )}

                  <TableCell style={{ width: "24px" }}>
                    {v.hasAdvancedRows ? (
                      <IconButton
                        size="small"
                        onClick={() => onOpenAdvancedSettingsDialog(vIndex)}
                      >
                        {!defaultFlag && <EditIcon />}
                      </IconButton>
                    ) : undefined}
                  </TableCell>
                  <TableCell size="small" align="center" padding="checkbox">
                    {defaultFlag ? (
                      <Box />
                    ) : (
                      <IconButton
                        size="small"
                        onClick={() => {
                          v.remove();
                        }}
                      >
                        <DeleteForeverRounded />
                      </IconButton>
                    )}
                  </TableCell>
                </React.Fragment>
              );

              return dnd ? (
                <Draggable key={gKey} draggableId={`${gKey}`} index={vIndex}>
                  {(provided, snapshot) => (
                    <StyledTableRow
                      key={gKey}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        defaultFlag,
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {row}
                    </StyledTableRow>
                  )}
                </Draggable>
              ) : (
                <StyledTableRow>{row}</StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );

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
        {dnd ? (
          <DragDropContext
            onDragEnd={(result: DropResult, provided: ResponderProvided) =>
              onDragEnd && onDragEnd(result, provided)
            }
          >
            {table}
          </DragDropContext>
        ) : (
          table
        )}
      </React.Fragment>
    );
  };
