import * as React from "react";
import { useStyles } from "../../../utils/styles.hook";
import Box from "@mui/material/Box";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { useRef, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { ViolationsNginxConst } from "../../../model/nginx-const/violations.nginx-const";
import { ServerTechnologiesFieldFactory } from "../../../store/policy-editor/visitor/imp/server-technologies-field.factory";
import { ServerTechnologiesVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/server-technologies.visitor-factory";
import { MenuSearchPopupControl } from "../controls/menu-search-popup.control";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const ServerTechnologiesPage: React.VoidFunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const allServerTechnologies = ViolationsNginxConst.getAllServerTechnologies();

  const classes = useStyles();

  const fieldFactoryVisitor = useVisitor(ServerTechnologiesFieldFactory);
  const serverTechnologiesVisitorFactory = useVisitor(
    ServerTechnologiesVisitorFactory
  );

  const { titles, visitors } = serverTechnologiesVisitorFactory.getResolvers();
  const btnRef = useRef<null | HTMLDivElement>(null);

  function handleSelect(item: string) {
    fieldFactoryVisitor.create({
      serverTechnologyName: item,
    });
    setAnchorEl(null);
  }

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Server Technologies">
        <div ref={btnRef}>
          <ToolbarButtonPageControl
            variant="contained"
            color="primary"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            endIcon={<ExpandMore />}
          >
            Add Server Technology
          </ToolbarButtonPageControl>
        </div>
        <MenuSearchPopupControl
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          items={allServerTechnologies}
          onClose={() => {
            setAnchorEl(null);
          }}
          onSelect={(item) => handleSelect(item)}
        />
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={visitors}
          onAddItem={() => btnRef.current && setAnchorEl(btnRef.current)}
          addItemInscription="add Server Technology"
        />
      </ContentPageControl>
    </Box>
  );
};
