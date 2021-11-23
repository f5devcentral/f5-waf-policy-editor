import React, { useState } from "react";
import { useStyles } from "../../../../utils/styles.hook";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { Box, Button } from "@mui/material";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { HttpProtocolsFieldFactory } from "../../../../store/policy-editor/visitor/imp/http-protocols-field.factory";
import { HttpProtocolsVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/http-protocols.visitor-factory";
import { ExpandMore } from "@mui/icons-material";
import { MenuSearchPopupControl } from "../../controls/menu-search-popup.control";
import { HTTPProtocolDescription } from "../../../../model/policy-schema/policy.definitions";
import { usePolicyEditorState } from "../../../../store/policy-editor/policy-editor.hooks";

export const HttpProtocolsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const httpProtocolsFieldFactory = useVisitor(HttpProtocolsFieldFactory);
  const httpProtocolsVisitorFactory = useVisitor(HttpProtocolsVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

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
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Add Http Protocol Compliance
        <ExpandMore />
      </Button>
      <MenuSearchPopupControl
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        items={allHttpProtocols}
        onClose={() => {
          setAnchorEl(null);
        }}
        onSelect={(item) => handleSelect(item)}
      />
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
        />
      </Box>
    </Box>
  );
};
