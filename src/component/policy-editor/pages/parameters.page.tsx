import React from "react";
import { Box, Button } from "@mui/material";
import { useStyles } from "../../../utils/styles.hook";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { ParametersFieldFactory } from "../../../store/policy-editor/visitor/imp/parameters-field.factory";
import { ParametersVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/parameters.visitor-factory";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";

export const ParametersPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const parametersFieldFactory = useVisitor(ParametersFieldFactory);
  const parametersVisitorFactory = useVisitor(ParametersVisitorFactory);

  const {
    titles,
    visitors,
    default: defValues,
  } = parametersVisitorFactory.getResolvers();

  const { showDefaultPolicy } = usePolicyEditorState();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Parameters">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => parametersFieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add Parameter
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          settingsName="Parameters"
          onAddItem={() => parametersFieldFactory.create(undefined)}
          addItemInscription="add Parameter"
        />
      </ContentPageControl>
    </Box>
  );
};
