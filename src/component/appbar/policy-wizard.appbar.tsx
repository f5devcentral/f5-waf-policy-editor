import React from "react";
import { useStyles } from "../../utils/styles.hook";
import { usePolicyEditorState } from "../../store/policy-editor/policy-editor.hooks";
import { PolicyEditorMenuPagesModel } from "../policy-editor/model/policy-editor.menu.pages.model";
import { PolicyEditorPageEnum } from "../../store/policy-editor/policy-editor.types";
import { download } from "../../utils/download.util";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { ReactComponent as LinkIcon } from "../../resources/toolbar/link.svg";
import { ReactComponent as DownloadIcon } from "../../resources/toolbar/download.svg";
import { ReactComponent as ShareIcon } from "../../resources/toolbar/share.svg";
import { MainAppbarProps } from "../dashboard/main.appbar.component";

export const PolicyWizardAppbar: React.FunctionComponent<MainAppbarProps> = ({
  open,
  onDrawerOpen,
}) => {
  const classes = useStyles();
  const { strCurrentPolicy, currentPage } = usePolicyEditorState();
  const menu = PolicyEditorMenuPagesModel;

  type PageInfo = {
    category: string;
    name: string;
  };

  const pageInfoById: (id: PolicyEditorPageEnum) => PageInfo = (id) => {
    let rValue: PageInfo = {
      category: "",
      name: "",
    };
    menu.some((c) => {
      return c.pages.some((p) => {
        if (p.id === id) {
          rValue = {
            category: c.label,
            name: p.label,
          };
          return true;
        }
        return false;
      });
    });

    return rValue;
  };

  const handleDownload = () => {
    const date = new Date();

    download(`waf-${date.getTime()}.json`, strCurrentPolicy);
  };

  const pageInfo: PageInfo = pageInfoById(currentPage);

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
          {pageInfo.category}
        </Typography>
        <Typography className={classes.headerPage}>{pageInfo.name}</Typography>
      </div>
      <IconButton
        color="inherit"
        href="https://github.com/464d41/aws-waf-solutuon-template"
        target="_blank"
        rel="noreferrer"
        size="large"
      >
        <LinkIcon />
      </IconButton>
      <IconButton color="inherit" onClick={handleDownload} size="large">
        <DownloadIcon />
      </IconButton>
      <IconButton color="inherit" disabled={true} size="large">
        <ShareIcon />
      </IconButton>
    </Toolbar>
  );
};
