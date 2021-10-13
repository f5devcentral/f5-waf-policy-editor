import React from "react";

import { useStyles } from "../../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridFieldValueControl } from "../../controls/grid.field-value.control";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { DataGuardVisitor } from "../../../../store/policy-editor/visitor/imp/data-guard.visitor";

export const DataGuardSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const dataGuardSettingsVisitor = useVisitor(DataGuardVisitor);

  return (
    <Box className={classes.pageContent}>
      <GridFieldValueControl rows={dataGuardSettingsVisitor.getBasicRows()} />
    </Box>
  );
};
