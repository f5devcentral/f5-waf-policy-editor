import React from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "../../../utils/styles.hook";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { UrlsFieldFactory } from "../../../store/policy-editor/visitor/imp/urls-field.factory";
import { UrlsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/urls.visitor-factory";

export const UrlsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const urlsFieldFactory = useVisitor(UrlsFieldFactory);
  const urlsVisitorFactory = useVisitor(UrlsVisitorFactory);

  const { titles, visitors } = urlsVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => urlsFieldFactory.create()}
      >
        Add URL
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={visitors}
          settingsName="URLs"
          dnd={true}
        />
      </Box>
    </Box>
  );
};
