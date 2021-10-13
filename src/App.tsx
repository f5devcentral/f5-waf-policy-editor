import React, { useEffect, useState } from "react";
import { PolicyEditorDashboardComponent } from "./component/dashboard/policy-editor.dashboard.component";
import { useDashboardState } from "./store/dashboard/dashboard.hooks";
import { DashboardModuleEnum } from "./store/dashboard/dashboard.types";
import { PolicyTemplatesComponent } from "./component/application-preset/policy-templates.component";
import { PolicyEditorComponent } from "./component/policy-editor/policy-editor.component";
import { PolicyWizardComponent } from "./component/policy-wizard/policy-wizard.component";
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";

import queryString from "query-string";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "./store/policy-editor/policy-editor.hooks";
import { Box, withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  policyEditorJsonSrcSet,
  policyEditorJsonTextSet,
} from "./store/policy-editor/policy-editor.actions";
import { defaultGeneralSettings } from "./model/policy-editor.defaults.model";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { PolicyEditorPreprocessorServices } from "./store/policy-editor/visitor/services/policy-editor-preprocessor.services";
import Typography from "@material-ui/core/Typography";

type PolicyEditorParams = {};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CommunityVersionBox = withStyles((theme) => {
  return {
    root: {
      position: "absolute",
      bottom: "0px",
      left: "10px",
      borderRadius: "120px 120px 0px 0px",
      width: "180px",
      height: "120px",
      zIndex: 10000,
      backgroundColor: theme.palette.primary.main,
      layer: 4,
      color: "white",
      cursor: "pointer",
    },
  };
})(Box);

const Dashboard: React.FunctionComponent<
  RouteComponentProps<PolicyEditorParams>
> = ({ match }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const { currentModule } = useDashboardState();
  const {
    strCurrentPolicy,
    policySrcUrl,
    jsonValidationErrors,
    jsonParseError,
  } = usePolicyEditorState();
  const dispatch = usePolicyEditorDispatch();
  const qs = queryString.parse(window.location.search);

  const handleErrorClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorMessage("");
  };

  useEffect(() => {
    switch (true) {
      case qs.ref && strCurrentPolicy === "":
      case qs.ref && qs.ref !== "" && policySrcUrl !== qs.ref: {
        fetch(decodeURI(qs.ref as string))
          .then(async (x) => {
            const body = await x.text();

            const policyEditorPreprocessor =
              new PolicyEditorPreprocessorServices(body);

            dispatch(
              policyEditorJsonSrcSet(
                qs.ref as string,
                policyEditorPreprocessor.preprocess()
              )
            );
          })
          .catch((e) => {
            setErrorMessage(
              `Cannot get the policy by the link. The default policy will be used`
            );
            dispatch(
              policyEditorJsonSrcSet(
                qs.ref as string,
                JSON.stringify(defaultGeneralSettings(), null, 2)
              )
            );
          });
        break;
      }
      case !qs.ref && strCurrentPolicy === "": {
        dispatch(
          policyEditorJsonTextSet(
            JSON.stringify(defaultGeneralSettings(), null, 2)
          )
        );
        break;
      }
    }
  }, [dispatch, policySrcUrl, qs.ref, strCurrentPolicy]);

  if (
    (qs.ref && strCurrentPolicy === "") ||
    (qs.ref && qs.ref !== "" && policySrcUrl !== qs.ref)
  ) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  const uiFactory: { [key: number]: JSX.Element } = {
    [DashboardModuleEnum.PolicyTemplates]: <PolicyTemplatesComponent />,
    [DashboardModuleEnum.PolicyEditor]: <PolicyEditorComponent />,
    [DashboardModuleEnum.PolicyWizard]: <PolicyWizardComponent />,
  };

  return (
    <PolicyEditorDashboardComponent>
      <input
        type="hidden"
        id="errJsonParse"
        name="errJsonParse"
        value={jsonParseError.toString()}
      />
      <input
        type="hidden"
        id="errJsonValidation"
        name="errJsonValidation"
        value={JSON.stringify(jsonValidationErrors)}
      />
      {uiFactory[currentModule]}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={errorMessage !== ""}
        onClose={handleErrorClose}
        message={errorMessage}
      >
        <Alert onClose={handleErrorClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
      <CommunityVersionBox boxShadow={4}>
        <Box
          style={{
            position: "relative",
            top: "35%",
            textAlign: "center",
          }}
        >
          <a
            href="https://github.com/f5devcentral/f5-waf-policy-editor"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant={"h6"}>
              Community
              <br />
              Project
            </Typography>
          </a>
        </Box>
      </CommunityVersionBox>
    </PolicyEditorDashboardComponent>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
