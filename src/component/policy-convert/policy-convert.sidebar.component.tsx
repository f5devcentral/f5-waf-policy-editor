import React from "react";
import { Switch } from "@mui/material";
import { policyEditorShowDefaultPolicySet } from "../../store/policy-editor/policy-editor.actions";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../store/policy-editor/policy-editor.hooks";

export const PolicyConvertSidebarComponent: React.VoidFunctionComponent =
  () => {
    const { showDefaultPolicy } = usePolicyEditorState();
    const dispatch = usePolicyEditorDispatch();

    return (
      <React.Fragment>
        <div
          style={{
            paddingLeft: "17px",
            paddingRight: "17px",
            paddingTop: "0px",
          }}
        >
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
      </React.Fragment>
    );
  };
