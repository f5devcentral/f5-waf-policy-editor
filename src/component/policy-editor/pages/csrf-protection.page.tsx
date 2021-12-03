import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import Box from "@mui/material/Box";
import { GridFieldValueControl } from "../controls/grid.field-value.control";
import { CsrfProtectionVisitor } from "../../../store/policy-editor/visitor/imp/csrf-protection.visitor";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const CsrfProtectionPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const csrfProtectionVisitor = useVisitor(CsrfProtectionVisitor);

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="CSRF Protection Settings"></ToolbarPageControl>
      <ContentPageControl>
        <GridFieldValueControl rows={csrfProtectionVisitor.getBasicRows()} />
      </ContentPageControl>
    </Box>
  );
};
