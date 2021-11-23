import React from "react";
import { Box, Button } from "@mui/material";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { useStyles } from "../../../../utils/styles.hook";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { SignaturesFieldFactory } from "../../../../store/policy-editor/visitor/imp/signatures-field.factory";
import { SignaturesVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/signatures.visitor-factory";

export const SignaturesPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const signaturesFieldFactory = useVisitor(SignaturesFieldFactory);
  const signaturesVisitorFactory = useVisitor(SignaturesVisitorFactory);

  const { titles, visitors } = signaturesVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signaturesFieldFactory.create(undefined)}
      >
        Add Signature
      </Button>
      <Box>
        <GridTableValueControl titles={titles} visitors={visitors} />
      </Box>
    </Box>
  );
};
