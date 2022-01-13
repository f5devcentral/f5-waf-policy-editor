import React from "react";
import { MainAppbarProps } from "../../dashboard/main.appbar.component";
import { useStyles } from "../../../utils/styles.hook";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { LinearProgress } from "@mui/material";
import { usePolicyConvertState } from "../../../store/policy-convert/policy-convert.hooks";
import { PolicyConvertStageEnum } from "../../../store/policy-convert/policy-convert.types";

export const PolicyConvertAppbar: React.FunctionComponent<MainAppbarProps> = ({
  open,
  onDrawerOpen,
}) => {
  const classes = useStyles();
  const { convertPercentage, convertStage } = usePolicyConvertState();

  return (
    <React.Fragment>
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
            Convert Policy
          </Typography>
          <Typography className={classes.headerPage}>
            Translate policy to F5 Distributed Cloud WAF Service
          </Typography>
        </div>
      </Toolbar>
      {convertStage === PolicyConvertStageEnum.convertPending && (
        <LinearProgress variant="determinate" value={convertPercentage} />
      )}
    </React.Fragment>
  );
};
