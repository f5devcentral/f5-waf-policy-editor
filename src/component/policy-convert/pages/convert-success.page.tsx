import React, { useRef, useState } from "react";
import { usePolicyConvertState } from "../../../store/policy-convert/policy-convert.hooks";
import { ToolbarPageControl } from "../../policy-editor/controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../../policy-editor/controls/page-controls/toolbar-button.page-control";
import { ExpandMore } from "@mui/icons-material";
import { Box, Menu, MenuItem, TableCell, TableRow } from "@mui/material";
import { useStyles } from "../../../utils/styles.hook";
import { ContentPageControl } from "../../policy-editor/controls/page-controls/content.page-control";
import {
  OperationResultBoxControl,
  OperationResultBoxIcon,
} from "../../controls/operation-result-box.control";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { withStyles } from "@mui/styles";
import { styled } from "@mui/system";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import { KeyParsingResultEnum } from "../../../converter/model/key-parsing-result.enum";
import { ReactComponent as DownloadIcon } from "../../../resources/toolbar/download.svg";
import { ReportFilterPolicyConvertControl } from "../controls/report-filter.policy-convert.control";

const TableHeadCell = withStyles({
  root: {
    backgroundColor: "#F7F8FA",
    height: "48px",
    padding: "8px",
    fontSize: "12px",
    lineHeight: "18px",
  },
})(TableCell);

const TableBodyCell = withStyles({
  root: {
    paddingLeft: "8px",
    paddingRight: "8px",
  },
})(TableCell);

const TableExportedCell = withStyles({
  root: {
    textAlign: "center",
    paddingTop: "8px",
  },
})(TableCell);

const ItemTitle = styled("div")({
  fontSize: "12px",
  lineHeight: "20px",
});
const ItemText = styled("div")({
  textTransform: "capitalize",
  fontSize: "12px",
  color: "#6C778C",
});

export const ConvertSuccessPage: React.VoidFunctionComponent = () => {
  const { log } = usePolicyConvertState();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const btnRef = useRef<null | HTMLDivElement>(null);

  const [filterState, setFilterState] = useState<{ [key: string]: boolean }>({
    [KeyParsingResultEnum.notSupported]: true,
    [KeyParsingResultEnum.success]: true,
    [KeyParsingResultEnum.partially]: true,
  });

  const onDownloadReport = () => {
    const link = document.createElement("a");
    link.download = `full-report.pdf`;
    link.href = "/convert/rsc/convert-result.pdf";
    link.click();
  };

  const filteredLogData = !log?.data
    ? undefined
    : log?.data().filter((s) => filterState[s.keyParsingResultEnum]);

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Convert Policy">
        <div ref={btnRef}>
          <ToolbarButtonPageControl
            variant="contained"
            color="primary"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            startIcon={<DownloadIcon style={{ width: "15px" }} />}
            endIcon={<ExpandMore />}
          >
            Download
          </ToolbarButtonPageControl>
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => {
            setAnchorEl(null);
          }}
        >
          <MenuItem>Postman File</MenuItem>
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              onDownloadReport();
            }}
          >
            Full Report
          </MenuItem>
        </Menu>
      </ToolbarPageControl>
      <ContentPageControl>
        <OperationResultBoxControl
          icon={OperationResultBoxIcon.success}
          header="Export is successfully completed!"
          text="The conversion file and full report is available for download"
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
          Report Summary
        </Typography>
        <Typography
          sx={{
            marginLeft: "24px",
            fontSize: "14px",
            lineHeight: "26px",
          }}
        >
          A full report is available for download
        </Typography>
        <ReportFilterPolicyConvertControl
          filterToggle={(f, v) => {
            filterState[f] = v;
            setFilterState({ ...filterState });
          }}
        />
        <Paper
          elevation={3}
          style={{
            marginLeft: "24px",
            marginTop: "12px",
            marginRight: "4px",
            height: "calc(100% - 200px)",
            overflowY: "scroll",
            minHeight: "180px",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableHeadCell>Exported</TableHeadCell>
              <TableHeadCell>Item</TableHeadCell>
              <TableHeadCell>Description</TableHeadCell>
              <TableHeadCell>Date & Time</TableHeadCell>
            </TableHead>
            <TableBody>
              {!filteredLogData
                ? undefined
                : filteredLogData.map((x) => (
                    <TableRow>
                      <TableExportedCell>
                        {(() => {
                          switch (true) {
                            case x.keyParsingResultEnum ===
                              KeyParsingResultEnum.success:
                              return (
                                <CheckCircleIcon sx={{ color: "#35D068" }} />
                              );
                            case x.keyParsingResultEnum ===
                              KeyParsingResultEnum.partially:
                              return (
                                <RemoveCircleIcon sx={{ color: "#FFBE5C" }} />
                              );
                            case x.keyParsingResultEnum ===
                              KeyParsingResultEnum.error:
                            case x.keyParsingResultEnum ===
                              KeyParsingResultEnum.notSupported:
                              return <ErrorIcon sx={{ color: "#F94627" }} />;
                            case x.keyParsingResultEnum ===
                              KeyParsingResultEnum.comingSoon:
                              return <UpcomingIcon sx={{ color: "#4152B4" }} />;
                            default:
                              return undefined;
                          }
                        })()}
                      </TableExportedCell>
                      <TableBodyCell>
                        <ItemTitle>{x.policyKeyPath}</ItemTitle>
                        <ItemText>{x.keyParsingResultEnum}</ItemText>
                      </TableBodyCell>
                      <TableBodyCell>
                        <ItemTitle>{x.data}</ItemTitle>
                        <ItemText>&nbsp;</ItemText>
                      </TableBodyCell>
                      <TableBodyCell>
                        <ItemTitle>
                          {x.timestamp.toLocaleDateString()}
                        </ItemTitle>
                        <ItemText>{x.timestamp.toLocaleTimeString()}</ItemText>
                      </TableBodyCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Paper>
      </ContentPageControl>
    </Box>
  );
};
