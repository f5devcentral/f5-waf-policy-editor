import {
  PolicyEditorAction,
  PolicyEditorReducerHandler,
  PolicyEditorState,
} from "../policy-editor.types";
import { Draft } from "immer";

export const policyEditorJsonFieldUpdateHandler: PolicyEditorReducerHandler = (
  currentState: Draft<PolicyEditorState>,
  action: PolicyEditorAction
) => {
  if (action.updateVisitor === undefined) return currentState;

  action.updateVisitor(currentState.jsonCurrentPolicy);

  currentState.strCurrentPolicy = JSON.stringify(
    currentState.jsonCurrentPolicy,
    null,
    2
  );

  return currentState;
};
