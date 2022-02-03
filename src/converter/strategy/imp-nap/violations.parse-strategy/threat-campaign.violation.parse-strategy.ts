import { ParseStrategyBase } from "../../parse-strategy.base";
import { blockAlarmUtil } from "../block-alarm.util";
import { StrategyLogItemModel } from "../../../model/strategy-log-item.model";
import { KeyParsingResultEnum } from "../../../model/key-parsing-result.enum";
import { ThreatCampaignsParseStrategy } from "../threat-campaigns.parse-strategy";

export class ThreatCampaignViolationParseStrategy extends ParseStrategyBase {
  async parse(policyObj: any, fullPath: string): Promise<void> {
    if (blockAlarmUtil(policyObj, !!this.context.athenaFirewallDto.blocking)) {
      this.context.markSupportedViolation("VIOL_THREAT_CAMPAIGN");

      const strategy = new ThreatCampaignsParseStrategy(this.context);
      await strategy.parse(
        this.context.policyContainer.policy["threat-campaigns"],
        "policy.threat-campaigns"
      );
    }

    this.context.strategyLog.add(
      new StrategyLogItemModel(
        fullPath,
        KeyParsingResultEnum.success,
        policyObj.name
      )
    );
  }
}
