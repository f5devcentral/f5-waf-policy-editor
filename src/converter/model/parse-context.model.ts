import { StrategyLogModel } from "./strategy-log.model";
import { AthenaFirewallModel } from "./athena-firewall.model";
import { WaitEventUtil } from "../../utils/wait-event.util";
import { PolicyContainerType } from "./policy-container.type";

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
  }
}
