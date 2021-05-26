import {
  PolicyEditorAction,
  PolicyEditorPageEnum,
} from "./policy-editor.types";
import {
  POLICY_EDITOR_JSON_TEXT_SET,
  POLICY_EDITOR_JSON_VISIT,
  POLICY_EDITOR_PAGE_SET,
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
