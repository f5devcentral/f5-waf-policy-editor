import * as React from "react";
import { useStyles } from "../../../../utils/styles.hook";
import Box from "@mui/material/Box";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { useRef, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { ViolationsNginxConst } from "../../../../model/nginx-const/violations.nginx-const";
import { ViolationsFieldFactory } from "../../../../store/policy-editor/visitor/imp/violations-field.factory";
import { MenuSearchPopupControl } from "../../controls/menu-search-popup.control";
import { ViolationsVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/violations.visitor-factory";
import { usePolicyEditorState } from "../../../../store/policy-editor/policy-editor.hooks";
import { ToolbarPageControl } from "../../controls/page-controls/toolbar.page-control";
import { ContentPageControl } from "../../controls/page-controls/content.page-control";
import { ToolbarButtonPageControl } from "../../controls/page-controls/toolbar-button.page-control";

export const ViolationsPage: React.VoidFunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const allViolations = ViolationsNginxConst.getAllViolations();

  const classes = useStyles();

  const fieldFactoryVisitor = useVisitor(ViolationsFieldFactory);
  const blockingSettingsVisitorFactory = useVisitor(ViolationsVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();
  const btnRef = useRef<null | HTMLDivElement>(null);

  const {
    titles,
    visitors,
    default: defValues,
  } = blockingSettingsVisitorFactory.getResolvers();

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
      <ToolbarPageControl headerText="Violations">
        <Box>
          <div ref={btnRef}>
            <ToolbarButtonPageControl
              variant="contained"
              color="primary"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              endIcon={<ExpandMore />}
            >
              Add Violation
            </ToolbarButtonPageControl>
          </div>
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
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          onAddItem={() => btnRef.current && setAnchorEl(btnRef.current)}
          addItemInscription="add Violation"
        />
      </ContentPageControl>
    </Box>
  );
};
