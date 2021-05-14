import { DashboardDispatch, DashboardState } from "./dashboard.types";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../index";

export const useDashboardDispatch = () => useDispatch<DashboardDispatch>();
export const useDashboardState: () => DashboardState = () =>
  useSelector((state: ApplicationState) => state.dashboardState);
