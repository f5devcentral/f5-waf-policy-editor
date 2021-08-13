import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { HttpProtocolsFieldFactory } from "../../../store/policy-editor/visitor/imp/http-protocols-field.factory";
import { HttpProtocolsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/http-protocols.visitor-factory";

export const HttpProtocolsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const httpProtocolsFieldFactory = useVisitor(HttpProtocolsFieldFactory);
  const httpProtocolsVisitorFactory = useVisitor(HttpProtocolsVisitorFactory);

  const { titles, visitors } = httpProtocolsVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => httpProtocolsFieldFactory.create()}
      >
        Add Http Protocol Compliance
      </Button>
      <Box>
        <GridTableValueControl titles={titles} visitors={visitors} />
      </Box>
    </Box>
  );
};
