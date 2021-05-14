import {
  PolicyEditorAction,
  PolicyEditorPageEnum,
} from "./policy-editor.types";
import { POLICY_EDITOR_PAGE_SET } from "../action-types";

export function policyEditorPageSet(
  currentPage: PolicyEditorPageEnum
): Pick<PolicyEditorAction, "type" | "currentPage"> {
  return {
    type: POLICY_EDITOR_PAGE_SET,
    currentPage,
  };
}
