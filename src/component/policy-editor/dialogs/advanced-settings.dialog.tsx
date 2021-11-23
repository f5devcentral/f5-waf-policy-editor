import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import Box from "@mui/material/Box";
import { useStyles } from "../../../utils/styles.hook";
import Grid from "@mui/material/Grid";

export type AdvancedSettingsDialogProps = {
  open: boolean;
  title: string;
  handleClose: () => void;
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
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
