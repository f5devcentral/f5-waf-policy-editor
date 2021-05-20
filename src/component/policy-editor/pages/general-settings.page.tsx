import * as React from "react";

import { useStyles } from "../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridFieldValueControl } from "../controls/grid.field-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { GeneralSettingsVisitor } from "../../../store/policy-editor/visitor/imp/general-settings.visitor";

export const GeneralSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const generalSettingsVisitor = useVisitor(GeneralSettingsVisitor);

  return (
    <Box className={classes.pageContent}>
      <GridFieldValueControl rows={generalSettingsVisitor.getRows()} />
    </Box>
  );
};
