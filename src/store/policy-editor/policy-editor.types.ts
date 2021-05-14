import { Action } from "redux";
import { ReducerHandler } from "../reducer.base";

export enum PolicyEditorPageEnum {
  GeneralSettings,
  BlockingSettings,
  Methods,
  URLs,
  Filetypes,
  Headers,
  Parameters,
  Signatures,
  BotDefence,
}

export type PolicyEditorState = {
  currentPage: PolicyEditorPageEnum;
};

export interface PolicyEditorAction
  extends Action,
    Partial<{ currentPage: PolicyEditorPageEnum }> {}

export type PolicyEditorDispatch = (
  args: PolicyEditorAction
) => PolicyEditorAction;
export type PolicyEditorReducerHandler = ReducerHandler<
  PolicyEditorAction,
  PolicyEditorState
>;
