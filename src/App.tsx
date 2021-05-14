import React from "react";
import { PolicyEditorDashboardComponent } from "./component/dashboard/policy-editor.dashboard.component";
import { useDashboardState } from "./store/dashboard/dashboard.hooks";
import { DashboardModuleEnum } from "./store/dashboard/dashboard.types";
import { ApplicationPresetComponent } from "./component/application-preset/application-preset.component";
import { PolicyEditorComponent } from "./component/policy-editor/policy-editor.component";
import { PolicyWizardComponent } from "./component/policy-wizard/policy-wizard.component";

function App() {
  const { currentModule } = useDashboardState();

  const uiFactory: { [key: number]: JSX.Element } = {
    [DashboardModuleEnum.ApplicationPreset]: <ApplicationPresetComponent />,
    [DashboardModuleEnum.PolicyWizard]: <PolicyEditorComponent />,
    [DashboardModuleEnum.PolicyEditor]: <PolicyWizardComponent />,
  };

  return (
    <PolicyEditorDashboardComponent>
      {uiFactory[currentModule]}
    </PolicyEditorDashboardComponent>
  );
}

export default App;
