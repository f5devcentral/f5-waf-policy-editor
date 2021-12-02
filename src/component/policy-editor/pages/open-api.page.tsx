import * as React from "react";
import { Box } from "@mui/material";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { useStyles } from "../../../utils/styles.hook";
import { OpenApiFieldFactory } from "../../../store/policy-editor/visitor/imp/open-api-field.factory";
import { OpenApiVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/open-api.visitor-factory";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const OpenApiPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const openApiFieldFactory = useVisitor(OpenApiFieldFactory);
  const openApiVisitorFactory = useVisitor(OpenApiVisitorFactory);

  const { titles, visitors } = openApiVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Open API References URLs">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => openApiFieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add OpenAPI Link
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={visitors}
          onAddItem={() => openApiFieldFactory.create(undefined)}
          addItemInscription="add Url"
        />
      </ContentPageControl>
    </Box>
  );
};
