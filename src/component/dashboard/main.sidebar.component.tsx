import * as React from "react";
import { useStyles } from "../../utils/styles.hook";

import { ModuleSelectionMenu } from "./module-selection.menu";
import { useDashboardState } from "../../store/dashboard/dashboard.hooks";
import { PolicyEditorSidebarComponent } from "./policy-editor.sidebar.component";
import { DashboardModuleEnum } from "../../store/dashboard/dashboard.types";
import { styled } from "@mui/styles";
import GitHubIcon from "@mui/icons-material/GitHub";

export type MainSidebarProps = Readonly<{ onDrawerClose: any }>;

const CommunityProjectContainer = styled("div")({
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "auto",
});

const CommunityProjectBox = styled("div")({
  padding: "6px 14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#E6E9F3",
  color: "#3F50B4",
  borderRadius: "4px 4px 0px 0px",
  boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
});

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
        <CommunityProjectContainer>
          <a
            href="https://github.com/f5devcentral/f5-waf-policy-editor"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <CommunityProjectBox>
              <GitHubIcon style={{ marginRight: "5px" }} />
              <span
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                Community Project
              </span>
            </CommunityProjectBox>
          </a>
        </CommunityProjectContainer>
      </React.Fragment>
    );
  };
