import * as React from "react";
import { useStyles } from "../../utils/styles.hook";
import IconButton from "@material-ui/core/IconButton";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
  Apps,
  Assistant,
  ChevronLeft,
  Edit,
  GetApp,
  Share,
} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import {
  useDashboardDispatch,
  useDashboardState,
} from "../../store/dashboard/dashboard.hooks";
import { DashboardModuleEnum } from "../../store/dashboard/dashboard.types";
import { dashboardModuleSet } from "../../store/dashboard/dashboard.actions";
import { Typography } from "@material-ui/core";

export type MainSidebarProps = Readonly<{ onDrawerClose: any }>;

export const MainSidebarComponent: React.FunctionComponent<MainSidebarProps> =
  ({ onDrawerClose }) => {
    const classes = useStyles();
    const dispatch = useDashboardDispatch();
    const state = useDashboardState();

    return (
      <React.Fragment>
        <div className={classes.drawerHeader}>
          <img
            src="https://www.nginx.com/wp-content/uploads/2020/06/NGINX-Logo-White-Endorsement-RGB.svg"
            alt="Web Server Load Balancing with NGINX Plus"
            style={{ width: "102px" }}
          />
          <Typography style={{ width: "50%" }}>[Title]</Typography>
          <IconButton onClick={onDrawerClose}>
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
              text: "Application Preset",
              id: DashboardModuleEnum.ApplicationPreset,
              icon: <Apps />,
              onClick: () => {
                dispatch(
                  dashboardModuleSet(DashboardModuleEnum.ApplicationPreset)
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
          {[
            {
              text: "Download",
              icon: <GetApp />,
              onClick: () => {},
            },
            {
              text: "Share",
              icon: <Share />,
              onClick: () => {},
            },
          ].map(({ text, icon, onClick }, index) => (
            <ListItem button key={index} onClick={() => onClick()}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
  };
