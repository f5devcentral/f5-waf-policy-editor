import * as React from "react";

import { PolicyEditorPageEnum } from "../../../store/policy-editor/policy-editor.types";
import { GeneralSettingsPage } from "../pages/general-settings.page";
import { MethodsPage } from "../pages/methods.page";
import { UrlsPage } from "../pages/urls.page";
import { FileTypesPage } from "../pages/file-types.page";
import { HeadersPage } from "../pages/headers.page";
import { ParametersPage } from "../pages/parameters.page";
import { OpenApiPage } from "../pages/open-api.page";
import { EvasionsPage } from "../pages/evasions.page";
import { HttpProtocolsPage } from "../pages/http-protocols.page";
import { ServerTechnologiesPage } from "../pages/server-technologies.page";
import { SignatureSetsPage } from "../pages/signature-sets.page";
import { SignaturesPage } from "../pages/signatures.page";
import { ViolationsPage } from "../pages/violations.page";
import { AdditionalTabsPage } from "../pages/additional-tabs.page";
import { TabsTree } from "../model/policy-editor.tabs.model";

export class PolicyEditorPageFactory {
  constructor(
    private pages: { [key: number]: JSX.Element } = {
      [PolicyEditorPageEnum.GeneralSettings]: <GeneralSettingsPage />,
      [PolicyEditorPageEnum.BlockingSettings]: (
        <AdditionalTabsPage
          tree={TabsTree}
          id={PolicyEditorPageEnum.BlockingSettings}
        />
      ),
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
      [PolicyEditorPageEnum.Signatures]: (
        <AdditionalTabsPage
          tree={TabsTree}
          id={PolicyEditorPageEnum.Signatures}
        />
      ),
      [PolicyEditorPageEnum.SignaturesSets]: <SignatureSetsPage />,
      [PolicyEditorPageEnum.SignaturesPolicy]: <SignaturesPage />,
    }
  ) {}

  createPage(page: PolicyEditorPageEnum): JSX.Element {
    return this.pages[page];
  }
}
