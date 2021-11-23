import React, { useState } from "react";
import { useStyles } from "../../../../utils/styles.hook";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { Box, Button } from "@mui/material";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { EvasionsFieldFactory } from "../../../../store/policy-editor/visitor/imp/evasions-field.factory";
import { EvasionsVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/evasions.visitor-factory";
import { ExpandMore } from "@mui/icons-material";
import { MenuSearchPopupControl } from "../../controls/menu-search-popup.control";
import { EvasionDescription } from "../../../../model/policy-schema/policy.definitions";
import { usePolicyEditorState } from "../../../../store/policy-editor/policy-editor.hooks";

export const EvasionsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const evasionsFieldFactory = useVisitor(EvasionsFieldFactory);
  const evasionsVisitorFactory = useVisitor(EvasionsVisitorFactory);

  const {
    titles,
    visitors,
    default: defValues,
  } = evasionsVisitorFactory.getResolvers();
  const allEvasions = Object.values(EvasionDescription);

  const { showDefaultPolicy } = usePolicyEditorState();

  function handleSelect(item: string) {
    evasionsFieldFactory.create({
      description: item as EvasionDescription,
      enabled: true,
      maxDecodingPasses: 2,
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
        Add Evasion
        <ExpandMore />
      </Button>
      <MenuSearchPopupControl
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        items={allEvasions}
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
