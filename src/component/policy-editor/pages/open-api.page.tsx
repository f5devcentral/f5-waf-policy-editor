import * as React from "react";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { useStyles } from "../../../utils/styles.hook";
import { OpenApiFieldFactory } from "../../../store/policy-editor/visitor/imp/open-api-field.factory";
import { OpenApiVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/open-api.visitor-factory";

export const OpenApiPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const openApiFieldFactory = useVisitor(OpenApiFieldFactory);
  const openApiVisitorFactory = useVisitor(OpenApiVisitorFactory);

  const { titles, visitors } = openApiVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => openApiFieldFactory.create(undefined)}
      >
        Add OpenAPI Link
      </Button>
      <Box>
        <GridTableValueControl titles={titles} visitors={visitors} />
      </Box>
    </Box>
  );
};
