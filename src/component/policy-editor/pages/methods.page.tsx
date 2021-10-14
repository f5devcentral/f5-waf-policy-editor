import * as React from "react";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { MethodsFieldFactory } from "../../../store/policy-editor/visitor/imp/methods-field.factory";
import { MethodsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/methods.visitor-factory";
import { useStyles } from "../../../utils/styles.hook";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";

export const MethodsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const methodsFieldFactory = useVisitor(MethodsFieldFactory);
  const methodsVisitorFactory = useVisitor(MethodsVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = methodsVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => methodsFieldFactory.create()}
      >
        Add Method
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
        />
      </Box>
    </Box>
  );
};
