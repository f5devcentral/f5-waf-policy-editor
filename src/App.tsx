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
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {
  policyEditorJsonSrcSet,
  policyEditorJsonTextSet,
} from "./store/policy-editor/policy-editor.actions";
import { defaultGeneralSettings } from "./model/policy-editor.defaults.model";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { PolicyEditorPreprocessorServices } from "./store/policy-editor/visitor/services/policy-editor-preprocessor.services";
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#4152B4",
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#4152B4",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "4px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: "0px",
          marginBottom: "0px",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          borderRadius: 16 / 2,
          boxSizing: "border-box",
        },
        thumb: {
          boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
          width: 12,
          height: 12,
          borderRadius: 6,
          margin: "4px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "12px",
          lineHeight: "18px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          height: "20px",
          padding: "6px",
          fontsize: "12px",
          lineHeight: "20px",
          margin: "0px",
        },
      },
    },
  },
});

type PolicyEditorParams = {};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Dashboard: React.VoidFunctionComponent = () => {
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
                JSON.stringify(defaultGeneralSettings(0), null, 2)
              )
            );
          });
        break;
      }
      case !qs.ref && strCurrentPolicy === "": {
        dispatch(
          policyEditorJsonTextSet(
            JSON.stringify(defaultGeneralSettings(0), null, 2)
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
    </PolicyEditorDashboardComponent>
  );
};

const DashboardThemeContainer: React.FunctionComponent<
  RouteComponentProps<PolicyEditorParams>
> = ({ match }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={DashboardThemeContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
