import { AthenaAction, EmptyObject } from "./athena-common.model";
import { AthenaServicePolicyRuleModel } from "./athena-service-policy-rule.model";

export type ServicePolicyMetadata = {
  name: string;
  namespace: string;
};

export type DenyList = {
  prefix_list?: EmptyObject;
  ip_prefix_set?: EmptyObject;
  asn_list?: EmptyObject;
  asn_set?: EmptyObject;
  country_list?: EmptyObject;
  tls_fingerprint_classes?: EmptyObject;
  tls_fingerprint_values?: EmptyObject;
  default_action_next_policy?: EmptyObject;
};

export type RuleList = {
  rules: AthenaServicePolicyRuleModel[];
};

export type SimpleRule = {
  name: string;
  metric_name_label: string;
  action: AthenaAction;
  headers: string[];
  expiration_timestamp: string | null;
  scheme: string[];
  description: string;
};

export type ServicePolicySpec = {
  algo: string;
  any_server: EmptyObject;
  port_matcher?: EmptyObject;
  deny_list?: DenyList;
  rule_list?: RuleList;
  deny_all_requests?: EmptyObject;
  simple_rules?: SimpleRule[];
};

export type AthenaServicePolicyModel = {
  metadata: ServicePolicyMetadata;
  spec: ServicePolicySpec;
  resource_version?: EmptyObject;
};
