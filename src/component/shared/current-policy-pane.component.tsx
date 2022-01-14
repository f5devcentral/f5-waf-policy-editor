import React, { ReactElement } from "react";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CurrentPolicyControl } from "./curren-policy.control";
import { policyEditorJsonTextSet } from "../../store/policy-editor/policy-editor.actions";
import withStyles from "@mui/styles/withStyles";
import createStyles from "@mui/styles/createStyles";
import Paper from "@mui/material/Paper";
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

export type CurrentPolicyPaneProps = {
  title: string;
  fullPolicy: boolean;
  toolbarComponent: ReactElement;
};

export const CurrentPolicyPaneComponent: React.FunctionComponent<CurrentPolicyPaneProps> =
  ({ title, fullPolicy, toolbarComponent }) => {
    const { strCurrentPolicy } = usePolicyEditorState();
    const dispatch = usePolicyEditorDispatch();

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
            {toolbarComponent}
          </Toolbar>
        </AppBar>
        <JsonEditorContainer>
          <CurrentPolicyControl
            readOnly={false}
            jsonText={strCurrentPolicy}
            onTextChange={(text) => dispatch(policyEditorJsonTextSet(text))}
          />
        </JsonEditorContainer>
      </React.Fragment>
    );
  };
