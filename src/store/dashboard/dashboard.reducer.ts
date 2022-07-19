import {
  DashboardAction,
  DashboardModuleEnum,
  DashboardState,
} from "./dashboard.types";
import { ReducerBase } from "../reducer.base";
import { DASHBOARD_MODULE_SET } from "../action-types";
import { dashboardModuleSetHandler } from "./handler/dashboard-module-set.handler";

export function dashboardStateInit(): DashboardState {
  return {
    currentModule: DashboardModuleEnum.PolicyEditor,
  };
}

class DashboardReducerHandlerFactory extends ReducerBase<
  DashboardAction,
  DashboardState
> {
  constructor(state: DashboardState) {
    super(state, {
      [DASHBOARD_MODULE_SET]: dashboardModuleSetHandler,
    });
  }
}

export const DashboardReducer = (
  state: DashboardState = dashboardStateInit(),
  action: DashboardAction
): DashboardState => {
  const dashboardReducerHandlerFactory = new DashboardReducerHandlerFactory(
    state
  );
  return dashboardReducerHandlerFactory.process(action);
};
