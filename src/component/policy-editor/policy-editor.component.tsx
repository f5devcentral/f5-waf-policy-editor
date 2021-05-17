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
      <Box>{pageFactory.createPage(currentPage)}</Box>
      <Box>
        <CurrentPolicyControl
          jsonText={JSON.stringify(currentPolicy, null, 2)}
        />
      </Box>
    </React.Fragment>
  );
};
