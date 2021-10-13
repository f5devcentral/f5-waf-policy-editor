import { Draft } from "immer";
import {
  PolicyEditorAction,
  PolicyEditorReducerHandler,
  PolicyEditorState,
} from "../policy-editor.types";

export const policyEditorDefaultPolicySetHandler: PolicyEditorReducerHandler = (
  currentState: Draft<PolicyEditorState>,
  action: PolicyEditorAction
) => {
  currentState.showDefaultPolicy = action.showDefaultPolicy ?? false;

  return currentState;
};
