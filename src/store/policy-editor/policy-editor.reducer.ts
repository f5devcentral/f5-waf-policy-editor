import {
  PolicyEditorAction,
  PolicyEditorPageEnum,
  PolicyEditorState,
} from "./policy-editor.types";
import { ReducerBase } from "../reducer.base";
import { POLICY_EDITOR_PAGE_SET } from "../action-types";
import { policyEditorPageSetHandler } from "./handler/policyeditor-page-set.handler";

export function policyEditorStateInit(): PolicyEditorState {
  return {
    currentPage: PolicyEditorPageEnum.GeneralSettings,
    currentPolicy: {
      policy: {
        name: "policy_name",
        template: {
          name: "POLICY_TEMPLATE_NGINX_BASE",
        },
        applicationLanguage: "utf-8",
        enforcementMode: "blocking",
      },
    },
  };
}

class PolicyEditorReducerHandlerFactory extends ReducerBase<
  PolicyEditorAction,
  PolicyEditorState
> {
  constructor(state: PolicyEditorState) {
    super(state, {
      [POLICY_EDITOR_PAGE_SET]: policyEditorPageSetHandler,
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
