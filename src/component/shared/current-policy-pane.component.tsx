import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { ReactComponent as DeployIcon } from "../../resources/toolbar/deploy.svg";
import { ReactComponent as DownloadIcon } from "../../resources/toolbar/download.svg";
import { CurrentPolicyControl } from "./curren-policy.control";
import { policyEditorJsonTextSet } from "../../store/policy-editor/policy-editor.actions";
import withStyles from "@mui/styles/withStyles";
import createStyles from "@mui/styles/createStyles";
import Paper from "@mui/material/Paper";
import { download } from "../../utils/download.util";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../store/policy-editor/policy-editor.hooks";

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

export type CurrentPolicyPaneProps = {
  title: string;
  fullPolicy: boolean;
};

export const CurrentPolicyPaneComponent: React.FunctionComponent<CurrentPolicyPaneProps> =
  ({ title, fullPolicy }) => {
    const { strCurrentPolicy, strFullCurrentPolicy } = usePolicyEditorState();
    const dispatch = usePolicyEditorDispatch();

    const handleDownload = () => {
      const date = new Date();

      download(`waf-${date.getTime()}.json`, strCurrentPolicy);
    };

    return (
      <React.Fragment>
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
                width: "100%",
              }}
            >
              {title}
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
            readOnly={fullPolicy}
            jsonText={fullPolicy ? strFullCurrentPolicy : strCurrentPolicy}
            onTextChange={(text) => dispatch(policyEditorJsonTextSet(text))}
          />
        </JsonEditorContainer>
      </React.Fragment>
    );
  };
