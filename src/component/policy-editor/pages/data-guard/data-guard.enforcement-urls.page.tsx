import * as React from "react";
import { DataGuardEnforcementUrlsFactory } from "../../../../store/policy-editor/visitor/imp/data-guard.enforcementUrls.factory";
import { DataGuardEnforcementUrlsVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/data-guard.enforcementUrls.visitor-factory";
import { Button } from "@material-ui/core";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { useStyles } from "../../../../utils/styles.hook";
import { GridTableValueControl } from "../../controls/grid.table-value.control";
import { usePolicyEditorState } from "../../../../store/policy-editor/policy-editor.hooks";
import Box from "@material-ui/core/Box";

export const DataGuardEnforcementUrlsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const fieldFactory = useVisitor(DataGuardEnforcementUrlsFactory);
  const visitorFactory = useVisitor(DataGuardEnforcementUrlsVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = visitorFactory.getResolvers();

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => fieldFactory.create(undefined)}
      >
        Add Enforcement URL
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
        />
      </Box>
    </Box>
  );
};
