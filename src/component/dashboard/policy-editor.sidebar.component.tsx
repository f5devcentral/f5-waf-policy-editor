import React from "react";
import { InputAdornment, Switch, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { policyEditorShowDefaultPolicySet } from "../../store/policy-editor/policy-editor.actions";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../store/policy-editor/policy-editor.hooks";

export const PolicyEditorSidebarComponent: React.VoidFunctionComponent = () => {
  const { showDefaultPolicy } = usePolicyEditorState();
  const dispatch = usePolicyEditorDispatch();

  return (
    <div
      style={{
        padding: "17px",
        paddingTop: "0px",
      }}
    >
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        placeholder="Search Menu"
        fullWidth={true}
      />

      <FormControlLabel
        labelPlacement="end"
        label="Apply policy template"
        control={
          <Switch
            checked={showDefaultPolicy}
            onChange={(e) => {
              dispatch(policyEditorShowDefaultPolicySet(e.target.checked));
            }}
          />
        }
      />
    </div>
  );
};
