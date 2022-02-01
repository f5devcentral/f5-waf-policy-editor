import {
  PolicyEditorAction,
  PolicyEditorReducerHandler,
  PolicyEditorState,
} from "../policy-editor.types";
import { Draft } from "immer";

export const policyEditorPolicyTypeSetHandler: PolicyEditorReducerHandler = (
  currentState: Draft<PolicyEditorState>,
  action: PolicyEditorAction
) => {
  if (!action.policyType) return currentState;

  currentState.policyType = action.policyType;

  return currentState;
};
