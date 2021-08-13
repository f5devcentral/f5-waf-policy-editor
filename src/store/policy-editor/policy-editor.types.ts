import { Action } from "redux";
import { ReducerHandler } from "../reducer.base";
import { PolicyValidationError } from "../../model/json-validate/policy.validator";

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
  OpenAPI,
  Evasions,
  HttpProtocols,
}

export type PolicyEditorState = {
  currentTab: number;
  currentPage: PolicyEditorPageEnum;
  jsonCurrentPolicy: any;
  strCurrentPolicy: string;
  jsonParseError: boolean;
  jsonValidationErrors: PolicyValidationError[];
  policySrcUrl: string;
};

export interface PolicyEditorAction
  extends Action,
    Partial<{
      currentTab: number;
      currentPage: PolicyEditorPageEnum;
      strPolicy: string;
      visitor: (currentJson: any) => void;
      policySrcUrl: string;
    }> {}

export type PolicyEditorDispatch = (
  args: PolicyEditorAction
) => PolicyEditorAction;
export type PolicyEditorReducerHandler = ReducerHandler<
  PolicyEditorAction,
  PolicyEditorState
>;
