import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import Box from "@material-ui/core/Box";
import { GridFieldValueControl } from "../controls/grid.field-value.control";
import { CsrfProtectionVisitor } from "../../../store/policy-editor/visitor/imp/csrf-protection.visitor";

export const CsrfProtectionPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const csrfProtectionVisitor = useVisitor(CsrfProtectionVisitor);

  return (
    <Box className={classes.pageContent}>
      <GridFieldValueControl rows={csrfProtectionVisitor.getBasicRows()} />
    </Box>
  );
};
