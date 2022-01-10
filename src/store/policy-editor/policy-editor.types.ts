import { Action } from "redux";
import { ReducerHandler } from "../reducer.base";
import { PolicyValidationError } from "../../model/json-validate/policy.validator";

export enum PolicyEditorPageEnum {
  Summary,
  BlockingSettings,
  Methods,
  URLs,
  Filetypes,
  Headers,
  Parameters,
  Signatures,
  SignaturesSets,
  SignaturesPolicy,
  BotDefense,
  BotDefenseSettings,
  BotDefenseMigrationsAnomalies,
  BotDefenseMigrationsBrowsers,
  BotDefenseMigrationsClasses,
  BotDefenseMigrationsSignatures,
  OpenAPI,
  Evasions,
  HttpProtocols,
  ServerTechnologies,
  Violations,
  WhitelistIp,
  DataGuard,
  DataGuardSettings,
  DataGuardEnforcementUrls,
  CustomXffHeaders,
  Hostnames,
  AllowedResponseCodes,
  Csrf,
  CsrfProtection,
  CsrfUrls,
  EnforceCookieSettings,
  CookieSettings,
  Cookies,
}

export type PolicyEditorState = {
  currentTab: number;
  currentPage: PolicyEditorPageEnum;
  jsonCurrentPolicy: any;
  strCurrentPolicy: string;
  strFullCurrentPolicy: string;
  jsonParseError: boolean;
  jsonValidationErrors: PolicyValidationError[];
  policySrcUrl: string;
  showDefaultPolicy: boolean;
};

export interface PolicyEditorAction
  extends Action,
    Partial<{
      currentTab: number;
      currentPage: PolicyEditorPageEnum;
      strPolicy: string;
      visitor: (currentJson: any) => void;
      policySrcUrl: string;
      showDefaultPolicy: boolean;
    }> {}

export type PolicyEditorDispatch = (
  args: PolicyEditorAction
) => PolicyEditorAction;
export type PolicyEditorReducerHandler = ReducerHandler<
  PolicyEditorAction,
  PolicyEditorState
>;
