import * as React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import { useState } from "react";
import {
  EditorTabControl,
  EditorTabsControl,
} from "./controls/policy-editor.tabs.control";
import { TabsTree } from "./model/policy-editor.tabs.model";
import { usePolicyEditorDispatch } from "../../store/policy-editor/policy-editor.hooks";
import { policyEditorPageSet } from "../../store/policy-editor/policy-editor.actions";

export const PolicyEditorComponent: React.VoidFunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const dispatch = usePolicyEditorDispatch();

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
      <Box>
        <Typography>Policy editor {currentTab}</Typography>
      </Box>
    </React.Fragment>
  );
};
