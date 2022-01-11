import {
  PolicyEditorAction,
  PolicyEditorReducerHandler,
  PolicyEditorState,
} from "../policy-editor.types";
import { Draft } from "immer";
import { PolicyValidator } from "../../../model/json-validate/policy.validator";
import { objectCollapseUtil } from "../../../utils/object-collapse.util";
import { merge as _merge } from "lodash";
import defaultPolicy from "../../../model/nginx-const/defaut-policy.nginx.json";

export const policyEditorJsonVisitHandler: PolicyEditorReducerHandler = (
  currentState: Draft<PolicyEditorState>,
  action: PolicyEditorAction
) => {
  if (action.visitor === undefined) return currentState;

  action.visitor(currentState.jsonCurrentPolicy);
  objectCollapseUtil(currentState.jsonCurrentPolicy);

  currentState.strCurrentPolicy = JSON.stringify(
    currentState.jsonCurrentPolicy,
    null,
    2
  );
  const fullPolicy = _merge({}, defaultPolicy, currentState.jsonCurrentPolicy);
  currentState.strFullCurrentPolicy = JSON.stringify(fullPolicy, null, 2);

  const policyValidator = new PolicyValidator();
  currentState.jsonValidationErrors = policyValidator.validate(
    currentState.jsonCurrentPolicy.policy
  );

  return currentState;
};
