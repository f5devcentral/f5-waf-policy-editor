export type EmptyObject = {};

export type AllowedResponseCodes = {
  response_code: string[];
};

export type AthenaFirewallModel = {
  blocking?: EmptyObject;
  monitoring?: EmptyObject;
  allowed_response_codes?: AllowedResponseCodes;
};
