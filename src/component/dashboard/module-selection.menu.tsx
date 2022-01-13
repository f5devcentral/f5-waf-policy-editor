import React from "react";
import { DashboardModuleEnum } from "../../store/dashboard/dashboard.types";
import { Apps, Assistant, Edit } from "@mui/icons-material";
import { dashboardModuleSet } from "../../store/dashboard/dashboard.actions";
import TransformIcon from "@mui/icons-material/Transform";

import {
  useDashboardDispatch,
  useDashboardState,
} from "../../store/dashboard/dashboard.hooks";
import {
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { withStyles } from "@mui/styles";

const MenuItemIcon = withStyles((theme: any) => ({
  root: {
    minWidth: "34px",
  },
}))(ListItemIcon);

export const ModuleSelectionMenu: React.VoidFunctionComponent = () => {
  const dispatch = useDashboardDispatch();
  const state = useDashboardState();

  return (
    <FormControl fullWidth>
      <Select
        inputProps={{
          sx: {
            padding: "8px",
          },
        }}
        value={state.currentModule}
        onChange={(e) => {
          dispatch(dashboardModuleSet(e.target.value as DashboardModuleEnum));
        }}
      >
        {[
          {
            text: "Convert Policy",
            id: DashboardModuleEnum.PolicyConvert,
            icon: <TransformIcon sx={{ minWidth: "32px" }} />,
          },
          {
            text: "Policy Editor",
            id: DashboardModuleEnum.PolicyEditor,
            icon: <Edit sx={{ minWidth: "32px" }} />,
          },
          {
            text: "Policy Wizard",
            id: DashboardModuleEnum.PolicyWizard,
            icon: <Assistant sx={{ minWidth: "32px" }} />,
          },
          {
            text: "Policy Templates",
            id: DashboardModuleEnum.PolicyTemplates,
            icon: <Apps sx={{ minWidth: "32px" }} />,
          },
        ].map(({ text, id, icon }, index) => (
          <MenuItem key={index} value={id}>
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <MenuItemIcon>{icon}</MenuItemIcon>
              <ListItemText
                primary={text}
                disableTypography={true}
                sx={{
                  fontSize: "18px",
                  lineHeight: "24px",
                  margin: "0px",
                }}
              />
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
