import {
  AthenaAction,
  AthenaTransformers,
  EmptyObject,
} from "./athena-common.model";

export type ServicePolicyRuleMetadata = {
  name: string;
};

export type PathMatcher = {
  exact_values?: string[];
  prefix_values?: string[];
  regex_values?: string[];
  suffix_values?: string[];
  transformers?: AthenaTransformers[];
};

export type ServicePolicyRuleSpec = {
  action: AthenaAction;
  any_asn?: EmptyObject;
  any_client?: EmptyObject;
  any_ip?: EmptyObject;
  path?: PathMatcher;
};

export type AthenaServicePolicyRuleModel = {
  metadata: ServicePolicyRuleMetadata;
  spec: ServicePolicyRuleSpec;
};
