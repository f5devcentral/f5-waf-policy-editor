import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { CookieSettingsVisitor } from "../../../store/policy-editor/visitor/imp/cookie-settings.visitor";
import Box from "@mui/material/Box";
import { GridFieldValueControl } from "../controls/grid.field-value.control";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const CookieSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const cookieSettingsVisitor = useVisitor(CookieSettingsVisitor);

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Cookies Settings"></ToolbarPageControl>
      <ContentPageControl>
        <GridFieldValueControl
          rows={cookieSettingsVisitor.getBasicRows()}
          name={"cookie-settings-grid"}
        />
      </ContentPageControl>
    </Box>
  );
};
