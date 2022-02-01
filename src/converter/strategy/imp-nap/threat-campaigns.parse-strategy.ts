import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { set as _set } from "lodash";
import { ThreatCampaign } from "../../../model/policy-schema/policy.definitions";

export class ThreatCampaignsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    const isEnabled = policyObj.some((x: ThreatCampaign) => x.isEnabled);

    if (isEnabled) {
      _set(
        this.context.athenaFirewallDto,
        "detection_settings.enable_threat_campaigns",
        {}
      );
    } else {
      _set(
        this.context.athenaFirewallDto,
        "detection_settings.disable_threat_campaigns",
        {}
      );
    }

    this.context.strategyLog.add(
      new StrategyLogItemModel(fullPath, KeyParsingResultEnum.partially)
    );

    return Promise.resolve();
  }
}
