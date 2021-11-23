import * as React from "react";
import clsx from "clsx";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";

import { useState } from "react";
import { useStyles } from "../../utils/styles.hook";
import { MainSidebarComponent } from "./main.sidebar.component";
import { MainAppbarComponent } from "./main.appbar.component";
import { Box, Typography } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

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
  const [open, setOpen] = useState(true);

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
            href="https://github.com/464d41/f5-waf-policy-editor"
            target="_blank"
            rel="noreferrer"
            size="large"
          >
            <GitHubIcon />
          </IconButton>
          Project's GitHub
        </Typography>
      </AppBar>
    </div>
  );
};
