import {
  DashboardAction,
  DashboardReducerHandler,
  DashboardState,
} from "../dashboard.types";
import { Draft } from "immer";

export const dashboardModuleSetHandler: DashboardReducerHandler = (
  currentState: Draft<DashboardState>,
  action: DashboardAction
) => {
  if (action.currentModule === undefined) return currentState;

  currentState.currentModule = action.currentModule;

  return currentState;
};
