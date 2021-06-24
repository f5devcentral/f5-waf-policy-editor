import {
  PolicyEditorAction,
  PolicyEditorReducerHandler,
  PolicyEditorState,
} from "../policy-editor.types";
import { Draft } from "immer";

import { PolicyValidator } from "../../../model/json-validate/policy.validator";

export const policyEditorJsonTextSetHandler: PolicyEditorReducerHandler = (
  currentState: Draft<PolicyEditorState>,
  action: PolicyEditorAction
) => {
  if (action.strPolicy === undefined || action.strPolicy === "")
    return currentState;

  currentState.strCurrentPolicy = action.strPolicy;

  try {
    currentState.jsonCurrentPolicy = JSON.parse(action.strPolicy);
    currentState.jsonParseError = false;

    const policyValidator = new PolicyValidator();
    currentState.jsonValidationErrors = policyValidator.validate(
      currentState.jsonCurrentPolicy.policy
    );
  } catch (e) {
    currentState.jsonParseError = true;
  }

  return currentState;
};
