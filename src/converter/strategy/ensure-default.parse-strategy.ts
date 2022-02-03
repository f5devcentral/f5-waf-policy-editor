import { ParseStrategyBase } from "./parse-strategy.base";

export class EnsureDefaultParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): Promise<void> {
    // do not support bot protection yet
    this.context.athenaFirewallDto.default_bot_setting = {};

    // if nothing to override, use default
    if (!this.context.athenaFirewallDto.detection_settings) {
      this.context.athenaFirewallDto.default_detection_settings = {};
    } else {
      this.context.athenaFirewallDto.detection_settings.enable_suppression = {};
      if (
        !this.context.athenaFirewallDto.detection_settings
          .disable_threat_campaigns
      ) {
        this.context.athenaFirewallDto.detection_settings.enable_threat_campaigns =
          {};
      }
    }

    if (this.context.athenaFirewallDto.allowed_response_codes) {
      this.context.athenaFirewallDto.allow_all_response_codes = {};
    }

    if (!this.context.athenaFirewallDto.custom_anonymization) {
      this.context.athenaFirewallDto.disable_anonymization = {};
    }

    if (!this.context.athenaFirewallDto.blocking_page) {
      this.context.athenaFirewallDto.use_default_blocking_page = {};
    }

    if (
      this.context.athenaFirewallDto.detection_settings
        ?.signature_selection_setting &&
      !this.context.athenaFirewallDto.detection_settings
        ?.signature_selection_setting?.high_medium_accuracy_signatures &&
      !this.context.athenaFirewallDto.detection_settings
        ?.signature_selection_setting?.high_medium_low_accuracy_signatures &&
      !this.context.athenaFirewallDto.detection_settings
        ?.signature_selection_setting?.only_high_accuracy_signatures
    ) {
      this.context.athenaFirewallDto.detection_settings.signature_selection_setting.high_medium_accuracy_signatures =
        {};
    }
    return Promise.resolve(undefined);
  }
}
