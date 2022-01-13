import React from "react";
import { MainAppbarProps } from "../../dashboard/main.appbar.component";
import { useStyles } from "../../../utils/styles.hook";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { policyConvertStrategy } from "../../../store/policy-convert/strategy/policy-convert.strategy";
import { useDispatch } from "react-redux";

export const PolicyConvertAppbar: React.FunctionComponent<MainAppbarProps> = ({
  open,
  onDrawerOpen,
}) => {
  const classes = useStyles();
  const thunkDispatch = useDispatch();

  return (
    <Toolbar className={classes.headerToolbar}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <div style={{ width: "100%" }}>
        <Typography className={classes.headerCategory}>
          Policy Convert
        </Typography>
        <Typography className={classes.headerPage}>
          Policy Convert to Athena tool
        </Typography>
      </div>
      <IconButton
        color="inherit"
        size="large"
        onClick={() => {
          thunkDispatch(policyConvertStrategy());
        }}
      >
        <RestartAltIcon />
      </IconButton>
    </Toolbar>
  );
};
