import {
  PolicyEditorAction,
  PolicyEditorPageEnum,
  PolicyEditorState,
} from "./policy-editor.types";
import { ReducerBase } from "../reducer.base";
import {
  POLICY_EDITOR_JSON_TEXT_SET,
  POLICY_EDITOR_JSON_VISIT,
  POLICY_EDITOR_PAGE_SET,
} from "../action-types";
import { policyEditorPageSetHandler } from "./handler/policyeditor-page-set.handler";
import { policyEditorJsonTextSetHandler } from "./handler/policyeditor-jsontext-set.handler";
import { defaultGeneralSettings } from "../../model/policy-editor.defaults.model";
import { policyEditorJsonVisitHandler } from "./handler/policyeditor-json-visit.handler";

export function policyEditorStateInit(): PolicyEditorState {
  return {
    jsonParseError: false,
    currentPage: PolicyEditorPageEnum.GeneralSettings,
    jsonCurrentPolicy: defaultGeneralSettings(),
    strCurrentPolicy: JSON.stringify(defaultGeneralSettings(), null, 2),
  };
}

class PolicyEditorReducerHandlerFactory extends ReducerBase<
  PolicyEditorAction,
  PolicyEditorState
> {
  constructor(state: PolicyEditorState) {
    super(state, {
      [POLICY_EDITOR_PAGE_SET]: policyEditorPageSetHandler,
      [POLICY_EDITOR_JSON_TEXT_SET]: policyEditorJsonTextSetHandler,
      [POLICY_EDITOR_JSON_VISIT]: policyEditorJsonVisitHandler,
    });
  }
}

export const PolicyEditorReducer = (
  state: PolicyEditorState = policyEditorStateInit(),
  action: PolicyEditorAction
): PolicyEditorState => {
  const policyEditorReducerHandlerFactory =
    new PolicyEditorReducerHandlerFactory(state);

  return policyEditorReducerHandlerFactory.process(action);
};
