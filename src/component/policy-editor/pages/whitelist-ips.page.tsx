import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { Box } from "@mui/material";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import * as React from "react";
import { WhitelistIpFactory } from "../../../store/policy-editor/visitor/imp/whitelist-ip.factory";
import { WhitelistIpVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/whitelist-ip.visitor-factory";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const WhitelistIpsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const fieldFactory = useVisitor(WhitelistIpFactory);
  const visitorFactory = useVisitor(WhitelistIpVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = visitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="IP addresses">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => fieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add IP
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          onAddItem={() => fieldFactory.create(undefined)}
          addItemInscription="add IP"
        />
      </ContentPageControl>
    </Box>
  );
};
