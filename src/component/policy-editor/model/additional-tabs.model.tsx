import { PolicyEditorPageInfo } from "./policy-editor.tabs.model";
import { PolicyEditorPageEnum } from "../../../store/policy-editor/policy-editor.types";

export type AdditionalTabsModel = {
  tree: PolicyEditorPageInfo[];
  id: PolicyEditorPageEnum;
};
