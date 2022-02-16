import { EmptyObject } from "./athena-common.model";

export type AllowedResponseCodes = {
  response_code: string[];
};

export type AttackTypeSettings = {
  disabled_attack_types?: string[];
};

export type SignatureSelectionSettings = {
  attack_type_settings?: AttackTypeSettings;
  high_medium_accuracy_signatures?: EmptyObject;
  high_medium_low_accuracy_signatures?: EmptyObject;
  only_high_accuracy_signatures?: EmptyObject;
};

export type DetectionSettings = {
  enable_suppression?: EmptyObject;
  disable_threat_campaigns?: EmptyObject;
  enable_threat_campaigns?: EmptyObject;
  signature_selection_setting?: SignatureSelectionSettings;
  violation_settings?: ViolationsSettings;
};

export type ViolationsSettings = {
  disabled_violation_types: string[];
};

export type BotProtectionSettings = {
  malicious_bot_action: string;
  suspicious_bot_action: string;
  good_bot_action: string;
};

export type AnonymizationHttpHeader = {
  header_name: string;
};

export type AnonymizationQueryParameter = {
  query_param_name: string;
};

export type AnonymizationCookie = {
  cookie_name: string;
};

export type AnonymizationConfig = {
  http_header?: AnonymizationHttpHeader;
  query_parameter?: AnonymizationQueryParameter;
  cookie?: AnonymizationCookie;
};

export type BlockingPage = {
  blocking_page?: string;
};

export type AthenaFirewallModel = {
  blocking?: EmptyObject;
  monitoring?: EmptyObject;
  allow_all_response_codes?: EmptyObject;
  allowed_response_codes?: AllowedResponseCodes;
  default_detection_settings?: EmptyObject;
  detection_settings?: DetectionSettings;
  default_bot_setting?: EmptyObject;
  bot_protection_setting?: BotProtectionSettings;
  disable_anonymization?: EmptyObject;
  use_default_blocking_page?: EmptyObject;
  custom_anonymization?: AnonymizationConfig[];
  blocking_page?: BlockingPage;
};

export type AthenaFirewallMetadataModel = {
  name: string;
  namespace: string;
  description: string;
};
