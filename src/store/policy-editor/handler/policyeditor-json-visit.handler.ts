import {
  PolicyEditorAction,
  PolicyEditorReducerHandler,
  PolicyEditorState,
} from "../policy-editor.types";
import { Draft } from "immer";

export const policyEditorJsonVisitHandler: PolicyEditorReducerHandler = (
  currentState: Draft<PolicyEditorState>,
  action: PolicyEditorAction
) => {
  if (action.visitor === undefined) return currentState;

  action.visitor(currentState.jsonCurrentPolicy);

  currentState.strCurrentPolicy = JSON.stringify(
    currentState.jsonCurrentPolicy,
    null,
    2
  );

  return currentState;
};
