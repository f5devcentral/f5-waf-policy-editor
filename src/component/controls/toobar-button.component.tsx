import withStyles from "@mui/styles/withStyles";
import { Button } from "@mui/material";

export const ToolbarButtonControl = withStyles(() => ({
  root: {
    marginLeft: "10px",
    height: "33px",
    fontSize: "14px",
    lineHeight: "20px",
    textTransform: "capitalize",
  },
}))(Button);
