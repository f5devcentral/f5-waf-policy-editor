import React from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "../../../utils/styles.hook";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { HeadersFieldFactory } from "../../../store/policy-editor/visitor/imp/headers-field.factory";
import { HeadersVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/headers.visitor-factory";

export const HeadersPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const headersFieldFactory = useVisitor(HeadersFieldFactory);
  const headersVisitorFactory = useVisitor(HeadersVisitorFactory);

  const { titles, visitors } = headersVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => headersFieldFactory.create()}
      >
        Add Header
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={visitors}
          settingsName="Headers"
        />
      </Box>
    </Box>
  );
};
