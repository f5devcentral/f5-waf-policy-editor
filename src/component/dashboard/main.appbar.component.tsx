import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { useStyles } from "../../utils/styles.hook";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetApp from "@material-ui/icons/GetApp";
import Share from "@material-ui/icons/Share";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../store/policy-editor/policy-editor.hooks";

import { ReactComponent as IconCloudFormation } from "../../resources/toolbar/AWS-CloudFormation.svg";
import { download } from "../../utils/download.util";
import { Switch } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { policyEditorShowDefaultPolicySet } from "../../store/policy-editor/policy-editor.actions";

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
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap className={classes.title}>
        WAFFLER. WAF Policy Editor
        <IconButton
          color="inherit"
          href="https://github.com/464d41/f5-waf-policy-editor"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Typography>
      <IconButton
        color="inherit"
        href="https://github.com/464d41/aws-waf-solutuon-template"
        target="_blank"
        rel="noreferrer"
      >
        <IconCloudFormation />
      </IconButton>
      <IconButton color="inherit" onClick={handleDownload}>
        <GetApp />
      </IconButton>
      <IconButton color="inherit" disabled={true}>
        <Share />
      </IconButton>
    </Toolbar>
  );
};
