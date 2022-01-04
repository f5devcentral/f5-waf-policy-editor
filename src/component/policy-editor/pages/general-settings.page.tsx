import * as React from "react";

import { useStyles } from "../../../utils/styles.hook";
import Box from "@mui/material/Box";
import { GridFieldValueControl } from "../controls/grid.field-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { GeneralSettingsVisitor } from "../../../store/policy-editor/visitor/imp/general-settings.visitor";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const GeneralSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const generalSettingsVisitor = useVisitor(GeneralSettingsVisitor);

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Summary"></ToolbarPageControl>
      <ContentPageControl>
        <GridFieldValueControl
          rows={generalSettingsVisitor.getBasicRows()}
          name={"general-settings-grid"}
        />
      </ContentPageControl>
    </Box>
  );
};
