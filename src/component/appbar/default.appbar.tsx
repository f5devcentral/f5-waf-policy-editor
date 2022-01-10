import React from "react";
import { MainAppbarProps } from "../dashboard/main.appbar.component";
import Toolbar from "@mui/material/Toolbar";
import { useStyles } from "../../utils/styles.hook";

export const DefaultAppbar: React.FunctionComponent<MainAppbarProps> = ({
  open,
  onDrawerOpen,
}) => {
  const classes = useStyles();
  return <Toolbar className={classes.headerToolbar} />;
};
