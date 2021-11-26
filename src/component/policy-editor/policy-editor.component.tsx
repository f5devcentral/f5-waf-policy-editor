import * as React from "react";
import Box from "@mui/material/Box";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../store/policy-editor/policy-editor.hooks";
import { policyEditorJsonTextSet } from "../../store/policy-editor/policy-editor.actions";
import { PolicyEditorPageFactory } from "./controls/policy-editor.page.factory";
import { CurrentPolicyControl } from "./controls/curren-policy.control";
import Paper from "@mui/material/Paper";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";

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

const EditorPage = withStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
)(Box);

export const PolicyEditorComponent: React.VoidFunctionComponent = () => {
  const { currentPage, strCurrentPolicy, jsonParseError } =
    usePolicyEditorState();

  const dispatch = usePolicyEditorDispatch();
  const pageFactory = new PolicyEditorPageFactory();

  return (
    <React.Fragment>
      <EditorPage>
        <CurrentPageContainer>
          {pageFactory.createPage(currentPage)}
          {jsonParseError && <ParseErrorOverlay />}
        </CurrentPageContainer>
        <JsonEditorContainer>
          <CurrentPolicyControl
            jsonText={strCurrentPolicy}
            onTextChange={(text) => dispatch(policyEditorJsonTextSet(text))}
          />
        </JsonEditorContainer>
      </EditorPage>
    </React.Fragment>
  );
};
