import {
  PolicyEditorAction,
  PolicyEditorReducerHandler,
  PolicyEditorState,
} from "../policy-editor.types";
import { Draft } from "immer";

export const policyEditorPageSetHandler: PolicyEditorReducerHandler = (
  currentState: Draft<PolicyEditorState>,
  action: PolicyEditorAction
) => {
  if (action.currentPage === undefined || action.currentTab === undefined)
    return currentState;

  currentState.currentTab = action.currentTab;
  currentState.currentPage = action.currentPage;

  return currentState;
};
