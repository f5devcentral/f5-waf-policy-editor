import * as React from "react";
import { useStyles } from "../../utils/styles.hook";
import IconButton from "@mui/material/IconButton";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Apps, Assistant, ChevronLeft, Edit } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import {
  useDashboardDispatch,
  useDashboardState,
} from "../../store/dashboard/dashboard.hooks";
import { DashboardModuleEnum } from "../../store/dashboard/dashboard.types";
import { dashboardModuleSet } from "../../store/dashboard/dashboard.actions";
import GitHubIcon from "@mui/icons-material/GitHub";

export type MainSidebarProps = Readonly<{ onDrawerClose: any }>;

export const MainSidebarComponent: React.FunctionComponent<MainSidebarProps> =
  ({ onDrawerClose }) => {
    const classes = useStyles();
    const dispatch = useDashboardDispatch();
    const state = useDashboardState();

    return (
      <React.Fragment>
        <div className={classes.drawerHeader}>
          <IconButton onClick={onDrawerClose} size="large">
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            {
              text: "Policy Editor",
              id: DashboardModuleEnum.PolicyEditor,
              icon: <Edit />,
              onClick: () => {
                dispatch(dashboardModuleSet(DashboardModuleEnum.PolicyEditor));
              },
            },
            {
              text: "Policy Wizard",
              id: DashboardModuleEnum.PolicyWizard,
              icon: <Assistant />,
              onClick: () => {
                dispatch(dashboardModuleSet(DashboardModuleEnum.PolicyWizard));
              },
            },
            {
              text: "Policy Templates",
              id: DashboardModuleEnum.PolicyTemplates,
              icon: <Apps />,
              onClick: () => {
                dispatch(
                  dashboardModuleSet(DashboardModuleEnum.PolicyTemplates)
                );
              },
            },
          ].map(({ text, id, icon, onClick }, index) => (
            <ListItem
              button
              key={index}
              onClick={() => onClick()}
              selected={id === state.currentModule}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem
            button
            component="a"
            target="_blank"
            href="https://github.com/464d41/f5-waf-policy-editor"
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Project's GitHub" />
          </ListItem>
        </List>
      </React.Fragment>
    );
  };
