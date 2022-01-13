import React from "react";
import Typography from "@mui/material/Typography";
import { ToolbarPageControl } from "../../policy-editor/controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../../policy-editor/controls/page-controls/toolbar-button.page-control";
import { ReactComponent as DownloadIcon } from "../../../resources/toolbar/download.svg";
import { ExpandMore } from "@mui/icons-material";
import { ContentPageControl } from "../../policy-editor/controls/page-controls/content.page-control";
import Paper from "@mui/material/Paper";
import { NoDataControl } from "../../policy-editor/controls/no-data.control";
import { Box } from "@mui/material";
import { useStyles } from "../../../utils/styles.hook";
import {
  OperationResultBoxControl,
  OperationResultBoxIcon,
} from "../../controls/operation-result-box.control";

export const ConvertProgressPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
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
          <OperationResultBoxControl
            icon={OperationResultBoxIcon.pending}
            header="Converting file"
            text="In progress..."
          />
          <Typography
            sx={{
              marginLeft: "24px",
              marginTop: "12px",
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: "bold",
            }}
          >
            Conversion Report
          </Typography>
          <Paper
            elevation={3}
            style={{ margin: "24px", height: "calc(100% - 150px)" }}
          >
            <NoDataControl text="To start, copy/paste your policy into the JSON section below and convert your policy" />
          </Paper>
        </ContentPageControl>
      </Box>
    </React.Fragment>
  );
};
