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
  BotDefense,
}

export type PolicyEditorState = {
  currentTab: number;
  currentPage: PolicyEditorPageEnum;
  jsonCurrentPolicy: any;
  strCurrentPolicy: string;
  jsonParseError: boolean;
  policySrcUrl: string;
};

export interface PolicyEditorAction
  extends Action,
    Partial<{
      currentTab: number;
      currentPage: PolicyEditorPageEnum;
      strPolicy: string;
      visitor: (currentJson: any) => void;
      policySrcUrl: string
    }> {}

export type PolicyEditorDispatch = (
  args: PolicyEditorAction
) => PolicyEditorAction;
export type PolicyEditorReducerHandler = ReducerHandler<
  PolicyEditorAction,
  PolicyEditorState
>;
