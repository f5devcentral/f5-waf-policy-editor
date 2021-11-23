import * as React from "react";
import Box from "@mui/material/Box";
import {
  EditorTabControl,
  EditorTabsControl,
} from "./controls/policy-editor.tabs.control";
import { TabsTree } from "./model/policy-editor.tabs.model";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../store/policy-editor/policy-editor.hooks";
import {
  policyEditorJsonTextSet,
  policyEditorPageSet,
} from "../../store/policy-editor/policy-editor.actions";
import { PolicyEditorPageFactory } from "./controls/policy-editor.page.factory";
import { CurrentPolicyControl } from "./controls/curren-policy.control";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import GetApp from "@mui/icons-material/GetApp";
import { ReactComponent as IconCloudFormation } from "../../resources/toolbar/AWS-CloudFormation.svg";
import Share from "@mui/icons-material/Share";
import { download } from "../../utils/download.util";

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

const PolicyTools = withStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      paddingRight: "0px",
      height: theme.spacing(8),
      textAlign: "right",
    },
  })
)(Box);

export const PolicyEditorComponent: React.VoidFunctionComponent = () => {
  const { currentPage, strCurrentPolicy, jsonParseError, currentTab } =
    usePolicyEditorState();

  const dispatch = usePolicyEditorDispatch();
  const pageFactory = new PolicyEditorPageFactory();

  const handleDownload = () => {
    const date = new Date();

    download(`waf-${date.getTime()}.json`, strCurrentPolicy);
  };

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid
          xs={2}
          style={{
            minWidth: "168px",
          }}
        ></Grid>
        <Grid xs={10}>
          <EditorTabsControl
            variant="scrollable"
            scrollButtons="auto"
            value={currentTab}
            onChange={(e: any, tab: any) =>
              dispatch(policyEditorPageSet(tab, TabsTree[tab].id))
            }
          >
            {TabsTree.map(({ label, id, disabled }) => {
              return (
                <EditorTabControl label={label} key={id} disabled={disabled} />
              );
            })}
          </EditorTabsControl>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid container item spacing={1} xs={12}>
          <Grid container item spacing={1} xs={12}>
            <EditorPage>
              <CurrentPageContainer>
                {pageFactory.createPage(currentPage)}
                {jsonParseError && <ParseErrorOverlay />}
              </CurrentPageContainer>
              <JsonEditorContainer>
                <CurrentPolicyControl
                  jsonText={strCurrentPolicy}
                  onTextChange={(text) =>
                    dispatch(policyEditorJsonTextSet(text))
                  }
                />
              </JsonEditorContainer>
              <PolicyTools>
                <ButtonGroup>
                  <Button
                    startIcon={<IconCloudFormation />}
                    href="https://github.com/464d41/aws-waf-solutuon-template"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deploy
                  </Button>
                  <Button startIcon={<GetApp />} onClick={handleDownload}>
                    Download
                  </Button>
                  <Button disabled startIcon={<Share />}>
                    Share
                  </Button>
                </ButtonGroup>
              </PolicyTools>
            </EditorPage>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
