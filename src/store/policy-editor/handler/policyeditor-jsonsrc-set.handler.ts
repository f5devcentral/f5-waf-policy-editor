import { PolicyEditorReducerHandler } from "../policy-editor.types";
import { merge as _merge } from "lodash";
import defaultPolicy from "../../../model/nginx-const/defaut-policy.nginx.json";

export const policyEditorJsonSrcSetHandler: PolicyEditorReducerHandler = (
  currentState,
  action
) => {
  if (action.strPolicy === undefined || action.policySrcUrl === undefined)
    return currentState;

  currentState.strCurrentPolicy = action.strPolicy;
  currentState.policySrcUrl = action.policySrcUrl;

  const fullPolicy = _merge({}, defaultPolicy, currentState.jsonCurrentPolicy);
  currentState.strFullCurrentPolicy = JSON.stringify(fullPolicy, null, 2);

  try {
    currentState.jsonCurrentPolicy = JSON.parse(action.strPolicy);
    currentState.jsonParseError = false;
  } catch (e) {
    currentState.jsonParseError = true;
  }

  return currentState;
};
