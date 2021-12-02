import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "../../../utils/styles.hook";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { HeadersFieldFactory } from "../../../store/policy-editor/visitor/imp/headers-field.factory";
import { HeadersVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/headers.visitor-factory";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const HeadersPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const headersFieldFactory = useVisitor(HeadersFieldFactory);
  const headersVisitorFactory = useVisitor(HeadersVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = headersVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Headers">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => headersFieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add Header
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          settingsName="Headers"
          onAddItem={() => headersFieldFactory.create(undefined)}
          addItemInscription="add Header"
        />
      </ContentPageControl>
    </Box>
  );
};
