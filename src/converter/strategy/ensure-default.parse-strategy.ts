import { ParseStrategyBase } from "./parse-strategy.base";

export class EnsureDefaultParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string): Promise<void> {
    // do not support bot protection yet
    this.context.athenaFirewallDto.default_bot_setting = {};

    // if nothing to override, use default
    if (!this.context.athenaFirewallDto.detection_settings) {
      this.context.athenaFirewallDto.default_detection_settings = {};
    }

    return Promise.resolve(undefined);
  }
}
