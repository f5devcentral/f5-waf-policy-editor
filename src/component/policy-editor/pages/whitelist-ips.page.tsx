import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { stringCompare } from "../../../utils/string-compare.util";
import * as React from "react";
import { WhitelistIpFactory } from "../../../store/policy-editor/visitor/imp/whitelist-ip.factory";
import { WhitelistIpVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/whitelist-ip.visitor-factory";
import { defaultWhitelistIPs } from "../../../model/policy-editor.defaults.model";

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => fieldFactory.create(defaultWhitelistIPs())}
      >
        Add IP
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={(showDefaultPolicy
            ? [...visitors, ...defValues]
            : visitors
          ).sort((a, b) => stringCompare(a.key(), b.key()))}
        />
      </Box>
    </Box>
  );
};
