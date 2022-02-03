export type EmptyObject = {};

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
  disable_threat_campaigns?: EmptyObject;
  enable_threat_campaigns?: EmptyObject;
  signature_selection_setting?: SignatureSelectionSettings;
};

export type ViolationsSettings = {
  disabled_violation_types: string[];
};

export type AthenaFirewallModel = {
  blocking?: EmptyObject;
  monitoring?: EmptyObject;
  allowed_response_codes?: AllowedResponseCodes;
  default_detection_settings?: EmptyObject;
  detection_settings?: DetectionSettings;
  default_bot_setting?: EmptyObject;
  violation_settings?: ViolationsSettings;
};

export type AthenaFirewallMetadataModel = {
  name: string;
  namespace: string;
};
