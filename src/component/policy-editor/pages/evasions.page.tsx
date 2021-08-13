import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { EvasionsFieldFactory } from "../../../store/policy-editor/visitor/imp/evasions-field.factory";
import { EvasionsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/evasions.visitor-factory";

export const EvasionsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const evasionsFieldFactory = useVisitor(EvasionsFieldFactory);
  const evasionsVisitorFactory = useVisitor(EvasionsVisitorFactory);

  const { titles, visitors } = evasionsVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => evasionsFieldFactory.create()}
      >
        Add Evasion
      </Button>
      <Box>
        <GridTableValueControl titles={titles} visitors={visitors} />
      </Box>
    </Box>
  );
};
