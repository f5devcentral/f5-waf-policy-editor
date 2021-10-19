import {
  BlockingSettingsViolation,
  BlockRequests,
  Class,
  ClassAction,
  ClassName,
  CookieSettings,
  Cooky,
  CSRFProtection,
  CSRFURL,
  CSRFURLMethod,
  DataGuard,
  DataGuardEnforcementMode,
  EnforcementAction,
  EnforcementType,
  Evasion,
  EvasionDescription,
  ExpirationTime,
  Filetype,
  Header,
  HostName,
  HostNameTypeEnum,
  HTTPProtocol,
  HTTPProtocolDescription,
  InsertSameSiteAttribute,
  MaximumCookieHeaderLengthEnum,
  MethodElement,
  MitigationsSignature,
  OpenAPIFile,
  ParameterElement,
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

export const defaultBlockingSettingsViolations: (
  order: number,
  item?: BlockingSettingsViolation
) => BlockingSettingsViolation = (order, item) => {
  return (
    item ?? {
      name: "",
      block: false,
      alarm: false,
    }
  );
};

export const defaultMethods: (
  order: number,
  item?: MethodElement
) => MethodElement = (order, item) => {
  return (
    item ?? {
      name: "",
    }
  );
};

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

export const defaultFileTypes: (order: number, item?: Filetype) => Filetype = (
  order,
  item
) => {
  return (
    item ??
    ({
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
      wildcardOrder: order,
    } as Filetype)
  );
};

export const defaultHeaders: (order: number, item?: Header) => Header = (
  order,
  item
) => {
  return (
    item ??
    ({
      name: "",
      type: "explicit",
      decodeValueAsBase64: "enabled",
      htmlNormalization: true,
      mandatory: true,
      allowRepeatedOccurrences: false,
      checkSignatures: true,
    } as Header)
  );
};

export const defaultParameters: (
  order: number,
  item?: ParameterElement
) => ParameterElement = (order, item) => {
  return (
    item ??
    ({
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
    } as ParameterElement)
  );
};

export const defaultOpenApi: (
  order: number,
  item?: OpenAPIFile
) => OpenAPIFile = (order, item) => {
  return (
    item ?? {
      link: "",
    }
  );
};

export const defaultServerTechnologies: (
  order: number,
  item?: ServerTechnology
) => ServerTechnology = (order, item) => {
  return item
    ? item
    : {
        serverTechnologyName: "",
      };
};

export const defaultSignatureSets: (
  order: number,
  item?: SignatureSet
) => SignatureSet = (order, item) => {
  return item
    ? item
    : {
        alarm: true,
        block: true,
        name: "",
      };
};

export const defaultSignatures: (
  order: number,
  item?: PolicySignature
) => PolicySignature = (order, item) => {
  return (
    item ?? {
      enabled: true,
      name: "",
      signatureId: 0,
      tag: "",
    }
  );
};

export const defaultBotDefenceSettings: (
  order: number,
  item?: Settings
) => Settings = (order, item) => {
  return (
    item ?? {
      isEnabled: true,
    }
  );
};

export const defaultMitigationsAnomaly: (
  order: number,
  item?: MitigationAnomaly
) => MitigationAnomaly = (order, item) => {
  return (
    item ?? {
      name: "",
      action: "",
      scoreThreshold: 1,
    }
  );
};

export const defaultMitigationsBrowser: (
  order: number,
  item?: MitigationBrowser
) => MitigationBrowser = (order, item) => {
  return (
    item ?? {
      action: "",
      maxVersion: 1,
      minVersion: 1,
      name: "",
    }
  );
};

export const defaultMitigationsClass: (order: number, item?: Class) => Class = (
  order,
  item
) => {
  return {
    name: "" as ClassName,
    action: "" as ClassAction,
  } as Class;
};

export const defaultMitigationsSignature: (
  order: number,
  item?: MitigationsSignature
) => MitigationsSignature = (order, item) => {
  return (
    item ?? {
      action: "" as ClassAction,
      name: "",
    }
  );
};

export const defaultDataGuard: (order: number, item?: DataGuard) => DataGuard =
  (order, item) => {
    return (
      item ?? {
        creditCardNumbers: true,
        enabled: true,
        enforcementMode: DataGuardEnforcementMode.EnforceUrlsInList,
        enforcementUrls: [],
        maskData: true,
        usSocialSecurityNumbers: true,
      }
    );
  };

export const defaultWhitelistIPs: (
  order: number,
  item?: WhitelistIP
) => WhitelistIP = (order, item) => {
  return {
    blockRequests: BlockRequests.PolicyDefault,
    description: "",
    ipAddress: "",
    ipMask: "",
  };
};

export const defaultHostname: (order: number, item?: HostName) => HostName = (
  order,
  item
) => {
  return (
    item ?? {
      includeSubdomains: true,
      name: "",
    }
  );
};

export const defaultCsrfProtection: (
  order: number,
  item?: CSRFProtection
) => CSRFProtection = (order, item) => {
  return (
    item ?? {
      enabled: false,
      expirationTimeInSeconds: ExpirationTime.Disabled,
      sslOnly: false,
    }
  );
};

export const defaultCookieSettings: (
  order: number,
  item?: CookieSettings
) => CookieSettings = (order, item) => {
  return (
    item ?? {
      maximumCookieHeaderLength: MaximumCookieHeaderLengthEnum.Any,
    }
  );
};

export const defaultCookie: (order: number, cookie?: Cooky) => Cooky = (
  order,
  cookie
) => {
  return cookie
    ? {
        ...cookie,
        wildcardOrder: order,
      }
    : {
        name: "",
        accessibleOnlyThroughTheHttpProtocol: true,
        attackSignaturesCheck: true,
        decodeValueAsBase64: "enabled",
        enforcementType: EnforcementType.Allow,
        insertSameSiteAttribute: InsertSameSiteAttribute.None,
        securedOverHttpsConnection: true,
        type: HostNameTypeEnum.Explicit,
        wildcardOrder: order,
      };
};

export const defaultEvasions: (order: number, evasion?: Evasion) => Evasion = (
  order,
  evasion
) => {
  return evasion
    ? evasion
    : {
        description: "" as EvasionDescription,
        enabled: true,
        maxDecodingPasses: 2,
      };
};

export const defaultHttpProtocols: (
  order: number,
  item?: HTTPProtocol
) => HTTPProtocol = (order, item) => {
  return item
    ? item
    : {
        maxParams: 1,
        maxHeaders: 1,
        enabled: true,
        description: "" as HTTPProtocolDescription,
      };
};

export const defaultResponseCode: (order: number, item?: number) => number = (
  order,
  item
) => {
  return item ?? 200;
};

export const defaultXffHeader: (order: number, item?: string) => string = (
  order,
  item
) => {
  return item ?? "";
};

export const defaultDataGuardEnforcementUrls: (
  order: number,
  item?: string
) => string = (order, item) => {
  return item ?? "";
};
