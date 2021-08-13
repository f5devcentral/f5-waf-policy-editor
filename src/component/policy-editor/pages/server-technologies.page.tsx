import * as React from "react";
import { useStyles } from "../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";

import { Menu, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { ExpandMore } from "@material-ui/icons";
import { ViolationsNginxConst } from "../../../model/nginx-const/violations.nginx-const";
import { ServerTechnologiesFieldFactory } from "../../../store/policy-editor/visitor/imp/server-technologies-field.factory";
import { ServerTechnologiesVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/server-technologies.visitor-factory";

export const ServerTechnologiesPage: React.VoidFunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const allServerTechnologies = ViolationsNginxConst.getAllServerTechnologies();

  const classes = useStyles();

  const fieldFactoryVisitor = useVisitor(ServerTechnologiesFieldFactory);
  const serverTechnologiesVisitorFactory = useVisitor(
    ServerTechnologiesVisitorFactory
  );

  const { titles, visitors } = serverTechnologiesVisitorFactory.getResolvers();

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

        <Menu
          anchorEl={anchorEl}
          onClose={() => {
            setAnchorEl(null);
          }}
          open={Boolean(anchorEl)}
        >
          {allServerTechnologies.map((v: string, index: number) => (
            <MenuItem
              key={index}
              value={v}
              onClick={() => {
                fieldFactoryVisitor.create({
                  serverTechnologyName: v,
                });
                setAnchorEl(null);
              }}
            >
              {v}
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
