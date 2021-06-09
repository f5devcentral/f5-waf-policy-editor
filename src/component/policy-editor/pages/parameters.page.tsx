import React from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "../../../utils/styles.hook";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { ParametersFieldFactory } from "../../../store/policy-editor/visitor/imp/parameters-field.factory";
import { ParametersVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/parameters.visitor-factory";

export const ParametersPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const parametersFieldFactory = useVisitor(ParametersFieldFactory);
  const parametersVisitorFactory = useVisitor(ParametersVisitorFactory);

  const { titles, visitors } = parametersVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => parametersFieldFactory.create()}
      >
        Add Parameter
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={visitors}
          settingsName="URLs"
        />
      </Box>
    </Box>
  );
};
