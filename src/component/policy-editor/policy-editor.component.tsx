import * as React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import { useState } from "react";
import { TabsTree } from "./controls/policy-editor.tabs.tree";
import {
  EditorTabControl,
  EditorTabsControl,
} from "./controls/policy-editor.tabs.control";

export const PolicyEditorComponent: React.VoidFunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div>
      <EditorTabsControl
        value={currentTab}
        onChange={(_, tab) => setCurrentTab(tab)}
      >
        {TabsTree.map(({ label, id }) => (
          <EditorTabControl label={label} key={id} />
        ))}
      </EditorTabsControl>
      <Box>
        <Typography>Policy editor {currentTab}</Typography>
      </Box>
    </div>
  );
};
