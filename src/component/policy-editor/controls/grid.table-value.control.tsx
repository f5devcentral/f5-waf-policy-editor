import * as React from "react";
import { FieldResolverVisitor } from "../../../store/policy-editor/visitor/interface/field-resolver.visitor";
import { TableContainer } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import DeleteForeverRounded from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
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
import { DragIndicator } from "@mui/icons-material";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { ErrorFieldControlAdornment } from "./field-control/error.field-control-adornment";
import Chip from "@mui/material/Chip";
import { NoDataControl } from "./no-data.control";

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
  addItemInscription?: string;
  onAddItem?: () => void;
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
  ({
    settingsName,
    titles,
    visitors,
    dnd,
    onDragEnd,
    addItemInscription,
    onAddItem,
  }) => {
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

    if (!visitors || visitors.length === 0)
      return (
        <NoDataControl
          addItemInscription={addItemInscription}
          onAddItem={onAddItem}
        />
      );

    const table = (
      <TableContainer component={Box}>
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
                      {!defaultFlag && (
                        <DragIndicator
                          sx={{
                            paddingTop: "4px",
                          }}
                        />
                      )}
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
