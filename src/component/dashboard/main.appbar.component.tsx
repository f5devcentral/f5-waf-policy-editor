import * as React from "react";
import { PolicyWizardAppbar } from "../appbar/policy-wizard.appbar";
import { useDashboardState } from "../../store/dashboard/dashboard.hooks";
import { DashboardModuleEnum } from "../../store/dashboard/dashboard.types";
import { DefaultAppbar } from "../appbar/default.appbar";

export type MainAppbarProps = Readonly<{
  open: boolean;
  onDrawerOpen: any;
}>;

export const MainAppbarComponent: React.FunctionComponent<MainAppbarProps> = ({
  open,
  onDrawerOpen,
}) => {
  const { currentModule } = useDashboardState();
  switch (currentModule) {
    case DashboardModuleEnum.PolicyEditor:
      return <PolicyWizardAppbar open={open} onDrawerOpen={onDrawerOpen} />;
    default:
      return <DefaultAppbar open={open} onDrawerOpen={onDrawerOpen} />;
  }
};
