import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { useStyles } from "../../../../utils/styles.hook";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { SignatureSetsFieldFactory } from "../../../../store/policy-editor/visitor/imp/signature-sets-field.factory";
import { SignatureSetsVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/signature-sets.visitor-factory";
import { usePolicyEditorState } from "../../../../store/policy-editor/policy-editor.hooks";
import { MenuSearchPopupControl } from "../../controls/menu-search-popup.control";
import { SignatureSetsNginxConst } from "../../../../model/nginx-const/signature-sets.nginx-const";
import { defaultSignatureSets } from "../../../../model/policy-editor.defaults.model";
import { ExpandMore } from "@material-ui/icons";

export const SignatureSetsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const signatureSetsFieldFactory = useVisitor(SignatureSetsFieldFactory);
  const signatureSetsVisitorFactory = useVisitor(SignatureSetsVisitorFactory);

  const {
    titles,
    visitors,
    default: defValues,
  } = signatureSetsVisitorFactory.getResolvers();

  const { showDefaultPolicy } = usePolicyEditorState();
  const allSignatureSets = SignatureSetsNginxConst.getAllNames();

  function handleSelect(item: string) {
    signatureSetsFieldFactory.create({
      ...defaultSignatureSets(),
      name: item,
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
        Add Signature Set
        <ExpandMore />
      </Button>
      <MenuSearchPopupControl
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        items={allSignatureSets}
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
