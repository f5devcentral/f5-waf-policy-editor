import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { FileTypesFieldFactory } from "../../../store/policy-editor/visitor/imp/file-types-field.factory";
import { FileTypesVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/file-types.visitor-factory";

export const FileTypesPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const filetypesFieldFactory = useVisitor(FileTypesFieldFactory);
  const filetypesVisitorFactory = useVisitor(FileTypesVisitorFactory);

  const { titles, visitors } = filetypesVisitorFactory.getResolvers();

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
          visitors={visitors}
          settingsName="Filetypes"
        />
      </Box>
    </Box>
  );
};
