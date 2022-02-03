import { StrategyLogModel } from "./strategy-log.model";
import {
  AthenaFirewallMetadataModel,
  AthenaFirewallModel,
} from "./athena-firewall.model";
import { WaitEventUtil } from "../../utils/wait-event.util";
import { PolicyContainerType } from "./policy-container.type";
import {
  athenaAttackSignatures,
  athenaViolations,
} from "../strategy/athena.const";

export class ParseContextModel {
  public strategyLog: StrategyLogModel;
  public athenaFirewallDto: AthenaFirewallModel;
  public athenaFirewallMetadataDto: AthenaFirewallMetadataModel;
  public conversionFailed: boolean;
  public waitEvents: { [key: string]: WaitEventUtil };

  constructor(public policyContainer: PolicyContainerType) {
    this.strategyLog = new StrategyLogModel();
    this.athenaFirewallDto = {} as AthenaFirewallModel;
    this.conversionFailed = false;
    this.waitEvents = {};

    this.athenaFirewallMetadataDto = {
      name: "",
      namespace: "{{NAMESPACE}}",
    };

    this.athenaFirewallDto.detection_settings = {
      violation_settings: {
        disabled_violation_types: JSON.parse(JSON.stringify(athenaViolations)),
      },
      signature_selection_setting: {
        attack_type_settings: {
          disabled_attack_types: JSON.parse(
            JSON.stringify(athenaAttackSignatures)
          ),
        },
      },
    };
  }

  markSupportedViolation(violation: string) {
    if (
      !this.athenaFirewallDto.detection_settings?.violation_settings
        ?.disabled_violation_types
    )
      return;

    this.athenaFirewallDto.detection_settings.violation_settings.disabled_violation_types =
      this.athenaFirewallDto.detection_settings.violation_settings.disabled_violation_types.filter(
        (x: string) => x !== violation
      );
  }

  markSupportedAttackSignature(signature: string) {
    if (
      !this.athenaFirewallDto.detection_settings?.signature_selection_setting
        ?.attack_type_settings?.disabled_attack_types
    )
      return;

    this.athenaFirewallDto.detection_settings.signature_selection_setting.attack_type_settings.disabled_attack_types =
      this.athenaFirewallDto.detection_settings.signature_selection_setting.attack_type_settings.disabled_attack_types.filter(
        (x) => x !== signature
      );
  }
}
