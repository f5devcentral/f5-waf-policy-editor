import React from "react";

import { useStyles } from "../../../../utils/styles.hook";
import Box from "@mui/material/Box";
import { GridFieldValueControl } from "../../controls/grid.field-value.control";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { DataGuardVisitor } from "../../../../store/policy-editor/visitor/imp/data-guard.visitor";
import { ToolbarPageControl } from "../../controls/page-controls/toolbar.page-control";
import { ContentPageControl } from "../../controls/page-controls/content.page-control";

export const DataGuardSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const dataGuardSettingsVisitor = useVisitor(DataGuardVisitor);

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Settings"></ToolbarPageControl>
      <ContentPageControl>
        <GridFieldValueControl rows={dataGuardSettingsVisitor.getBasicRows()} />
      </ContentPageControl>
    </Box>
  );
};
