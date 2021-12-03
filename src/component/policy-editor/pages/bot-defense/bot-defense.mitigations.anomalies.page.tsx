import React from "react";
import { useVisitor } from "../../../../store/policy-editor/visitor/interface/base.visitor";
import { BotDefenseAnomaliesFactory } from "../../../../store/policy-editor/visitor/imp/bot-defense.anomalies.factory";
import { BotDefenseAnomaliesVisitorFactory } from "../../../../store/policy-editor/visitor/factory/imp/bot-defense.anomalies.visitor-factory";
import { defaultMitigationsAnomaly } from "../../../../model/policy-editor.defaults.model";
import { GridValuesPageControl } from "../../controls/grid-value-page.control";

export const BotDefenseMitigationsAnomaliesPage: React.VoidFunctionComponent =
  () => {
    const fieldFactory = useVisitor(BotDefenseAnomaliesFactory);
    const visitorFactory = useVisitor(BotDefenseAnomaliesVisitorFactory);

    return (
      <GridValuesPageControl
        settingsName="Mitigations Anomaly"
        addButtonTitle="Add Anomaly"
        defaultValueFactory={defaultMitigationsAnomaly}
        fieldFactory={fieldFactory}
        fieldsVisitorFactory={visitorFactory}
      />
    );
  };
