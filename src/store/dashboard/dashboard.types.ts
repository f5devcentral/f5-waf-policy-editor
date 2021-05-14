import { Action } from "redux";
import { ReducerHandler } from "../reducer.base";

export enum DashboardModuleEnum {
  PolicyEditor,
  PolicyWizard,
  ApplicationPreset,
}

export type DashboardState = {
  currentModule: DashboardModuleEnum;
};

export interface DashboardAction
  extends Action,
    Partial<{ currentModule: DashboardModuleEnum }> {}

export type DashboardDispatch = (args: DashboardAction) => DashboardAction;
export type DashboardReducerHandler = ReducerHandler<
  DashboardAction,
  DashboardState
>;
