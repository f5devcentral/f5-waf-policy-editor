import React from "react";
import { PolicyEditorPageEnum } from "../../../store/policy-editor/policy-editor.types";
import { ReactComponent as GeneralSettingsIcon } from "../../../resources/policy-editor-sidebar-menu-icons/general-settings.svg";
import { ReactComponent as BlockSettingsIcon } from "../../../resources/policy-editor-sidebar-menu-icons/block-settings.svg";
import { ReactComponent as RequestResponseIcon } from "../../../resources/policy-editor-sidebar-menu-icons/request-response.svg";
import { ReactComponent as SignatureBasedIcon } from "../../../resources/policy-editor-sidebar-menu-icons/signature-based.svg";
import { ReactComponent as AdvancedFeaturesIcon } from "../../../resources/policy-editor-sidebar-menu-icons/advanced-settings.svg";

export type PolicyEditorMenuGroupInfo = {
  label: string;
  icon: JSX.Element;
  pages: PolicyEditorMenuPageInfo[];
};

export type PolicyEditorMenuPageInfo = {
  label: string;
  id: PolicyEditorPageEnum;
};

export const PolicyEditorMenuPagesModel: PolicyEditorMenuGroupInfo[] = [
  {
    label: "General Settings",
    icon: <GeneralSettingsIcon />,
    pages: [
      {
        label: "Hostnames",
        id: PolicyEditorPageEnum.Hostnames,
      },
      {
        label: "XFF",
        id: PolicyEditorPageEnum.CustomXffHeaders,
      },
      {
        label: "Open API References",
        id: PolicyEditorPageEnum.OpenAPI,
      },
      {
        label: "Deny/Allow List",
        id: PolicyEditorPageEnum.WhitelistIp,
      },
      {
        label: "Enforcer Cookie Settings",
        id: PolicyEditorPageEnum.EnforceCookieSettings,
      },
    ],
  },
  {
    label: "Block Settings",
    icon: <BlockSettingsIcon />,
    pages: [
      {
        label: "Violations",
        id: PolicyEditorPageEnum.Violations,
      },
      {
        label: "Evasions",
        id: PolicyEditorPageEnum.Evasions,
      },
      {
        label: "HTTP Compliance",
        id: PolicyEditorPageEnum.HttpProtocols,
      },
    ],
  },
  {
    label: "Request/Response",
    icon: <RequestResponseIcon />,
    pages: [
      {
        label: "Methods",
        id: PolicyEditorPageEnum.Methods,
      },
      {
        label: "URLs",
        id: PolicyEditorPageEnum.URLs,
      },
      {
        label: "Parameters",
        id: PolicyEditorPageEnum.Parameters,
      },
      {
        label: "File Types",
        id: PolicyEditorPageEnum.Filetypes,
      },
      {
        label: "Headers",
        id: PolicyEditorPageEnum.Headers,
      },
      {
        label: "Response Codes",
        id: PolicyEditorPageEnum.AllowedResponseCodes,
      },
    ],
  },
  {
    label: "Signature Based",
    icon: <SignatureBasedIcon />,
    pages: [
      {
        label: "Sets",
        id: PolicyEditorPageEnum.SignaturesSets,
      },
      {
        label: "Signatures",
        id: PolicyEditorPageEnum.SignaturesPolicy,
      },
      {
        label: "Server Technologies",
        id: PolicyEditorPageEnum.ServerTechnologies,
      },
    ],
  },
  {
    label: "Advanced Features",
    icon: <AdvancedFeaturesIcon />,
    pages: [
      {
        label: "Bot Defense",
        id: PolicyEditorPageEnum.BotDefense,
      },
      {
        label: "CSRF",
        id: PolicyEditorPageEnum.Csrf,
      },
      {
        label: "Data Guard",
        id: PolicyEditorPageEnum.DataGuard,
      },
    ],
  },
];
