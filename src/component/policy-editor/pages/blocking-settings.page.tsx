import * as React from "react";
import { useStyles } from "../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { BlockingSettingsFieldFactory } from "../../../store/policy-editor/visitor/imp/blocking-settings-field.factory";
import { BlockingSettingsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/blocking-settings.visitor-factory";

import { Policy } from "f5-waf-policy";

export const BlockingSettingsPage: React.VoidFunctionComponent = () => {
  const policy = new Policy();
  console.log(policy.getAllViolations());

  const classes = useStyles();

  const fieldFactoryVisitor = useVisitor(BlockingSettingsFieldFactory);
  const blockingSettingsVisitorFactory = useVisitor(
    BlockingSettingsVisitorFactory
  );

  const { titles, visitors } = blockingSettingsVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <GridTableValueControl titles={titles} visitors={visitors} />
    </Box>
  );
};
