import * as React from "react";
import Box from "@mui/material/Box";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../store/policy-editor/policy-editor.hooks";
import { PolicyEditorPageFactory } from "./controls/policy-editor.page.factory";
import Paper from "@mui/material/Paper";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import SplitPane, { Pane } from "react-split-pane";
import { CurrentPolicyControl } from "./controls/curren-policy.control";
import { policyEditorJsonTextSet } from "../../store/policy-editor/policy-editor.actions";
import { useStyles } from "../../utils/styles.hook";
import { useEffect, useState } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

import ShareIcon from "@mui/icons-material/Share";
import { ReactComponent as DownloadIcon } from "../../resources/toolbar/download.svg";
import { ReactComponent as DeployIcon } from "../../resources/toolbar/deploy.svg";
import { download } from "../../utils/download.util";

const JsonEditorContainer = withStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
)(Paper);

const ToolbarButton = withStyles(() => ({
  root: {
    marginLeft: "10px",
    height: "33px",
    fontSize: "14px",
    lineHeight: "20px",
    textTransform: "capitalize",
  },
}))(Button);

const CurrentPageContainer = withStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  })
)(Box);

const ParseErrorOverlay = withStyles((theme) =>
  createStyles({
    root: {
      position: "absolute",
      backgroundColor: theme.palette.error.main,
      opacity: 0.5,
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      borderRadius: theme.shape.borderRadius,
      zIndex: 2,
    },
  })
)(Box);

export const PolicyEditorComponent: React.VoidFunctionComponent = () => {
  const { currentPage, strCurrentPolicy, jsonParseError } =
    usePolicyEditorState();

  const styles = useStyles();
  const dispatch = usePolicyEditorDispatch();
  const pageFactory = new PolicyEditorPageFactory();

  const [pageHeight, setPageHeight] = useState<number>(500);
  const [maxSize, setMaxSize] = useState<number>(window.innerHeight * 0.7);

  useEffect(() => {
    function handleResize() {
      setMaxSize(window.innerHeight * 0.7);
      setPageHeight(Math.min(window.innerHeight * 0.7, pageHeight));
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleDownload = () => {
    const date = new Date();

    download(`waf-${date.getTime()}.json`, strCurrentPolicy);
  };

  return (
    <React.Fragment>
      <div className={styles.editorContainer}>
        <SplitPane
          defaultSize={500}
          maxSize={maxSize}
          split="horizontal"
          onChange={(newSize) => {
            setPageHeight(newSize);
          }}
        >
          <Pane style={{ overflow: "scroll" }}>
            <CurrentPageContainer
              style={{
                height: "100%",
              }}
            >
              {pageFactory.createPage(currentPage)}
              {jsonParseError && <ParseErrorOverlay />}
            </CurrentPageContainer>
          </Pane>
          <Pane
            style={{
              height: `calc(100vh - 122px - ${pageHeight}px)`,
              overflow: "scroll",
            }}
          >
            <AppBar
              position="sticky"
              elevation={0}
              sx={{
                backgroundColor: "white",
                color: "black",
              }}
            >
              <Toolbar variant={"dense"}>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: "26px",
                    fontWeight: 600,
                  }}
                >
                  JSON
                </Typography>
                <div style={{ textAlign: "right", width: "100%" }}>
                  <ToolbarButton startIcon={<ShareIcon />} disabled={true}>
                    Share
                  </ToolbarButton>
                  <ToolbarButton
                    startIcon={<DeployIcon style={{ width: "15px" }} />}
                    variant="outlined"
                    href="https://github.com/f5devcentral/aws-waf-solution-template"
                  >
                    Deploy
                  </ToolbarButton>
                  <ToolbarButton
                    startIcon={<DownloadIcon style={{ width: "15px" }} />}
                    variant="contained"
                    onClick={handleDownload}
                  >
                    Download
                  </ToolbarButton>
                </div>
              </Toolbar>
            </AppBar>
            <JsonEditorContainer>
              <CurrentPolicyControl
                jsonText={strCurrentPolicy}
                onTextChange={(text) => dispatch(policyEditorJsonTextSet(text))}
              />
            </JsonEditorContainer>
          </Pane>
        </SplitPane>
      </div>
    </React.Fragment>
  );
};
