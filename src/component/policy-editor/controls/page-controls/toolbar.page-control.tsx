import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

export type ToolbarPageControlProps = {
  headerText: string;
};

export const ToolbarPageControl: React.FunctionComponent<ToolbarPageControlProps> =
  ({ headerText, children }) => {
    return (
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar variant="dense">
          <Typography
            style={{
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {headerText}
          </Typography>
          <div style={{ textAlign: "right", width: "100%" }}>{children}</div>
        </Toolbar>
      </AppBar>
    );
  };
