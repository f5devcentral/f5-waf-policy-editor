import React from "react";
import { useStyles } from "../../../../utils/styles.hook";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";

import Box from "@mui/material/Box";
import { GridFieldValueControl } from "../../controls/grid.field-value.control";
import { BotDefenseSettingsVisitor } from "../../../../store/policy-editor/visitor/imp/bot-defense.settings.visitor";

export const BotDefenseSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const botDefenseVisitor = useVisitor(BotDefenseSettingsVisitor);

  return (
    <Box className={classes.pageContent}>
      <GridFieldValueControl rows={botDefenseVisitor.getBasicRows()} />
    </Box>
  );
};
