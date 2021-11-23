import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { useStyles } from "../../utils/styles.hook";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import GetApp from "@mui/icons-material/GetApp";
import Share from "@mui/icons-material/Share";
import { usePolicyEditorState } from "../../store/policy-editor/policy-editor.hooks";

import { ReactComponent as IconCloudFormation } from "../../resources/toolbar/AWS-CloudFormation.svg";
import { download } from "../../utils/download.util";

export type MainAppbarProps = Readonly<{
  open: boolean;
  onDrawerOpen: any;
}>;

export const MainAppbarComponent: React.FunctionComponent<MainAppbarProps> = ({
  open,
  onDrawerOpen,
}) => {
  const classes = useStyles();
  const { strCurrentPolicy } = usePolicyEditorState();

  const handleDownload = () => {
    const date = new Date();

    download(`waf-${date.getTime()}.json`, strCurrentPolicy);
  };

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
        size="large">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap className={classes.title}>
        WAFFLER. WAF Policy Editor
        <IconButton
          color="inherit"
          href="https://github.com/464d41/f5-waf-policy-editor"
          target="_blank"
          rel="noreferrer"
          size="large">
          <GitHubIcon />
        </IconButton>
      </Typography>
      <IconButton
        color="inherit"
        href="https://github.com/464d41/aws-waf-solutuon-template"
        target="_blank"
        rel="noreferrer"
        size="large">
        <IconCloudFormation />
      </IconButton>
      <IconButton color="inherit" onClick={handleDownload} size="large">
        <GetApp />
      </IconButton>
      <IconButton color="inherit" disabled={true} size="large">
        <Share />
      </IconButton>
    </Toolbar>
  );
};
