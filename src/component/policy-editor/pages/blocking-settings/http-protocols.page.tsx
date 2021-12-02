import React, { useRef, useState } from "react";
import { useStyles } from "../../../../utils/styles.hook";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { Box } from "@mui/material";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { HttpProtocolsFieldFactory } from "../../../../store/policy-editor/visitor/imp/http-protocols-field.factory";
import { HttpProtocolsVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/http-protocols.visitor-factory";
import { ExpandMore } from "@mui/icons-material";
import { MenuSearchPopupControl } from "../../controls/menu-search-popup.control";
import { HTTPProtocolDescription } from "../../../../model/policy-schema/policy.definitions";
import { usePolicyEditorState } from "../../../../store/policy-editor/policy-editor.hooks";
import { ContentPageControl } from "../../controls/page-controls/content.page-control";
import { ToolbarPageControl } from "../../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../../controls/page-controls/toolbar-button.page-control";

export const HttpProtocolsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const httpProtocolsFieldFactory = useVisitor(HttpProtocolsFieldFactory);
  const httpProtocolsVisitorFactory = useVisitor(HttpProtocolsVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();
  const btnRef = useRef<null | HTMLDivElement>(null);

  const {
    titles,
    visitors,
    default: defValues,
  } = httpProtocolsVisitorFactory.getResolvers();
  const allHttpProtocols = Object.values(HTTPProtocolDescription);

  function handleSelect(description: string) {
    httpProtocolsFieldFactory.create({
      maxParams: 1,
      maxHeaders: 1,
      enabled: true,
      description: description as HTTPProtocolDescription,
    });

    setAnchorEl(null);
  }

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="HTTP Compliance">
        <div ref={btnRef}>
          <ToolbarButtonPageControl
            variant="contained"
            color="primary"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            endIcon={<ExpandMore />}
          >
            Add Http Protocol Compliance
          </ToolbarButtonPageControl>
        </div>
        <MenuSearchPopupControl
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          items={allHttpProtocols}
          onClose={() => {
            setAnchorEl(null);
          }}
          onSelect={(item) => handleSelect(item)}
        />
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          onAddItem={() => btnRef.current && setAnchorEl(btnRef.current)}
          addItemInscription="add Protocol Compliance"
        />
      </ContentPageControl>
    </Box>
  );
};
