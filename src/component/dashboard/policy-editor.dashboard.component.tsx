import * as React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";

import { useState } from "react";
import { useStyles } from "../../utils/styles.hook";
import { MainSidebarComponent } from "./main.sidebar.component";
import { MainAppbarComponent } from "./main.appbar.component";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

export const PolicyEditorDashboardComponent: React.FunctionComponent = ({
  children,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onDrawerOpen = () => {
    setOpen(true);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <MainAppbarComponent onDrawerOpen={onDrawerOpen} open={open} />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <MainSidebarComponent onDrawerClose={onDrawerClose} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};
