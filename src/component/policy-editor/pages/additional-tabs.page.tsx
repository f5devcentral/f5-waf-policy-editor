import React, { useEffect, useState } from "react";
import { AdditionalTabsModel } from "../model/additional-tabs.model";
import {
  EditorTabControl,
  EditorTabsControl,
} from "../controls/policy-editor.tabs.control";
import { PolicyEditorPageFactory } from "../controls/policy-editor.page.factory";

export const AdditionalTabsPage: React.FunctionComponent<AdditionalTabsModel> =
  ({ tree, id }) => {
    const [subTab, setSubTab] = useState(0);
    const pageFactory = new PolicyEditorPageFactory();

    useEffect(() => {
      setSubTab(0);
    }, [id]);

    const tabs = tree.find((x) => x.id === id)?.subPages;
    if (!tabs) return null;
    const currentTab = subTab >= tabs.length ? 0 : subTab;

    return (
      <React.Fragment>
        <EditorTabsControl
          key={id}
          variant="scrollable"
          scrollButtons="auto"
          value={currentTab}
          onChange={(e: any, tab: any) => setSubTab(tab)}
        >
          {tabs.map(({ label, id, disabled }) => {
            return (
              <EditorTabControl label={label} key={id} disabled={disabled} />
            );
          })}
        </EditorTabsControl>
        {pageFactory.createPage(tabs[currentTab].id)}
      </React.Fragment>
    );
  };
