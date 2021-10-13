import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { FileTypesFieldFactory } from "../../../store/policy-editor/visitor/imp/file-types-field.factory";
import { FileTypesVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/file-types.visitor-factory";
import { stringCompare } from "../../../utils/string-compare.util";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../../store/policy-editor/policy-editor.hooks";
import { policyEditorJsonVisit } from "../../../store/policy-editor/policy-editor.actions";
import { PolicyJsonReorderServices } from "../../../store/policy-editor/visitor/services/policy-json.reorder.services";

export const FileTypesPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const filetypesFieldFactory = useVisitor(FileTypesFieldFactory);
  const filetypesVisitorFactory = useVisitor(FileTypesVisitorFactory);

  const dispatch = usePolicyEditorDispatch();

  const {
    titles,
    visitors,
    default: defValues,
  } = filetypesVisitorFactory.getResolvers();

  const { showDefaultPolicy } = usePolicyEditorState();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => filetypesFieldFactory.create()}
      >
        Add Filetype
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          settingsName="Filetypes"
          dnd={true}
          onDragEnd={(result) =>
            dispatch(
              policyEditorJsonVisit((currentJson) => {
                const urlServices = new PolicyJsonReorderServices(
                  currentJson.policy
                );
                urlServices.changeOrder(
                  "filetypes",
                  "wildcardOrder",
                  result.source.index,
                  result.destination?.index ?? 0
                );
              })
            )
          }
        />
      </Box>
    </Box>
  );
};
