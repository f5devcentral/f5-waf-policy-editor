import {
  BlockRequests,
  Class,
  ClassAction,
  ClassName,
  CSRFProtection,
  CSRFURL,
  CSRFURLMethod,
  DataGuard,
  DataGuardEnforcementMode,
  EnforcementAction,
  ExpirationTime,
  HostName,
  MitigationsSignature,
  OpenAPIFile,
  PolicySignature,
  ServerTechnology,
  Settings,
  SignatureSet,
  URLElement,
  WhitelistIP,
} from "./policy-schema/policy.definitions";
import {
  MitigationAnomaly,
  MitigationBrowser,
} from "./policy-schema/policy.definitions.nap.custom";

export const defaultGeneralSettings = () => ({
  policy: {
    name: "policy_name",
    template: {
      name: "POLICY_TEMPLATE_NGINX_BASE",
    },
    applicationLanguage: "utf-8",
    enforcementMode: "blocking",
  },
});

export const defaultBlockingSettings = (
  name: string,
  alarm: boolean,
  block: boolean
) => ({
  name,
  alarm,
  block,
});

export const defaultMethods = () => ({
  name: "",
});

export const defaultUrls: (order: number, url?: URLElement) => URLElement = (
  order,
  url
) => {
  return url
    ? ({ ...url, wildcardOrder: order } as URLElement)
    : ({
        name: "",
        type: "explicit",
        method: "*",
        protocol: "http",
        attackSignaturesCheck: true,
        metacharsOnUrlCheck: true,
        wildcardOrder: order,
      } as URLElement);
};

export const defaultCsrfUrl: (order: number, csrfUrl?: CSRFURL) => CSRFURL = (
  order,
  csrfUrl
) => {
  return csrfUrl
    ? ({ ...csrfUrl, wildcardOrder: order } as CSRFURL)
    : {
        enforcementAction: EnforcementAction.None,
        method: CSRFURLMethod.Any,
        url: "",
        wildcardOrder: order,
      };
};

export const defaultFileTypes = () => ({
  name: "",
  type: "explicit",
  allowed: true,
  checkUrlLength: true,
  urlLength: 2048,
  checkQueryStringLength: true,
  queryStringLength: 2048,
  checkPostDataLength: false,
  postDataLength: 4096,
  checkRequestLength: false,
  requestLength: 8192,
  responseCheck: false,
});

export const defaultHeaders = () => ({
  name: "",
  type: "explicit",
  decodeValueAsBase64: "enabled",
  htmlNormalization: true,
  mandatory: true,
  allowRepeatedOccurrences: false,
  checkSignatures: true,
});

export const defaultParameters = () => ({
  name: "",
  type: "wildcard",
  level: "global",
  parameterLocation: "any",
  valueType: "auto-detect",
  allowEmptyValue: true,
  checkMaxValueLength: false,
  allowRepeatedParameterName: true,
  sensitiveParameter: false,
  attackSignaturesCheck: true,
  checkMetachars: true,
  metacharsOnParameterValueCheck: true,
});

export const defaultOpenApi: () => OpenAPIFile = () => ({
  link: "",
});

export const defaultServerTechnologies: (
  serverTechnologyName: string
) => ServerTechnology = (serverTechnologyName) => {
  return {
    serverTechnologyName,
  } as ServerTechnology;
};

export const defaultSignatureSets: () => SignatureSet = () => {
  return {
    alarm: true,
    block: true,
    name: "",
  };
};

export const defaultSignatures: () => PolicySignature = () => {
  return {
    enabled: true,
    name: "",
    signatureId: 0,
    tag: "",
  };
};

export const defaultBotDefenceSettings: () => Settings = () => {
  return {
    isEnabled: true,
  };
};

export const defaultMitigationsAnomaly: () => MitigationAnomaly = () => {
  return {
    name: "",
    action: "",
    scoreThreshold: 1,
  };
};

export const defaultMitigationsBrowser: () => MitigationBrowser = () => {
  return {
    action: "",
    maxVersion: 1,
    minVersion: 1,
    name: "",
  };
};

export const defaultMitigationsClass: () => Class = () => {
  return {
    name: "" as ClassName,
    action: "" as ClassAction,
  } as Class;
};

export const defaultMitigationsSignature: () => MitigationsSignature = () => {
  return {
    action: "" as ClassAction,
    name: "",
  };
};

export const defaultDataGuard: () => DataGuard = () => {
  return {
    creditCardNumbers: true,
    enabled: true,
    enforcementMode: DataGuardEnforcementMode.EnforceUrlsInList,
    enforcementUrls: [],
    maskData: true,
    usSocialSecurityNumbers: true,
  };
};

export const defaultWhitelistIPs: () => WhitelistIP = () => {
  return {
    blockRequests: BlockRequests.PolicyDefault,
    description: "",
    ipAddress: "",
    ipMask: "",
  };
};

export const defaultHostname: () => HostName = () => {
  return {
    includeSubdomains: true,
    name: "",
  };
};

export const defaultCsrfProtection: () => CSRFProtection = () => {
  return {
    enabled: false,
    expirationTimeInSeconds: ExpirationTime.Disabled,
    sslOnly: false,
  };
};
