import {
  PolicyEditorAction,
  PolicyEditorPageEnum,
} from "./policy-editor.types";
import {
  POLICY_EDITOR_JSON_SRC_SET,
  POLICY_EDITOR_JSON_TEXT_SET,
  POLICY_EDITOR_JSON_VISIT,
  POLICY_EDITOR_PAGE_SET,
  POLICY_EDITOR_UI_SHOW_DEFAULT_POLICY_SET,
} from "../action-types";

export function policyEditorPageSet(
  currentTab: number,
  currentPage: PolicyEditorPageEnum
): Pick<PolicyEditorAction, "type" | "currentTab" | "currentPage"> {
  return {
    type: POLICY_EDITOR_PAGE_SET,
    currentTab,
    currentPage,
  };
}

export function policyEditorJsonTextSet(
  strPolicy: string
): Pick<PolicyEditorAction, "type" | "strPolicy"> {
  return {
    type: POLICY_EDITOR_JSON_TEXT_SET,
    strPolicy,
  };
}

export function policyEditorJsonVisit(
  visitor: (currentJson: any) => void
): Pick<PolicyEditorAction, "type" | "visitor"> {
  return {
    type: POLICY_EDITOR_JSON_VISIT,
    visitor,
  };
}

export function policyEditorJsonSrcSet(
  url: string,
  text: string
): Pick<PolicyEditorAction, "type" | "policySrcUrl" | "strPolicy"> {
  return {
    type: POLICY_EDITOR_JSON_SRC_SET,
    policySrcUrl: url,
    strPolicy: text,
  };
}

export function policyEditorShowDefaultPolicySet(
  show: boolean
): Pick<PolicyEditorAction, "type" | "showDefaultPolicy"> {
  return {
    type: POLICY_EDITOR_UI_SHOW_DEFAULT_POLICY_SET,
    showDefaultPolicy: show,
  };
}
