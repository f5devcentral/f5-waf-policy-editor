import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { Box, Button } from "@mui/material";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import * as React from "react";
import { CustomXffHeadersFactory } from "../../../store/policy-editor/visitor/imp/custom-xff-headers.factory";
import { CustomXffHeadersVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/custom-xff-headers.visitor-factory";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const CustomXffHeadersPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const fieldFactory = useVisitor(CustomXffHeadersFactory);
  const visitorFactory = useVisitor(CustomXffHeadersVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = visitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Open API References URLs">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => fieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add XFF Header
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          onAddItem={() => fieldFactory.create(undefined)}
          addItemInscription="add XFF Header"
        />
      </ContentPageControl>
    </Box>
  );
};
