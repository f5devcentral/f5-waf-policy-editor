import * as React from "react";

import { PolicyEditorPageEnum } from "../../../store/policy-editor/policy-editor.types";
import { GeneralSettingsPage } from "../pages/general-settings.page";
import { MethodsPage } from "../pages/methods.page";
import { UrlsPage } from "../pages/urls.page";
import { FileTypesPage } from "../pages/file-types.page";
import { HeadersPage } from "../pages/headers.page";
import { ParametersPage } from "../pages/parameters.page";
import { OpenApiPage } from "../pages/open-api.page";
import { EvasionsPage } from "../pages/blocking-settings/evasions.page";
import { HttpProtocolsPage } from "../pages/blocking-settings/http-protocols.page";
import { ServerTechnologiesPage } from "../pages/server-technologies.page";
import { SignatureSetsPage } from "../pages/signatures/signature-sets.page";
import { SignaturesPage } from "../pages/signatures/signatures.page";
import { ViolationsPage } from "../pages/blocking-settings/violations.page";
import { AdditionalTabsPage } from "../pages/additional-tabs.page";
import { TabsTree } from "../model/policy-editor.tabs.model";
import { BotDefenseMitigationsBrowsersPage } from "../pages/bot-defense/bot-defense.mitigations.browsers.page";
import { BotDefenseSettingsPage } from "../pages/bot-defense/bot-defense.settings.page";
import { BotDefenseMitigationsAnomaliesPage } from "../pages/bot-defense/bot-defense.mitigations.anomalies.page";
import { BotDefenseMitigationsClassesPage } from "../pages/bot-defense/bot-defense.mitigations.classes.page";
import { BotDefenseMitigationsSignaturesPage } from "../pages/bot-defense/bot-defense.mitigations.signatures.page";

export class PolicyEditorPageFactory {
  constructor(
    private pages: { [key: number]: JSX.Element } = {
      [PolicyEditorPageEnum.BlockingSettings]: (
        <AdditionalTabsPage
          tree={TabsTree}
          id={PolicyEditorPageEnum.BlockingSettings}
        />
      ),
      [PolicyEditorPageEnum.Signatures]: (
        <AdditionalTabsPage
          tree={TabsTree}
          id={PolicyEditorPageEnum.Signatures}
        />
      ),
      [PolicyEditorPageEnum.BotDefense]: (
        <AdditionalTabsPage
          tree={TabsTree}
          id={PolicyEditorPageEnum.BotDefense}
        />
      ),
      // -----------------------------------------------------------------
      [PolicyEditorPageEnum.GeneralSettings]: <GeneralSettingsPage />,
      [PolicyEditorPageEnum.Violations]: <ViolationsPage />,
      [PolicyEditorPageEnum.Methods]: <MethodsPage />,
      [PolicyEditorPageEnum.URLs]: <UrlsPage />,
      [PolicyEditorPageEnum.Filetypes]: <FileTypesPage />,
      [PolicyEditorPageEnum.Headers]: <HeadersPage />,
      [PolicyEditorPageEnum.Parameters]: <ParametersPage />,
      [PolicyEditorPageEnum.OpenAPI]: <OpenApiPage />,
      [PolicyEditorPageEnum.Evasions]: <EvasionsPage />,
      [PolicyEditorPageEnum.HttpProtocols]: <HttpProtocolsPage />,
      [PolicyEditorPageEnum.ServerTechnologies]: <ServerTechnologiesPage />,
      [PolicyEditorPageEnum.SignaturesSets]: <SignatureSetsPage />,
      [PolicyEditorPageEnum.SignaturesPolicy]: <SignaturesPage />,
      [PolicyEditorPageEnum.BotDefenseSettings]: <BotDefenseSettingsPage />,
      [PolicyEditorPageEnum.BotDefenseMigrationsBrowsers]: (
        <BotDefenseMitigationsBrowsersPage />
      ),
      [PolicyEditorPageEnum.BotDefenseMigrationsAnomalies]: (
        <BotDefenseMitigationsAnomaliesPage />
      ),
      [PolicyEditorPageEnum.BotDefenseMigrationsClasses]: (
        <BotDefenseMitigationsClassesPage />
      ),
      [PolicyEditorPageEnum.BotDefenseMigrationsSignatures]: (
        <BotDefenseMitigationsSignaturesPage />
      ),
    }
  ) {}

  createPage(page: PolicyEditorPageEnum): JSX.Element {
    return this.pages[page];
  }
}
