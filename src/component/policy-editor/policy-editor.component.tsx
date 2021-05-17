import * as React from "react";
import Box from "@material-ui/core/Box";

import { useState } from "react";
import {
  EditorTabControl,
  EditorTabsControl,
} from "./controls/policy-editor.tabs.control";
import { TabsTree } from "./model/policy-editor.tabs.model";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../store/policy-editor/policy-editor.hooks";
import { policyEditorPageSet } from "../../store/policy-editor/policy-editor.actions";
import { PolicyEditorPageFactory } from "./controls/policy-editor.page.factory";
import { CurrentPolicyControl } from "./controls/curren-policy.control";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, withStyles } from "@material-ui/core";

const JsonEditorContainer = withStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
)(Paper);

export const PolicyEditorComponent: React.VoidFunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const { currentPage, currentPolicy } = usePolicyEditorState();

  const dispatch = usePolicyEditorDispatch();
  const pageFactory = new PolicyEditorPageFactory();

  return (
    <React.Fragment>
      <EditorTabsControl
        variant="scrollable"
        scrollButtons="auto"
        value={currentTab}
        onChange={(_, tab) => {
          setCurrentTab(tab);
          dispatch(policyEditorPageSet(TabsTree[tab].id));
        }}
      >
        {TabsTree.map(({ label, id }) => (
          <EditorTabControl label={label} key={id} />
        ))}
      </EditorTabsControl>
      <Grid container spacing={1}>
        <Grid container item spacing={1} xs={12}>
          <Grid container item spacing={1} xs={1} />
          <Grid container item spacing={1} xs={10}>
            <Box>{pageFactory.createPage(currentPage)}</Box>
            <JsonEditorContainer>
              <CurrentPolicyControl
                jsonText={JSON.stringify(currentPolicy, null, 2)}
              />
            </JsonEditorContainer>
          </Grid>
          <Grid container item spacing={1} xs={1} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
