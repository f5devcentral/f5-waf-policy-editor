import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { Box, Button } from "@mui/material";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import * as React from "react";
import { HostnamesFactory } from "../../../store/policy-editor/visitor/imp/hostnames.factory";
import { HostnamesVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/hostnames.visitor-factory";
import { ContentPageControl } from "../controls/page-controls/content.page-control";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";
import AddIcon from "@mui/icons-material/Add";

export const HostnamesPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const fieldFactory = useVisitor(HostnamesFactory);
  const visitorFactory = useVisitor(HostnamesVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = visitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Hostnames">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => fieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add Hostname
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          onAddItem={() => fieldFactory.create(undefined)}
          addItemInscription="add Hostname"
        />
      </ContentPageControl>
    </Box>
  );
};
