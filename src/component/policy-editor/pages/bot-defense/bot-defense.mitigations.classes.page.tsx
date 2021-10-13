import React from "react";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { BotDefenseClassesFactory } from "../../../../store/policy-editor/visitor/imp/bot-defense.classes.factory";
import { BotDefenseClassesVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/bot-defense.classes.visitor-factory";
import { GridValuesPageControl } from "../../controls/grid-value-page.control";
import { defaultMitigationsClass } from "../../../../model/policy-editor.defaults.model";

export const BotDefenseMitigationsClassesPage: React.VoidFunctionComponent =
  () => {
    const fieldFactory = useVisitor(BotDefenseClassesFactory);
    const visitorFactory = useVisitor(BotDefenseClassesVisitorFactory);

    return (
      <GridValuesPageControl
        settingsName="Bot Defense Mitigations Class"
        addButtonTitle="Add Class"
        defaultValueFactory={() => defaultMitigationsClass()}
        fieldFactory={fieldFactory}
        fieldsVisitorFactory={visitorFactory}
      />
    );
  };
