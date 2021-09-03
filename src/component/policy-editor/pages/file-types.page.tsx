import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { FileTypesFieldFactory } from "../../../store/policy-editor/visitor/imp/file-types-field.factory";
import { FileTypesVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/file-types.visitor-factory";
import { stringCompare } from "../../../utils/string-compare.util";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";

export const FileTypesPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const filetypesFieldFactory = useVisitor(FileTypesFieldFactory);
  const filetypesVisitorFactory = useVisitor(FileTypesVisitorFactory);

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
          visitors={(showDefaultPolicy
            ? [...visitors, ...defValues]
            : visitors
          ).sort((a, b) => stringCompare(a.key(), b.key()))}
          settingsName="Filetypes"
        />
      </Box>
    </Box>
  );
};
