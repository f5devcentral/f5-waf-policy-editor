import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

const drawerWidth = 235;

export const useStyles = makeStyles(
  (theme) => {
    return createStyles({
      root: {
        display: "flex",
      },
      title: {
        flexGrow: 1,
      },
      appBar: {
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      footer: {
        top: "auto",
        bottom: "0px",
        textAlign: "center",
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: "none !important",
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
      },
      content: {
        overflow: "scroll",
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        maxWidth: "100vw",
        //        maxHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        minWidth: "720px",
      },
      contentShift: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        maxWidth: `calc(100vw - ${drawerWidth}px)`,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
      nested2: {
        paddingLeft: theme.spacing(8),
      },
      ellipsis: {
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      sectionButtons: {
        margin: theme.spacing(2),
      },
      hidden: {
        display: "none",
      },
      pageContent: {
        padding: theme.spacing(1),
      },
    });
  },
  { index: 1 }
);
