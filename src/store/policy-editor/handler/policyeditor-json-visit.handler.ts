import {
  PolicyEditorAction,
  PolicyEditorReducerHandler,
  PolicyEditorState,
} from "../policy-editor.types";
import { Draft } from "immer";
import { PolicyValidator } from "../../../model/json-validate/policy.validator";

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

  const policyValidator = new PolicyValidator();
  currentState.jsonValidationErrors = policyValidator.validate(
    currentState.jsonCurrentPolicy.policy
  );

  return currentState;
};
