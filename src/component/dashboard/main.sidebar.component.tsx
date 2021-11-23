import * as React from "react";
import { useStyles } from "../../utils/styles.hook";

import { ModuleSelectionMenu } from "./module-selection.menu";

export type MainSidebarProps = Readonly<{ onDrawerClose: any }>;

export const MainSidebarComponent: React.FunctionComponent<MainSidebarProps> =
  ({ onDrawerClose }) => {
    const classes = useStyles();

    return (
      <React.Fragment>
        <div
          className={classes.drawerHeader}
          style={{
            paddingTop: "8px",
          }}
        >
          <ModuleSelectionMenu />
        </div>
      </React.Fragment>
    );
  };
