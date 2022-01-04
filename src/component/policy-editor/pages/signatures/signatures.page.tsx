import React from "react";
import { Box } from "@mui/material";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { useStyles } from "../../../../utils/styles.hook";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { SignaturesFieldFactory } from "../../../../store/policy-editor/visitor/imp/signatures-field.factory";
import { SignaturesVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/signatures.visitor-factory";
import { ToolbarPageControl } from "../../controls/page-controls/toolbar.page-control";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarButtonPageControl } from "../../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../../controls/page-controls/content.page-control";

export const SignaturesPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const signaturesFieldFactory = useVisitor(SignaturesFieldFactory);
  const signaturesVisitorFactory = useVisitor(SignaturesVisitorFactory);

  const { titles, visitors } = signaturesVisitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Signatures">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => signaturesFieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add Signature
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          settingsName="Signatures"
          titles={titles}
          visitors={visitors}
          onAddItem={() => signaturesFieldFactory.create(undefined)}
          addItemInscription="add Signature"
        />
      </ContentPageControl>
    </Box>
  );
};
