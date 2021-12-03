import React from "react";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";

export type AdvancedSettingsDialogProps = {
  open: boolean;
  title: string;
  handleClose: () => void;
};

export const AdvancedSettingsDialog: React.FunctionComponent<AdvancedSettingsDialogProps> =
  ({ open, title, handleClose, children }) => {
    return (
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "30vw",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              fontSize: "18px",
              paddingLeft: "24px",
              paddingBottom: "24px",
            }}
          >
            <b>Edit {title}</b>
          </Box>
          <Box>{children}</Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "24px",
              right: "24px",
            }}
          >
            <ToolbarButtonPageControl variant="contained" onClick={handleClose}>
              Close
            </ToolbarButtonPageControl>
          </Box>
        </Box>
      </Drawer>
    );
  };
