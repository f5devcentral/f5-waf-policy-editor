import * as React from "react";
import { useStyles } from "../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { BlockingSettingsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/blocking-settings.visitor-factory";

import Button from "@material-ui/core/Button";
import { useState } from "react";
import { ExpandMore } from "@material-ui/icons";
import { ViolationsNginxConst } from "../../../model/nginx-const/violations.nginx-const";
import { ViolationsFieldFactory } from "../../../store/policy-editor/visitor/imp/violations-field.factory";
import { MenuSearchPopupControl } from "../controls/menu-search-popup.control";

export const ViolationsPage: React.VoidFunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const allViolations = ViolationsNginxConst.getAllViolations();

  const classes = useStyles();

  const fieldFactoryVisitor = useVisitor(ViolationsFieldFactory);
  const blockingSettingsVisitorFactory = useVisitor(
    BlockingSettingsVisitorFactory
  );

  const { titles, visitors } = blockingSettingsVisitorFactory.getResolvers();

  function handleSelect(item: string) {
    const v = allViolations.find((x) => x.title === item);
    if (!v) return;

    fieldFactoryVisitor.create({
      name: v.name,
      alarm: v.alarm,
      block: v.block,
    });
    setAnchorEl(null);
  }

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
        <MenuSearchPopupControl
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          items={allViolations.map((x) => x.title)}
          onClose={() => {
            setAnchorEl(null);
          }}
          onSelect={(item) => handleSelect(item)}
        />
      </Box>
      <Box>
        <GridTableValueControl titles={titles} visitors={visitors} />
      </Box>
    </Box>
  );
};
