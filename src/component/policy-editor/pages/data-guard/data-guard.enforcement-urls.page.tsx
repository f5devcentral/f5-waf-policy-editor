import * as React from "react";
import { DataGuardEnforcementUrlsFactory } from "../../../../store/policy-editor/visitor/imp/data-guard.enforcementUrls.factory";
import { DataGuardEnforcementUrlsVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/data-guard.enforcementUrls.visitor-factory";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { useStyles } from "../../../../utils/styles.hook";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { usePolicyEditorState } from "../../../../store/policy-editor/policy-editor.hooks";
import Box from "@mui/material/Box";
import { ToolbarPageControl } from "../../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../../controls/page-controls/content.page-control";
import AddIcon from "@mui/icons-material/Add";

export const DataGuardEnforcementUrlsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const fieldFactory = useVisitor(DataGuardEnforcementUrlsFactory);
  const visitorFactory = useVisitor(DataGuardEnforcementUrlsVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = visitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Enforcement URLs">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => fieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add Enforcement URL
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          onAddItem={() => fieldFactory.create(undefined)}
          addItemInscription="add URL"
        />
      </ContentPageControl>
    </Box>
  );
};
