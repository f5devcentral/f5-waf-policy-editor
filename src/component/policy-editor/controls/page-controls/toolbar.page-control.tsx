import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

export type ToolbarPageControlProps = {
  headerText: string;
  headerHelp?: string;
};

export const ToolbarPageControl: React.FunctionComponent<ToolbarPageControlProps> =
  ({ headerText, headerHelp, children }) => {
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
          <div>
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
            {headerHelp && (
              <Typography
                style={{
                  fontSize: "14px",
                  lineHeight: "26px",
                  whiteSpace: "nowrap",
                }}
              >
                {headerHelp}
              </Typography>
            )}
          </div>
          <div style={{ textAlign: "right", width: "100%" }}>{children}</div>
        </Toolbar>
      </AppBar>
    );
  };
