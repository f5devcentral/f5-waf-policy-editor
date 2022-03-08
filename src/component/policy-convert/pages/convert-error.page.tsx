import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { Box, Paper, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { ToolbarButtonPageControl } from "../../policy-editor/controls/page-controls/toolbar-button.page-control";
import { ToolbarPageControl } from "../../policy-editor/controls/page-controls/toolbar.page-control";
import { ReactComponent as DownloadIcon } from "../../../resources/toolbar/download.svg";
import { ContentPageControl } from "../../policy-editor/controls/page-controls/content.page-control";
import { usePolicyConvertState } from "../../../store/policy-convert/policy-convert.hooks";
import {
  OperationResultBoxControl,
  OperationResultBoxIcon,
} from "../../controls/operation-result-box.control";

export const ConvertErrorPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const { convertMessage } = usePolicyConvertState();
  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Convert Policy">
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
          icon={OperationResultBoxIcon.failed}
          header="Export error"
          text="The conversion failed"
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
          Error Summary
        </Typography>
        <Paper
          elevation={3}
          style={{
            margin: "24px",
            height: "calc(100% - 200px)",
            minHeight: "180px",
            padding: "10px",
            overflow: "scroll"
          }}
        >
          {convertMessage}
        </Paper>
      </ContentPageControl>
    </Box>
  );
};
