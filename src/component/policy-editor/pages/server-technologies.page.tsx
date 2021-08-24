import * as React from "react";
import { useStyles } from "../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { ExpandMore } from "@material-ui/icons";
import { ViolationsNginxConst } from "../../../model/nginx-const/violations.nginx-const";
import { ServerTechnologiesFieldFactory } from "../../../store/policy-editor/visitor/imp/server-technologies-field.factory";
import { ServerTechnologiesVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/server-technologies.visitor-factory";
import { MenuSearchPopupControl } from "../controls/menu-search-popup.control";

export const ServerTechnologiesPage: React.VoidFunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const allServerTechnologies = ViolationsNginxConst.getAllServerTechnologies();

  const classes = useStyles();

  const fieldFactoryVisitor = useVisitor(ServerTechnologiesFieldFactory);
  const serverTechnologiesVisitorFactory = useVisitor(
    ServerTechnologiesVisitorFactory
  );

  const { titles, visitors } = serverTechnologiesVisitorFactory.getResolvers();

  function handleSelect(item: string) {
    fieldFactoryVisitor.create({
      serverTechnologyName: item,
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
          Add Server Technology
          <ExpandMore />
        </Button>

        <MenuSearchPopupControl
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          items={allServerTechnologies}
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
