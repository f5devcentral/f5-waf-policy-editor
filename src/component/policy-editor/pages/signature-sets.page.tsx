import React from "react";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { SignatureSetsFieldFactory } from "../../../store/policy-editor/visitor/imp/signature-sets-field.factory";
import { SignatureSetsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/signature-sets.visitor-factory";

export const SignatureSetsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const signatureSetsFieldFactory = useVisitor(SignatureSetsFieldFactory);
  const signatureSetsVisitorFactory = useVisitor(SignatureSetsVisitorFactory);

  const { titles, visitors } = signatureSetsVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signatureSetsFieldFactory.create()}
      >
        Add Signature Set
      </Button>
      <Box>
        <GridTableValueControl titles={titles} visitors={visitors} />
      </Box>
    </Box>
  );
};
