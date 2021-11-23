import withStyles from '@mui/styles/withStyles';
import { Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";

export type EditorTabProps = {
  label: JSX.Element;
  disabled?: boolean;
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
      fontWeight: (theme as any).typography.fontWeightRegular,
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
