import * as React from "react";
import { useStyles } from "../../utils/styles.hook";

import { ModuleSelectionMenu } from "./module-selection.menu";
import { useDashboardState } from "../../store/dashboard/dashboard.hooks";
import { PolicyEditorSidebarComponent } from "./policy-editor.sidebar.component";
import { DashboardModuleEnum } from "../../store/dashboard/dashboard.types";

export type MainSidebarProps = Readonly<{ onDrawerClose: any }>;

export const MainSidebarComponent: React.FunctionComponent<MainSidebarProps> =
  ({ onDrawerClose }) => {
    const classes = useStyles();
    const { currentModule } = useDashboardState();

    const additionalSidebar = (() => {
      switch (currentModule) {
        case DashboardModuleEnum.PolicyEditor:
          return <PolicyEditorSidebarComponent />;
      }
    })();

    return (
      <React.Fragment>
        <div
          className={classes.drawerHeader}
          style={{
            padding: "17px",
            paddingTop: "8px",
            paddingBottom: "0px",
          }}
        >
          <ModuleSelectionMenu />
        </div>
        {additionalSidebar}
      </React.Fragment>
    );
  };
