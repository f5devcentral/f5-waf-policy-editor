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
import { useState } from "react";

const JsonEditorContainer = withStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
)(Paper);

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

  return (
    <React.Fragment>
      <div className={styles.editorContainer}>
        <SplitPane
          defaultSize={500}
          maxSize={800}
          split="horizontal"
          onChange={(newSize) => {
            setPageHeight(newSize);
          }}
        >
          <Pane style={{ overflow: "scroll" }}>
            <CurrentPageContainer>
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
