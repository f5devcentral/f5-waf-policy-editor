import withStyles from "@material-ui/core/styles/withStyles";
import { createStyles, Theme } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import * as React from "react";

export type EditorTabProps = {
  label: JSX.Element;
};

export const EditorTabsControl = withStyles((theme) =>
  createStyles({
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    indicator: {
      backgroundColor: theme.palette.primary.main,
    },
  })
)(Tabs);

export const EditorTabControl = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      "&:hover": {
        color: theme.palette.primary.main,
        opacity: 1,
      },
      "&$selected": {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&:focus": {
        color: theme.palette.primary.main,
      },
    },
    selected: {},
  })
)((props: EditorTabProps) => <Tab {...props} />);
