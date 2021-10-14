import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import * as React from "react";
import { CustomXffHeadersFactory } from "../../../store/policy-editor/visitor/imp/custom-xff-headers.factory";
import { CustomXffHeadersVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/custom-xff-headers.visitor-factory";

export const CustomXffHeadersPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const fieldFactory = useVisitor(CustomXffHeadersFactory);
  const visitorFactory = useVisitor(CustomXffHeadersVisitorFactory);

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
        onClick={() => fieldFactory.create("")}
      >
        Add XFF Header
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
