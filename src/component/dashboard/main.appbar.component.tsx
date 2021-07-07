import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { useStyles } from "../../utils/styles.hook";
import { Menu, MenuItem, Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { ExpandMore, GetApp, Share } from "@material-ui/icons";
import { usePolicyEditorState } from "../../store/policy-editor/policy-editor.hooks";
import GitHubIcon from "@material-ui/icons/GitHub";

import { ReactComponent as IconCloudFormation } from "../../resources/toolbar/AWS-CloudFormation.svg";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export type MainAppbarProps = Readonly<{
  open: boolean;
  onDrawerOpen: any;
}>;

function download(filename: string, text: string): void {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export const MainAppbarComponent: React.FunctionComponent<MainAppbarProps> = ({
  open,
  onDrawerOpen,
}) => {
  const classes = useStyles();
  const { strCurrentPolicy } = usePolicyEditorState();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDownload = () => {
    const date = new Date();

    download(`waf-${date.getTime()}.policy`, strCurrentPolicy);
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
      <Button
        color="inherit"
        variant="text"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        App Protect <ExpandMore />
      </Button>
      <IconButton
        color="inherit"
        href="https://github.com/464d41/aws-waf-solutuon-template"
        target="_blank"
        rel="noreferrer"
      >
        <IconCloudFormation />
      </IconButton>
      <IconButton color="inherit">
        <GetApp onClick={handleDownload} />
      </IconButton>
      <IconButton color="inherit" disabled={true}>
        <Share />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>App Protect</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)} disabled>
          Athena
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)} disabled>
          Advanced WAF
        </MenuItem>
      </Menu>
    </Toolbar>
  );
};
