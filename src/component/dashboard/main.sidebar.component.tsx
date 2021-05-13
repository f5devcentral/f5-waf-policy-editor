import * as React from "react";
import { useStyles } from "../../utils/styles.hook";
import { useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Business } from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";

export type MainSidebarProps = Readonly<{ onDrawerClose: any }>;

export const MainSidebarComponent: React.FunctionComponent<MainSidebarProps> =
  ({ onDrawerClose }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
      <React.Fragment>
        <div className={classes.drawerHeader}>
          <IconButton onClick={onDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            {
              text: "Policy Editor",
              icon: <Business />,
              onClick: () => {},
            },
            {
              text: "Policy Wizard",
              icon: <Business />,
              onClick: () => {},
            },
            {
              text: "Policy Presets",
              icon: <Business />,
              onClick: () => {},
            },
          ].map(({ text, icon, onClick }) => (
            <React.Fragment>
              <ListItem button key={text} onClick={() => onClick()}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Divider />
      </React.Fragment>
    );
  };
