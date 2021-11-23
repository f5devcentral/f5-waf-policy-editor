import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { CookieSettingsVisitor } from "../../../store/policy-editor/visitor/imp/cookie-settings.visitor";
import Box from "@mui/material/Box";
import { GridFieldValueControl } from "../controls/grid.field-value.control";

export const CookieSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const cookieSettingsVisitor = useVisitor(CookieSettingsVisitor);

  return (
    <Box className={classes.pageContent}>
      <GridFieldValueControl rows={cookieSettingsVisitor.getBasicRows()} />
    </Box>
  );
};
