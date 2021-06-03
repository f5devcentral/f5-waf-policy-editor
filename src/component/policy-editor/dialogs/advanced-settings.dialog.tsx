import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { createStyles, withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useStyles } from "../../../utils/styles.hook";
import Grid from "@material-ui/core/Grid";

export type AdvancedSettingsDialogProps = {
  open: boolean;
  title: string;
  handleClose: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogAppBar = withStyles((theme) => {
  return createStyles({
    root: {
      position: "relative",
    },
  });
})(AppBar);

const DialogTitle = withStyles((theme) => {
  return createStyles({
    root: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  });
})(Typography);

export const AdvancedSettingsDialog: React.FunctionComponent<AdvancedSettingsDialogProps> =
  ({ open, title, handleClose, children }) => {
    const classes = useStyles();

    return (
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogAppBar>
          <Toolbar>
            <DialogTitle variant="h6">{title}</DialogTitle>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save & Close
            </Button>
          </Toolbar>
        </DialogAppBar>
        <Grid container spacing={1}>
          <Grid container item spacing={1} xs={12}>
            <Grid container item spacing={1} xs={2} />
            <Grid container item spacing={1} xs={8}>
              <Box className={classes.pageContent}>{children}</Box>
            </Grid>
            <Grid container item spacing={1} xs={2} />
          </Grid>
        </Grid>
      </Dialog>
    );
  };
