import { ExpandMore } from "@material-ui/icons";
import * as React from "react";
import Box from "@material-ui/core/Box";

import { ReactComponent as IconBotDefense } from "../../../resources/policy-editor-tab-icons/icon-botdefense.svg";
import { ReactComponent as IconFiletypes } from "../../../resources/policy-editor-tab-icons/icon-filetypes.svg";
import { ReactComponent as IconGear } from "../../../resources/policy-editor-tab-icons/icon-gear.svg";
import { ReactComponent as IconHeaders } from "../../../resources/policy-editor-tab-icons/icon-headers.svg";
import { ReactComponent as IconLock } from "../../../resources/policy-editor-tab-icons/icon-lock.svg";
import { ReactComponent as IconMethods } from "../../../resources/policy-editor-tab-icons/icon-methods.svg";
import { ReactComponent as IconParameters } from "../../../resources/policy-editor-tab-icons/icon-parameters.svg";
import { ReactComponent as IconSignatures } from "../../../resources/policy-editor-tab-icons/icon-signatures.svg";
import { ReactComponent as IconUrl } from "../../../resources/policy-editor-tab-icons/icon-url.svg";
import { ReactComponent as IconOpenAPi } from "../../../resources/policy-editor-tab-icons/icon-openapi.svg";
import { PolicyEditorPageEnum } from "../../../store/policy-editor/policy-editor.types";

function createLabel(hasSubmenu: boolean, text: string, icon: any) {
  return (
    <React.Fragment>
      <Box>
        <span style={{ verticalAlign: "middle" }}>{icon}</span>
        <span style={{ verticalAlign: "middle" }}>{text}</span>
        {hasSubmenu && <ExpandMore style={{ verticalAlign: "middle" }} />}
      </Box>
    </React.Fragment>
  );
}

export type PolicyEditorPageInfo = {
  label: JSX.Element;
  id: PolicyEditorPageEnum;
  disabled?: boolean;
  subPages?: PolicyEditorPageInfo[];
};

const iconProps = {
  style: { verticalAlign: "middle" },
  width: 30,
  height: 23,
  color: "inherit",
  viewport: "0 0 20 20",
};

export const TabsTree: PolicyEditorPageInfo[] = [
  {
    label: createLabel(false, "General Settings", <IconGear {...iconProps} />),
    id: PolicyEditorPageEnum.GeneralSettings,
    subPages: [
      {
        id: PolicyEditorPageEnum.Summary,
        label: createLabel(false, "Summary", undefined),
      },
      {
        id: PolicyEditorPageEnum.CustomXffHeaders,
        label: createLabel(false, "XFF Headers", undefined),
      },
      {
        id: PolicyEditorPageEnum.AllowedResponseCodes,
        label: createLabel(false, "Allowed Response Codes", undefined),
      },
    ],
  },
  {
    label: createLabel(true, "Blocking Settings", <IconLock {...iconProps} />),
    id: PolicyEditorPageEnum.BlockingSettings,
    subPages: [
      {
        id: PolicyEditorPageEnum.Violations,
        label: createLabel(false, "Violations", undefined),
      },
      {
        id: PolicyEditorPageEnum.Evasions,
        label: createLabel(false, "Evasions", undefined),
      },
      {
        id: PolicyEditorPageEnum.HttpProtocols,
        label: createLabel(false, "Http Protocols", undefined),
      },
    ],
  },
  {
    label: createLabel(false, "Methods", <IconMethods {...iconProps} />),
    id: PolicyEditorPageEnum.Methods,
  },
  {
    label: createLabel(false, "URLs", <IconUrl {...iconProps} />),
    id: PolicyEditorPageEnum.URLs,
  },
  {
    label: createLabel(false, "File Types", <IconFiletypes {...iconProps} />),
    id: PolicyEditorPageEnum.Filetypes,
  },
  {
    label: createLabel(false, "Headers", <IconHeaders {...iconProps} />),
    id: PolicyEditorPageEnum.Headers,
  },
  {
    label: createLabel(false, "Parameters", <IconParameters {...iconProps} />),
    id: PolicyEditorPageEnum.Parameters,
  },
  {
    label: createLabel(false, "Open API", <IconOpenAPi {...iconProps} />),
    id: PolicyEditorPageEnum.OpenAPI,
  },
  {
    label: createLabel(
      false,
      "Server Technologies",
      <IconLock {...iconProps} />
    ),
    id: PolicyEditorPageEnum.ServerTechnologies,
  },
  {
    label: createLabel(true, "Signatures", <IconSignatures {...iconProps} />),
    id: PolicyEditorPageEnum.Signatures,
    subPages: [
      {
        label: createLabel(false, "Signature Sets", undefined),
        id: PolicyEditorPageEnum.SignaturesSets,
      },
      {
        label: createLabel(false, "Signatures", undefined),
        id: PolicyEditorPageEnum.SignaturesPolicy,
      },
    ],
  },
  {
    label: createLabel(true, "Bot Defense", <IconBotDefense {...iconProps} />),
    id: PolicyEditorPageEnum.BotDefense,
    subPages: [
      {
        label: createLabel(false, "Settings", undefined),
        id: PolicyEditorPageEnum.BotDefenseSettings,
      },
      {
        label: createLabel(false, "Anomalies", undefined),
        id: PolicyEditorPageEnum.BotDefenseMigrationsAnomalies,
      },
      {
        label: createLabel(false, "Browsers", undefined),
        id: PolicyEditorPageEnum.BotDefenseMigrationsBrowsers,
      },
      {
        label: createLabel(false, "Classes", undefined),
        id: PolicyEditorPageEnum.BotDefenseMigrationsClasses,
      },
      {
        label: createLabel(false, "Signatures", undefined),
        id: PolicyEditorPageEnum.BotDefenseMigrationsSignatures,
      },
    ],
  },
  {
    label: createLabel(false, "Whitelist IPs", undefined),
    id: PolicyEditorPageEnum.WhitelistIp,
  },
  {
    label: createLabel(false, "Hostnames", undefined),
    id: PolicyEditorPageEnum.Hostnames,
  },
  {
    id: PolicyEditorPageEnum.DataGuard,
    label: createLabel(false, "Data Guard", undefined),
    subPages: [
      {
        label: createLabel(false, "Settings", undefined),
        id: PolicyEditorPageEnum.DataGuardSettings,
      },
      {
        label: createLabel(false, "Enforcement Urls", undefined),
        id: PolicyEditorPageEnum.DataGuardEnforcementUrls,
      },
    ],
  },
];
