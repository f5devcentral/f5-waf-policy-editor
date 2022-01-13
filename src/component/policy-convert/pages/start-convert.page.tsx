import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { Box } from "@mui/material";
import { ToolbarPageControl } from "../../policy-editor/controls/page-controls/toolbar.page-control";
import { ContentPageControl } from "../../policy-editor/controls/page-controls/content.page-control";
import Typography from "@mui/material/Typography";
import { ToolbarButtonPageControl } from "../../policy-editor/controls/page-controls/toolbar-button.page-control";
import { ExpandMore } from "@mui/icons-material";
import { ReactComponent as DownloadIcon } from "../../../resources/toolbar/download.svg";
import { NoDataControl } from "../../policy-editor/controls/no-data.control";
import Paper from "@mui/material/Paper";

export const StartConvertPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Policy Convert">
        <ToolbarButtonPageControl
          disabled
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon style={{ width: "15px" }} />}
          endIcon={<ExpandMore />}
        >
          Download
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <div
          style={{
            height: "60px",
          }}
        ></div>
        <Typography
          sx={{
            marginLeft: "24px",
            marginTop: "12px",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: "bold",
          }}
        >
          Report
        </Typography>
        <Paper
          elevation={3}
          style={{ margin: "24px", height: "calc(100% - 150px)" }}
        >
          <NoDataControl text="To start, copy/paste your policy into the JSON section below and convert your policy" />
        </Paper>
      </ContentPageControl>
    </Box>
  );
};
