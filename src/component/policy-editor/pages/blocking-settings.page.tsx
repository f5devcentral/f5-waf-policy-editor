import * as React from "react";
import { useStyles } from "../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { BlockingSettingsFieldFactory } from "../../../store/policy-editor/visitor/imp/blocking-settings-field.factory";
import { BlockingSettingsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/blocking-settings.visitor-factory";

import { Policy } from "f5-waf-policy";
import { MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";

export const BlockingSettingsPage: React.VoidFunctionComponent = () => {
  const policy = new Policy();
  const allViolations = policy.getAllViolations();

  console.log(allViolations);

  const classes = useStyles();

  const fieldFactoryVisitor = useVisitor(BlockingSettingsFieldFactory);
  const blockingSettingsVisitorFactory = useVisitor(
    BlockingSettingsVisitorFactory
  );

  const { titles, visitors } = blockingSettingsVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Box>
        <Select
          variant="outlined"
          value={allViolations[0].name}
          onChange={(e) => {
            fieldFactoryVisitor.create({ name: e.target.value as string });
          }}
        >
          {allViolations.map((v: any, index: number) => (
            <MenuItem key={index} value={v.name}>
              {v.title}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box>
        <GridTableValueControl titles={titles} visitors={visitors} />
      </Box>
    </Box>
  );
};
