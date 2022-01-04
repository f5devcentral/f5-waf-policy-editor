import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { useStyles } from "../../../../utils/styles.hook";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { SignatureSetsFieldFactory } from "../../../../store/policy-editor/visitor/imp/signature-sets-field.factory";
import { SignatureSetsVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/signature-sets.visitor-factory";
import { usePolicyEditorState } from "../../../../store/policy-editor/policy-editor.hooks";
import { MenuSearchPopupControl } from "../../controls/menu-search-popup.control";
import { SignatureSetsNginxConst } from "../../../../model/nginx-const/signature-sets.nginx-const";
import { ExpandMore } from "@mui/icons-material";
import { ToolbarPageControl } from "../../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../../controls/page-controls/content.page-control";

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
  const btnRef = useRef<null | HTMLDivElement>(null);

  function handleSelect(item: string) {
    signatureSetsFieldFactory.create({
      name: item,
      alarm: true,
      block: true,
    });
    setAnchorEl(null);
  }

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Signature Sets">
        <div ref={btnRef}>
          <ToolbarButtonPageControl
            variant="contained"
            color="primary"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            endIcon={<ExpandMore />}
          >
            Add Signature Set
          </ToolbarButtonPageControl>
        </div>
        <MenuSearchPopupControl
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          items={allSignatureSets}
          onClose={() => {
            setAnchorEl(null);
          }}
          onSelect={(item) => handleSelect(item)}
        />
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          settingsName="Signature Sets"
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          onAddItem={() => btnRef.current && setAnchorEl(btnRef.current)}
          addItemInscription="add Signature Set"
        />
      </ContentPageControl>
    </Box>
  );
};
