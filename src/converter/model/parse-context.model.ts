import { StrategyLogModel } from "./strategy-log.model";
import { AthenaFirewallModel } from "./athena-firewall.model";
import { WaitEventUtil } from "../../utils/wait-event.util";
import { PolicyContainerType } from "./policy-container.type";
import { athenaViolations } from "../strategy/athena.const";

export class ParseContextModel {
  public strategyLog: StrategyLogModel;
  public athenaFirewallDto: AthenaFirewallModel;
  public conversionFailed: boolean;
  public waitEvents: { [key: string]: WaitEventUtil };

  constructor(public policyContainer: PolicyContainerType) {
    this.strategyLog = new StrategyLogModel();
    this.athenaFirewallDto = {} as AthenaFirewallModel;
    this.conversionFailed = false;
    this.waitEvents = {};

    this.athenaFirewallDto.violation_settings = {
      disabled_violation_types: JSON.parse(JSON.stringify(athenaViolations)),
    };
  }

  markSupportedViolation(violation: string) {
    if (!this.athenaFirewallDto.violation_settings?.disabled_violation_types)
      return;

    this.athenaFirewallDto.violation_settings.disabled_violation_types =
      this.athenaFirewallDto.violation_settings.disabled_violation_types.filter(
        (x: string) => x !== violation
      );
  }
}
