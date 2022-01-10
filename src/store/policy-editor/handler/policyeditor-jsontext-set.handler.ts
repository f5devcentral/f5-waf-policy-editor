import {
  PolicyEditorAction,
  PolicyEditorReducerHandler,
  PolicyEditorState,
} from "../policy-editor.types";
import { Draft } from "immer";
import { PolicyValidator } from "../../../model/json-validate/policy.validator";
import { merge as _merge } from "lodash";
import defaultPolicy from "../../../model/nginx-const/defaut-policy.nginx.json";

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

    const fullPolicy = _merge(
      {},
      currentState.jsonCurrentPolicy,
      defaultPolicy
    );
    currentState.strFullCurrentPolicy = JSON.stringify(fullPolicy, null, 2);
  } catch (e) {
    currentState.jsonParseError = true;
  }

  return currentState;
};
