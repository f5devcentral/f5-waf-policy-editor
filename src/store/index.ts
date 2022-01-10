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
import {
  PolicyConvertReducer,
  policyConvertStateInit,
} from "./policy-convert/policy-convert.reducer";
import { PolicyConvertState } from "./policy-convert/policy-convert.types";

export interface ApplicationState {
  dashboardState: DashboardState;
  policyEditorState: PolicyEditorState;
  policyConvertState: PolicyConvertState;
}

export const ApplicationReducers: Reducer<ApplicationState> =
  combineReducers<ApplicationState>({
    dashboardState: DashboardReducer,
    policyEditorState: PolicyEditorReducer,
    policyConvertState: PolicyConvertReducer,
  });

export function DefaultApplicationState(): ApplicationState {
  return {
    dashboardState: dashboardStateInit(),
    policyEditorState: policyEditorStateInit(),
    policyConvertState: policyConvertStateInit(),
  };
}
