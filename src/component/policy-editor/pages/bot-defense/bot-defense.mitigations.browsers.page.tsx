import React from "react";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { BotDefenseBrowsersFactory } from "../../../../store/policy-editor/visitor/imp/bot-defense.browsers.factory";
import { BotDefenseBrowsersVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/bot-defense.browsers.visitor-factory";
import { GridValuesPageControl } from "../../controls/grid-value-page.control";
import { defaultMitigationsBrowser } from "../../../../model/policy-editor.defaults.model";

export const BotDefenseMitigationsBrowsersPage: React.VoidFunctionComponent =
  () => {
    const fieldFactory = useVisitor(BotDefenseBrowsersFactory);
    const visitorFactory = useVisitor(BotDefenseBrowsersVisitorFactory);

    return (
      <GridValuesPageControl
        settingsName="Bot Defense Mitigations Browser"
        addButtonTitle="Add Browser"
        defaultValueFactory={defaultMitigationsBrowser}
        fieldFactory={fieldFactory}
        fieldsVisitorFactory={visitorFactory}
      />
    );
  };
