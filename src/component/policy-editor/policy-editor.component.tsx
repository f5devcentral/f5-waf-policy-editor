import * as React from "react";
import Box from "@material-ui/core/Box";
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
  policyEditorShowDefaultPolicySet,
} from "../../store/policy-editor/policy-editor.actions";
import { PolicyEditorPageFactory } from "./controls/policy-editor.page.factory";
import { CurrentPolicyControl } from "./controls/curren-policy.control";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, Switch, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import GetApp from "@material-ui/icons/GetApp";
import { ReactComponent as IconCloudFormation } from "../../resources/toolbar/AWS-CloudFormation.svg";
import Share from "@material-ui/icons/Share";
import { download } from "../../utils/download.util";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
  const {
    currentPage,
    strCurrentPolicy,
    jsonParseError,
    currentTab,
    showDefaultPolicy,
  } = usePolicyEditorState();

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
        >
          <Box
            style={{
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            <FormControlLabel
              labelPlacement="start"
              label="Default policy"
              control={
                <Switch
                  checked={showDefaultPolicy}
                  onChange={(e) => {
                    dispatch(
                      policyEditorShowDefaultPolicySet(e.target.checked)
                    );
                  }}
                  color="default"
                />
              }
            />
          </Box>
        </Grid>
        <Grid xs={10}>
          <EditorTabsControl
            variant="scrollable"
            scrollButtons="auto"
            value={currentTab}
            onChange={(e, tab) =>
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
                    href="https://github.com/f5devcentral/aws-waf-solutuon-template"
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
