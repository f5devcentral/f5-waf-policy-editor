import { combineReducers, Reducer } from "redux";
import { DashboardState } from "./dashboard/dashboard.types";
import {
  DashboardReducer,
  dashboardStateInit,
} from "./dashboard/dashboard.reducer";

export interface ApplicationState {
  dashboardState: DashboardState;
}

export const ApplicationReducers: Reducer<ApplicationState> =
  combineReducers<ApplicationState>({
    dashboardState: DashboardReducer,
  });

export function DefaultApplicationState(): ApplicationState {
  return {
    dashboardState: dashboardStateInit(),
  };
}
