import { DashboardAction, DashboardModuleEnum } from "./dashboard.types";
import { DASHBOARD_MODULE_SET } from "../action-types";

export function dashboardModuleSet(
  currentModule: DashboardModuleEnum
): Pick<DashboardAction, "type" | "currentModule"> {
  return {
    type: DASHBOARD_MODULE_SET,
    currentModule,
  };
}
