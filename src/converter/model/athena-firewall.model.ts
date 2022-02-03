export type EmptyObject = {};

export type AllowedResponseCodes = {
  response_code: string[];
};

export type DetectionSettings = {
  disable_threat_campaigns?: EmptyObject;
  enable_threat_campaigns?: EmptyObject;
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
