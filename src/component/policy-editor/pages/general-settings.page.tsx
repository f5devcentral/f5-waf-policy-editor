import * as React from "react";

import { useStyles } from "../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridFieldValueControl } from "../controls/grid.field-value.control";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../../store/policy-editor/policy-editor.hooks";
import { GeneralSettingsVisitor } from "../../../store/policy-editor/visitor/general-settings.visitor";
import {BaseVisitor} from "../../../store/policy-editor/visitor/base.visitor";

export const GeneralSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const dispatch = usePolicyEditorDispatch();
  const { jsonCurrentPolicy } = usePolicyEditorState();
  const generalSettingsVisitor: BaseVisitor = new GeneralSettingsVisitor(
    dispatch,
    jsonCurrentPolicy
  );

  return (
    <Box className={classes.pageContent}>
      <GridFieldValueControl rows={generalSettingsVisitor.getRows()} />
    </Box>
  );
};
