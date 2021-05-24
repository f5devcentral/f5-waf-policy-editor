import * as React from "react";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { MethodsFieldFactory } from "../../../store/policy-editor/visitor/imp/methods-field.factory";
import { MethodsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/methods.visitor-factory";
import { useStyles } from "../../../utils/styles.hook";

export const MethodsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const fieldFactoryVisitor = useVisitor(MethodsFieldFactory);
  const methodsVisitorFactory = useVisitor(MethodsVisitorFactory);

  const { titles, visitors } = methodsVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => fieldFactoryVisitor.create()}
      >
        Add Method
      </Button>
      <Box>
        <GridTableValueControl titles={titles} visitors={visitors} />
      </Box>
    </Box>
  );
};
