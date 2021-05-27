import React, { useEffect } from "react";
import { PolicyEditorDashboardComponent } from "./component/dashboard/policy-editor.dashboard.component";
import { useDashboardState } from "./store/dashboard/dashboard.hooks";
import { DashboardModuleEnum } from "./store/dashboard/dashboard.types";
import { ApplicationPresetComponent } from "./component/application-preset/application-preset.component";
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
import { Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { policyEditorJsonTextSet } from "./store/policy-editor/policy-editor.actions";
import { defaultGeneralSettings } from "./model/policy-editor.defaults.model";

type PolicyEditorParams = {};

const Dashboard: React.FunctionComponent<
  RouteComponentProps<PolicyEditorParams>
> = ({ match }) => {
  const { currentModule } = useDashboardState();
  const { strCurrentPolicy } = usePolicyEditorState();
  const dispatch = usePolicyEditorDispatch();
  const qs = queryString.parse(window.location.search);

  useEffect(() => {
    switch (true) {
      case qs.ref && strCurrentPolicy === "": {
        fetch({ url: qs.ref as string } as RequestInfo).then(async (x) => {
          const body = await x.text();
          dispatch(policyEditorJsonTextSet(body));
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
  }, [dispatch, qs.ref, strCurrentPolicy]);

  if (qs.ref && strCurrentPolicy === "") {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  const uiFactory: { [key: number]: JSX.Element } = {
    [DashboardModuleEnum.ApplicationPreset]: <ApplicationPresetComponent />,
    [DashboardModuleEnum.PolicyEditor]: <PolicyEditorComponent />,
    [DashboardModuleEnum.PolicyWizard]: <PolicyWizardComponent />,
  };

  return (
    <PolicyEditorDashboardComponent>
      {uiFactory[currentModule]}
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
