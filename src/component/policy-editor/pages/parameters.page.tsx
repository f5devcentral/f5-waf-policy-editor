import React from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "../../../utils/styles.hook";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { ParametersFieldFactory } from "../../../store/policy-editor/visitor/imp/parameters-field.factory";
import { ParametersVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/parameters.visitor-factory";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { defaultParameters } from "../../../model/policy-editor.defaults.model";

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
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          parametersFieldFactory.create(defaultParameters, undefined)
        }
      >
        Add Parameter
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          settingsName="Parameters"
        />
      </Box>
    </Box>
  );
};
