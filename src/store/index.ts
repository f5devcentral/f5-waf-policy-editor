import { combineReducers, Reducer } from "redux";
import { DashboardState } from "./dashboard/dashboard.types";
import {
  DashboardReducer,
  dashboardStateInit,
} from "./dashboard/dashboard.reducer";
import { PolicyEditorState } from "./policy-editor/policy-editor.types";
import {
  PolicyEditorReducer,
  policyEditorStateInit,
} from "./policy-editor/policy-editor.reducer";

export interface ApplicationState {
  dashboardState: DashboardState;
  policyEditorState: PolicyEditorState;
}

export const ApplicationReducers: Reducer<ApplicationState> =
  combineReducers<ApplicationState>({
    dashboardState: DashboardReducer,
    policyEditorState: PolicyEditorReducer,
  });

export function DefaultApplicationState(): ApplicationState {
  return {
    dashboardState: dashboardStateInit(),
    policyEditorState: policyEditorStateInit(),
  };
}
