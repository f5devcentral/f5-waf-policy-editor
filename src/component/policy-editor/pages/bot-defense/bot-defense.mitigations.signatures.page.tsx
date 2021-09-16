import React from "react";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { GridValuesPageControl } from "../../controls/grid-value-page.control";
import { BotDefenseSignaturesFactory } from "../../../../store/policy-editor/visitor/imp/bot-defense.signatures.factory";
import { BotDefenseSignaturesVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/bot-defense.signatures.visitor-factory";
import { defaultMitigationsSignature } from "../../../../model/policy-editor.defaults.model";

export const BotDefenseMitigationsSignaturesPage: React.VoidFunctionComponent =
  () => {
    const fieldFactory = useVisitor(BotDefenseSignaturesFactory);
    const visitorFactory = useVisitor(BotDefenseSignaturesVisitorFactory);

    return (
      <GridValuesPageControl
        settingsName="Bot Defense Mitigations Signature"
        addButtonTitle="Add Signature"
        defaultValueFactory={() => defaultMitigationsSignature()}
        fieldFactory={fieldFactory}
        fieldsVisitorFactory={visitorFactory}
      />
    );
  };
