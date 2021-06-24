import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { useStyles } from "../../utils/styles.hook";
import { Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { GetApp, Share } from "@material-ui/icons";
import { usePolicyEditorState } from "../../store/policy-editor/policy-editor.hooks";

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
        WAF Policy Editor
      </Typography>
      <IconButton color="inherit">
        <GetApp onClick={handleDownload} />
      </IconButton>
      <IconButton color="inherit" disabled={true}>
        <Share />
      </IconButton>
    </Toolbar>
  );
};
