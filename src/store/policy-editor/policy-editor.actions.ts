import {
  PolicyEditorAction,
  PolicyEditorPageEnum,
} from "./policy-editor.types";
import {
  POLICY_EDITOR_JSON_FIELD_UPDATE,
  POLICY_EDITOR_JSON_TEXT_SET,
  POLICY_EDITOR_PAGE_SET,
} from "../action-types";

export function policyEditorPageSet(
  currentPage: PolicyEditorPageEnum
): Pick<PolicyEditorAction, "type" | "currentPage"> {
  return {
    type: POLICY_EDITOR_PAGE_SET,
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

export function policyEditorJsonFieldUpdate(
  updateVisitor: (currentJson: any) => void
): Pick<PolicyEditorAction, "type" | "updateVisitor"> {
  return {
    type: POLICY_EDITOR_JSON_FIELD_UPDATE,
    updateVisitor,
  };
}
