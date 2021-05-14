import { Business, ChevronRight } from "@material-ui/icons";
import * as React from "react";
import Box from "@material-ui/core/Box";

function createLabel(hasSubmenu: boolean, text: string, icon: JSX.Element) {
  return (
    <React.Fragment>
      <Box>
        {icon}
        <span style={{ verticalAlign: "middle" }}>{text}</span>
        {hasSubmenu && <ChevronRight style={{ verticalAlign: "middle" }} />}
      </Box>
    </React.Fragment>
  );
}

export enum PolicyEditorPageEnum {
  GeneralSettings,
  BlockingSettings,
}

export type PolicyEditorPageInfo = {
  label: JSX.Element;
  id: PolicyEditorPageEnum;
};

export const TabsTree: PolicyEditorPageInfo[] = [
  {
    label: createLabel(true, "General Settings", <Business />),
    id: PolicyEditorPageEnum.GeneralSettings,
  },
  {
    label: createLabel(false, "General Settings", <Business />),
    id: PolicyEditorPageEnum.BlockingSettings,
  },
];
