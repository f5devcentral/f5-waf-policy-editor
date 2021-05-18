import {
  PolicyEditorAction,
  PolicyEditorPageEnum,
  PolicyEditorState,
} from "./policy-editor.types";
import { ReducerBase } from "../reducer.base";
import {
  POLICY_EDITOR_JSON_FIELD_UPDATE,
  POLICY_EDITOR_JSON_TEXT_SET,
  POLICY_EDITOR_PAGE_SET,
} from "../action-types";
import { policyEditorPageSetHandler } from "./handler/policyeditor-page-set.handler";
import { policyEditorJsonTextSetHandler } from "./handler/policyeditor-jsontext-set.handler";
import { policyEditorJsonFieldUpdateHandler } from "./handler/policyeditor-jsonfield-update.handler";

export function policyEditorStateInit(): PolicyEditorState {
  return {
    jsonParseError: false,
    currentPage: PolicyEditorPageEnum.GeneralSettings,
    jsonCurrentPolicy: {
      policy: {
        name: "policy_name",
        template: {
          name: "POLICY_TEMPLATE_NGINX_BASE",
        },
        applicationLanguage: "utf-8",
        enforcementMode: "blocking",
      },
    },
    strCurrentPolicy: JSON.stringify(
      {
        policy: {
          name: "policy_name",
          template: {
            name: "POLICY_TEMPLATE_NGINX_BASE",
          },
          applicationLanguage: "utf-8",
          enforcementMode: "blocking",
        },
      },
      null,
      2
    ),
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
      [POLICY_EDITOR_JSON_FIELD_UPDATE]: policyEditorJsonFieldUpdateHandler,
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
