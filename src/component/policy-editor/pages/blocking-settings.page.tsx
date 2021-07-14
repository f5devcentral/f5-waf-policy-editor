import * as React from "react";
import { useStyles } from "../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { BlockingSettingsFieldFactory } from "../../../store/policy-editor/visitor/imp/blocking-settings-field.factory";
import { BlockingSettingsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/blocking-settings.visitor-factory";

import { Menu, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { ExpandMore } from "@material-ui/icons";
import { ViolationsNginxConst } from "../../../model/nginx-const/violations.nginx-const";

export const BlockingSettingsPage: React.VoidFunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const allViolations = ViolationsNginxConst.getAllViolations();

  const classes = useStyles();

  const fieldFactoryVisitor = useVisitor(BlockingSettingsFieldFactory);
  const blockingSettingsVisitorFactory = useVisitor(
    BlockingSettingsVisitorFactory
  );

  const { titles, visitors } = blockingSettingsVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          Add Violation
          <ExpandMore />
        </Button>

        <Menu
          anchorEl={anchorEl}
          onClose={() => {
            setAnchorEl(null);
          }}
          open={Boolean(anchorEl)}
        >
          {allViolations.map((v: any, index: number) => (
            <MenuItem
              key={index}
              value={v.name}
              onClick={() => {
                fieldFactoryVisitor.create({
                  name: v.name,
                  alarm: v.alarm,
                  block: v.block,
                });
                setAnchorEl(null);
              }}
            >
              {v.title}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box>
        <GridTableValueControl titles={titles} visitors={visitors} />
      </Box>
    </Box>
  );
};
