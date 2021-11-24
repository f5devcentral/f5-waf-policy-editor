import * as React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";

import { useState } from "react";
import { useStyles } from "../../utils/styles.hook";
import { MainSidebarComponent } from "./main.sidebar.component";
import { MainAppbarComponent } from "./main.appbar.component";
import { Box, Typography, withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

const CommunityVersionBox = withStyles((theme) => {
  return {
    root: {
      position: "absolute",
      bottom: "0px",
      left: "10px",
      borderRadius: "120px 120px 0px 0px",
      width: "180px",
      height: "120px",
      zIndex: 10000,
      backgroundColor: theme.palette.primary.main,
      layer: 4,
      color: "white",
      cursor: "pointer",
    },
  };
})(Box);

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
      <AppBar
        variant={"outlined"}
        position="fixed"
        className={clsx(classes.footer, classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{
          background: "#fafafa",
        }}
      >
        <CommunityVersionBox boxShadow={4}>
          <Box
            style={{
              position: "relative",
              top: "35%",
              textAlign: "center",
            }}
          >
            <a
              href="https://github.com/f5devcentral/f5-waf-policy-editor"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant={"h6"}>
                Community
                <br />
                Project
              </Typography>
            </a>
          </Box>
        </CommunityVersionBox>

        <Typography variant="caption" color="textSecondary">
          <IconButton
            color="inherit"
            href="https://github.com/f5devcentral/f5-waf-policy-editor"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </IconButton>
          Project's GitHub
        </Typography>
      </AppBar>
    </div>
  );
};
