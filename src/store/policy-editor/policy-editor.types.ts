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
  jsonCurrentPolicy: any;
  strCurrentPolicy: string;
  jsonParseError: boolean;
};

export interface PolicyEditorAction
  extends Action,
    Partial<{
      currentPage: PolicyEditorPageEnum;
      strPolicy: string;
      updateVisitor: (currentJson: any) => void;
    }> {}

export type PolicyEditorDispatch = (
  args: PolicyEditorAction
) => PolicyEditorAction;
export type PolicyEditorReducerHandler = ReducerHandler<
  PolicyEditorAction,
  PolicyEditorState
>;
