import React from "react";
import { useStyles } from "../../../../utils/styles.hook";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";

import Box from "@mui/material/Box";
import { GridFieldValueControl } from "../../controls/grid.field-value.control";
import { BotDefenseSettingsVisitor } from "../../../../store/policy-editor/visitor/imp/bot-defense.settings.visitor";
import { ToolbarPageControl } from "../../controls/page-controls/toolbar.page-control";
import { ContentPageControl } from "../../controls/page-controls/content.page-control";

export const BotDefenseSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const botDefenseVisitor = useVisitor(BotDefenseSettingsVisitor);

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Bot Defense Settings"></ToolbarPageControl>
      <ContentPageControl>
        <GridFieldValueControl rows={botDefenseVisitor.getBasicRows()} />
      </ContentPageControl>
    </Box>
  );
};
