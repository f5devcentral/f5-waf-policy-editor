import { blockAlarmUtil } from "../block-alarm.util";
import { AllowedResponseCodesParseStrategy } from "../allowed-response-codes.parse-strategy";
import { StrategyLogItemModel } from "../../../model/strategy-log-item.model";
import { KeyParsingResultEnum } from "../../../model/key-parsing-result.enum";
import { ParseStrategyBase } from "../../parse-strategy.base";

export class HttpResponseStatusViolationParseStrategy extends ParseStrategyBase {
  async parse(policyObj: any, fullPath: string) {
    if (blockAlarmUtil(policyObj, !!this.context.athenaFirewallDto.blocking)) {
      this.context.markSupportedViolation("VIOL_HTTP_RESPONSE_STATUS");

      const strategy = new AllowedResponseCodesParseStrategy(this.context);

      await strategy.parse(
        this.context.policyContainer.policy.general?.allowedResponseCodes,
        "policy.general.allowedResponseCodes"
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
