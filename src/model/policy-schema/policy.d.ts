// To parse this data:
//
//   import { Convert, PolicyD } from "./file";
//
//   const policyD = Convert.toPolicyD(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface PolicyDObject {
    policy?: Policy;
}

export interface Policy {
    antivirus?: Antivirus;
    /**
     * The character encoding for the web application. The character encoding determines how the
     * policy processes the character sets. The default is Auto detect.
     */
    applicationLanguage?:              ApplicationLanguage;
    "behavioral-enforcement"?:         BehavioralEnforcement;
    "blocking-settings"?:              BlockingSettings;
    "bot-defense"?:                    BotDefense;
    "brute-force-attack-preventions"?: BruteForceAttackPrevention[];
    /**
     * Specifies whether the security policy treats microservice URLs, file types, URLs, and
     * parameters as case sensitive or not. When this setting is enabled, the system stores
     * these security policy elements in lowercase in the security policy configuration.
     */
    caseInsensitive?:  boolean;
    "character-sets"?: CharacterSet[];
    /**
     * The maximum length of a cookie header name and value that the system processes. The
     * system calculates and enforces a cookie header length based on the sum of the length of
     * the cookie header name and value.
     */
    "cookie-settings"?: CookieSettings;
    cookies?:           Cooky[];
    "csrf-protection"?: CSRFProtection;
    "csrf-urls"?:       CSRFURL[];
    /**
     * Data Guard feature can prevent responses from exposing sensitive information by masking
     * the data.
     */
    "data-guard"?:               DataGuard;
    "database-protection"?:      DatabaseProtection;
    "deception-response-pages"?: DeceptionResponsePage[];
    "deception-settings"?:       DeceptionSettings;
    /**
     * Specifies the description of the policy.
     */
    description?:               string;
    "disabled-action-items"?:   DisabledActionItem[];
    "disallowed-geolocations"?: DisallowedGeolocation[];
    /**
     * Passive Mode allows the policy to be associated with a Performance L4 Virtual Server
     * (using a FastL4 profile). With FastL4, traffic is analyzed but is not modified in any way.
     */
    enablePassiveMode?: boolean;
    /**
     * How the system processes a request that triggers a security policy violation.
     * - **Blocking:** When the enforcement mode is set to blocking, traffic is blocked if it
     * causes a violation (configured for blocking).
     * - **Transparent:** When the enforcement mode is set to transparent, traffic is not
     * blocked even if a violation is triggered.
     */
    enforcementMode?: PolicyEnforcementMode;
    filetypes?:       Filetype[];
    /**
     * The full name of the policy including partition.
     */
    fullPath?: string;
    /**
     * This section includes several advanced policy configuration settings.
     */
    general?:        General;
    "gwt-profiles"?: GWTProfile[];
    /**
     * The maximum length of an HTTP header name and value that the system processes. The system
     * calculates and enforces the HTTP header length based on the sum of the length of the HTTP
     * header name and value.
     */
    "header-settings"?:       HeaderSettings;
    headers?:                 Header[];
    "host-names"?:            HostName[];
    "ip-intelligence"?:       IPIntelligence;
    "json-profiles"?:         JSONProfile[];
    "json-validation-files"?: JSONValidationFile[];
    "login-enforcement"?:     LoginEnforcement;
    "login-pages"?:           LoginPage[];
    methods?:                 MethodElement[];
    microservices?:           Microservice[];
    /**
     * The unique user-given name of the policy. Policy names cannot contain spaces or special
     * characters. Allowed characters are a-z, A-Z, 0-9, dot, dash (-), colon (:) and underscore
     * (_).
     */
    name:                     string;
    "navigation-parameters"?: NavigationParameter[];
    "open-api-files"?:        OpenAPIFile[];
    parameters?:              ParameterElement[];
    "plain-text-profiles"?:   PlainTextProfile[];
    "policy-builder"?:        PolicyBuilder;
    /**
     * Defines Policy Builder learning location and related configuration.
     */
    "policy-builder-central-configuration"?: PolicyBuilderCentralConfiguration;
    "policy-builder-cookie"?:                PolicyBuilderCookie;
    /**
     * Defines Policy Builder behavior for filetypes
     */
    "policy-builder-filetype"?: PolicyBuilderFiletype;
    "policy-builder-header"?:   PolicyBuilderHeader;
    /**
     * Defines Policy Builder behavior for parameters
     */
    "policy-builder-parameter"?:              PolicyBuilderParameter;
    "policy-builder-redirection-protection"?: PolicyBuilderRedirectionProtection;
    /**
     * Defines Policy Builder behavior for Server Technologies
     */
    "policy-builder-server-technologies"?: PolicyBuilderServerTechnologies;
    "policy-builder-sessions-and-logins"?: PolicyBuilderSessionsAndLogins;
    "policy-builder-url"?:                 PolicyBuilderURL;
    /**
     * When creating a security policy, you can determine whether a security policy
     * differentiates between HTTP and HTTPS URLs.
     * If enabled, the security policy differentiates between HTTP and HTTPS URLs.
     * If disabled, the security policy configures URLs without specifying a specific protocol.
     * This is useful for applications that behave the same for HTTP and HTTPS, and it keeps the
     * security policy from including the same URL twice.
     */
    protocolIndependent?:              boolean;
    "redirection-protection"?:         RedirectionProtection;
    "redirection-protection-domains"?: RedirectionProtectionDomain[];
    "request-loggers"?:                RequestLogger[];
    "response-pages"?:                 ResponsePage[];
    "sensitive-parameters"?:           SensitiveParameter[];
    "server-technologies"?:            ServerTechnology[];
    "session-tracking"?:               SessionTracking;
    "session-tracking-statuses"?:      SessionTrackingStatus[];
    "signature-requirements"?:         SignatureRequirement[];
    "signature-sets"?:                 SignatureSet[];
    "signature-settings"?:             SignatureSettings;
    signatures?:                       PolicySignature[];
    softwareVersion?:                  string;
    /**
     * Specifies the template to populate the attributes of a new policy. The template is only
     * used when creating the policy - a security policy is always created based on a
     * user-defined or system-supplied template.
     * Unlike parent policies, the templates do not affect the policy after it is created. If
     * you modify a template, policies created from it in the past are not affected.
     */
    template:                    Template;
    "threat-campaign-settings"?: ThreatCampaignSettings;
    "threat-campaigns"?:         ThreatCampaign[];
    /**
     * The type of policy you want to create. The default policy type is Security.
     * - **Parent:** A parent policy can be used as a basis for similar child policies. Parent
     * policy settings can be inherited to its child policies. A parent policy cannot be applied
     * to Virtual Servers. No traffic can flow through them. They are just models.
     * - **Security:** A security policy can be created from a parent policy or as a stand-alone
     * policy. Changes to a security policy do not affect other security policies. A security
     * policy can be applied to a virtual server.
     */
    type?:                   PolicyType;
    urls?:                   URLElement[];
    webhooks?:               Webhook[];
    "websocket-urls"?:       WebsocketURL[];
    "whitelist-ips"?:        WhitelistIP[];
    "xml-profiles"?:         XMLProfile[];
    "xml-validation-files"?: XMLValidationFileElement[];
}

export interface Antivirus {
    inspectHttpUploads?: boolean;
}

/**
 * The character encoding for the web application. The character encoding determines how the
 * policy processes the character sets. The default is Auto detect.
 */
export enum ApplicationLanguage {
    AutoDetect = "auto-detect",
    Big5 = "big5",
    EUCJp = "euc-jp",
    EUCKr = "euc-kr",
    Gb18030 = "gb18030",
    Gb2312 = "gb2312",
    Gbk = "gbk",
    ISO88591 = "iso-8859-1",
    ISO885910 = "iso-8859-10",
    ISO885913 = "iso-8859-13",
    ISO885915 = "iso-8859-15",
    ISO885916 = "iso-8859-16",
    ISO88592 = "iso-8859-2",
    ISO88593 = "iso-8859-3",
    ISO88594 = "iso-8859-4",
    ISO88595 = "iso-8859-5",
    ISO88596 = "iso-8859-6",
    ISO88597 = "iso-8859-7",
    ISO88598 = "iso-8859-8",
    ISO88599 = "iso-8859-9",
    Koi8R = "koi8-r",
    ShiftJis = "shift_jis",
    UTF8 = "utf-8",
    Windows1250 = "windows-1250",
    Windows1251 = "windows-1251",
    Windows1252 = "windows-1252",
    Windows1253 = "windows-1253",
    Windows1255 = "windows-1255",
    Windows1256 = "windows-1256",
    Windows1257 = "windows-1257",
    Windows874 = "windows-874",
}

export interface BehavioralEnforcement {
    behavioralEnforcementViolations?:           BehavioralEnforcementViolation[];
    enableBehavioralEnforcement?:               boolean;
    enableBlockingCveSignatures?:               boolean;
    enableBlockingHighAccuracySignatures?:      boolean;
    enableBlockingLikelyMaliciousTransactions?: boolean;
    enableBlockingSuspiciousTransactions?:      boolean;
    enableBlockingViolations?:                  boolean;
}

export interface BehavioralEnforcementViolation {
    name?: string;
}

export interface BlockingSettings {
    evasions?:                  Evasion[];
    "http-protocols"?:          HTTPProtocol[];
    violations?:                BlockingSettingsViolation[];
    "web-services-securities"?: WebServicesSecurity[];
}

/**
 * This section defines behavior of 'Evasion technique detected' (VIOL_EVASION) violation
 * sub-violations.
 * User can control which sub-violations are enabled (alarmed/blocked) and/or learned.
 * Behavior of sub-violations depends on the block/alarm/learn settings of 'Evasion
 * technique detected' violation,
 * defined in /policy/blocking-settings/violations section:
 * - If learn is disabled in violation - no learning will be done for sub-violations
 * - If both alarm and block are disabled - enable flag becomes irrelevant, since there will
 * be no block/alarm for all sub-violations
 */
export interface Evasion {
    /**
     * Human-readable name of sub-violation.
     */
    description: EvasionDescription;
    /**
     * Defines if sub-violation is enforced - alarmed or blocked, according to the 'Evasion
     * technique detected' (VIOL_EVASION) violation blocking settings.
     */
    enabled?: boolean;
    /**
     * Defines if sub-violation is learned. Sub-violations are learned only when learn is
     * enabled for the 'Evasion technique detected' (VIOL_EVASION) violation.
     */
    learn?: boolean;
    /**
     * Defines how many times the system decodes URI and parameter values before the request is
     * considered an evasion.
     * Relevant only for the 'Multiple decoding' sub-violation.
     */
    maxDecodingPasses?: number;
}

/**
 * Human-readable name of sub-violation.
 */
export enum EvasionDescription {
    ApacheWhitespace = "Apache whitespace",
    BadUnescape = "Bad unescape",
    BareByteDecoding = "Bare byte decoding",
    DirectoryTraversals = "Directory traversals",
    IISBackslashes = "IIS backslashes",
    IISUnicodeCodepoints = "IIS Unicode codepoints",
    MultipleDecoding = "Multiple decoding",
    UDecoding = "%u decoding",
}

/**
 * This section defines behavior of 'HTTP protocol compliance failed' (VIOL_HTTP_PROTOCOL)
 * violation sub-violations.
 * User can control which sub-violations are enabled (alarmed/blocked) and/or learned.
 * Behavior of sub-violations depends on the block/alarm/learn settings of 'HTTP protocol
 * compliance failed' violation,
 * defined in /policy/blocking-settings/violations section:
 * - If learn is disabled in violation - no learning will be done for sub-violations
 * - If both alarm and block are disabled - enable flag becomes irrelevant, since there will
 * be no block/alarm for all sub-violations
 */
export interface HTTPProtocol {
    /**
     * Human-readable name of sub-violation
     */
    description: HTTPProtocolDescription;
    /**
     * Defines if sub-violation is enforced - alarmed or blocked, according to the 'HTTP
     * protocol compliance failed' (VIOL_HTTP_PROTOCOL) violation blocking settings
     */
    enabled?: boolean;
    /**
     * Defines if sub-violation is learned. Sub-violations is learned only when learn is enabled
     * for the 'HTTP protocol compliance failed' (VIOL_HTTP_PROTOCOL) violation
     */
    learn?: boolean;
    /**
     * Defines maximum allowed number of headers in request.
     * Relevant only for the 'Check maximum number of headers' sub-violation
     */
    maxHeaders?: number;
    /**
     * Defines maximum allowed number of paramters in request.
     * Relevant only for the 'Check maximum number of parameters' sub-violation
     */
    maxParams?: number;
}

/**
 * Human-readable name of sub-violation
 */
export enum HTTPProtocolDescription {
    BadHTTPVersion = "Bad HTTP version",
    BadHostHeaderValue = "Bad host header value",
    BadMultipartFormDataRequestParsing = "Bad multipart/form-data request parsing",
    BadMultipartParametersParsing = "Bad multipart parameters parsing",
    BodyInGETOrHEADRequests = "Body in GET or HEAD requests",
    CRLFCharactersBeforeRequestStart = "CRLF characters before request start",
    CheckMaximumNumberOfHeaders = "Check maximum number of headers",
    CheckMaximumNumberOfParameters = "Check maximum number of parameters",
    ChunkedRequestWithContentLengthHeader = "Chunked request with Content-Length header",
    ContentLengthShouldBeAPositiveNumber = "Content length should be a positive number",
    HeaderNameWithNoHeaderValue = "Header name with no header value",
    HighASCIICharactersInHeaders = "High ASCII characters in headers",
    HostHeaderContainsIPAddress = "Host header contains IP address",
    MultipleHostHeaders = "Multiple host headers",
    NoHostHeaderInHTTP11Request = "No Host header in HTTP/1.1 request",
    NullInRequest = "Null in request",
    POSTRequestWithContentLength0 = "POST request with Content-Length: 0",
    SeveralContentLengthHeaders = "Several Content-Length headers",
    UnescapedSpaceInURL = "Unescaped space in URL",
    UnparsableRequestContent = "Unparsable request content",
}

export interface BlockingSettingsViolation {
    alarm?:       boolean;
    block?:       boolean;
    description?: string;
    learn?:       boolean;
    name?:        string;
}

export interface WebServicesSecurity {
    description: WebServicesSecurityDescription;
    enabled?:    boolean;
    learn?:      boolean;
}

export enum WebServicesSecurityDescription {
    CertificateError = "Certificate Error",
    CertificateExpired = "Certificate Expired",
    DecryptionError = "Decryption Error",
    EncryptionError = "Encryption Error",
    ExpiredTimestamp = "Expired Timestamp",
    InternalError = "Internal Error",
    InvalidTimestamp = "Invalid Timestamp",
    MalformedError = "Malformed Error",
    MissingTimestamp = "Missing Timestamp",
    SigningError = "Signing Error",
    TimestampExpirationIsTooFarInTheFuture = "Timestamp expiration is too far in the future",
    UnSignedTimestamp = "UnSigned Timestamp",
    VerificationError = "Verification Error",
}

export interface BotDefense {
    mitigations?: Mitigations;
    settings?:    Settings;
}

export interface Mitigations {
    classes?:    Class[];
    signatures?: MitigationsSignature[];
}

export interface Class {
    action?: ClassAction;
    name:    ClassName;
}

export enum ClassAction {
    Alarm = "alarm",
    Block = "block",
    Detect = "detect",
    Ignore = "ignore",
}

export enum ClassName {
    Malicious = "malicious",
    Trusted = "trusted",
    Untrusted = "untrusted",
}

/**
 * This section defines the properties of signature on the policy.
 */
export interface MitigationsSignature {
    action?: ClassAction;
    /**
     * The signature name, which along with the signature tag, identifies the signature.
     */
    name?: string;
}

export interface Settings {
    isEnabled?: boolean;
}

/**
 * Defines configuration for Brute Force Protection feature.
 * There is default configuration (one with bruteForceProtectionForAllLoginPages flag and
 * without url) that applies to all configured login URLs unless there exists another brute
 * force configuration for a specific login page.
 */
export interface BruteForceAttackPrevention {
    /**
     * When enabled, enables Brute Force Protection for all configured login URLs.
     * When disabled, only brute force configurations for specific login pages are applied in
     * case they exist.
     */
    bruteForceProtectionForAllLoginPages?: boolean;
    /**
     * Specifies configuration for CAPTCHA Bypass Mitigation.
     */
    captchaBypassCriteria?: CAPTCHABypassCriteria;
    /**
     * Specifies configuration for Client Side Integrity Bypass Mitigation.
     */
    clientSideIntegrityBypassCriteria?: ClientSideIntegrityBypassCriteria;
    /**
     * Specifies configuration for detecting distributed brute force attacks.
     */
    detectionCriteria?: DetectionCriteria;
    /**
     * Specifies configuration for Leaked Credentials Detection.
     */
    leakedCredentialsCriteria?: LeakedCredentialsCriteria;
    /**
     * Specifies configuration for detecting brute force attacks for Device ID.
     */
    loginAttemptsFromTheSameDeviceId?: LoginAttemptsFromTheSameDeviceID;
    /**
     * Specifies configuration for detecting brute force attacks from IP Address.
     */
    loginAttemptsFromTheSameIp?: LoginAttemptsFromTheSameIP;
    /**
     * Specifies configuration for detecting brute force attacks for Username.
     */
    loginAttemptsFromTheSameUser?: LoginAttemptsFromTheSameUser;
    /**
     * Defines detection period (measured in minutes) for distributed brute force attacks.
     */
    measurementPeriod?: number;
    /**
     * Defines prevention period (measured in minutes) for distributed brute force attacks.
     */
    preventionDuration?: PreventionDurationEnum | number;
    /**
     * Defines prevention period (measured in minutes) for source-based brute force attacks.
     */
    reEnableLoginAfter?: number;
    /**
     * Defines detection period (measured in minutes) for source-based brute force attacks.
     */
    sourceBasedProtectionDetectionPeriod?: number;
    /**
     * Reference to the URL used in login URL configuration (policy/login-pages). This login URL
     * is protected by Brute Force Protection feature.
     */
    url: BruteForceAttackPreventionURL;
}

/**
 * Specifies configuration for CAPTCHA Bypass Mitigation.
 */
export interface CAPTCHABypassCriteria {
    /**
     * Specifies action that is applied when defined threshold is reached.
     *
     * - **alarm-and-blocking-page**: The system will log the login attempt, block the request
     * and send the Blocking page.
     * - **alarm-and-drop**: The system will log the login attempt and reset the TCP connection.
     * - **alarm-and-honeypot-page**: The system will log the login attempt, block the request
     * and send the Honeypot page. The Honeypot page is used for attacker deception. The page
     * should look like an application failed login page. Unlike with the Blocking page, when
     * the Honeypot page is sent an attacker is not able to distinguish a failed login response
     * from a mitigation. As a result, the attacker will not change identity (Source IP or
     * Device ID) and the brute force attack will be rendered ineffective. The Honeypot page is
     * recommended when mitigation is request blocking.
     */
    action?: CAPTCHABypassCriteriaAction;
    /**
     * When enabled, the system counts successful CAPTCHA challenges with failed logins from IP
     * Address / Device ID.
     */
    enabled?: boolean;
    /**
     * After configured threshold (number of successful CAPTCHA challenges with failed logins
     * from IP Address / Device ID) defined action will be applied for the next login attempt
     */
    threshold?: number;
}

/**
 * Specifies action that is applied when defined threshold is reached.
 *
 * - **alarm-and-blocking-page**: The system will log the login attempt, block the request
 * and send the Blocking page.
 * - **alarm-and-drop**: The system will log the login attempt and reset the TCP connection.
 * - **alarm-and-honeypot-page**: The system will log the login attempt, block the request
 * and send the Honeypot page. The Honeypot page is used for attacker deception. The page
 * should look like an application failed login page. Unlike with the Blocking page, when
 * the Honeypot page is sent an attacker is not able to distinguish a failed login response
 * from a mitigation. As a result, the attacker will not change identity (Source IP or
 * Device ID) and the brute force attack will be rendered ineffective. The Honeypot page is
 * recommended when mitigation is request blocking.
 */
export enum CAPTCHABypassCriteriaAction {
    AlarmAndBlockingPage = "alarm-and-blocking-page",
    AlarmAndDrop = "alarm-and-drop",
    AlarmAndHoneypotPage = "alarm-and-honeypot-page",
}

/**
 * Specifies configuration for Client Side Integrity Bypass Mitigation.
 */
export interface ClientSideIntegrityBypassCriteria {
    /**
     * Specifies action that is applied when defined threshold is reached.
     *
     * - **alarm-and-captcha**: The system determines whether the client is a legal browser
     * operated by a human user by sending a CAPTCHA challenge. A login attempt is logged if the
     * client successfully passes the CAPTCHA challenge.
     */
    action?: ClientSideIntegrityBypassCriteriaAction;
    /**
     * When enabled, the system counts successful challenges with failed logins from IP Address
     * / Device ID / Username.
     * Legitimate users who have disabled JavaScripting on their browsers for security reasons
     * will fail a client side integrity challenge.
     */
    enabled?: boolean;
    /**
     * After configured threshold (number of successful challenges with failed logins from IP
     * Address / Device ID / Username) defined action will be applied for the next login attempt
     */
    threshold?: number;
}

/**
 * Specifies action that is applied when defined threshold is reached.
 *
 * - **alarm-and-captcha**: The system determines whether the client is a legal browser
 * operated by a human user by sending a CAPTCHA challenge. A login attempt is logged if the
 * client successfully passes the CAPTCHA challenge.
 */
export enum ClientSideIntegrityBypassCriteriaAction {
    AlarmAndCAPTCHA = "alarm-and-captcha",
}

/**
 * Specifies configuration for detecting distributed brute force attacks.
 */
export interface DetectionCriteria {
    /**
     * Specifies action that is applied when one of the defined thresholds
     * (credentialsStuffingMatchesReached, failedLoginAttemptsRateReached) is reached.
     *
     * - **alarm**: The system will log the login attempt.
     * - **alarm-and-captcha**: The system determines whether the client is a legal browser
     * operated by a human user by sending a CAPTCHA challenge. A login attempt is logged if the
     * client successfully passes the CAPTCHA challenge.
     * - **alarm-and-client-side-integrity**: The system determines whether the client is a
     * legal browser or a bot by sending a page containing JavaScript code and waiting for a
     * response. Legal browsers are able to execute JavaScript and produce a valid response,
     * whereas bots cannot. A login attempt is logged if the client successfully passes the
     * Client Side Integrity challenge.
     * - **alarm-and-client-side-integrity-captcha**: The system sends a Client Side Integrity
     * challenge upon the first failed login attempt from a source and a CAPTCHA challenge upon
     * second and all subsequent failed login attempts. A login attempt is logged if client
     * successfully passes the challenge. This enforcement action should be chosen if CAPTCHA is
     * considered intrusive. Benign users who mistype their password will likely get only the
     * Client Side Integrity challenge, while an attacker will eventually get the CAPTCHA
     * challenge.
     */
    action?: DetectionCriteriaAction;
    /**
     * After configured threshold (number of detected login attempts that match known leaked
     * credentials library) defined action will be applied for the next login attempt.
     */
    credentialsStuffingMatchesReached?: number;
    /**
     * When enabled, the system detects login attempts that match known leaked credentials
     * library.
     */
    detectCredentialsStuffingAttack?: boolean;
    /**
     * When enabled, the system detects distributed brute force attacks.
     */
    detectDistributedBruteForceAttack?: boolean;
    /**
     * After configured threshold (number of failed login attempts within measurementPeriod)
     * defined action will be applied for the next login attempt.
     */
    failedLoginAttemptsRateReached?: number;
}

/**
 * Specifies action that is applied when one of the defined thresholds
 * (credentialsStuffingMatchesReached, failedLoginAttemptsRateReached) is reached.
 *
 * - **alarm**: The system will log the login attempt.
 * - **alarm-and-captcha**: The system determines whether the client is a legal browser
 * operated by a human user by sending a CAPTCHA challenge. A login attempt is logged if the
 * client successfully passes the CAPTCHA challenge.
 * - **alarm-and-client-side-integrity**: The system determines whether the client is a
 * legal browser or a bot by sending a page containing JavaScript code and waiting for a
 * response. Legal browsers are able to execute JavaScript and produce a valid response,
 * whereas bots cannot. A login attempt is logged if the client successfully passes the
 * Client Side Integrity challenge.
 * - **alarm-and-client-side-integrity-captcha**: The system sends a Client Side Integrity
 * challenge upon the first failed login attempt from a source and a CAPTCHA challenge upon
 * second and all subsequent failed login attempts. A login attempt is logged if client
 * successfully passes the challenge. This enforcement action should be chosen if CAPTCHA is
 * considered intrusive. Benign users who mistype their password will likely get only the
 * Client Side Integrity challenge, while an attacker will eventually get the CAPTCHA
 * challenge.
 */
export enum DetectionCriteriaAction {
    Alarm = "alarm",
    AlarmAndCAPTCHA = "alarm-and-captcha",
    AlarmAndClientSideIntegrity = "alarm-and-client-side-integrity",
    AlarmAndClientSideIntegrityCAPTCHA = "alarm-and-client-side-integrity-captcha",
}

/**
 * Specifies configuration for Leaked Credentials Detection.
 */
export interface LeakedCredentialsCriteria {
    /**
     * Specifies action when leaked credentials detected.
     *
     * - **alarm**: The system will log the login attempt.
     * - **alarm-and-blocking-page**: The system will log the login attempt, block the request
     * and send the Blocking page.
     * - **alarm-and-honeypot-page**: The system will log the login attempt, block the request
     * and send the Honeypot page. The Honeypot page is used for attacker deception. The page
     * should look like an application failed login page. Unlike with the Blocking page, when
     * the Honeypot page is sent an attacker is not able to distinguish a failed login response
     * from a mitigation. As a result, the attacker will not change identity (Source IP or
     * Device ID) and the brute force attack will be rendered ineffective. The Honeypot page is
     * recommended when mitigation is request blocking.
     * - **alarm-and-leaked-credentials-response-page**: The default response page warns the
     * user that the username and password have been leaked and the password should be changed.
     */
    action?: LeakedCredentialsCriteriaAction;
    /**
     * When enabled, the system can match presented credentials to those in the credentials
     * dictionary to detect leaked credentials.
     */
    enabled?: boolean;
}

/**
 * Specifies action when leaked credentials detected.
 *
 * - **alarm**: The system will log the login attempt.
 * - **alarm-and-blocking-page**: The system will log the login attempt, block the request
 * and send the Blocking page.
 * - **alarm-and-honeypot-page**: The system will log the login attempt, block the request
 * and send the Honeypot page. The Honeypot page is used for attacker deception. The page
 * should look like an application failed login page. Unlike with the Blocking page, when
 * the Honeypot page is sent an attacker is not able to distinguish a failed login response
 * from a mitigation. As a result, the attacker will not change identity (Source IP or
 * Device ID) and the brute force attack will be rendered ineffective. The Honeypot page is
 * recommended when mitigation is request blocking.
 * - **alarm-and-leaked-credentials-response-page**: The default response page warns the
 * user that the username and password have been leaked and the password should be changed.
 */
export enum LeakedCredentialsCriteriaAction {
    Alarm = "alarm",
    AlarmAndBlockingPage = "alarm-and-blocking-page",
    AlarmAndHoneypotPage = "alarm-and-honeypot-page",
    AlarmAndLeakedCredentialsResponsePage = "alarm-and-leaked-credentials-response-page",
}

/**
 * Specifies configuration for detecting brute force attacks for Device ID.
 */
export interface LoginAttemptsFromTheSameDeviceID {
    /**
     * Specifies action that is applied when defined threshold is reached.
     *
     * - **alarm**: The system will log the login attempt.
     * - **alarm-and-blocking-page**: The system will log the login attempt, block the request
     * and send the Blocking page.
     * - **alarm-and-captcha**: The system determines whether the client is a legal browser
     * operated by a human user by sending a CAPTCHA challenge. A login attempt is logged if the
     * client successfully passes the CAPTCHA challenge.
     * - **alarm-and-client-side-integrity**: The system determines whether the client is a
     * legal browser or a bot by sending a page containing JavaScript code and waiting for a
     * response. Legal browsers are able to execute JavaScript and produce a valid response,
     * whereas bots cannot. A login attempt is logged if the client successfully passes the
     * Client Side Integrity challenge.
     * - **alarm-and-drop**: The system will log the login attempt and reset the TCP connection.
     * - **alarm-and-honeypot-page**: The system will log the login attempt, block the request
     * and send the Honeypot page. The Honeypot page is used for attacker deception. The page
     * should look like an application failed login page. Unlike with the Blocking page, when
     * the Honeypot page is sent an attacker is not able to distinguish a failed login response
     * from a mitigation. As a result, the attacker will not change identity (Source IP or
     * Device ID) and the brute force attack will be rendered ineffective. The Honeypot page is
     * recommended when mitigation is request blocking.
     */
    action?: LoginAttemptsFromTheSameDeviceIDAction;
    /**
     * When enabled, the system counts failed login attempts for Device ID.
     */
    enabled?: boolean;
    /**
     * After configured threshold (number of failed login attempts for Device ID) defined action
     * will be applied for the next login attempt.
     */
    threshold?: number;
}

/**
 * Specifies action that is applied when defined threshold is reached.
 *
 * - **alarm**: The system will log the login attempt.
 * - **alarm-and-blocking-page**: The system will log the login attempt, block the request
 * and send the Blocking page.
 * - **alarm-and-captcha**: The system determines whether the client is a legal browser
 * operated by a human user by sending a CAPTCHA challenge. A login attempt is logged if the
 * client successfully passes the CAPTCHA challenge.
 * - **alarm-and-client-side-integrity**: The system determines whether the client is a
 * legal browser or a bot by sending a page containing JavaScript code and waiting for a
 * response. Legal browsers are able to execute JavaScript and produce a valid response,
 * whereas bots cannot. A login attempt is logged if the client successfully passes the
 * Client Side Integrity challenge.
 * - **alarm-and-drop**: The system will log the login attempt and reset the TCP connection.
 * - **alarm-and-honeypot-page**: The system will log the login attempt, block the request
 * and send the Honeypot page. The Honeypot page is used for attacker deception. The page
 * should look like an application failed login page. Unlike with the Blocking page, when
 * the Honeypot page is sent an attacker is not able to distinguish a failed login response
 * from a mitigation. As a result, the attacker will not change identity (Source IP or
 * Device ID) and the brute force attack will be rendered ineffective. The Honeypot page is
 * recommended when mitigation is request blocking.
 */
export enum LoginAttemptsFromTheSameDeviceIDAction {
    Alarm = "alarm",
    AlarmAndBlockingPage = "alarm-and-blocking-page",
    AlarmAndCAPTCHA = "alarm-and-captcha",
    AlarmAndClientSideIntegrity = "alarm-and-client-side-integrity",
    AlarmAndDrop = "alarm-and-drop",
    AlarmAndHoneypotPage = "alarm-and-honeypot-page",
}

/**
 * Specifies configuration for detecting brute force attacks from IP Address.
 */
export interface LoginAttemptsFromTheSameIP {
    /**
     * Specifies action that is applied when defined threshold is reached.
     *
     * - **alarm**: The system will log the login attempt.
     * - **alarm-and-blocking-page**: The system will log the login attempt, block the request
     * and send the Blocking page.
     * - **alarm-and-captcha**: The system determines whether the client is a legal browser
     * operated by a human user by sending a CAPTCHA challenge. A login attempt is logged if the
     * client successfully passes the CAPTCHA challenge.
     * - **alarm-and-client-side-integrity**: The system determines whether the client is a
     * legal browser or a bot by sending a page containing JavaScript code and waiting for a
     * response. Legal browsers are able to execute JavaScript and produce a valid response,
     * whereas bots cannot. A login attempt is logged if the client successfully passes the
     * Client Side Integrity challenge.
     * - **alarm-and-drop**: The system will log the login attempt and reset the TCP connection.
     * - **alarm-and-honeypot-page**: The system will log the login attempt, block the request
     * and send the Honeypot page. The Honeypot page is used for attacker deception. The page
     * should look like an application failed login page. Unlike with the Blocking page, when
     * the Honeypot page is sent an attacker is not able to distinguish a failed login response
     * from a mitigation. As a result, the attacker will not change identity (Source IP or
     * Device ID) and the brute force attack will be rendered ineffective. The Honeypot page is
     * recommended when mitigation is request blocking.
     */
    action?: LoginAttemptsFromTheSameDeviceIDAction;
    /**
     * When enabled, the system counts failed login attempts from IP Address.
     */
    enabled?: boolean;
    /**
     * After configured threshold (number of failed login attempts from IP Address) defined
     * action will be applied for the next login attempt.
     */
    threshold?: number;
}

/**
 * Specifies configuration for detecting brute force attacks for Username.
 */
export interface LoginAttemptsFromTheSameUser {
    /**
     * Specifies action that is applied when defined threshold is reached.
     *
     * - **alarm**: The system will log the login attempt.
     * - **alarm-and-captcha**: The system determines whether the client is a legal browser
     * operated by a human user by sending a CAPTCHA challenge. A login attempt is logged if the
     * client successfully passes the CAPTCHA challenge.
     * - **alarm-and-client-side-integrity**: The system determines whether the client is a
     * legal browser or a bot by sending a page containing JavaScript code and waiting for a
     * response. Legal browsers are able to execute JavaScript and produce a valid response,
     * whereas bots cannot. A login attempt is logged if the client successfully passes the
     * Client Side Integrity challenge.
     */
    action?: LoginAttemptsFromTheSameUserAction;
    /**
     * When enabled, the system counts failed login attempts for each Username.
     */
    enabled?: boolean;
    /**
     * After configured threshold (number of failed login attempts for each Username) defined
     * action will be applied for the next login attempt.
     */
    threshold?: number;
}

/**
 * Specifies action that is applied when defined threshold is reached.
 *
 * - **alarm**: The system will log the login attempt.
 * - **alarm-and-captcha**: The system determines whether the client is a legal browser
 * operated by a human user by sending a CAPTCHA challenge. A login attempt is logged if the
 * client successfully passes the CAPTCHA challenge.
 * - **alarm-and-client-side-integrity**: The system determines whether the client is a
 * legal browser or a bot by sending a page containing JavaScript code and waiting for a
 * response. Legal browsers are able to execute JavaScript and produce a valid response,
 * whereas bots cannot. A login attempt is logged if the client successfully passes the
 * Client Side Integrity challenge.
 */
export enum LoginAttemptsFromTheSameUserAction {
    Alarm = "alarm",
    AlarmAndCAPTCHA = "alarm-and-captcha",
    AlarmAndClientSideIntegrity = "alarm-and-client-side-integrity",
}

export enum PreventionDurationEnum {
    The90000 = "90000",
}

/**
 * Reference to the URL used in login URL configuration (policy/login-pages). This login URL
 * is protected by Brute Force Protection feature.
 *
 * In a security policy, you can manually specify the HTTP URLs that are allowed (or
 * disallowed) in traffic to the web application being protected. If you are using automatic
 * policy building (and the policy includes learning URLs), the system can determine which
 * URLs to add, based on legitimate traffic. When you create a security policy, wildcard
 * URLs of * (representing all HTTP URLs) are added to the Allowed HTTP URLs lists. During
 * the enforcement readiness period, the system examines the URLs in the traffic and makes
 * learning suggestions that you can review and add the URLs to the policy as needed. This
 * way, the security policy includes the HTTP URLs that are typically used. When you think
 * all the URLs are included in the security policy, you can remove the * wildcards from the
 * allowed URLs lists.
 */
export interface BruteForceAttackPreventionURL {
    /**
     * Specifies the conditions for when the browser should allow this URL to be rendered in a
     * frame or iframe.
     * Never: Specifies that this URL must never be rendered in a frame or iframe. The web
     * application instructs browsers to hide, or disable, frame and iframe parts of this URL.
     * Same Origin Only: Specifies that the browser may load the frame or iframe if the
     * referring page is from the same protocol, port, and domain as this URL. This limits the
     * user to navigate only within the same web application.
     * Only From URL: Specifies that the browser may load the frame or iframe from a specified
     * domain. Type the protocol and domain in URL format for example, http://www.mywebsite.com.
     * Do not enter a sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFrames?: AllowRenderingInFrames;
    /**
     * Specifies that the browser may load the frame or iframe from a specified domain. Type the
     * protocol and domain in URL format for example, http://www.mywebsite.com. Do not enter a
     * sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFramesOnlyFrom?: string;
    /**
     * Specifies, when true, that you want attack signatures and threat campaigns to be detected
     * on this URL and possibly override the security policy settings of an attack signature or
     * threat campaign specifically for this URL. After you enable this setting, the system
     * displays a list of attack signatures and threat campaigns.
     */
    attackSignaturesCheck?: boolean;
    canChangeDomainCookie?: boolean;
    /**
     * Specifies that the system adds the X-Frame-Options header to the domain URL's response
     * header. This is done to protect the web application against clickjacking. Clickjacking
     * occurs when an attacker lures a user to click illegitimate frames and iframes because the
     * attacker hid them on legitimate visible website buttons. Therefore, enabling this option
     * protects the web application from other web sites hiding malicious code behind them. The
     * default is disabled. After you enable this option, you can select whether, and under what
     * conditions, the browser should allow this URL to be rendered in a frame or iframe.
     */
    clickjackingProtection?: boolean;
    /**
     * Describes the URL (optional).
     */
    description?:                     string;
    disallowFileUploadOfExecutables?: boolean;
    dynamicFlows?:                    PurpleDynamicFlow[];
    /**
     * The system extracts the Origin (domain) of the request from the Origin header.
     */
    html5CrossOriginRequestsEnforcement?: PurpleHtml5CrossOriginRequestsEnforcement;
    /**
     * If *true*, the URLs allowed by the security policy.
     */
    isAllowed?: boolean;
    /**
     * A request body is mandatory. This is relevant for any method acting as POST.
     */
    mandatoryBody?: boolean;
    /**
     * To allow or disallow specific meta characters in the name of this specific URL (and thus
     * override the global meta character settings).
     */
    metacharOverrides?: PurpleMetacharOverride[];
    /**
     * Specifies, when true, that you want meta characters to be detected on this URL and
     * possibly override the security policy settings of a meta character specifically for this
     * URL. After you enable this setting, the system displays a list of meta characters.
     */
    metacharsOnUrlCheck?: boolean;
    /**
     * Unique ID of a URL with a protocol type and name. Select a Method for the URL to create
     * an API endpoint: URL + Method.
     */
    method?: URLMethod;
    /**
     * Specifies a list of methods that are allowed or disallowed for a specific URL. The list
     * overrides the list of methods allowed or disallowed globally at the policy level.
     */
    methodOverrides?: PurpleMethodOverride[];
    /**
     * Specifies, when true, that you want methods to be detected on this URL and possibly
     * override the security policy settings of a method specifically for this URL. After you
     * enable this setting, the system displays a list of methods.
     */
    methodsOverrideOnUrlCheck?: boolean;
    /**
     * Specifies an HTTP URL that the security policy allows. The available types are:
     *
     * - **Explicit**: Specifies that the URL has a specific name and is not a wildcard entity.
     * Type the name of a URL exactly as you expect it to appear in the request.
     * - **Wildcard**: Specifies that any URL that matches the listed wildcard expression should
     * be treated according to the wildcard attributes. Type a wildcard expression that matches
     * the expected URL. For example, entering the wildcard expression * specifies that any URL
     * is allowed by the security policy.
     * The syntax for wildcard entities is based on shell-style wildcard characters. The list
     * below describes the wildcard characters that you can use so that the entity name can
     * match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Note**: Wildcards do not match regular expressions. Do not use a regular expression as
     * a wildcard.
     */
    name: string;
    /**
     * The attribute operationId is used as an OpenAPI endpint identifier.
     */
    operationId?: string;
    /**
     * If *true* then any violation associated to the respective URL will not be enforced, and
     * the request will not be considered illegal.
     */
    performStaging?: boolean;
    /**
     * When checked (enabled), positional parameters are enabled in the URL.
     */
    positionalParameters?: PurplePositionalParameter[];
    /**
     * Specifies whether the protocol for the URL is HTTP or HTTPS.
     */
    protocol?: URLProtocol;
    /**
     * Array of signature overrides.
     * Specifies attack signatures whose security policy settings are overridden for this URL,
     * and which action the security policy takes when it discovers a request for this URL that
     * matches these attack signatures.
     */
    signatureOverrides?: FluffySignatureOverride[];
    /**
     * Determines the type of the **name** attribute. Only when setting the type to wildcard
     * will the special wildcard characters in the name be interpreted as such.
     */
    type?: HostNameTypeEnum;
    /**
     * Specifies how the system recognizes and enforces requests for this URL according to the
     * requests' header content. The system automatically creates a default header-based content
     * profile for HTTP, and you cannot delete it. However, requests for a URL may contain other
     * types of content, such as JSON, XML, or other proprietary formats.
     */
    urlContentProfiles?: PurpleURLContentProfile[];
    /**
     * Specifies that an asterisk in a wildcard URL matches any number of path segments
     * (separated by slashes); when cleared, specifies that an asterisk matches at most one
     * segment. For example: the wildcard /art/* matches /art/abc/index.html if the wildcard
     * match includes slashes (default value), but does not match it if the check box is
     * cleared. In that case, it matches /art/go.html (only one segment below /art).
     */
    wildcardIncludesSlash?: boolean;
    /**
     * Specifies the order index for wildcard URLs matching. Wildcard URLs with lower wildcard
     * order will get checked for a match prior to URLs with higher wildcard order.
     */
    wildcardOrder?: number;
}

/**
 * Specifies the conditions for when the browser should allow this URL to be rendered in a
 * frame or iframe.
 * Never: Specifies that this URL must never be rendered in a frame or iframe. The web
 * application instructs browsers to hide, or disable, frame and iframe parts of this URL.
 * Same Origin Only: Specifies that the browser may load the frame or iframe if the
 * referring page is from the same protocol, port, and domain as this URL. This limits the
 * user to navigate only within the same web application.
 * Only From URL: Specifies that the browser may load the frame or iframe from a specified
 * domain. Type the protocol and domain in URL format for example, http://www.mywebsite.com.
 * Do not enter a sub-URL, such as http://www.mywebsite.com/index.
 */
export enum AllowRenderingInFrames {
    Never = "never",
    OnlyFrom = "only-from",
    OnlySame = "only-same",
}

export interface PurpleDynamicFlow {
    prefix: string;
    regexp: string;
    suffix: string;
}

/**
 * The system extracts the Origin (domain) of the request from the Origin header.
 */
export interface PurpleHtml5CrossOriginRequestsEnforcement {
    /**
     * Specifies whether requests from other web applications hosted in different domains may
     * include user credentials.
     */
    allowCredentials?: boolean;
    /**
     * Allows you to specify a list of origins allowed to share data returned by this URL.
     */
    allowOriginsEnforcementMode?: AllowOriginsEnforcementMode;
    /**
     * Allows you to specify a list of request headers that other web applications hosted in
     * different domains can use when requesting this URL. Or you can delete non-simple headers
     * returned in response to requests.
     */
    checkAllowedHeaders?: boolean;
    /**
     * Allows you to specify a list of methods that other web applications hosted in different
     * domains can use when requesting this URL.
     */
    checkAllowedMethods?: boolean;
    /**
     * If *false*, requests from other web applications hosted in different domains are not
     * allowed to include user credentials.
     */
    checkCredentials?: boolean;
    /**
     * Optionally, for Exposed Headers, select Replace with, then specify the headers that
     * JavaScript can expose and share with other applications when requesting this URL from
     * another domain.
     * Exposed headers are the headers the server returns in the response. For example, to
     * discover server side web application technology, type X-Powered-By.
     */
    checkExposedHeaders?: boolean;
    /**
     * Optionally, for Maximum Age, select Replace with, then specify the number of seconds that
     * the results of a preflight request can be cached or use the default.
     */
    checkMaximumAge?:          boolean;
    crossDomainAllowedHeader?: PurpleCrossDomainAllowedHeader[];
    /**
     * Allows you to specify a list of methods that other web applications hosted in different
     * domains can use when requesting this URL.
     */
    crossDomainAllowedMethod?: PurpleCrossDomainAllowedMethod[];
    /**
     * Allows you to specify a list of origins allowed to share data returned by this URL.
     */
    crossDomainAllowedOrigin?: PurpleCrossDomainAllowedOrigin[];
    /**
     * Exposed headers are the headers the server returns in the response. For example, to
     * discover server side web application technology, type X-Powered-By.
     */
    crossDomainExposedHeader?: PurpleCrossDomainExposedHeader[];
    /**
     * Specify the option to determine how to handle CORS requests.
     * Disabled: Do nothing related to cross-domain requests. Pass CORS requests exactly as set
     * by the server.
     * Remove all CORS headers: Remove all CORS headers from the response. The response is sent
     * to the browser, and the browser does not allow cross-origin requests.
     * Replace CORS headers: Replace the CORS header in the response with another header
     * specified on the tab, including allowed origins, allowed methods, allowed headers, and so
     * on. The browser enforces the policy. Then after Replace with specify the protocol,
     * origin, and port for replacing CORS headers.
     * Enforce on the system: Allow cross-origin resource sharing as configured in the Allowed
     * Origins setting. CORS requests are allowed from the domains specified as allowed origins.
     * The system enforces the policy. Specify the protocol, origin, and port of allowed origins
     */
    enforcementMode?: PurpleEnforcementMode;
    /**
     * Specifies how long (in seconds) to cache in the browser the results of a preflight
     * request (a special request that the browser sends to your web application to determine if
     * JavaScript from another domain may access your resource).
     */
    maximumAge?: number;
}

/**
 * Allows you to specify a list of origins allowed to share data returned by this URL.
 */
export enum AllowOriginsEnforcementMode {
    ReplaceWith = "replace-with",
    Unmodified = "unmodified",
}

export interface PurpleCrossDomainAllowedHeader {
    /**
     * Optionally, for Allowed Headers, select Replace with, then type the headers that other
     * applications can use when requesting this URL from another domain.
     */
    allowedHeaderName: string;
}

export interface PurpleCrossDomainAllowedMethod {
    /**
     * Optionally, for Allowed Methods, specify which methods other applications may use when
     * requesting this URL from another domain.
     */
    methodName: string;
}

export interface PurpleCrossDomainAllowedOrigin {
    /**
     * If *true*, sub-domains of the allowed origin are also allowed to receive data from your
     * web application.
     */
    includeSubDomains?: boolean;
    /**
     * Type the domain name or IP address with which the URL can share data.
     * Wildcards are allowed in the names. For example: *.f5.com will match b.f5.com; however it
     * will not match a.b.f5.com.
     */
    originName: string;
    /**
     * Select the port that other web applications can use to request data from your web
     * application, or use the * wildcard for all ports.
     */
    originPort: OriginPortEnum | number;
    /**
     * Select the appropriate protocol for the allowed origin.
     */
    originProtocol: OriginProtocol;
}

export enum OriginPortEnum {
    All = "all",
}

/**
 * Select the appropriate protocol for the allowed origin.
 */
export enum OriginProtocol {
    HTTP = "http",
    HTTPHTTPS = "http/https",
    HTTPS = "https",
}

export interface PurpleCrossDomainExposedHeader {
    /**
     * Optionally, for Exposed Headers, select Replace with, then specify the headers that
     * JavaScript can expose and share with other applications when requesting this URL from
     * another domain.
     */
    exposedHeaderName: string;
}

/**
 * Specify the option to determine how to handle CORS requests.
 * Disabled: Do nothing related to cross-domain requests. Pass CORS requests exactly as set
 * by the server.
 * Remove all CORS headers: Remove all CORS headers from the response. The response is sent
 * to the browser, and the browser does not allow cross-origin requests.
 * Replace CORS headers: Replace the CORS header in the response with another header
 * specified on the tab, including allowed origins, allowed methods, allowed headers, and so
 * on. The browser enforces the policy. Then after Replace with specify the protocol,
 * origin, and port for replacing CORS headers.
 * Enforce on the system: Allow cross-origin resource sharing as configured in the Allowed
 * Origins setting. CORS requests are allowed from the domains specified as allowed origins.
 * The system enforces the policy. Specify the protocol, origin, and port of allowed origins
 */
export enum PurpleEnforcementMode {
    Disabled = "disabled",
    Enforce = "enforce",
    RemoveAllHeaders = "remove-all-headers",
    ReplaceHeaders = "replace-headers",
}

export interface PurpleMetacharOverride {
    /**
     * If *true*, metacharacters and other characters are allowed in a URL.
     */
    isAllowed?: boolean;
    /**
     * ASCII representation of the character in Hex format
     */
    metachar: string;
}

/**
 * Unique ID of a URL with a protocol type and name. Select a Method for the URL to create
 * an API endpoint: URL + Method.
 */
export enum URLMethod {
    ACL = "ACL",
    Bcopy = "BCOPY",
    Bdelete = "BDELETE",
    Bmove = "BMOVE",
    Bpropfind = "BPROPFIND",
    Bproppatch = "BPROPPATCH",
    Checkin = "CHECKIN",
    Checkout = "CHECKOUT",
    Connect = "CONNECT",
    Copy = "COPY",
    Delete = "DELETE",
    Empty = "*",
    Get = "GET",
    Head = "HEAD",
    Link = "LINK",
    Lock = "LOCK",
    Merge = "MERGE",
    Mkcol = "MKCOL",
    Mkworkspace = "MKWORKSPACE",
    Move = "MOVE",
    Notify = "NOTIFY",
    Options = "OPTIONS",
    Patch = "PATCH",
    Poll = "POLL",
    Post = "POST",
    Propfind = "PROPFIND",
    Proppatch = "PROPPATCH",
    Put = "PUT",
    RPCInData = "RPC_IN_DATA",
    RPCOutData = "RPC_OUT_DATA",
    Report = "REPORT",
    Search = "SEARCH",
    Subscribe = "SUBSCRIBE",
    Trace = "TRACE",
    Track = "TRACK",
    Unlink = "UNLINK",
    Unlock = "UNLOCK",
    Unsubscribe = "UNSUBSCRIBE",
    VersionControl = "VERSION_CONTROL",
    XMSEnumatts = "X-MS-ENUMATTS",
}

export interface PurpleMethodOverride {
    /**
     * Specifies that the system allows you to override allowed methods for this URL. When
     * selected, the global policy settings for methods are listed, and you can change what is
     * allowed or disallowed for this URL.
     */
    allowed?: boolean;
    /**
     * Specifies a list of existing HTTP methods. All security policies accept standard HTTP
     * methods by default.
     */
    method: MethodOverrideMethod;
}

/**
 * Specifies a list of existing HTTP methods. All security policies accept standard HTTP
 * methods by default.
 */
export enum MethodOverrideMethod {
    ACL = "ACL",
    Bcopy = "BCOPY",
    Bdelete = "BDELETE",
    Bmove = "BMOVE",
    Bpropfind = "BPROPFIND",
    Bproppatch = "BPROPPATCH",
    Checkin = "CHECKIN",
    Checkout = "CHECKOUT",
    Connect = "CONNECT",
    Copy = "COPY",
    Delete = "DELETE",
    Get = "GET",
    Head = "HEAD",
    Link = "LINK",
    Lock = "LOCK",
    Merge = "MERGE",
    Mkcol = "MKCOL",
    Mkworkspace = "MKWORKSPACE",
    Move = "MOVE",
    Notify = "NOTIFY",
    Options = "OPTIONS",
    Patch = "PATCH",
    Poll = "POLL",
    Post = "POST",
    Propfind = "PROPFIND",
    Proppatch = "PROPPATCH",
    Put = "PUT",
    RPCInData = "RPC_IN_DATA",
    RPCOutData = "RPC_OUT_DATA",
    Report = "REPORT",
    Search = "SEARCH",
    Subscribe = "SUBSCRIBE",
    Trace = "TRACE",
    Track = "TRACK",
    Unlink = "UNLINK",
    Unlock = "UNLOCK",
    Unsubscribe = "UNSUBSCRIBE",
    VersionControl = "VERSION_CONTROL",
    XMSEnumatts = "X-MS-ENUMATTS",
}

/**
 * Reference to the URL used in login URL configuration (policy/login-pages). This login URL
 * is protected by Brute Force Protection feature.
 *
 * In a security policy, you can manually specify the HTTP URLs that are allowed (or
 * disallowed) in traffic to the web application being protected. If you are using automatic
 * policy building (and the policy includes learning URLs), the system can determine which
 * URLs to add, based on legitimate traffic. When you create a security policy, wildcard
 * URLs of * (representing all HTTP URLs) are added to the Allowed HTTP URLs lists. During
 * the enforcement readiness period, the system examines the URLs in the traffic and makes
 * learning suggestions that you can review and add the URLs to the policy as needed. This
 * way, the security policy includes the HTTP URLs that are typically used. When you think
 * all the URLs are included in the security policy, you can remove the * wildcards from the
 * allowed URLs lists.
 */
export interface PurpleURL {
    /**
     * Specifies the conditions for when the browser should allow this URL to be rendered in a
     * frame or iframe.
     * Never: Specifies that this URL must never be rendered in a frame or iframe. The web
     * application instructs browsers to hide, or disable, frame and iframe parts of this URL.
     * Same Origin Only: Specifies that the browser may load the frame or iframe if the
     * referring page is from the same protocol, port, and domain as this URL. This limits the
     * user to navigate only within the same web application.
     * Only From URL: Specifies that the browser may load the frame or iframe from a specified
     * domain. Type the protocol and domain in URL format for example, http://www.mywebsite.com.
     * Do not enter a sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFrames?: AllowRenderingInFrames;
    /**
     * Specifies that the browser may load the frame or iframe from a specified domain. Type the
     * protocol and domain in URL format for example, http://www.mywebsite.com. Do not enter a
     * sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFramesOnlyFrom?: string;
    /**
     * Specifies, when true, that you want attack signatures and threat campaigns to be detected
     * on this URL and possibly override the security policy settings of an attack signature or
     * threat campaign specifically for this URL. After you enable this setting, the system
     * displays a list of attack signatures and threat campaigns.
     */
    attackSignaturesCheck?: boolean;
    canChangeDomainCookie?: boolean;
    /**
     * Specifies that the system adds the X-Frame-Options header to the domain URL's response
     * header. This is done to protect the web application against clickjacking. Clickjacking
     * occurs when an attacker lures a user to click illegitimate frames and iframes because the
     * attacker hid them on legitimate visible website buttons. Therefore, enabling this option
     * protects the web application from other web sites hiding malicious code behind them. The
     * default is disabled. After you enable this option, you can select whether, and under what
     * conditions, the browser should allow this URL to be rendered in a frame or iframe.
     */
    clickjackingProtection?: boolean;
    /**
     * Describes the URL (optional).
     */
    description?:                     string;
    disallowFileUploadOfExecutables?: boolean;
    dynamicFlows?:                    PurpleDynamicFlow[];
    /**
     * The system extracts the Origin (domain) of the request from the Origin header.
     */
    html5CrossOriginRequestsEnforcement?: PurpleHtml5CrossOriginRequestsEnforcement;
    /**
     * If *true*, the URLs allowed by the security policy.
     */
    isAllowed?: boolean;
    /**
     * A request body is mandatory. This is relevant for any method acting as POST.
     */
    mandatoryBody?: boolean;
    /**
     * To allow or disallow specific meta characters in the name of this specific URL (and thus
     * override the global meta character settings).
     */
    metacharOverrides?: PurpleMetacharOverride[];
    /**
     * Specifies, when true, that you want meta characters to be detected on this URL and
     * possibly override the security policy settings of a meta character specifically for this
     * URL. After you enable this setting, the system displays a list of meta characters.
     */
    metacharsOnUrlCheck?: boolean;
    /**
     * Unique ID of a URL with a protocol type and name. Select a Method for the URL to create
     * an API endpoint: URL + Method.
     */
    method?: URLMethod;
    /**
     * Specifies a list of methods that are allowed or disallowed for a specific URL. The list
     * overrides the list of methods allowed or disallowed globally at the policy level.
     */
    methodOverrides?: PurpleMethodOverride[];
    /**
     * Specifies, when true, that you want methods to be detected on this URL and possibly
     * override the security policy settings of a method specifically for this URL. After you
     * enable this setting, the system displays a list of methods.
     */
    methodsOverrideOnUrlCheck?: boolean;
    /**
     * Specifies an HTTP URL that the security policy allows. The available types are:
     *
     * - **Explicit**: Specifies that the URL has a specific name and is not a wildcard entity.
     * Type the name of a URL exactly as you expect it to appear in the request.
     * - **Wildcard**: Specifies that any URL that matches the listed wildcard expression should
     * be treated according to the wildcard attributes. Type a wildcard expression that matches
     * the expected URL. For example, entering the wildcard expression * specifies that any URL
     * is allowed by the security policy.
     * The syntax for wildcard entities is based on shell-style wildcard characters. The list
     * below describes the wildcard characters that you can use so that the entity name can
     * match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Note**: Wildcards do not match regular expressions. Do not use a regular expression as
     * a wildcard.
     */
    name: string;
    /**
     * The attribute operationId is used as an OpenAPI endpint identifier.
     */
    operationId?: string;
    /**
     * If *true* then any violation associated to the respective URL will not be enforced, and
     * the request will not be considered illegal.
     */
    performStaging?: boolean;
    /**
     * When checked (enabled), positional parameters are enabled in the URL.
     */
    positionalParameters?: PurplePositionalParameter[];
    /**
     * Specifies whether the protocol for the URL is HTTP or HTTPS.
     */
    protocol?: URLProtocol;
    /**
     * Array of signature overrides.
     * Specifies attack signatures whose security policy settings are overridden for this URL,
     * and which action the security policy takes when it discovers a request for this URL that
     * matches these attack signatures.
     */
    signatureOverrides?: FluffySignatureOverride[];
    /**
     * Determines the type of the **name** attribute. Only when setting the type to wildcard
     * will the special wildcard characters in the name be interpreted as such.
     */
    type?: HostNameTypeEnum;
    /**
     * Specifies how the system recognizes and enforces requests for this URL according to the
     * requests' header content. The system automatically creates a default header-based content
     * profile for HTTP, and you cannot delete it. However, requests for a URL may contain other
     * types of content, such as JSON, XML, or other proprietary formats.
     */
    urlContentProfiles?: PurpleURLContentProfile[];
    /**
     * Specifies that an asterisk in a wildcard URL matches any number of path segments
     * (separated by slashes); when cleared, specifies that an asterisk matches at most one
     * segment. For example: the wildcard /art/* matches /art/abc/index.html if the wildcard
     * match includes slashes (default value), but does not match it if the check box is
     * cleared. In that case, it matches /art/go.html (only one segment below /art).
     */
    wildcardIncludesSlash?: boolean;
    /**
     * Specifies the order index for wildcard URLs matching. Wildcard URLs with lower wildcard
     * order will get checked for a match prior to URLs with higher wildcard order.
     */
    wildcardOrder?: number;
}

/**
 * This section defines parameters that the security policy permits in requests.
 */
export interface PurpleParameter {
    /**
     * Determines whether an empty value is allowed for a parameter.
     */
    allowEmptyValue?: boolean;
    /**
     * Determines whether multiple parameter instances with the same name are allowed in one
     * request.
     */
    allowRepeatedParameterName?: boolean;
    /**
     * Specifies type of serialization for array of primitives parameter.
     * Serialization defines how multiple values are delimited - format that can be transmitted
     * and reconstructed later:
     * - **pipe**: pipe-separated values. Array color=["blue","black"] -> color=blue|black.
     * - **form**: ampersand-separated values. Array color=["blue","black"] ->
     * color=blue,black.
     * - **matrix**: semicolon-prefixed values. Array color=["blue","black"] ->
     * ;color=blue,black.
     * - **tsv**: tab-separated values. Aarray color=["blue","black"] -> color=blue\tblack.
     * - **csv**: comma-separated values. Array color=["blue","black"] -> color=blue,black.
     * - **label**: dot-prefixed values. Array color=["blue","black"] -> .blue.black.
     * - **multi**: multiple parameter instances rather than multiple values. Array
     * color=["blue","black"] -> color=blue&color=black.
     * - **ssv**: space-separated values. Array color=["blue","black"] -> color=blue black.
     * - **multipart**: defines array of files.
     *
     * **Notes**:
     * - This attribute is relevant only for parameters with **array** *valueType*.
     * - **multi** and **form** serializations can be defined for parameter with *query*,
     * *form-data* or *cookie* locations only.
     * - **multipart** serialization can be defined for parameter with *form-data* location
     * only.
     * - **matrix** and **label** serializations can be defined for parameter with *path*
     * location only.
     */
    arraySerializationFormat?: ArraySerializationFormat;
    /**
     * Determines whether items in an array parameter must be unique.
     * This attribute is relevant only for parameters with **array** *valueType*.
     */
    arrayUniqueItemsCheck?: boolean;
    /**
     * Determines whether attack signatures and threat campaigns must be detected in a
     * parameter's value.
     * This attribute is relevant only for parameters with **alpha-numeric** or **binary**
     * *dataType*.
     */
    attackSignaturesCheck?: boolean;
    /**
     * Determines whether an array parameter has a restricted maximum number of items.
     * This attribute is relevant only for parameters with **array** *valueType*.
     */
    checkMaxItemsInArray?: boolean;
    /**
     * Determines whether the parameter has a restricted maximum value.
     * This attribute is relevant only for parameters with **integer** or **decimal** *dataType*.
     */
    checkMaxValue?: boolean;
    /**
     * Determines whether a parameter has a restricted maximum length for value.
     */
    checkMaxValueLength?: boolean;
    /**
     * Determines whether disallowed metacharacters must be detected in a parameter's name.
     * This attribute is relevant only for **wildcard** parameters with **alpha-numeric**
     * *dataType*.
     */
    checkMetachars?: boolean;
    /**
     * Determines whether an array parameter has a restricted minimum number of items.
     * This attribute is relevant only for parameters with **array** *valueType*.
     */
    checkMinItemsInArray?: boolean;
    /**
     * Determines whether a parameter has a restricted minimum value.
     * This attribute is relevant only for parameters with **integer** or **decimal** *dataType*.
     */
    checkMinValue?: boolean;
    /**
     * Determines whether a parameter has a restricted minimum length for value.
     */
    checkMinValueLength?: boolean;
    /**
     * Determines whether a parameter's value is a multiple of a number defined in *multipleOf*.
     * This attribute is relevant only for parameters with **integer** or **decimal** *dataType*.
     */
    checkMultipleOfValue?: boolean;
    contentProfile?:       PurpleContentProfile;
    /**
     * Specifies data type of parameter's value:
     *
     * - **none**: system data type which is used by policy builder and cannot be set manually.
     * - **alpha-numeric**: specifies that the value of parameter can be any text consisting of
     * letters, digits, and the underscore character.
     * - **binary**: specifies there is no text limit for the value of a parameter (length
     * checks only).
     * - **phone**: specifies that the value of a parameter can be text in telephone number
     * format only.
     * - **email**: specifies that the value of a parameter must be text in email format only.
     * - **boolean**: specifies that the value of a parameter must be boolean (only *true* and
     * *false* values are allowed).
     * - **integer**: specifies that the value of a parameter must be whole numbers only (no
     * decimals).
     * - **decimal**: specifies that the value of a parameter is numbers only and can include
     * decimals.
     *
     * **Notes**:
     * -  This attribute is relevant for parameters with **array** or **user-input** *valueType*
     * only.
     */
    dataType?: DataType;
    /**
     * Determines whether a parameter's value cannot have binary executable content.
     * This attribute is relevant only for parameters with **binary** *dataType*.
     */
    disallowFileUploadOfExecutables?: boolean;
    /**
     * Determines whether the parameter value includes the pattern defined in
     * *regularExpression*.
     * This attribute is relevant only for parameters with **alpha-numeric** *dataType*.
     */
    enableRegularExpression?: boolean;
    /**
     * Determines whether the maximum value defined in *maximumValue* attribute is exclusive.
     * This attribute is relevant only if *checkMaxValue* is set to **true**.
     */
    exclusiveMax?: boolean;
    /**
     * Determines whether a minimum value defined in *minimumValue* attribute is exclusive.
     * This attribute is relevant only if *checkMinValue* is set to **true**.
     */
    exclusiveMin?: boolean;
    /**
     * Specifies whether an array or object parameters should have separate values for each
     * array item or object property.
     * This attribute is relevant only if *objectSerializationStyle* is defined.
     *
     * **Notes**:
     * -  This attribute is not relevant for parameters with **deep-object**,
     * **space-delimited** or **pipe-delimited** *objectSerializationStyle*.
     */
    explodeObjectSerialization?: boolean;
    /**
     * Determines whether a parameter's value contains a Base64 encoded string.
     * If the value is indeed Base64 encoded, the system decodes this value and continues with
     * its security checks.
     * This attribute is relevant only for parameters with **alpha-numeric** or **binary**
     * *dataType*.
     */
    isBase64?: boolean;
    /**
     * Determines whether a parameter is located in the value of Cookie header.
     * *parameterLocation* attribute is ignored if **isCookie** is set to *true*.
     */
    isCookie?: boolean;
    /**
     * Determines whether a parameter is located in headers as one of the headers.
     * *parameterLocation* attribute is ignored if **isHeader** is set to *true*.
     */
    isHeader?: boolean;
    /**
     * Specifies whether the parameter is associated with a URL, a flow, or neither.
     */
    level?: Level;
    /**
     * Determines whether a parameter must exist in the request.
     */
    mandatory?: boolean;
    /**
     * Determines the restriction for the maximum length of parameter's value.
     * This attribute is relevant only if *checkMaxValueLength* is set to **true**.
     */
    maximumLength?: number;
    /**
     * Determines the restriction for the maximum value of parameter.
     * This attribute is relevant only if *checkMaxValue* is set to **true**.
     */
    maximumValue?: number;
    /**
     * Determines the restriction forthe  maximum number of items in an array parameter.
     * This attribute is relevant only if *checkMaxItemsInArray* is set to **true**.
     */
    maxItemsInArray?: number;
    /**
     * Determines whether disallowed metacharacters must be detected in a parameter's value.
     * This attribute is relevant only for parameters with **alpha-numeric** *dataType*.
     */
    metacharsOnParameterValueCheck?: boolean;
    /**
     * Determines the restriction for the minimum length of parameter's value.
     * This attribute is relevant only if *checkMinValueLength* is set to **true**.
     */
    minimumLength?: number;
    /**
     * Determines the restriction for the minimum value of a parameter.
     * This attribute is relevant only if *checkMinValue* is set to **true**.
     */
    minimumValue?: number;
    /**
     * Determines the restriction for the minimum number of items in an array parameter.
     * This attribute is relevant only if *checkMinItemsInArray* is set to **true**.
     */
    minItemsInArray?: number;
    /**
     * Determines the number by which a parameter's value is divisible without remainder.
     * This number must be positive and it may be a floating-point number.
     * This attribute is relevant only if *checkMultipleOfValue* is set to **true**.
     */
    multipleOf?: number;
    /**
     * Specifies the name of a parameter which must be permitted in requests.
     * Format of parameter name attribute differs depending on *type* attribute:
     * - **explicit** *type*: name of permitted parameter in request should literally match.
     * - **wildcard** *type*: name of permitted parameter in request should match wildcard
     * expression.
     *
     * The syntax for wildcard entities is based on shell-style wildcard characters.
     * The list below describes the wildcard characters that you can use so that the entity name
     * can match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Notes**:
     * - Wildcards do not match regular expressions. Do not use a regular expression as a
     * wildcard.
     * - Empty parameter name is allowed for **explicit** *type*
     */
    name: string;
    /**
     * Determines metacharacters whose security policy settings are overridden for this
     * parameter, and which action the security policy takes when it discovers a request for
     * this parameter that has these metacharacters in the name.
     * This attribute is relevant only if *checkMetachars* is set to **true**.
     */
    nameMetacharOverrides?: PurpleNameMetacharOverride[];
    /**
     * Specifies the type of serialization for an object or complex array parameter.
     * Serialization defines how multiple values are delimited - format that can be transmitted
     * and reconstructed later:
     * - **pipe-delimited**: pipe-separated values. Object color={"R":100,"G":200} ->
     * color=R|100|G|200.
     * - **form**: ampersand-separated values. Object color={"R":100,"G":200} ->
     * color=R,100,G,200 if *explodeObjectSerialization* set to **false** or -> R=100&G=200 if
     * *explodeObjectSerialization* set to **true**.
     * - **space-delimited**: space-separated values. Object color={"R":100,"G":200} -> color=R
     * 100 G 200.
     * - **deep-object**: rendering nested objects. Object color={"R":100,"G":200} ->
     * color[R]=100&color[G]=200.
     * - **matrix**: semicolon-prefixed values. Object color={"R":100,"G":200} ->
     * ;color=R,100,G,200 if *explodeObjectSerialization* set to **false** or -> ;R=100;G=200 if
     * *explodeObjectSerialization* set to **true**.
     * - **simple**: comma-separated values. Object color={"R":100,"G":200} -> R,100,G,200 if
     * *explodeObjectSerialization* set to **false** or -> R=100,G=200 if
     * *explodeObjectSerialization* set to **true**.
     * - **label**: dot-prefixed values. Object color={"R":100,"G":200} -> .R.100.G.200 if
     * *explodeObjectSerialization* set to **false** or -> .R=100.G=200 if
     * *explodeObjectSerialization* set to **true**.
     *
     * **Notes**:
     * - This attribute is relevant only for parameters with **object** or **openapi-array**
     * *valueType*.
     * - **form** serialization can be defined for a parameter with *query*, *form-data* or
     * *cookie* locations only.
     * - **matrix** and **label** serializations can be defined for an array parameter with
     * *path* location only.
     * - **simple** serializations can be defined for a parameter with *path* and *header*
     * locations only.
     * - **deep-object** serialization can be defined for a parameter with *query* or
     * *form-data* locations only.
     */
    objectSerializationStyle?: ObjectSerializationStyle;
    /**
     * Determines the set of possible parameter's values.
     * This attribute is not relevant for parameters with **phone**, **email** or **binary**
     * *dataType*.
     */
    parameterEnumValues?: string[];
    /**
     * Specifies location of parameter in request:
     *
     * - **any**: in query string, in POST data (body) or in URL path.
     * - **query**: in query string.
     * - **form-data**: in POST data (body).
     * - **cookie**: in value of Cookie header.
     * - **path**: in URL path.
     * - **header**: in request headers.
     *
     * **Notes**:
     * - **path** location can be defined for parameter with **global** *level* only.
     * - **path**, **header** and **cookie** location can be defined for parameter with
     * **explicit** *type* only.
     * - **header** and **cookie** location cannot be defined for parameter with empty *name*.
     */
    parameterLocation?: ParameterLocation;
    /**
     * Determines the staging state of a parameter.
     * If you place an entity in staging, the system does not block requests for this entity.
     *
     * Tip: Use staging on wildcard entities to build the security policy without explicit
     * entities of this type, rather than configuring the wildcard entity itself to be enforced
     * with the settings found on it.
     */
    performStaging?: boolean;
    /**
     * Determines a positive regular expression (PCRE) for a parameter's value.
     * This attribute is relevant only if *enableRegularExpression* is set to **true**.
     *
     * **Notes**:
     * - The length of a regular expression is limited to 254 characters.
     */
    regularExpression?: string;
    /**
     * Determines whether a parameter is sensitive and must be not visible in logs nor in the
     * user interface.
     * Instead of actual valu,e a string of asterisks is shown for this parameter.
     * Use it to protect sensitive user input, such as a password or a credit card number, in a
     * validated request.
     */
    sensitiveParameter?: boolean;
    /**
     * Determines attack signatures whose security policy settings are overridden for this
     * parameter, and which action the security policy takes when it discovers a request for
     * this parameter that matches these attack signatures.
     * This attribute is relevant only if *signatureOverrides* is set to **true**.
     */
    signatureOverrides?: PurpleSignatureOverride[];
    /**
     * Determines the set of possible parameter's values.
     * This attribute is relevant for parameters with **static-content** *valueType* only.
     */
    staticValues?: string[];
    /**
     * Specifies the type of the *name* attribute.
     */
    type?: HostNameTypeEnum;
    url?:  PurpleURL;
    /**
     * Determines metacharacters whose security policy settings are overridden for this
     * parameter, and which action the security policy takes when it discovers a request for
     * this parameter that has these metacharacters in value.
     * This attribute is relevant only if *metacharsOnParameterValueCheck* is set to **true**.
     */
    valueMetacharOverrides?: PurpleValueMetacharOverride[];
    /**
     * Specifies type of parameter's value:
     *
     * - **object**: the parameter's value is complex object defined by JSON schema.
     * - **dynamic-content**: the parameter's content changes dynamically.
     * - **openapi-array**: the parameter's value is complex array defined by JSON schema.
     * - **ignore**: the system does not perform validity checks on the value of the parameter.
     * - **static-content**: the parameter has a static, or pre-defined, value(s).
     * - **json**: the parameter's value is JSON data.
     * - **array**: the parameter's value is array of primitives.
     * - **user-input**: the parameter's value is provided by user-input.
     * - **xml**: the parameter's value is XML data.
     * - **auto-detect**: the parameter's value can be user-inpur, XML data or JSON data. The
     * system automatically classifies the type of value.
     * - **dynamic-parameter-name**: the parameter's name changes dynamically.
     *
     * **Notes**:
     * - **dynamic-parameter-name** value type can be defined for a parameter with **flow**
     * *level* and **explicit** *type* only.
     * - **dynamic-content** value type can be defined for a parameter with **explicit** *type*
     * only.
     */
    valueType?: ValueType;
    /**
     * Specifies the order in which wildcard entities are organized.
     * Matching of an enforced parameter with a defined wildcard parameter happens based on
     * order from smaller to larger.
     */
    wildcardOrder?: number;
}

export interface PurplePositionalParameter {
    parameter: PurpleParameter;
    /**
     * Select which to add: Text or Parameter and enter your desired segments. You can add
     * multiple text and parameter segments.
     */
    urlSegmentIndex: number;
}

/**
 * Specifies whether the protocol for the URL is HTTP or HTTPS.
 */
export enum URLProtocol {
    HTTP = "http",
    HTTPS = "https",
}

export interface FluffySignatureOverride {
    /**
     * Specifies, when true, that the overridden signature is enforced
     */
    enabled?: boolean;
    /**
     * The signature name, which along with the signature tag, identifies the signature.
     */
    name?: string;
    /**
     * The signature ID which identifies the signature.
     */
    signatureId?: number;
    /**
     * The signature tag, which along with the signature name, identifies the signature.
     */
    tag?: string;
}

/**
 * Specifies the type of the *name* attribute.
 *
 * Determines the type of the **name** attribute. Only when setting the type to wildcard
 * will the special wildcard characters in the name be interpreted as such.
 *
 * Determines the type of the **name** attribute.
 * Only when setting the type to wildcard will the special wildcard characters in the name
 * interpreted as such.
 *
 * Determines the type of the **name** attribute. Only when setting the type to wildcard
 * will the special wildcard characters in the name interpreted as such.
 */
export enum HostNameTypeEnum {
    Explicit = "explicit",
    Wildcard = "wildcard",
}

export interface PurpleURLContentProfile {
    contentProfile?: TentacledContentProfile;
    /**
     * Specifies an explicit header name that must appear in requests for this URL. This field
     * is not case-sensitive.
     */
    headerName: string;
    /**
     * Displays the order in which the system checks header content of requests for this URL.
     */
    headerOrder?: HeaderOrderEnum | number;
    /**
     * Specifies a simple pattern string (glob pattern matching) for the header value that must
     * appear in legal requests for this URL; for example, *json*, xml_method?, or method[0-9].
     * If the header includes this pattern, the system assumes the request contains the type of
     * data you select in the Request Body Handling setting. This field is case-sensitive.
     */
    headerValue: string;
    /**
     * Apply Content Signatures: Do not parse the content; scan the entire payload with
     * full-content attack signatures.
     * Apply Value and Content Signatures: Do not parse the content or extract parameters;
     * process the entire payload with value and full-content attack signatures.
     * Disallow: Block requests for an URL containing this header content. Log the Illegal
     * Request Content Type violation.
     * Do Nothing: Do not inspect or parse the content. Handle the header of the request as
     * specified by the security policy.
     * Form Data: Parse content as posted form data in either URL-encoded or multi-part formats.
     * Enforce the form parameters according to the policy.
     * GWT: Perform checks for data in requests, based on the configuration of the GWT (Google
     * Web Toolkit) profile associated with this URL.
     * JSON: Review JSON data using an associated JSON profile, and use value attack signatures
     * to scan the element values.
     * XML: Review XML data using an associated XML profile.
     */
    type?: URLContentProfileType;
}

export interface TentacledContentProfile {
    name?: string;
}

export enum HeaderOrderEnum {
    Default = "default",
}

/**
 * Apply Content Signatures: Do not parse the content; scan the entire payload with
 * full-content attack signatures.
 * Apply Value and Content Signatures: Do not parse the content or extract parameters;
 * process the entire payload with value and full-content attack signatures.
 * Disallow: Block requests for an URL containing this header content. Log the Illegal
 * Request Content Type violation.
 * Do Nothing: Do not inspect or parse the content. Handle the header of the request as
 * specified by the security policy.
 * Form Data: Parse content as posted form data in either URL-encoded or multi-part formats.
 * Enforce the form parameters according to the policy.
 * GWT: Perform checks for data in requests, based on the configuration of the GWT (Google
 * Web Toolkit) profile associated with this URL.
 * JSON: Review JSON data using an associated JSON profile, and use value attack signatures
 * to scan the element values.
 * XML: Review XML data using an associated XML profile.
 */
export enum URLContentProfileType {
    ApplyContentSignatures = "apply-content-signatures",
    ApplyValueAndContentSignatures = "apply-value-and-content-signatures",
    Disallow = "disallow",
    DoNothing = "do-nothing",
    FormData = "form-data",
    GWT = "gwt",
    JSON = "json",
    XML = "xml",
}

/**
 * Specifies type of serialization for array of primitives parameter.
 * Serialization defines how multiple values are delimited - format that can be transmitted
 * and reconstructed later:
 * - **pipe**: pipe-separated values. Array color=["blue","black"] -> color=blue|black.
 * - **form**: ampersand-separated values. Array color=["blue","black"] ->
 * color=blue,black.
 * - **matrix**: semicolon-prefixed values. Array color=["blue","black"] ->
 * ;color=blue,black.
 * - **tsv**: tab-separated values. Aarray color=["blue","black"] -> color=blue\tblack.
 * - **csv**: comma-separated values. Array color=["blue","black"] -> color=blue,black.
 * - **label**: dot-prefixed values. Array color=["blue","black"] -> .blue.black.
 * - **multi**: multiple parameter instances rather than multiple values. Array
 * color=["blue","black"] -> color=blue&color=black.
 * - **ssv**: space-separated values. Array color=["blue","black"] -> color=blue black.
 * - **multipart**: defines array of files.
 *
 * **Notes**:
 * - This attribute is relevant only for parameters with **array** *valueType*.
 * - **multi** and **form** serializations can be defined for parameter with *query*,
 * *form-data* or *cookie* locations only.
 * - **multipart** serialization can be defined for parameter with *form-data* location
 * only.
 * - **matrix** and **label** serializations can be defined for parameter with *path*
 * location only.
 */
export enum ArraySerializationFormat {
    CSV = "csv",
    Form = "form",
    Label = "label",
    Matrix = "matrix",
    Multi = "multi",
    Multipart = "multipart",
    Pipe = "pipe",
    Ssv = "ssv",
    Tsv = "tsv",
}

export interface PurpleContentProfile {
    contentProfile?: FluffyContentProfile;
}

export interface FluffyContentProfile {
    name?: string;
}

/**
 * Specifies data type of parameter's value:
 *
 * - **none**: system data type which is used by policy builder and cannot be set manually.
 * - **alpha-numeric**: specifies that the value of parameter can be any text consisting of
 * letters, digits, and the underscore character.
 * - **binary**: specifies there is no text limit for the value of a parameter (length
 * checks only).
 * - **phone**: specifies that the value of a parameter can be text in telephone number
 * format only.
 * - **email**: specifies that the value of a parameter must be text in email format only.
 * - **boolean**: specifies that the value of a parameter must be boolean (only *true* and
 * *false* values are allowed).
 * - **integer**: specifies that the value of a parameter must be whole numbers only (no
 * decimals).
 * - **decimal**: specifies that the value of a parameter is numbers only and can include
 * decimals.
 *
 * **Notes**:
 * -  This attribute is relevant for parameters with **array** or **user-input** *valueType*
 * only.
 */
export enum DataType {
    AlphaNumeric = "alpha-numeric",
    Binary = "binary",
    Boolean = "boolean",
    Decimal = "decimal",
    Email = "email",
    Integer = "integer",
    None = "none",
    Phone = "phone",
}

/**
 * Specifies whether the parameter is associated with a URL, a flow, or neither.
 */
export enum Level {
    Flow = "flow",
    Global = "global",
    URL = "url",
}

export interface PurpleNameMetacharOverride {
    /**
     * Specifies permission of *metachar* - when *false*, then character is prohibited.
     */
    isAllowed?: boolean;
    /**
     * Specifies character in hexadecimal format with special allowance.
     */
    metachar: string;
}

/**
 * Specifies the type of serialization for an object or complex array parameter.
 * Serialization defines how multiple values are delimited - format that can be transmitted
 * and reconstructed later:
 * - **pipe-delimited**: pipe-separated values. Object color={"R":100,"G":200} ->
 * color=R|100|G|200.
 * - **form**: ampersand-separated values. Object color={"R":100,"G":200} ->
 * color=R,100,G,200 if *explodeObjectSerialization* set to **false** or -> R=100&G=200 if
 * *explodeObjectSerialization* set to **true**.
 * - **space-delimited**: space-separated values. Object color={"R":100,"G":200} -> color=R
 * 100 G 200.
 * - **deep-object**: rendering nested objects. Object color={"R":100,"G":200} ->
 * color[R]=100&color[G]=200.
 * - **matrix**: semicolon-prefixed values. Object color={"R":100,"G":200} ->
 * ;color=R,100,G,200 if *explodeObjectSerialization* set to **false** or -> ;R=100;G=200 if
 * *explodeObjectSerialization* set to **true**.
 * - **simple**: comma-separated values. Object color={"R":100,"G":200} -> R,100,G,200 if
 * *explodeObjectSerialization* set to **false** or -> R=100,G=200 if
 * *explodeObjectSerialization* set to **true**.
 * - **label**: dot-prefixed values. Object color={"R":100,"G":200} -> .R.100.G.200 if
 * *explodeObjectSerialization* set to **false** or -> .R=100.G=200 if
 * *explodeObjectSerialization* set to **true**.
 *
 * **Notes**:
 * - This attribute is relevant only for parameters with **object** or **openapi-array**
 * *valueType*.
 * - **form** serialization can be defined for a parameter with *query*, *form-data* or
 * *cookie* locations only.
 * - **matrix** and **label** serializations can be defined for an array parameter with
 * *path* location only.
 * - **simple** serializations can be defined for a parameter with *path* and *header*
 * locations only.
 * - **deep-object** serialization can be defined for a parameter with *query* or
 * *form-data* locations only.
 */
export enum ObjectSerializationStyle {
    DeepObject = "deep-object",
    Form = "form",
    Label = "label",
    Matrix = "matrix",
    PipeDelimited = "pipe-delimited",
    Simple = "simple",
    SpaceDelimited = "space-delimited",
}

/**
 * Specifies location of parameter in request:
 *
 * - **any**: in query string, in POST data (body) or in URL path.
 * - **query**: in query string.
 * - **form-data**: in POST data (body).
 * - **cookie**: in value of Cookie header.
 * - **path**: in URL path.
 * - **header**: in request headers.
 *
 * **Notes**:
 * - **path** location can be defined for parameter with **global** *level* only.
 * - **path**, **header** and **cookie** location can be defined for parameter with
 * **explicit** *type* only.
 * - **header** and **cookie** location cannot be defined for parameter with empty *name*.
 */
export enum ParameterLocation {
    Any = "any",
    Cookie = "cookie",
    FormData = "form-data",
    Header = "header",
    Path = "path",
    Query = "query",
}

export interface PurpleSignatureOverride {
    /**
     * Specifies, when true, that the overridden signature is enforced
     */
    enabled?: boolean;
    /**
     * The signature name, which along with the signature tag, identifies the signature.
     */
    name?: string;
    /**
     * The signature ID which identifies the signature.
     */
    signatureId?: number;
    /**
     * The signature tag, which along with the signature name, identifies the signature.
     */
    tag?: string;
}

export interface PurpleValueMetacharOverride {
    /**
     * Specifies permission of *metachar* - when *false*, then character is prohibited.
     */
    isAllowed?: boolean;
    /**
     * Specifies character in hexadecimal format with special allowance.
     */
    metachar: string;
}

/**
 * Specifies type of parameter's value:
 *
 * - **object**: the parameter's value is complex object defined by JSON schema.
 * - **dynamic-content**: the parameter's content changes dynamically.
 * - **openapi-array**: the parameter's value is complex array defined by JSON schema.
 * - **ignore**: the system does not perform validity checks on the value of the parameter.
 * - **static-content**: the parameter has a static, or pre-defined, value(s).
 * - **json**: the parameter's value is JSON data.
 * - **array**: the parameter's value is array of primitives.
 * - **user-input**: the parameter's value is provided by user-input.
 * - **xml**: the parameter's value is XML data.
 * - **auto-detect**: the parameter's value can be user-inpur, XML data or JSON data. The
 * system automatically classifies the type of value.
 * - **dynamic-parameter-name**: the parameter's name changes dynamically.
 *
 * **Notes**:
 * - **dynamic-parameter-name** value type can be defined for a parameter with **flow**
 * *level* and **explicit** *type* only.
 * - **dynamic-content** value type can be defined for a parameter with **explicit** *type*
 * only.
 */
export enum ValueType {
    Array = "array",
    AutoDetect = "auto-detect",
    DynamicContent = "dynamic-content",
    DynamicParameterName = "dynamic-parameter-name",
    Ignore = "ignore",
    JSON = "json",
    Object = "object",
    OpenapiArray = "openapi-array",
    StaticContent = "static-content",
    UserInput = "user-input",
    XML = "xml",
}

export interface CharacterSet {
    characterSet?:    CharacterSetElement[];
    characterSetType: CharacterSetType;
}

export interface CharacterSetElement {
    isAllowed?: boolean;
    metachar:   string;
}

export enum CharacterSetType {
    GWTContent = "gwt-content",
    Header = "header",
    JSONContent = "json-content",
    ParameterName = "parameter-name",
    ParameterValue = "parameter-value",
    PlainTextContent = "plain-text-content",
    URL = "url",
    XMLContent = "xml-content",
}

/**
 * The maximum length of a cookie header name and value that the system processes. The
 * system calculates and enforces a cookie header length based on the sum of the length of
 * the cookie header name and value.
 */
export interface CookieSettings {
    /**
     * Maximum Cookie Header Length must be greater than 0 and less than 65536 bytes (64K).
     * Note: if 0 or *any* are set, then no restriction on the cookie header length is applied.
     */
    maximumCookieHeaderLength?: MaximumCookieHeaderLengthEnum | number;
}

export enum MaximumCookieHeaderLengthEnum {
    Any = "any",
}

/**
 * This section defines Cookie entities for your policy.
 * You can specify the cookies that you want to allow, and the ones you want to enforce in a
 * security policy:
 * - **Allowed cookies**: The system allows these cookies and clients can change them.
 * - **Enforced cookies**: The system enforces the cookies in the list
 * (not allowing clients to change them) and allows clients to change all others.
 */
export interface Cooky {
    /**
     * Specifies, when true, that the system adds the HttpOnly attribute to the domain cookie's
     * response header.
     * This is done to expose the cookie to only HTTP and HTTPS entities.
     * This prevents the cookie from being modified, or intercepted even if it is not modified,
     * by unwanted third parties that run scripts on the web page.
     *
     * **Notes**:
     * - The system does not validate that the cookie has not been modified or intercepted.
     * - The feature covers all security policy cookies, both enforced and allowed, explicit and
     * wildcard.
     */
    accessibleOnlyThroughTheHttpProtocol?: boolean;
    /**
     * Specifies, when true, that you want attack signatures and threat campaigns to be detected
     * on this cookie
     * and possibly override the security policy settings of an attack signature or threat
     * campaign specifically for this cookie.
     * After you enable this setting, the system displays a list of attack signatures and threat
     * campaigns.
     */
    attackSignaturesCheck?: boolean;
    /**
     * Specifies how the system treats this cookie.
     *
     * - **enforced**: Specifies that according to the security policy, this cookie may not be
     * changed by the client.
     * - **allowed**: Specifies that according to the security policy, this cookie may be
     * changed by the client. The system ignores this cookie.
     */
    enforcementType?: EnforcementType;
    /**
     * The introduction of the SameSite http attribute (defined in
     * [RFC6265bis](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00))
     * allows you to declare if your cookie should be restricted to a first-party or same-site
     * context.
     * Introducing the SameSite attribute on a cookie provides three different ways of
     * controlling same-site vs. cross-site cookie sending:
     *
     * - **strict**: Cookie will only be sent in a first-party context. In user terms, the
     * cookie will only be sent if the site for the cookie matches the site currently shown in
     * the browser's URL bar.
     * - **lax**: Cookies will be sent with top level navigation
     * - **none-value**: Cookies will be sent in a third-party context.
     */
    insertSameSiteAttribute?: InsertSameSiteAttribute;
    /**
     * You can enable the security policy to check whether cookie values contain a Base64
     * encoded string.
     * If the value is indeed Base64 encoded, the system decodes this value and continues with
     * its security checks.
     * Specifies, when true, that the security policy checks the cookie's value for Base64
     * encoding, and decodes the value.
     *
     * **Note**: This setting is only available if Cookie Type is set to Allowed.
     */
    isBase64?: boolean;
    /**
     * Specifies, when true, that the cookie's value will be masked in the request log
     */
    maskValueInLogs?: boolean;
    /**
     * Specifies the cookie name as appearing in the http cookie header.
     * The cookie name length is limited to 500 characters.
     *
     * Names can be one of the following according to the *type* attribute:
     *
     * - **explicit**: Specifies that the cookie has a specific name and is not a wildcard
     * entity. Type the name of a cookie exactly as you expect it to appear in the request.
     * - **wildcard**: Specifies that any cookie that matches the listed wildcard expression
     * should be treated according to the wildcard attributes. Type a wildcard expression that
     * matches the expected cookie. For example, the wildcard expression cookie_12* of type
     * Enforced specifies that the security policy should not allow modified domain cookies for
     * all cookies which match cookie_12*.
     *
     * The syntax for wildcard entities is based on shell-style wildcard characters.
     * The list below describes the wildcard characters that you can use so that the entity name
     * can match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Note**: Wildcards do not match regular expressions. Do not use a regular expression as
     * a wildcard.
     */
    name: string;
    /**
     * If *true* then any violation associated to the respective cookie will not be enforced,
     * and the request will not be considered illegal.
     */
    performStaging?: boolean;
    /**
     * Specifies, when true, that the system adds the Secure attribute to the domain cookie's
     * response header.
     * This is done to ensure that the cookies are returned to the server only over SSL (by
     * using the HTTPS protocol).
     * This prevents the cookie from being intercepted, but does not guarantee its integrity.
     *
     * **Notes**:
     * - The system does not validate that the cookie was received over SSL.
     * - The feature covers all security policy cookies, both enforced and allowed, explicit and
     * wildcard.
     */
    securedOverHttpsConnection?: boolean;
    /**
     * Array of signature overrides.
     * Specifies attack signatures whose security policy settings are overridden for this
     * cookie,
     * and which action the security policy takes when it discovers a request for this cookie
     * that matches these attack signatures.
     */
    signatureOverrides?: CookySignatureOverride[];
    /**
     * Determines the type of the **name** attribute.
     * Only when setting the type to wildcard will the special wildcard characters in the name
     * interpreted as such.
     */
    type?: HostNameTypeEnum;
    /**
     * Specifies the order index for wildcard cookies matching.
     * Wildcard cookies with lower wildcard order will get checked for a match prior to cookies
     * with higher wildcard order.
     */
    wildcardOrder?: number;
}

/**
 * Specifies how the system treats this cookie.
 *
 * - **enforced**: Specifies that according to the security policy, this cookie may not be
 * changed by the client.
 * - **allowed**: Specifies that according to the security policy, this cookie may be
 * changed by the client. The system ignores this cookie.
 */
export enum EnforcementType {
    Allow = "allow",
    Enforce = "enforce",
}

/**
 * The introduction of the SameSite http attribute (defined in
 * [RFC6265bis](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00))
 * allows you to declare if your cookie should be restricted to a first-party or same-site
 * context.
 * Introducing the SameSite attribute on a cookie provides three different ways of
 * controlling same-site vs. cross-site cookie sending:
 *
 * - **strict**: Cookie will only be sent in a first-party context. In user terms, the
 * cookie will only be sent if the site for the cookie matches the site currently shown in
 * the browser's URL bar.
 * - **lax**: Cookies will be sent with top level navigation
 * - **none-value**: Cookies will be sent in a third-party context.
 */
export enum InsertSameSiteAttribute {
    Lax = "lax",
    None = "none",
    NoneValue = "none-value",
    Strict = "strict",
}

export interface CookySignatureOverride {
    /**
     * Specifies, when true, that the overridden signature is enforced
     */
    enabled?: boolean;
    /**
     * The signature name, which along with the signature tag, identifies the signature.
     */
    name?: string;
    /**
     * The signature ID which identifies the signature.
     */
    signatureId?: number;
    /**
     * The signature tag, which along with the signature name, identifies the signature.
     */
    tag?: string;
}

export interface CSRFProtection {
    enabled?:                 boolean;
    expirationTimeInSeconds?: ExpirationTime | number;
    sslOnly?:                 boolean;
}

export enum ExpirationTime {
    Disabled = "disabled",
}

export interface CSRFURL {
    enforcementAction?:  EnforcementAction;
    method?:             CSRFURLMethod;
    parametersList?:     string[];
    requiredParameters?: RequiredParameters;
    url:                 string;
    wildcardOrder?:      number;
}

export enum EnforcementAction {
    None = "none",
    VerifyCSRFToken = "verify-csrf-token",
    VerifyOrigin = "verify-origin",
}

export enum CSRFURLMethod {
    Any = "any",
    Get = "GET",
    Post = "POST",
}

export enum RequiredParameters {
    AtLeastOne = "at-least-one",
    FromParametersList = "from-parameters-list",
    Ignore = "ignore",
}

/**
 * Data Guard feature can prevent responses from exposing sensitive information by masking
 * the data.
 */
export interface DataGuard {
    /**
     * If *true* the system considers credit card numbers as sensitive data.
     */
    creditCardNumbers?: boolean;
    /**
     * If *true* the system recognizes customized patterns as sensitive data.
     */
    customPatterns?: boolean;
    /**
     * List of PCRE regular expressions that specify the sensitive data patterns.
     */
    customPatternsList?: string[];
    /**
     * If *true* the system protects sensitive data.
     */
    enabled?: boolean;
    /**
     * Specifies the URLs for which the system enforces data guard protection.
     *
     * - **ignore-urls-in-list**: Specifies that the system enforces data guard protection for
     * all URLs except for those URLs in the Enforcement Mode list.
     * - **enforce-urls-in-list**: Specifies that the system enforces data guard protection only
     * for those URLs in the Enforcement Mode list
     */
    enforcementMode?: DataGuardEnforcementMode;
    /**
     * List of URLS to be enforced based on enforcement mode of data guard protection.
     */
    enforcementUrls?: string[];
    /**
     * If *true* the system recognizes exception patterns as not being sensitive data.
     */
    exceptionPatterns?: boolean;
    /**
     * List of PCRE regular expressions that specify the data patterns that are not recognized
     * as sensitive data.
     */
    exceptionPatternsList?: string[];
    /**
     * If *true* the system checks responses for file content.
     */
    fileContentDetection?: boolean;
    /**
     * File content types that the system considers to be sensitive data. Available file content
     * types:
     * - MS Office 2007 or later
     * - MS Office 97-2003 document
     * - PDF - Adobe Portable Document Format
     * - Mach-O - Mach object file format - used in Mac OS X
     * - PE - Portable Executable for Windows
     * - ELF - binary file format for Unix
     */
    fileContentDetectionFormats?: FileContentDetectionFormat[];
    /**
     * Specifies the number of last digits in credit card numbers that are exposed.
     */
    lastCcnDigitsToExpose?: number;
    /**
     * Specifies the number of last digits in U.S Social Security numbers that are exposed.
     */
    lastSsnDigitsToExpose?: number;
    /**
     * If *true* the system intercepts the returned responses to mask sensitive data.
     */
    maskData?: boolean;
    /**
     * If *true* the system considers U.S Social Security numbers as sensitive data.
     */
    usSocialSecurityNumbers?: boolean;
}

/**
 * Specifies the URLs for which the system enforces data guard protection.
 *
 * - **ignore-urls-in-list**: Specifies that the system enforces data guard protection for
 * all URLs except for those URLs in the Enforcement Mode list.
 * - **enforce-urls-in-list**: Specifies that the system enforces data guard protection only
 * for those URLs in the Enforcement Mode list
 */
export enum DataGuardEnforcementMode {
    EnforceUrlsInList = "enforce-urls-in-list",
    IgnoreUrlsInList = "ignore-urls-in-list",
}

export interface FileContentDetectionFormat {
    name?: FileContentDetectionFormatName;
}

export enum FileContentDetectionFormatName {
    ELFBinaryFileFormatForUnix = "ELF - binary file format for Unix",
    MSOffice2007OrLater = "MS Office 2007 or later",
    MSOffice972003Document = "MS Office 97-2003 document",
    MachOMachObjectFileFormatUsedInMACOSX = "Mach-O - Mach object file format - used in Mac OS X",
    PDFAdobePortableDocumentFormat = "PDF - Adobe Portable Document Format",
    PEPortableExecutableForWindows = "PE - Portable Executable for Windows",
}

export interface DatabaseProtection {
    databaseProtectionEnabled?: boolean;
    userSource?:                UserSource;
}

export enum UserSource {
    Apm = "apm",
    LoginPages = "login-pages",
}

export interface DeceptionResponsePage {
    responseBody?:      string;
    responseHeaders?:   string;
    responseStatusCode: string;
}

export interface DeceptionSettings {
    enableCustomResponses?:          boolean;
    enableResponsePageByAttackType?: boolean;
    responseStatusCodes?:            string[];
    serverTechnologyName?:           string;
}

export interface DisabledActionItem {
    type: DisabledActionItemType;
}

export enum DisabledActionItemType {
    CookieStaging = "cookie-staging",
    DefaultParameter = "default-parameter",
    FiletypeStaging = "filetype-staging",
    ModifiedPolicy = "modified-policy",
    ParameterStaging = "parameter-staging",
    PolicyValidation = "policy-validation",
    ScannerVulnerabilities = "scanner-vulnerabilities",
    SignatureStaging = "signature-staging",
    ThreatCampaignStaging = "threat-campaign-staging",
    TransparentPolicy = "transparent-policy",
    URLStaging = "url-staging",
    WebsocketURLStaging = "websocket-url-staging",
}

/**
 * Specifies a list of countries that may not access the web application.
 */
export interface DisallowedGeolocation {
    /**
     * Specifies the ISO country code of the selected country.
     */
    countryCode?: string;
    /**
     * Specifies the name of the country.
     */
    countryName: CountryName;
}

/**
 * Specifies the name of the country.
 */
export enum CountryName {
    Afghanistan = "Afghanistan",
    AlandIslands = "Aland Islands",
    Albania = "Albania",
    Algeria = "Algeria",
    AmericanSamoa = "American Samoa",
    Andorra = "Andorra",
    Angola = "Angola",
    Anguilla = "Anguilla",
    AnonymousProxy = "Anonymous Proxy",
    Antarctica = "Antarctica",
    AntiguaAndBarbuda = "Antigua and Barbuda",
    Argentina = "Argentina",
    Armenia = "Armenia",
    Aruba = "Aruba",
    Australia = "Australia",
    Austria = "Austria",
    Azerbaijan = "Azerbaijan",
    Bahamas = "Bahamas",
    Bahrain = "Bahrain",
    Bangladesh = "Bangladesh",
    Barbados = "Barbados",
    Belarus = "Belarus",
    Belgium = "Belgium",
    Belize = "Belize",
    Benin = "Benin",
    Bermuda = "Bermuda",
    Bhutan = "Bhutan",
    Bolivia = "Bolivia",
    BosniaAndHerzegovina = "Bosnia and Herzegovina",
    Botswana = "Botswana",
    BouvetIsland = "Bouvet Island",
    Brazil = "Brazil",
    BritishIndianOceanTerritory = "British Indian Ocean Territory",
    BruneiDarussalam = "Brunei Darussalam",
    Bulgaria = "Bulgaria",
    BurkinaFaso = "Burkina Faso",
    Burundi = "Burundi",
    Cambodia = "Cambodia",
    Cameroon = "Cameroon",
    Canada = "Canada",
    CapeVerde = "Cape Verde",
    CaymanIslands = "Cayman Islands",
    CentralAfricanRepublic = "Central African Republic",
    Chad = "Chad",
    Chile = "Chile",
    China = "China",
    ChristmasIsland = "Christmas Island",
    CocosKeelingIslands = "Cocos (Keeling) Islands",
    Colombia = "Colombia",
    Comoros = "Comoros",
    Congo = "Congo",
    CongoTheDemocraticRepublicOfThe = "Congo, The Democratic Republic of the",
    CookIslands = "Cook Islands",
    CostaRica = "Costa Rica",
    CoteDIvoire = "Cote D'Ivoire",
    Croatia = "Croatia",
    Cuba = "Cuba",
    Cyprus = "Cyprus",
    CzechRepublic = "Czech Republic",
    Denmark = "Denmark",
    Djibouti = "Djibouti",
    Dominica = "Dominica",
    DominicanRepublic = "Dominican Republic",
    Ecuador = "Ecuador",
    Egypt = "Egypt",
    ElSalvador = "El Salvador",
    EquatorialGuinea = "Equatorial Guinea",
    Eritrea = "Eritrea",
    Estonia = "Estonia",
    Ethiopia = "Ethiopia",
    FalklandIslandsMalvinas = "Falkland Islands (Malvinas)",
    FaroeIslands = "Faroe Islands",
    Fiji = "Fiji",
    Finland = "Finland",
    France = "France",
    FranceMetropolitan = "France, Metropolitan",
    FrenchGuiana = "French Guiana",
    FrenchPolynesia = "French Polynesia",
    FrenchSouthernTerritories = "French Southern Territories",
    Gabon = "Gabon",
    Gambia = "Gambia",
    Georgia = "Georgia",
    Germany = "Germany",
    Ghana = "Ghana",
    Gibraltar = "Gibraltar",
    Greece = "Greece",
    Greenland = "Greenland",
    Grenada = "Grenada",
    Guadeloupe = "Guadeloupe",
    Guam = "Guam",
    Guatemala = "Guatemala",
    Guernsey = "Guernsey",
    Guinea = "Guinea",
    GuineaBissau = "Guinea-Bissau",
    Guyana = "Guyana",
    Haiti = "Haiti",
    HeardIslandAndMcDonaldIslands = "Heard Island and McDonald Islands",
    HolySeeVaticanCityState = "Holy See (Vatican City State)",
    Honduras = "Honduras",
    HongKong = "Hong Kong",
    Hungary = "Hungary",
    Iceland = "Iceland",
    India = "India",
    Indonesia = "Indonesia",
    IranIslamicRepublicOf = "Iran, Islamic Republic of",
    Iraq = "Iraq",
    Ireland = "Ireland",
    IsleOfMan = "Isle of Man",
    Israel = "Israel",
    Italy = "Italy",
    Jamaica = "Jamaica",
    Japan = "Japan",
    Jersey = "Jersey",
    Jordan = "Jordan",
    Kazakhstan = "Kazakhstan",
    Kenya = "Kenya",
    Kiribati = "Kiribati",
    KoreaDemocraticPeopleSRepublicOf = "Korea, Democratic People's Republic of",
    KoreaRepublicOf = "Korea, Republic of",
    Kuwait = "Kuwait",
    Kyrgyzstan = "Kyrgyzstan",
    LaoPeopleSDemocraticRepublic = "Lao People's Democratic Republic",
    Latvia = "Latvia",
    Lebanon = "Lebanon",
    Lesotho = "Lesotho",
    Liberia = "Liberia",
    LibyanArabJamahiriya = "Libyan Arab Jamahiriya",
    Liechtenstein = "Liechtenstein",
    Lithuania = "Lithuania",
    Luxembourg = "Luxembourg",
    Macau = "Macau",
    Macedonia = "Macedonia",
    Madagascar = "Madagascar",
    Malawi = "Malawi",
    Malaysia = "Malaysia",
    Maldives = "Maldives",
    Mali = "Mali",
    Malta = "Malta",
    MarshallIslands = "Marshall Islands",
    Martinique = "Martinique",
    Mauritania = "Mauritania",
    Mauritius = "Mauritius",
    Mayotte = "Mayotte",
    Mexico = "Mexico",
    MicronesiaFederatedStatesOf = "Micronesia, Federated States of",
    MoldovaRepublicOf = "Moldova, Republic of",
    Monaco = "Monaco",
    Mongolia = "Mongolia",
    Montenegro = "Montenegro",
    Montserrat = "Montserrat",
    Morocco = "Morocco",
    Mozambique = "Mozambique",
    Myanmar = "Myanmar",
    NA = "N/A",
    Namibia = "Namibia",
    Nauru = "Nauru",
    Nepal = "Nepal",
    Netherlands = "Netherlands",
    NetherlandsAntilles = "Netherlands Antilles",
    NewCaledonia = "New Caledonia",
    NewZealand = "New Zealand",
    Nicaragua = "Nicaragua",
    Niger = "Niger",
    Nigeria = "Nigeria",
    Niue = "Niue",
    NorfolkIsland = "Norfolk Island",
    NorthernMarianaIslands = "Northern Mariana Islands",
    Norway = "Norway",
    Oman = "Oman",
    Other = "Other",
    Pakistan = "Pakistan",
    Palau = "Palau",
    PalestinianTerritory = "Palestinian Territory",
    Panama = "Panama",
    PapuaNewGuinea = "Papua New Guinea",
    Paraguay = "Paraguay",
    Peru = "Peru",
    Philippines = "Philippines",
    PitcairnIslands = "Pitcairn Islands",
    Poland = "Poland",
    Portugal = "Portugal",
    PuertoRico = "Puerto Rico",
    Qatar = "Qatar",
    Reunion = "Reunion",
    Romania = "Romania",
    RussianFederation = "Russian Federation",
    Rwanda = "Rwanda",
    SANMarino = "San Marino",
    SaintBarthelemy = "Saint Barthelemy",
    SaintHelena = "Saint Helena",
    SaintKittsAndNevis = "Saint Kitts and Nevis",
    SaintLucia = "Saint Lucia",
    SaintMartin = "Saint Martin",
    SaintPierreAndMiquelon = "Saint Pierre and Miquelon",
    SaintVincentAndTheGrenadines = "Saint Vincent and the Grenadines",
    Samoa = "Samoa",
    SaoTomeAndPrincipe = "Sao Tome and Principe",
    SatelliteProvider = "Satellite Provider",
    SaudiArabia = "Saudi Arabia",
    Senegal = "Senegal",
    Serbia = "Serbia",
    Seychelles = "Seychelles",
    SierraLeone = "Sierra Leone",
    Singapore = "Singapore",
    Slovakia = "Slovakia",
    Slovenia = "Slovenia",
    SolomonIslands = "Solomon Islands",
    Somalia = "Somalia",
    SouthAfrica = "South Africa",
    SouthGeorgiaAndTheSouthSandwichIslands = "South Georgia and the South Sandwich Islands",
    Spain = "Spain",
    SriLanka = "Sri Lanka",
    Sudan = "Sudan",
    Suriname = "Suriname",
    SvalbardAndJanMayen = "Svalbard and Jan Mayen",
    Swaziland = "Swaziland",
    Sweden = "Sweden",
    Switzerland = "Switzerland",
    SyrianArabRepublic = "Syrian Arab Republic",
    Taiwan = "Taiwan",
    Tajikistan = "Tajikistan",
    TanzaniaUnitedRepublicOf = "Tanzania, United Republic of",
    Thailand = "Thailand",
    TimorLeste = "Timor-Leste",
    Togo = "Togo",
    Tokelau = "Tokelau",
    Tonga = "Tonga",
    TrinidadAndTobago = "Trinidad and Tobago",
    Tunisia = "Tunisia",
    Turkey = "Turkey",
    Turkmenistan = "Turkmenistan",
    TurksAndCaicosIslands = "Turks and Caicos Islands",
    Tuvalu = "Tuvalu",
    Uganda = "Uganda",
    Ukraine = "Ukraine",
    UnitedArabEmirates = "United Arab Emirates",
    UnitedKingdom = "United Kingdom",
    UnitedStates = "United States",
    UnitedStatesMinorOutlyingIslands = "United States Minor Outlying Islands",
    Uruguay = "Uruguay",
    Uzbekistan = "Uzbekistan",
    Vanuatu = "Vanuatu",
    Venezuela = "Venezuela",
    Vietnam = "Vietnam",
    VirginIslandsBritish = "Virgin Islands, British",
    VirginIslandsUS = "Virgin Islands, U.S.",
    WallisAndFutuna = "Wallis and Futuna",
    WesternSahara = "Western Sahara",
    Yemen = "Yemen",
    Zambia = "Zambia",
    Zimbabwe = "Zimbabwe",
}

/**
 * How the system processes a request that triggers a security policy violation.
 * - **Blocking:** When the enforcement mode is set to blocking, traffic is blocked if it
 * causes a violation (configured for blocking).
 * - **Transparent:** When the enforcement mode is set to transparent, traffic is not
 * blocked even if a violation is triggered.
 */
export enum PolicyEnforcementMode {
    Blocking = "blocking",
    Transparent = "transparent",
}

/**
 * File types are categorization of the URLs in the request by the extension appearing past
 * the last dot at the end of the URL. For example, the file type of /index.php
 * is "php". Other well known file types are html, aspx, png, jpeg and many more. A special
 * case is the "empty" file type called "no-ext" meaning, no extension in which the URL has
 * no dot at its last segment as in /foo_no_dot
 *
 * File types usually imply the expected content type in the response. For example, html and
 * php return HTML content, while jpeg, png and gif return images, each in its respective
 * format. File types also imply the server technology deployed for rendering the page. For
 * example, php (PHP), aspx (ASP) and many others.
 *
 * The security policy uses file types for several purposes:
 * 1. Ability to define which file types are allowed and which are disallowed. By including
 * the pure wildcard "\*" file type and a list of disallowed file types you have a file type
 * denylist.
 * By having a list of explicit file type *without* the pure wildcard "\*" you have a file
 * type allowlist.
 * 2. Each file type implies maximum *length resrictions* for the requests of that file
 * type. The checked lengths are per the URL, Query String, total request length and payload
 * (POST data).
 * 3. Each file type determines whether to detect *response signatures* for requests of that
 * file type. Typically, one would never check signatures for image file types.
 */
export interface Filetype {
    /**
     * Determines whether the file type is allowed or disallowed. In either of these cases the
     * VIOL_FILETYPE violation is issued (if enabled) for an incoming request-
     * 1. No allowed file type matched the file type of the request.
     * 2. The file type of the request matched a disallowed file type.
     */
    allowed?: boolean;
    /**
     * Determines whether to enforce maximum length restriction for the body, a.k.a. "POST data"
     * part of the requests that match the respective file type. The maximum length is
     * determined by *postDataLength* attribute.
     * Although named "POST data", this applies to any content type and not restricted to POST
     * requests, e.g. PUT requests are also checked.
     * This attribute is relevant only to *allowed* file types.
     */
    checkPostDataLength?: boolean;
    /**
     * Determines whether to enforce maximum length restriction for the query string of the
     * requests that match the respective file type. The maximum length is determined by
     * *queryStringLength* attribute.
     * This attribute is relevant only to *allowed* file types.
     */
    checkQueryStringLength?: boolean;
    /**
     * Determines whether to enforce maximum length restriction for the total length of requests
     * that match the respective file type. The maximum length is determined by *requestLength*
     * attribute.
     * This attribute is relevant only to *allowed* file types.
     */
    checkRequestLength?: boolean;
    /**
     * Determines whether to enforce maximum length restriction for the URL of the requests that
     * match the respective file type. The URL does *not* include the query string, past the &.
     * The maximum length is determined by *urlLength* attribute.
     * This attribute is relevant only to *allowed* file types.
     */
    checkUrlLength?: boolean;
    /**
     * Specifies the file type name as appearing in the URL extension. Names can be one of the
     * following according to the *type* attribute:
     *
     * - **Explicit** - Specifies that the name is the liternal file extension to which the file
     * type refers. The *type* attribute has to be "explicit".
     * - **No Extension** - Specifies the empty file type, lacking file extension. For this the
     * reserved string **no_ext** should be used. The *type* attribute has to be "explicit".
     * - **Wildcard** - Specifies that any file extension that matches the wildcard expression
     * is matched to this file type in the policy. The *type* attribute has to be "wildcard".
     *
     * The syntax for wildcard entities is based on shell-style wildcard characters. The list
     * below describes the wildcard characters that you can use so that the entity name can
     * match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Note**: Wildcards do not match regular expressions. Do not use a regular expression as
     * a wildcard.
     */
    name: string;
    /**
     * If *true* then any violation associated to the respective file type will not be enforced,
     * and the request will not be considered illegal.
     */
    performStaging?: boolean;
    /**
     * The maximum length in bytes of the body (POST data) of the request matching the file
     * type. Enforced only if checkPostDataLength is set to *true*.
     * If the value is exceeded then VIOL_POST_DATA_LENGTH violation is issued.
     * This attribute is relevant only to *allowed* file types.
     */
    postDataLength?: number;
    /**
     * The maximum length in bytes of the query string of the request matching the file type.
     * Enforced only if checkQueryStringLength is set to *true*.
     * If the value is exceeded then VIOL_QUERY_STRING_LENGTH violation is issued.
     * This attribute is relevant only to *allowed* file types.
     */
    queryStringLength?: number;
    /**
     * The maximum total length in bytes of the request matching the file type. Enforced only if
     * checkRequestLength is set to *true*.
     * If the value is exceeded then VIOL_REQUEST_LENGTH violation is issued.
     * This attribute is relevant only to *allowed* file types.
     */
    requestLength?: number;
    /**
     * Determines whether the responses to requests that match the respective file types are
     * inspected for attack signature detection.
     * This attribute is relevant only to *allowed* file types.
     */
    responseCheck?: boolean;
    /**
     * Determines the type of the **name** attribute. Only when setting the type to wildcard
     * will the special wildcard characters in the name interpreted as such.
     */
    type?: HostNameTypeEnum;
    /**
     * The maximum length in bytes of the URL of the request matching the file type, excluding
     * the query string. Enforced only if checkUrlLength is set to *true*.
     * If the value is exceeded then VIOL_URL_LENGTH violation is issued.
     * This attribute is relevant only to *allowed* file types.
     */
    urlLength?:     number;
    wildcardOrder?: number;
}

/**
 * This section includes several advanced policy configuration settings.
 */
export interface General {
    /**
     * You can specify which responses a security policy permits.
     * By default, the system accepts all response codes from 100 to 399 as valid responses.
     * Response codes from 400 to 599 are considered invalid unless added to the Allowed
     * Response Status Codes list.
     * By default, 400, 401, 404, 407, 417, and 503 are on the list as allowed HTTP response
     * status codes.
     */
    allowedResponseCodes?: number[];
    /**
     * If you require the system to trust a server further than one hop toward the client (the
     * last proxy traversed), you can use the Custom XFF Headers setting to define a specific
     * header that is inserted closer to, or at the client, that the system will trust.
     * Additionally, if you require the system to trust a proxy server that uses a different
     * header name than the X-Forwarded-For header name, you can add the desired header name to
     * the Custom XFF Headers setting.
     * When adding a custom header, the X-Forwarded-For header is not trusted anymore. In case
     * the X-Forwarded-For header is to be trusted along with other headers, you must add it to
     * the custom headers list.
     */
    customXffHeaders?: string[];
    /**
     * A description of user-defined regular expression that the security policy uses to
     * recognize dynamic sessions in URLs.
     */
    dynamicSessionIdDescription?: string;
    /**
     * A user-defined regular expression that the security policy uses to recognize dynamic
     * sessions in URLs.
     */
    dynamicSessionIdInUrl?: string;
    /**
     * This feature designed to provide an aggregated view of security events in the
     * Configuration utility.
     * When two or more illegal requests are sent to the web application within a short period
     * of time, the system correlates them as a security event.
     * For example, the system aggregates requests into a single event if a single user causes
     * multiple violations over time.
     * When enabled, Event Correlation Reporting logs are collected.
     */
    enableEventCorrelation?: boolean;
    /**
     * For each security policy, you can configure the number of days used as the enforcement
     * readiness period, also called staging.
     * Security policy entities and attack signatures remain in staging for this period of time
     * before the system suggests that you enforce them.
     * Staging allows you to test security policy entities and attack signatures for false
     * positives without enforcing them.
     * The default value of 7 days works for most situations so you typically do not need to
     * change it.
     */
    enforcementReadinessPeriod?: number;
    /**
     * When enabled, the security policy masks credit card numbers that appear in any part of
     * requests. The system does not mask the information in the actual requests, but rather in
     * various logs:
     * * Credit card numbers appearing in entity names are masked in the requests of the
     * Requests log.
     * * Credit card numbers appearing in entity values are masked wherever requests can be
     * viewed: the Requests log, violation details within that log, manual learning, and
     * reports.
     * This setting is enabled by default, and exists in addition to masking parameters defined
     * as containing sensitive information.
     */
    maskCreditCardNumbersInRequest?: boolean;
    /**
     * A URI path parameter is the part of a path segment that occurs after its name. You can
     * configure how a security policy handles path parameters that are attached to path
     * segments in URIs.
     * You can enforce different levels of security based on your needs:
     *
     * - **as-parameter**: The system normalizes and enforces path parameters. For each path
     * parameter, the system removes it from URLs as part of the normalization process, finds a
     * corresponding parameter in the security policy (first at the matching URL level, and if
     * not found, then at the Global level), and enforces it according to its attributes like
     * any other parameters.
     * - **as-url**: The system does not normalize nor enforce path parameters. Path parameters
     * are considered an integral part of the URL.
     * - **ignore**: The system removes path parameters from URLs as part of the normalization
     * process, but does not enforce them.
     */
    pathParameterHandling?: PathParameterHandling;
    /**
     * When enabled, the system activates ASM iRule events. When disabled, the system does not
     * activate ASM iRule events. Enable this option if you have written iRules that process ASM
     * iRule events, and assigned them to a specific virtual server. The default setting is
     * disabled.
     *
     * - **disabled**: Leave this option disabled if you either have not written any ASM iRules.
     * - **enabled-normal**: The system invokes the event ASM_REQUEST_DONE after the system
     * completes processing each request, regardless of whether the request triggered
     * violations. This gives you the opportunity, using iRules, to configure the system to
     * perform actions after ASM handles requests whether they trigger, or do not trigger,
     * violations.
     * - **enabled-compatibility**: The system invokes the event ASM_REQUEST_VIOLATION after the
     * system completes processing each request that triggered a violation. This gives you the
     * opportunity, using iRules, to configure the system to perform actions after ASM handles
     * requests only that trigger violations.
     */
    triggerAsmIruleEvent?: TriggerASMIruleEvent;
    /**
     * When enabled, the system has confidence in an XFF (X-Forwarded-For) header in the
     * request. When disabled, that the system does not have confidence in an XFF header in the
     * request. The default setting is disabled.
     *
     * Select this option if the system is deployed behind an internal or other trusted proxy.
     * Then, the system uses the IP address that initiated the connection to the proxy instead
     * of the internal proxy's IP address.
     *
     * Leave this option disabled if you think the HTTP header may be spoofed, or crafted, by a
     * malicious client. With this setting disabled, if the system is deployed behind an
     * internal proxy, the system uses the internal proxy's IP address instead of the client's
     * IP address.
     */
    trustXff?: boolean;
    /**
     * How the security policy processes URLs that use dynamic sessions. When disabled the
     * security policy does not enforce dynamic sessions in URLs.
     * When enabled the system will use a default or user-defined pattern for recognizing
     * dynamic sessions in URLs.
     */
    useDynamicSessionIdInUrl?: boolean;
}

/**
 * A URI path parameter is the part of a path segment that occurs after its name. You can
 * configure how a security policy handles path parameters that are attached to path
 * segments in URIs.
 * You can enforce different levels of security based on your needs:
 *
 * - **as-parameter**: The system normalizes and enforces path parameters. For each path
 * parameter, the system removes it from URLs as part of the normalization process, finds a
 * corresponding parameter in the security policy (first at the matching URL level, and if
 * not found, then at the Global level), and enforces it according to its attributes like
 * any other parameters.
 * - **as-url**: The system does not normalize nor enforce path parameters. Path parameters
 * are considered an integral part of the URL.
 * - **ignore**: The system removes path parameters from URLs as part of the normalization
 * process, but does not enforce them.
 */
export enum PathParameterHandling {
    AsParameters = "as-parameters",
    AsURL = "as-url",
    Ignore = "ignore",
}

/**
 * When enabled, the system activates ASM iRule events. When disabled, the system does not
 * activate ASM iRule events. Enable this option if you have written iRules that process ASM
 * iRule events, and assigned them to a specific virtual server. The default setting is
 * disabled.
 *
 * - **disabled**: Leave this option disabled if you either have not written any ASM iRules.
 * - **enabled-normal**: The system invokes the event ASM_REQUEST_DONE after the system
 * completes processing each request, regardless of whether the request triggered
 * violations. This gives you the opportunity, using iRules, to configure the system to
 * perform actions after ASM handles requests whether they trigger, or do not trigger,
 * violations.
 * - **enabled-compatibility**: The system invokes the event ASM_REQUEST_VIOLATION after the
 * system completes processing each request that triggered a violation. This gives you the
 * opportunity, using iRules, to configure the system to perform actions after ASM handles
 * requests only that trigger violations.
 */
export enum TriggerASMIruleEvent {
    Disabled = "disabled",
    EnabledCompatibility = "enabled-compatibility",
    EnabledNormal = "enabled-normal",
}

export interface GWTProfile {
    attackSignaturesCheck?: boolean;
    defenseAttributes?:     GWTProfileDefenseAttributes;
    description?:           string;
    metacharElementCheck?:  boolean;
    metacharOverrides?:     GWTProfileMetacharOverride[];
    name:                   string;
    signatureOverrides?:    GWTProfileSignatureOverride[];
}

export interface GWTProfileDefenseAttributes {
    maximumTotalLengthOfGWTData?: MaximumCookieHeaderLengthEnum | number;
    maximumValueLength?:          MaximumCookieHeaderLengthEnum | number;
    tolerateGWTParsingWarnings?:  boolean;
}

export interface GWTProfileMetacharOverride {
    isAllowed?: boolean;
    metachar:   string;
}

export interface GWTProfileSignatureOverride {
    enabled?:     boolean;
    name?:        string;
    signatureId?: number;
    tag?:         string;
}

/**
 * The maximum length of an HTTP header name and value that the system processes. The system
 * calculates and enforces the HTTP header length based on the sum of the length of the HTTP
 * header name and value.
 */
export interface HeaderSettings {
    /**
     * Maximum HTTP Header Length must be greater than 0 and less than 65536 bytes (64K). Note:
     * if 0 or *any* are set, then no restriction on the HTTP header length is applied.
     */
    maximumHttpHeaderLength?: MaximumCookieHeaderLengthEnum | number;
}

export interface Header {
    allowRepeatedOccurrences?: boolean;
    base64Decoding?:           boolean;
    checkSignatures?:          boolean;
    htmlNormalization?:        boolean;
    mandatory?:                boolean;
    maskValueInLogs?:          boolean;
    name:                      string;
    normalizationViolations?:  boolean;
    percentDecoding?:          boolean;
    signatureOverrides?:       HeaderSignatureOverride[];
    type?:                     HostNameTypeEnum;
    urlNormalization?:         boolean;
    wildcardOrder?:            number;
}

export interface HeaderSignatureOverride {
    enabled?:     boolean;
    name?:        string;
    signatureId?: number;
    tag?:         string;
}

export interface HostName {
    includeSubdomains?: boolean;
    name:               string;
}

export interface IPIntelligence {
    enabled?:                  boolean;
    ipIntelligenceCategories?: IPIntelligenceCategory[];
}

export interface IPIntelligenceCategory {
    alarm?:       boolean;
    block?:       boolean;
    category:     Category;
    description?: IPIntelligenceCategoryDescription;
}

export enum Category {
    AnonymousProxy = "Anonymous Proxy",
    BotNets = "BotNets",
    CloudBasedServices = "Cloud-based Services",
    DenialOfService = "Denial of Service",
    InfectedSources = "Infected Sources",
    MobileThreats = "Mobile Threats",
    PhishingProxies = "Phishing Proxies",
    Scanners = "Scanners",
    SpamSources = "Spam Sources",
    TorProxies = "Tor Proxies",
    WebAttacks = "Web Attacks",
    WindowsExploits = "Windows Exploits",
}

export enum IPIntelligenceCategoryDescription {
    TheAnonymousProxyCategoryIncludesIPAddressesThatProvideProxyAndAnonymizingServices = "The Anonymous Proxy category includes IP addresses that provide proxy and anonymizing services.",
    TheBotnetsCategoryIncludesBotnetCCChannelsAndAnInfectedZombieMachineControlledByABotMaster = "The Botnets category includes Botnet C&C channels and an infected zombie machine controlled by a Bot master.",
    TheCloudBasedServicesCategoryIncludesIPAddressesAndNetworksThatAreUsedByCloudProviders = "The Cloud-based Services category includes IP addresses and networks that are used by cloud providers.",
    TheDenialOfServicesCategoryIncludesDOSDDOSAnomalousSynFloodAndAnomalousTrafficDetection = "The Denial of Services category includes DOS, DDOS, anomalous syn flood, and anomalous traffic detection.",
    TheInfectedSourcesCategoryIncludesIPAddressesCurrentlyKnownToBeInfectedWithMalwareAndIPAddressesWithAnAverageLowReputationIndexScoreEnablingThisCategoryPreventsAccessFromSourcesIdentifiedToContactMalwareDistributionPoints = "The Infected Sources category includes IP addresses currently known to be infected with malware, and IP addresses with an average low Reputation Index score. Enabling this category prevents access from sources identified to contact malware distribution points.",
    TheMobileThreatsCategoryIncludesIPAddressesOfMaliciousAndUnwantedMobileApplications = "The Mobile Threats category includes IP addresses of malicious and unwanted mobile applications.",
    ThePhishingProxiesCategoryIncludesIPAddressesHostingPhishingSitesAndOtherKindOfFraudActivitiesSuchAsAdClickFraudAndGamingFraud = "The Phishing Proxies category includes IP addresses hosting phishing sites, and other kind of fraud activities such as Ad Click Fraud and Gaming fraud.",
    TheScannersCategoryIncludesAllReconnaissanceSuchAsProbesHostScanDomainScanAndPasswordBruteForce = "The Scanners category includes all reconnaissance, such as probes, host scan, domain scan, and password brute force.",
    TheSpamSourcesCategoryIncludesTunnelingSpamMessagesThroughProxyAnomalousSMTPActivitiesAndForumSpamActivities = "The Spam Sources category includes Tunneling Spam messages through proxy, anomalous SMTP activities, and Forum Spam activities.",
    TheTorProxiesCategoryIncludesIPAddressesActingAsExitNodesForTheTorNetworkExitNodesAreTheLastPointAlongTheProxyChainAndMakeADirectConnectionToTheOriginatorâSIntendedDestination = "The Tor Proxies category includes IP addresses acting as exit nodes for the Tor Network. Exit nodes are the last point along the proxy chain and make a direct connection to the originatorâ\u0080\u0099s intended destination.",
    TheWebAttacksCategoryIncludesCrossSiteScriptingIFrameInjectionSQLInjectionCrossDomainInjectionAndDomainPasswordBruteForce = "The Web Attacks category includes cross site scripting, iFrame injection, SQL injection, cross domain injection, and domain password brute force.",
    TheWindowsExploitsCategoryIncludesActiveIPAddressOfferingOrDistributingMalwareShellCodeRootkitsWormsAndViruses = "The Windows Exploits category includes active IP address offering or distributing malware, shell code, rootkits, worms, and viruses.",
}

export interface JSONProfile {
    attackSignaturesCheck?:        boolean;
    defenseAttributes?:            JSONProfileDefenseAttributes;
    description?:                  string;
    handleJsonValuesAsParameters?: boolean;
    hasValidationFiles?:           boolean;
    metacharElementCheck?:         boolean;
    metacharOverrides?:            JSONProfileMetacharOverride[];
    name:                          string;
    sensitiveData?:                JSONProfileSensitiveDatum[];
    signatureOverrides?:           JSONProfileSignatureOverride[];
    validationFiles?:              JSONProfileValidationFile[];
}

export interface JSONProfileDefenseAttributes {
    maximumArrayLength?:           MaximumCookieHeaderLengthEnum | number;
    maximumStructureDepth?:        MaximumCookieHeaderLengthEnum | number;
    maximumTotalLengthOfJSONData?: MaximumCookieHeaderLengthEnum | number;
    maximumValueLength?:           MaximumCookieHeaderLengthEnum | number;
    tolerateJSONParsingWarnings?:  boolean;
}

export interface JSONProfileMetacharOverride {
    isAllowed?: boolean;
    metachar:   string;
}

export interface JSONProfileSensitiveDatum {
    parameterName: string;
}

export interface JSONProfileSignatureOverride {
    enabled?:     boolean;
    name?:        string;
    signatureId?: number;
    tag?:         string;
}

export interface JSONProfileValidationFile {
    importUrl:          string;
    isPrimary?:         boolean;
    jsonValidationFile: PurpleJSONValidationFile;
}

export interface PurpleJSONValidationFile {
    contents:  string;
    fileName:  string;
    isBase64?: boolean;
}

export interface JSONValidationFile {
    contents:  string;
    fileName:  string;
    isBase64?: boolean;
}

export interface LoginEnforcement {
    authenticatedUrls?:    string[];
    expirationTimePeriod?: ExpirationTime | number;
    logoutUrls?:           LogoutURL[];
}

export interface LogoutURL {
    requestContains?: string;
    requestOmits?:    string;
    url:              LogoutURLURL;
}

/**
 * Reference to the URL used in login URL configuration (policy/login-pages). This login URL
 * is protected by Brute Force Protection feature.
 *
 * In a security policy, you can manually specify the HTTP URLs that are allowed (or
 * disallowed) in traffic to the web application being protected. If you are using automatic
 * policy building (and the policy includes learning URLs), the system can determine which
 * URLs to add, based on legitimate traffic. When you create a security policy, wildcard
 * URLs of * (representing all HTTP URLs) are added to the Allowed HTTP URLs lists. During
 * the enforcement readiness period, the system examines the URLs in the traffic and makes
 * learning suggestions that you can review and add the URLs to the policy as needed. This
 * way, the security policy includes the HTTP URLs that are typically used. When you think
 * all the URLs are included in the security policy, you can remove the * wildcards from the
 * allowed URLs lists.
 */
export interface LogoutURLURL {
    /**
     * Specifies the conditions for when the browser should allow this URL to be rendered in a
     * frame or iframe.
     * Never: Specifies that this URL must never be rendered in a frame or iframe. The web
     * application instructs browsers to hide, or disable, frame and iframe parts of this URL.
     * Same Origin Only: Specifies that the browser may load the frame or iframe if the
     * referring page is from the same protocol, port, and domain as this URL. This limits the
     * user to navigate only within the same web application.
     * Only From URL: Specifies that the browser may load the frame or iframe from a specified
     * domain. Type the protocol and domain in URL format for example, http://www.mywebsite.com.
     * Do not enter a sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFrames?: AllowRenderingInFrames;
    /**
     * Specifies that the browser may load the frame or iframe from a specified domain. Type the
     * protocol and domain in URL format for example, http://www.mywebsite.com. Do not enter a
     * sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFramesOnlyFrom?: string;
    /**
     * Specifies, when true, that you want attack signatures and threat campaigns to be detected
     * on this URL and possibly override the security policy settings of an attack signature or
     * threat campaign specifically for this URL. After you enable this setting, the system
     * displays a list of attack signatures and threat campaigns.
     */
    attackSignaturesCheck?: boolean;
    canChangeDomainCookie?: boolean;
    /**
     * Specifies that the system adds the X-Frame-Options header to the domain URL's response
     * header. This is done to protect the web application against clickjacking. Clickjacking
     * occurs when an attacker lures a user to click illegitimate frames and iframes because the
     * attacker hid them on legitimate visible website buttons. Therefore, enabling this option
     * protects the web application from other web sites hiding malicious code behind them. The
     * default is disabled. After you enable this option, you can select whether, and under what
     * conditions, the browser should allow this URL to be rendered in a frame or iframe.
     */
    clickjackingProtection?: boolean;
    /**
     * Describes the URL (optional).
     */
    description?:                     string;
    disallowFileUploadOfExecutables?: boolean;
    dynamicFlows?:                    PurpleDynamicFlow[];
    /**
     * The system extracts the Origin (domain) of the request from the Origin header.
     */
    html5CrossOriginRequestsEnforcement?: PurpleHtml5CrossOriginRequestsEnforcement;
    /**
     * If *true*, the URLs allowed by the security policy.
     */
    isAllowed?: boolean;
    /**
     * A request body is mandatory. This is relevant for any method acting as POST.
     */
    mandatoryBody?: boolean;
    /**
     * To allow or disallow specific meta characters in the name of this specific URL (and thus
     * override the global meta character settings).
     */
    metacharOverrides?: PurpleMetacharOverride[];
    /**
     * Specifies, when true, that you want meta characters to be detected on this URL and
     * possibly override the security policy settings of a meta character specifically for this
     * URL. After you enable this setting, the system displays a list of meta characters.
     */
    metacharsOnUrlCheck?: boolean;
    /**
     * Unique ID of a URL with a protocol type and name. Select a Method for the URL to create
     * an API endpoint: URL + Method.
     */
    method?: URLMethod;
    /**
     * Specifies a list of methods that are allowed or disallowed for a specific URL. The list
     * overrides the list of methods allowed or disallowed globally at the policy level.
     */
    methodOverrides?: PurpleMethodOverride[];
    /**
     * Specifies, when true, that you want methods to be detected on this URL and possibly
     * override the security policy settings of a method specifically for this URL. After you
     * enable this setting, the system displays a list of methods.
     */
    methodsOverrideOnUrlCheck?: boolean;
    /**
     * Specifies an HTTP URL that the security policy allows. The available types are:
     *
     * - **Explicit**: Specifies that the URL has a specific name and is not a wildcard entity.
     * Type the name of a URL exactly as you expect it to appear in the request.
     * - **Wildcard**: Specifies that any URL that matches the listed wildcard expression should
     * be treated according to the wildcard attributes. Type a wildcard expression that matches
     * the expected URL. For example, entering the wildcard expression * specifies that any URL
     * is allowed by the security policy.
     * The syntax for wildcard entities is based on shell-style wildcard characters. The list
     * below describes the wildcard characters that you can use so that the entity name can
     * match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Note**: Wildcards do not match regular expressions. Do not use a regular expression as
     * a wildcard.
     */
    name: string;
    /**
     * The attribute operationId is used as an OpenAPI endpint identifier.
     */
    operationId?: string;
    /**
     * If *true* then any violation associated to the respective URL will not be enforced, and
     * the request will not be considered illegal.
     */
    performStaging?: boolean;
    /**
     * When checked (enabled), positional parameters are enabled in the URL.
     */
    positionalParameters?: PurplePositionalParameter[];
    /**
     * Specifies whether the protocol for the URL is HTTP or HTTPS.
     */
    protocol?: URLProtocol;
    /**
     * Array of signature overrides.
     * Specifies attack signatures whose security policy settings are overridden for this URL,
     * and which action the security policy takes when it discovers a request for this URL that
     * matches these attack signatures.
     */
    signatureOverrides?: FluffySignatureOverride[];
    /**
     * Determines the type of the **name** attribute. Only when setting the type to wildcard
     * will the special wildcard characters in the name be interpreted as such.
     */
    type?: HostNameTypeEnum;
    /**
     * Specifies how the system recognizes and enforces requests for this URL according to the
     * requests' header content. The system automatically creates a default header-based content
     * profile for HTTP, and you cannot delete it. However, requests for a URL may contain other
     * types of content, such as JSON, XML, or other proprietary formats.
     */
    urlContentProfiles?: PurpleURLContentProfile[];
    /**
     * Specifies that an asterisk in a wildcard URL matches any number of path segments
     * (separated by slashes); when cleared, specifies that an asterisk matches at most one
     * segment. For example: the wildcard /art/* matches /art/abc/index.html if the wildcard
     * match includes slashes (default value), but does not match it if the check box is
     * cleared. In that case, it matches /art/go.html (only one segment below /art).
     */
    wildcardIncludesSlash?: boolean;
    /**
     * Specifies the order index for wildcard URLs matching. Wildcard URLs with lower wildcard
     * order will get checked for a match prior to URLs with higher wildcard order.
     */
    wildcardOrder?: number;
}

/**
 * A login page is a URL in a web application that requests must pass through to get to the
 * authenticated URLs. Use login pages, for example, to prevent forceful browsing of
 * restricted parts of the web application, by defining access permissions for users. Login
 * pages also allow session tracking of user sessions.
 */
export interface LoginPage {
    /**
     * Access Validation define validation criteria for the login page response. If you define
     * more than one validation criteria, the response must meet all the criteria before the
     * system allows the user to access the application login URL.
     */
    accessValidation?: LoginPageAccessValidation;
    /**
     * Authentication Type is method the web server uses to authenticate the login URL's
     * credentials with a web user.
     *
     * - **none**: The web server does not authenticate users trying to access the web
     * application through the login URL. This is the default setting.
     * - **form**: The web application uses a form to collect and authenticate user credentials.
     * If using this option, you also need to type the user name and password parameters written
     * in the code of the HTML form.
     * - **http-basic**: The user name and password are transmitted in Base64 and stored on the
     * server in plain text.
     * - **http-digest**: The web server performs the authentication; user names and passwords
     * are not transmitted over the network, nor are they stored in plain text.
     * - **ntlm**: Microsoft LAN Manager authentication (also called Integrated Windows
     * Authentication) does not transmit credentials in plain text, but requires a continuous
     * TCP connection between the server and client.
     * - **ajax-or-json-request**: The web server uses JSON and AJAX requests to authenticate
     * users trying to access the web application through the login URL. For this option, you
     * also need to type the name of the JSON element containing the user name and password.
     */
    authenticationType?: AuthenticationType;
    /**
     * A name of parameter which will contain password string.
     */
    passwordParameterName?: string;
    /**
     * URL string used for login page.
     */
    url: LoginPageURL;
    /**
     * A name of parameter which will contain username string.
     */
    usernameParameterName?: string;
}

/**
 * Access Validation define validation criteria for the login page response. If you define
 * more than one validation criteria, the response must meet all the criteria before the
 * system allows the user to access the application login URL.
 */
export interface LoginPageAccessValidation {
    /**
     * A defined domain cookie name that the response to the login URL must match to permit user
     * access to the authenticated URL.
     */
    cookieContains?: string;
    /**
     * A header name and value that the response to the login URL must match to permit user
     * access to the authenticated URL.
     */
    headerContains?: string;
    /**
     * A header name and value that indicates a failed login attempt and prohibits user access
     * to the authenticated URL.
     */
    headerOmits?: string;
    /**
     * A parameter that must exist in the login URL's HTML body to allow access to the
     * authenticated URL.
     */
    parameterContains?: string;
    /**
     * A string that must appear in the response for the system to allow the user to access the
     * authenticated URL; for example, "Successful Login".
     */
    responseContains?: string;
    /**
     * An HTTP response code that the server must return to the user to allow access to the
     * authenticated URL; for example, "200".
     */
    responseHttpStatus?: string;
    /**
     * An HTTP response code that indicates a failed login attempt and prohibits user access to
     * the authenticated URL.
     */
    responseHttpStatusOmits?: string[];
    /**
     * A string that indicates a failed login attempt and prohibits user access to the
     * authenticated URL; for example, "Authentication failed".
     */
    responseOmits?: string;
}

/**
 * Authentication Type is method the web server uses to authenticate the login URL's
 * credentials with a web user.
 *
 * - **none**: The web server does not authenticate users trying to access the web
 * application through the login URL. This is the default setting.
 * - **form**: The web application uses a form to collect and authenticate user credentials.
 * If using this option, you also need to type the user name and password parameters written
 * in the code of the HTML form.
 * - **http-basic**: The user name and password are transmitted in Base64 and stored on the
 * server in plain text.
 * - **http-digest**: The web server performs the authentication; user names and passwords
 * are not transmitted over the network, nor are they stored in plain text.
 * - **ntlm**: Microsoft LAN Manager authentication (also called Integrated Windows
 * Authentication) does not transmit credentials in plain text, but requires a continuous
 * TCP connection between the server and client.
 * - **ajax-or-json-request**: The web server uses JSON and AJAX requests to authenticate
 * users trying to access the web application through the login URL. For this option, you
 * also need to type the name of the JSON element containing the user name and password.
 */
export enum AuthenticationType {
    AjaxOrJSONRequest = "ajax-or-json-request",
    Form = "form",
    HTTPBasic = "http-basic",
    HTTPDigest = "http-digest",
    NTLM = "ntlm",
    None = "none",
}

/**
 * URL string used for login page.
 *
 * Reference to the URL used in login URL configuration (policy/login-pages). This login URL
 * is protected by Brute Force Protection feature.
 *
 * In a security policy, you can manually specify the HTTP URLs that are allowed (or
 * disallowed) in traffic to the web application being protected. If you are using automatic
 * policy building (and the policy includes learning URLs), the system can determine which
 * URLs to add, based on legitimate traffic. When you create a security policy, wildcard
 * URLs of * (representing all HTTP URLs) are added to the Allowed HTTP URLs lists. During
 * the enforcement readiness period, the system examines the URLs in the traffic and makes
 * learning suggestions that you can review and add the URLs to the policy as needed. This
 * way, the security policy includes the HTTP URLs that are typically used. When you think
 * all the URLs are included in the security policy, you can remove the * wildcards from the
 * allowed URLs lists.
 */
export interface LoginPageURL {
    /**
     * Specifies the conditions for when the browser should allow this URL to be rendered in a
     * frame or iframe.
     * Never: Specifies that this URL must never be rendered in a frame or iframe. The web
     * application instructs browsers to hide, or disable, frame and iframe parts of this URL.
     * Same Origin Only: Specifies that the browser may load the frame or iframe if the
     * referring page is from the same protocol, port, and domain as this URL. This limits the
     * user to navigate only within the same web application.
     * Only From URL: Specifies that the browser may load the frame or iframe from a specified
     * domain. Type the protocol and domain in URL format for example, http://www.mywebsite.com.
     * Do not enter a sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFrames?: AllowRenderingInFrames;
    /**
     * Specifies that the browser may load the frame or iframe from a specified domain. Type the
     * protocol and domain in URL format for example, http://www.mywebsite.com. Do not enter a
     * sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFramesOnlyFrom?: string;
    /**
     * Specifies, when true, that you want attack signatures and threat campaigns to be detected
     * on this URL and possibly override the security policy settings of an attack signature or
     * threat campaign specifically for this URL. After you enable this setting, the system
     * displays a list of attack signatures and threat campaigns.
     */
    attackSignaturesCheck?: boolean;
    canChangeDomainCookie?: boolean;
    /**
     * Specifies that the system adds the X-Frame-Options header to the domain URL's response
     * header. This is done to protect the web application against clickjacking. Clickjacking
     * occurs when an attacker lures a user to click illegitimate frames and iframes because the
     * attacker hid them on legitimate visible website buttons. Therefore, enabling this option
     * protects the web application from other web sites hiding malicious code behind them. The
     * default is disabled. After you enable this option, you can select whether, and under what
     * conditions, the browser should allow this URL to be rendered in a frame or iframe.
     */
    clickjackingProtection?: boolean;
    /**
     * Describes the URL (optional).
     */
    description?:                     string;
    disallowFileUploadOfExecutables?: boolean;
    dynamicFlows?:                    PurpleDynamicFlow[];
    /**
     * The system extracts the Origin (domain) of the request from the Origin header.
     */
    html5CrossOriginRequestsEnforcement?: PurpleHtml5CrossOriginRequestsEnforcement;
    /**
     * If *true*, the URLs allowed by the security policy.
     */
    isAllowed?: boolean;
    /**
     * A request body is mandatory. This is relevant for any method acting as POST.
     */
    mandatoryBody?: boolean;
    /**
     * To allow or disallow specific meta characters in the name of this specific URL (and thus
     * override the global meta character settings).
     */
    metacharOverrides?: PurpleMetacharOverride[];
    /**
     * Specifies, when true, that you want meta characters to be detected on this URL and
     * possibly override the security policy settings of a meta character specifically for this
     * URL. After you enable this setting, the system displays a list of meta characters.
     */
    metacharsOnUrlCheck?: boolean;
    /**
     * Unique ID of a URL with a protocol type and name. Select a Method for the URL to create
     * an API endpoint: URL + Method.
     */
    method?: URLMethod;
    /**
     * Specifies a list of methods that are allowed or disallowed for a specific URL. The list
     * overrides the list of methods allowed or disallowed globally at the policy level.
     */
    methodOverrides?: PurpleMethodOverride[];
    /**
     * Specifies, when true, that you want methods to be detected on this URL and possibly
     * override the security policy settings of a method specifically for this URL. After you
     * enable this setting, the system displays a list of methods.
     */
    methodsOverrideOnUrlCheck?: boolean;
    /**
     * Specifies an HTTP URL that the security policy allows. The available types are:
     *
     * - **Explicit**: Specifies that the URL has a specific name and is not a wildcard entity.
     * Type the name of a URL exactly as you expect it to appear in the request.
     * - **Wildcard**: Specifies that any URL that matches the listed wildcard expression should
     * be treated according to the wildcard attributes. Type a wildcard expression that matches
     * the expected URL. For example, entering the wildcard expression * specifies that any URL
     * is allowed by the security policy.
     * The syntax for wildcard entities is based on shell-style wildcard characters. The list
     * below describes the wildcard characters that you can use so that the entity name can
     * match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Note**: Wildcards do not match regular expressions. Do not use a regular expression as
     * a wildcard.
     */
    name: string;
    /**
     * The attribute operationId is used as an OpenAPI endpint identifier.
     */
    operationId?: string;
    /**
     * If *true* then any violation associated to the respective URL will not be enforced, and
     * the request will not be considered illegal.
     */
    performStaging?: boolean;
    /**
     * When checked (enabled), positional parameters are enabled in the URL.
     */
    positionalParameters?: PurplePositionalParameter[];
    /**
     * Specifies whether the protocol for the URL is HTTP or HTTPS.
     */
    protocol?: URLProtocol;
    /**
     * Array of signature overrides.
     * Specifies attack signatures whose security policy settings are overridden for this URL,
     * and which action the security policy takes when it discovers a request for this URL that
     * matches these attack signatures.
     */
    signatureOverrides?: FluffySignatureOverride[];
    /**
     * Determines the type of the **name** attribute. Only when setting the type to wildcard
     * will the special wildcard characters in the name be interpreted as such.
     */
    type?: HostNameTypeEnum;
    /**
     * Specifies how the system recognizes and enforces requests for this URL according to the
     * requests' header content. The system automatically creates a default header-based content
     * profile for HTTP, and you cannot delete it. However, requests for a URL may contain other
     * types of content, such as JSON, XML, or other proprietary formats.
     */
    urlContentProfiles?: PurpleURLContentProfile[];
    /**
     * Specifies that an asterisk in a wildcard URL matches any number of path segments
     * (separated by slashes); when cleared, specifies that an asterisk matches at most one
     * segment. For example: the wildcard /art/* matches /art/abc/index.html if the wildcard
     * match includes slashes (default value), but does not match it if the check box is
     * cleared. In that case, it matches /art/go.html (only one segment below /art).
     */
    wildcardIncludesSlash?: boolean;
    /**
     * Specifies the order index for wildcard URLs matching. Wildcard URLs with lower wildcard
     * order will get checked for a match prior to URLs with higher wildcard order.
     */
    wildcardOrder?: number;
}

export interface MethodElement {
    actAsMethod?: ActAsMethod;
    name:         string;
}

export enum ActAsMethod {
    Get = "GET",
    Post = "POST",
}

export interface Microservice {
    description?:              string;
    enforcementMode?:          MicroserviceEnforcementMode;
    evasionOverrides?:         EvasionOverride[];
    hostName:                  string;
    hostNameType?:             HostNameTypeEnum;
    httpProtocolOverrides?:    HTTPProtocolOverride[];
    urlName:                   string;
    urlType?:                  HostNameTypeEnum;
    violationOverrides?:       ViolationOverride[];
    wildcardOrder?:            number;
    wildcardUrlIncludesSlash?: boolean;
}

export enum MicroserviceEnforcementMode {
    Blocking = "blocking",
    PolicyDefault = "policy-default",
    Transparent = "transparent",
}

export interface EvasionOverride {
    description?:       EvasionDescription;
    enabled?:           boolean;
    learn?:             boolean;
    maxDecodingPasses?: number;
}

export interface HTTPProtocolOverride {
    description?: HTTPProtocolDescription;
    enabled?:     boolean;
    learn?:       boolean;
    maxHeaders?:  number;
    maxParams?:   number;
}

export interface ViolationOverride {
    alarm?: boolean;
    block?: boolean;
    learn?: boolean;
    name?:  string;
}

export interface NavigationParameter {
    name:    string;
    urlName: string;
}

export interface OpenAPIFile {
    link: string;
}

/**
 * This section defines parameters that the security policy permits in requests.
 */
export interface ParameterElement {
    /**
     * Determines whether an empty value is allowed for a parameter.
     */
    allowEmptyValue?: boolean;
    /**
     * Determines whether multiple parameter instances with the same name are allowed in one
     * request.
     */
    allowRepeatedParameterName?: boolean;
    /**
     * Specifies type of serialization for array of primitives parameter.
     * Serialization defines how multiple values are delimited - format that can be transmitted
     * and reconstructed later:
     * - **pipe**: pipe-separated values. Array color=["blue","black"] -> color=blue|black.
     * - **form**: ampersand-separated values. Array color=["blue","black"] ->
     * color=blue,black.
     * - **matrix**: semicolon-prefixed values. Array color=["blue","black"] ->
     * ;color=blue,black.
     * - **tsv**: tab-separated values. Aarray color=["blue","black"] -> color=blue\tblack.
     * - **csv**: comma-separated values. Array color=["blue","black"] -> color=blue,black.
     * - **label**: dot-prefixed values. Array color=["blue","black"] -> .blue.black.
     * - **multi**: multiple parameter instances rather than multiple values. Array
     * color=["blue","black"] -> color=blue&color=black.
     * - **ssv**: space-separated values. Array color=["blue","black"] -> color=blue black.
     * - **multipart**: defines array of files.
     *
     * **Notes**:
     * - This attribute is relevant only for parameters with **array** *valueType*.
     * - **multi** and **form** serializations can be defined for parameter with *query*,
     * *form-data* or *cookie* locations only.
     * - **multipart** serialization can be defined for parameter with *form-data* location
     * only.
     * - **matrix** and **label** serializations can be defined for parameter with *path*
     * location only.
     */
    arraySerializationFormat?: ArraySerializationFormat;
    /**
     * Determines whether items in an array parameter must be unique.
     * This attribute is relevant only for parameters with **array** *valueType*.
     */
    arrayUniqueItemsCheck?: boolean;
    /**
     * Determines whether attack signatures and threat campaigns must be detected in a
     * parameter's value.
     * This attribute is relevant only for parameters with **alpha-numeric** or **binary**
     * *dataType*.
     */
    attackSignaturesCheck?: boolean;
    /**
     * Determines whether an array parameter has a restricted maximum number of items.
     * This attribute is relevant only for parameters with **array** *valueType*.
     */
    checkMaxItemsInArray?: boolean;
    /**
     * Determines whether the parameter has a restricted maximum value.
     * This attribute is relevant only for parameters with **integer** or **decimal** *dataType*.
     */
    checkMaxValue?: boolean;
    /**
     * Determines whether a parameter has a restricted maximum length for value.
     */
    checkMaxValueLength?: boolean;
    /**
     * Determines whether disallowed metacharacters must be detected in a parameter's name.
     * This attribute is relevant only for **wildcard** parameters with **alpha-numeric**
     * *dataType*.
     */
    checkMetachars?: boolean;
    /**
     * Determines whether an array parameter has a restricted minimum number of items.
     * This attribute is relevant only for parameters with **array** *valueType*.
     */
    checkMinItemsInArray?: boolean;
    /**
     * Determines whether a parameter has a restricted minimum value.
     * This attribute is relevant only for parameters with **integer** or **decimal** *dataType*.
     */
    checkMinValue?: boolean;
    /**
     * Determines whether a parameter has a restricted minimum length for value.
     */
    checkMinValueLength?: boolean;
    /**
     * Determines whether a parameter's value is a multiple of a number defined in *multipleOf*.
     * This attribute is relevant only for parameters with **integer** or **decimal** *dataType*.
     */
    checkMultipleOfValue?: boolean;
    contentProfile?:       StickyContentProfile;
    /**
     * Specifies data type of parameter's value:
     *
     * - **none**: system data type which is used by policy builder and cannot be set manually.
     * - **alpha-numeric**: specifies that the value of parameter can be any text consisting of
     * letters, digits, and the underscore character.
     * - **binary**: specifies there is no text limit for the value of a parameter (length
     * checks only).
     * - **phone**: specifies that the value of a parameter can be text in telephone number
     * format only.
     * - **email**: specifies that the value of a parameter must be text in email format only.
     * - **boolean**: specifies that the value of a parameter must be boolean (only *true* and
     * *false* values are allowed).
     * - **integer**: specifies that the value of a parameter must be whole numbers only (no
     * decimals).
     * - **decimal**: specifies that the value of a parameter is numbers only and can include
     * decimals.
     *
     * **Notes**:
     * -  This attribute is relevant for parameters with **array** or **user-input** *valueType*
     * only.
     */
    dataType?: DataType;
    /**
     * Determines whether a parameter's value cannot have binary executable content.
     * This attribute is relevant only for parameters with **binary** *dataType*.
     */
    disallowFileUploadOfExecutables?: boolean;
    /**
     * Determines whether the parameter value includes the pattern defined in
     * *regularExpression*.
     * This attribute is relevant only for parameters with **alpha-numeric** *dataType*.
     */
    enableRegularExpression?: boolean;
    /**
     * Determines whether the maximum value defined in *maximumValue* attribute is exclusive.
     * This attribute is relevant only if *checkMaxValue* is set to **true**.
     */
    exclusiveMax?: boolean;
    /**
     * Determines whether a minimum value defined in *minimumValue* attribute is exclusive.
     * This attribute is relevant only if *checkMinValue* is set to **true**.
     */
    exclusiveMin?: boolean;
    /**
     * Specifies whether an array or object parameters should have separate values for each
     * array item or object property.
     * This attribute is relevant only if *objectSerializationStyle* is defined.
     *
     * **Notes**:
     * -  This attribute is not relevant for parameters with **deep-object**,
     * **space-delimited** or **pipe-delimited** *objectSerializationStyle*.
     */
    explodeObjectSerialization?: boolean;
    /**
     * Determines whether a parameter's value contains a Base64 encoded string.
     * If the value is indeed Base64 encoded, the system decodes this value and continues with
     * its security checks.
     * This attribute is relevant only for parameters with **alpha-numeric** or **binary**
     * *dataType*.
     */
    isBase64?: boolean;
    /**
     * Determines whether a parameter is located in the value of Cookie header.
     * *parameterLocation* attribute is ignored if **isCookie** is set to *true*.
     */
    isCookie?: boolean;
    /**
     * Determines whether a parameter is located in headers as one of the headers.
     * *parameterLocation* attribute is ignored if **isHeader** is set to *true*.
     */
    isHeader?: boolean;
    /**
     * Specifies whether the parameter is associated with a URL, a flow, or neither.
     */
    level?: Level;
    /**
     * Determines whether a parameter must exist in the request.
     */
    mandatory?: boolean;
    /**
     * Determines the restriction for the maximum length of parameter's value.
     * This attribute is relevant only if *checkMaxValueLength* is set to **true**.
     */
    maximumLength?: number;
    /**
     * Determines the restriction for the maximum value of parameter.
     * This attribute is relevant only if *checkMaxValue* is set to **true**.
     */
    maximumValue?: number;
    /**
     * Determines the restriction forthe  maximum number of items in an array parameter.
     * This attribute is relevant only if *checkMaxItemsInArray* is set to **true**.
     */
    maxItemsInArray?: number;
    /**
     * Determines whether disallowed metacharacters must be detected in a parameter's value.
     * This attribute is relevant only for parameters with **alpha-numeric** *dataType*.
     */
    metacharsOnParameterValueCheck?: boolean;
    /**
     * Determines the restriction for the minimum length of parameter's value.
     * This attribute is relevant only if *checkMinValueLength* is set to **true**.
     */
    minimumLength?: number;
    /**
     * Determines the restriction for the minimum value of a parameter.
     * This attribute is relevant only if *checkMinValue* is set to **true**.
     */
    minimumValue?: number;
    /**
     * Determines the restriction for the minimum number of items in an array parameter.
     * This attribute is relevant only if *checkMinItemsInArray* is set to **true**.
     */
    minItemsInArray?: number;
    /**
     * Determines the number by which a parameter's value is divisible without remainder.
     * This number must be positive and it may be a floating-point number.
     * This attribute is relevant only if *checkMultipleOfValue* is set to **true**.
     */
    multipleOf?: number;
    /**
     * Specifies the name of a parameter which must be permitted in requests.
     * Format of parameter name attribute differs depending on *type* attribute:
     * - **explicit** *type*: name of permitted parameter in request should literally match.
     * - **wildcard** *type*: name of permitted parameter in request should match wildcard
     * expression.
     *
     * The syntax for wildcard entities is based on shell-style wildcard characters.
     * The list below describes the wildcard characters that you can use so that the entity name
     * can match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Notes**:
     * - Wildcards do not match regular expressions. Do not use a regular expression as a
     * wildcard.
     * - Empty parameter name is allowed for **explicit** *type*
     */
    name: string;
    /**
     * Determines metacharacters whose security policy settings are overridden for this
     * parameter, and which action the security policy takes when it discovers a request for
     * this parameter that has these metacharacters in the name.
     * This attribute is relevant only if *checkMetachars* is set to **true**.
     */
    nameMetacharOverrides?: FluffyNameMetacharOverride[];
    /**
     * Specifies the type of serialization for an object or complex array parameter.
     * Serialization defines how multiple values are delimited - format that can be transmitted
     * and reconstructed later:
     * - **pipe-delimited**: pipe-separated values. Object color={"R":100,"G":200} ->
     * color=R|100|G|200.
     * - **form**: ampersand-separated values. Object color={"R":100,"G":200} ->
     * color=R,100,G,200 if *explodeObjectSerialization* set to **false** or -> R=100&G=200 if
     * *explodeObjectSerialization* set to **true**.
     * - **space-delimited**: space-separated values. Object color={"R":100,"G":200} -> color=R
     * 100 G 200.
     * - **deep-object**: rendering nested objects. Object color={"R":100,"G":200} ->
     * color[R]=100&color[G]=200.
     * - **matrix**: semicolon-prefixed values. Object color={"R":100,"G":200} ->
     * ;color=R,100,G,200 if *explodeObjectSerialization* set to **false** or -> ;R=100;G=200 if
     * *explodeObjectSerialization* set to **true**.
     * - **simple**: comma-separated values. Object color={"R":100,"G":200} -> R,100,G,200 if
     * *explodeObjectSerialization* set to **false** or -> R=100,G=200 if
     * *explodeObjectSerialization* set to **true**.
     * - **label**: dot-prefixed values. Object color={"R":100,"G":200} -> .R.100.G.200 if
     * *explodeObjectSerialization* set to **false** or -> .R=100.G=200 if
     * *explodeObjectSerialization* set to **true**.
     *
     * **Notes**:
     * - This attribute is relevant only for parameters with **object** or **openapi-array**
     * *valueType*.
     * - **form** serialization can be defined for a parameter with *query*, *form-data* or
     * *cookie* locations only.
     * - **matrix** and **label** serializations can be defined for an array parameter with
     * *path* location only.
     * - **simple** serializations can be defined for a parameter with *path* and *header*
     * locations only.
     * - **deep-object** serialization can be defined for a parameter with *query* or
     * *form-data* locations only.
     */
    objectSerializationStyle?: ObjectSerializationStyle;
    /**
     * Determines the set of possible parameter's values.
     * This attribute is not relevant for parameters with **phone**, **email** or **binary**
     * *dataType*.
     */
    parameterEnumValues?: string[];
    /**
     * Specifies location of parameter in request:
     *
     * - **any**: in query string, in POST data (body) or in URL path.
     * - **query**: in query string.
     * - **form-data**: in POST data (body).
     * - **cookie**: in value of Cookie header.
     * - **path**: in URL path.
     * - **header**: in request headers.
     *
     * **Notes**:
     * - **path** location can be defined for parameter with **global** *level* only.
     * - **path**, **header** and **cookie** location can be defined for parameter with
     * **explicit** *type* only.
     * - **header** and **cookie** location cannot be defined for parameter with empty *name*.
     */
    parameterLocation?: ParameterLocation;
    /**
     * Determines the staging state of a parameter.
     * If you place an entity in staging, the system does not block requests for this entity.
     *
     * Tip: Use staging on wildcard entities to build the security policy without explicit
     * entities of this type, rather than configuring the wildcard entity itself to be enforced
     * with the settings found on it.
     */
    performStaging?: boolean;
    /**
     * Determines a positive regular expression (PCRE) for a parameter's value.
     * This attribute is relevant only if *enableRegularExpression* is set to **true**.
     *
     * **Notes**:
     * - The length of a regular expression is limited to 254 characters.
     */
    regularExpression?: string;
    /**
     * Determines whether a parameter is sensitive and must be not visible in logs nor in the
     * user interface.
     * Instead of actual valu,e a string of asterisks is shown for this parameter.
     * Use it to protect sensitive user input, such as a password or a credit card number, in a
     * validated request.
     */
    sensitiveParameter?: boolean;
    /**
     * Determines attack signatures whose security policy settings are overridden for this
     * parameter, and which action the security policy takes when it discovers a request for
     * this parameter that matches these attack signatures.
     * This attribute is relevant only if *signatureOverrides* is set to **true**.
     */
    signatureOverrides?: TentacledSignatureOverride[];
    /**
     * Determines the set of possible parameter's values.
     * This attribute is relevant for parameters with **static-content** *valueType* only.
     */
    staticValues?: string[];
    /**
     * Specifies the type of the *name* attribute.
     */
    type?: HostNameTypeEnum;
    url?:  FluffyURL;
    /**
     * Determines metacharacters whose security policy settings are overridden for this
     * parameter, and which action the security policy takes when it discovers a request for
     * this parameter that has these metacharacters in value.
     * This attribute is relevant only if *metacharsOnParameterValueCheck* is set to **true**.
     */
    valueMetacharOverrides?: FluffyValueMetacharOverride[];
    /**
     * Specifies type of parameter's value:
     *
     * - **object**: the parameter's value is complex object defined by JSON schema.
     * - **dynamic-content**: the parameter's content changes dynamically.
     * - **openapi-array**: the parameter's value is complex array defined by JSON schema.
     * - **ignore**: the system does not perform validity checks on the value of the parameter.
     * - **static-content**: the parameter has a static, or pre-defined, value(s).
     * - **json**: the parameter's value is JSON data.
     * - **array**: the parameter's value is array of primitives.
     * - **user-input**: the parameter's value is provided by user-input.
     * - **xml**: the parameter's value is XML data.
     * - **auto-detect**: the parameter's value can be user-inpur, XML data or JSON data. The
     * system automatically classifies the type of value.
     * - **dynamic-parameter-name**: the parameter's name changes dynamically.
     *
     * **Notes**:
     * - **dynamic-parameter-name** value type can be defined for a parameter with **flow**
     * *level* and **explicit** *type* only.
     * - **dynamic-content** value type can be defined for a parameter with **explicit** *type*
     * only.
     */
    valueType?: ValueType;
    /**
     * Specifies the order in which wildcard entities are organized.
     * Matching of an enforced parameter with a defined wildcard parameter happens based on
     * order from smaller to larger.
     */
    wildcardOrder?: number;
}

export interface StickyContentProfile {
    contentProfile?: IndigoContentProfile;
}

export interface IndigoContentProfile {
    name?: string;
}

export interface FluffyNameMetacharOverride {
    /**
     * Specifies permission of *metachar* - when *false*, then character is prohibited.
     */
    isAllowed?: boolean;
    /**
     * Specifies character in hexadecimal format with special allowance.
     */
    metachar: string;
}

export interface TentacledSignatureOverride {
    /**
     * Specifies, when true, that the overridden signature is enforced
     */
    enabled?: boolean;
    /**
     * The signature name, which along with the signature tag, identifies the signature.
     */
    name?: string;
    /**
     * The signature ID which identifies the signature.
     */
    signatureId?: number;
    /**
     * The signature tag, which along with the signature name, identifies the signature.
     */
    tag?: string;
}

/**
 * Reference to the URL used in login URL configuration (policy/login-pages). This login URL
 * is protected by Brute Force Protection feature.
 *
 * In a security policy, you can manually specify the HTTP URLs that are allowed (or
 * disallowed) in traffic to the web application being protected. If you are using automatic
 * policy building (and the policy includes learning URLs), the system can determine which
 * URLs to add, based on legitimate traffic. When you create a security policy, wildcard
 * URLs of * (representing all HTTP URLs) are added to the Allowed HTTP URLs lists. During
 * the enforcement readiness period, the system examines the URLs in the traffic and makes
 * learning suggestions that you can review and add the URLs to the policy as needed. This
 * way, the security policy includes the HTTP URLs that are typically used. When you think
 * all the URLs are included in the security policy, you can remove the * wildcards from the
 * allowed URLs lists.
 */
export interface FluffyURL {
    /**
     * Specifies the conditions for when the browser should allow this URL to be rendered in a
     * frame or iframe.
     * Never: Specifies that this URL must never be rendered in a frame or iframe. The web
     * application instructs browsers to hide, or disable, frame and iframe parts of this URL.
     * Same Origin Only: Specifies that the browser may load the frame or iframe if the
     * referring page is from the same protocol, port, and domain as this URL. This limits the
     * user to navigate only within the same web application.
     * Only From URL: Specifies that the browser may load the frame or iframe from a specified
     * domain. Type the protocol and domain in URL format for example, http://www.mywebsite.com.
     * Do not enter a sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFrames?: AllowRenderingInFrames;
    /**
     * Specifies that the browser may load the frame or iframe from a specified domain. Type the
     * protocol and domain in URL format for example, http://www.mywebsite.com. Do not enter a
     * sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFramesOnlyFrom?: string;
    /**
     * Specifies, when true, that you want attack signatures and threat campaigns to be detected
     * on this URL and possibly override the security policy settings of an attack signature or
     * threat campaign specifically for this URL. After you enable this setting, the system
     * displays a list of attack signatures and threat campaigns.
     */
    attackSignaturesCheck?: boolean;
    canChangeDomainCookie?: boolean;
    /**
     * Specifies that the system adds the X-Frame-Options header to the domain URL's response
     * header. This is done to protect the web application against clickjacking. Clickjacking
     * occurs when an attacker lures a user to click illegitimate frames and iframes because the
     * attacker hid them on legitimate visible website buttons. Therefore, enabling this option
     * protects the web application from other web sites hiding malicious code behind them. The
     * default is disabled. After you enable this option, you can select whether, and under what
     * conditions, the browser should allow this URL to be rendered in a frame or iframe.
     */
    clickjackingProtection?: boolean;
    /**
     * Describes the URL (optional).
     */
    description?:                     string;
    disallowFileUploadOfExecutables?: boolean;
    dynamicFlows?:                    PurpleDynamicFlow[];
    /**
     * The system extracts the Origin (domain) of the request from the Origin header.
     */
    html5CrossOriginRequestsEnforcement?: PurpleHtml5CrossOriginRequestsEnforcement;
    /**
     * If *true*, the URLs allowed by the security policy.
     */
    isAllowed?: boolean;
    /**
     * A request body is mandatory. This is relevant for any method acting as POST.
     */
    mandatoryBody?: boolean;
    /**
     * To allow or disallow specific meta characters in the name of this specific URL (and thus
     * override the global meta character settings).
     */
    metacharOverrides?: PurpleMetacharOverride[];
    /**
     * Specifies, when true, that you want meta characters to be detected on this URL and
     * possibly override the security policy settings of a meta character specifically for this
     * URL. After you enable this setting, the system displays a list of meta characters.
     */
    metacharsOnUrlCheck?: boolean;
    /**
     * Unique ID of a URL with a protocol type and name. Select a Method for the URL to create
     * an API endpoint: URL + Method.
     */
    method?: URLMethod;
    /**
     * Specifies a list of methods that are allowed or disallowed for a specific URL. The list
     * overrides the list of methods allowed or disallowed globally at the policy level.
     */
    methodOverrides?: PurpleMethodOverride[];
    /**
     * Specifies, when true, that you want methods to be detected on this URL and possibly
     * override the security policy settings of a method specifically for this URL. After you
     * enable this setting, the system displays a list of methods.
     */
    methodsOverrideOnUrlCheck?: boolean;
    /**
     * Specifies an HTTP URL that the security policy allows. The available types are:
     *
     * - **Explicit**: Specifies that the URL has a specific name and is not a wildcard entity.
     * Type the name of a URL exactly as you expect it to appear in the request.
     * - **Wildcard**: Specifies that any URL that matches the listed wildcard expression should
     * be treated according to the wildcard attributes. Type a wildcard expression that matches
     * the expected URL. For example, entering the wildcard expression * specifies that any URL
     * is allowed by the security policy.
     * The syntax for wildcard entities is based on shell-style wildcard characters. The list
     * below describes the wildcard characters that you can use so that the entity name can
     * match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Note**: Wildcards do not match regular expressions. Do not use a regular expression as
     * a wildcard.
     */
    name: string;
    /**
     * The attribute operationId is used as an OpenAPI endpint identifier.
     */
    operationId?: string;
    /**
     * If *true* then any violation associated to the respective URL will not be enforced, and
     * the request will not be considered illegal.
     */
    performStaging?: boolean;
    /**
     * When checked (enabled), positional parameters are enabled in the URL.
     */
    positionalParameters?: PurplePositionalParameter[];
    /**
     * Specifies whether the protocol for the URL is HTTP or HTTPS.
     */
    protocol?: URLProtocol;
    /**
     * Array of signature overrides.
     * Specifies attack signatures whose security policy settings are overridden for this URL,
     * and which action the security policy takes when it discovers a request for this URL that
     * matches these attack signatures.
     */
    signatureOverrides?: FluffySignatureOverride[];
    /**
     * Determines the type of the **name** attribute. Only when setting the type to wildcard
     * will the special wildcard characters in the name be interpreted as such.
     */
    type?: HostNameTypeEnum;
    /**
     * Specifies how the system recognizes and enforces requests for this URL according to the
     * requests' header content. The system automatically creates a default header-based content
     * profile for HTTP, and you cannot delete it. However, requests for a URL may contain other
     * types of content, such as JSON, XML, or other proprietary formats.
     */
    urlContentProfiles?: PurpleURLContentProfile[];
    /**
     * Specifies that an asterisk in a wildcard URL matches any number of path segments
     * (separated by slashes); when cleared, specifies that an asterisk matches at most one
     * segment. For example: the wildcard /art/* matches /art/abc/index.html if the wildcard
     * match includes slashes (default value), but does not match it if the check box is
     * cleared. In that case, it matches /art/go.html (only one segment below /art).
     */
    wildcardIncludesSlash?: boolean;
    /**
     * Specifies the order index for wildcard URLs matching. Wildcard URLs with lower wildcard
     * order will get checked for a match prior to URLs with higher wildcard order.
     */
    wildcardOrder?: number;
}

export interface FluffyValueMetacharOverride {
    /**
     * Specifies permission of *metachar* - when *false*, then character is prohibited.
     */
    isAllowed?: boolean;
    /**
     * Specifies character in hexadecimal format with special allowance.
     */
    metachar: string;
}

export interface PlainTextProfile {
    attackSignaturesCheck?: boolean;
    defenseAttributes?:     PlainTextProfileDefenseAttributes;
    description?:           string;
    metacharElementCheck?:  boolean;
    metacharOverrides?:     PlainTextProfileMetacharOverride[];
    name:                   string;
    signatureOverrides?:    PlainTextProfileSignatureOverride[];
}

export interface PlainTextProfileDefenseAttributes {
    maximumLineLength?:      MaximumCookieHeaderLengthEnum | number;
    maximumTotalLength?:     MaximumCookieHeaderLengthEnum | number;
    performPercentDecoding?: boolean;
}

export interface PlainTextProfileMetacharOverride {
    isAllowed?: boolean;
    metachar:   string;
}

export interface PlainTextProfileSignatureOverride {
    enabled?:     boolean;
    name?:        string;
    signatureId?: number;
    tag?:         string;
}

export interface PolicyBuilder {
    autoApply?:                                AutoApply;
    enableFullPolicyInspection?:               boolean;
    enableTrustedTrafficSiteChangeTracking?:   boolean;
    enableUntrustedTrafficSiteChangeTracking?: boolean;
    fullyAutomatic?:                           boolean;
    inactiveEntityInactivityDurationInDays?:   number;
    learnFromResponses?:                       boolean;
    learnInactiveEntities?:                    boolean;
    learningMode?:                             LearningMode;
    learnOnlyFromNonBotTraffic?:               boolean;
    responseStatusCodes?:                      string[];
    trafficTighten?:                           TrafficTighten;
    trustAllIps?:                              boolean;
    trustedTrafficLoosen?:                     TrustedTrafficLoosen;
    trustedTrafficSiteChangeTracking?:         TrustedTrafficSiteChangeTracking;
    untrustedTrafficLoosen?:                   UntrustedTrafficLoosen;
    untrustedTrafficSiteChangeTracking?:       UntrustedTrafficSiteChangeTracking;
}

export interface AutoApply {
    applyAtAllTimes?:   boolean;
    applyOnAllDays?:    boolean;
    applyOnFridays?:    boolean;
    applyOnMondays?:    boolean;
    applyOnSaturdays?:  boolean;
    applyOnSundays?:    boolean;
    applyOnThursdays?:  boolean;
    applyOnTuesdays?:   boolean;
    applyOnWednesdays?: boolean;
    endTime?:           string;
    frequency?:         Frequency;
    startTime?:         string;
}

export enum Frequency {
    Never = "never",
    RealTime = "real-time",
    Scheduled = "scheduled",
}

export enum LearningMode {
    Automatic = "automatic",
    Disabled = "disabled",
    Manual = "manual",
}

export interface TrafficTighten {
    maxModificationSuggestionScore?: number;
    minDaysBetweenSamples?:          number;
    totalRequests?:                  number;
}

export interface TrustedTrafficLoosen {
    differentSources?:       number;
    maxDaysBetweenSamples?:  number;
    minHoursBetweenSamples?: number;
}

export interface TrustedTrafficSiteChangeTracking {
    differentSources?:         number;
    maxDaysBetweenSamples?:    number;
    minMinutesBetweenSamples?: number;
}

export interface UntrustedTrafficLoosen {
    differentSources?:       number;
    maxDaysBetweenSamples?:  number;
    minHoursBetweenSamples?: number;
}

export interface UntrustedTrafficSiteChangeTracking {
    differentSources?:         number;
    maxDaysBetweenSamples?:    number;
    minMinutesBetweenSamples?: number;
}

/**
 * Defines Policy Builder learning location and related configuration.
 */
export interface PolicyBuilderCentralConfiguration {
    /**
     * Specifies learning location.
     *
     * - **central**: Security policy learning is done centrally and managed via a BIG-IQ
     * system. Centralized learning can be enabled from BIG-IQ only and, when enabled, all
     * interim local policy learning will be lost. When learning is centralized, you cannot make
     * local changes on your BIG-IP that will affect the security policy learning.
     * - **local**: Security policy learning is done locally and managed on BIG-IP
     */
    buildingMode?: Mode;
    /**
     * Specifies list of BIG-IQ machines that local Policy Builder is sending data to.
     */
    centralPbAddresses?: CentralPbAddress[];
    /**
     * Specifies event correlation location.
     *
     * - **central**: Event correlation is done centrally and stored in a BIG-IQ system.
     * - **local**: Event correlation is done locally and stored on BIG-IP.
     */
    eventCorrelationMode?: Mode;
}

/**
 * Specifies learning location.
 *
 * - **central**: Security policy learning is done centrally and managed via a BIG-IQ
 * system. Centralized learning can be enabled from BIG-IQ only and, when enabled, all
 * interim local policy learning will be lost. When learning is centralized, you cannot make
 * local changes on your BIG-IP that will affect the security policy learning.
 * - **local**: Security policy learning is done locally and managed on BIG-IP
 *
 * Specifies event correlation location.
 *
 * - **central**: Event correlation is done centrally and stored in a BIG-IQ system.
 * - **local**: Event correlation is done locally and stored on BIG-IP.
 */
export enum Mode {
    Central = "central",
    Local = "local",
}

export interface CentralPbAddress {
    /**
     * Host name of BIG-IQ machine.
     */
    hostName?: string;
    /**
     * IP address of BIG-IQ machine.
     */
    ipAddress: string;
    /**
     * Order or BIG-IQ machine in the list.
     */
    order?: number;
    /**
     * Port that BIG-IQ machine is listening to.
     */
    port: number;
    /**
     * If enabled - certificate should be verified when connecting to BIG-IQ machine
     */
    verifyCertificate?: boolean;
}

export interface PolicyBuilderCookie {
    collapseCookieOccurrences?:    number;
    collapseCookiesIntoOneEntity?: boolean;
    enforceUnmodifiedCookies?:     boolean;
    learnExplicitCookies?:         LearnExplicitCookies;
    maximumCookies?:               number;
}

export enum LearnExplicitCookies {
    Never = "never",
    Selective = "selective",
}

/**
 * Defines Policy Builder behavior for filetypes
 */
export interface PolicyBuilderFiletype {
    /**
     * Specifies under which circumstances the Policy Builder adds, or suggests you add,
     * explicit file types to the security policy:
     *
     * - **compact**: Specifies that the system will create a list of the most commonly used
     * file types (while enforcing all other file types with a wildcard rule), together with a
     * pre-populated list of known disallowed file types. This option serves as a good balance
     * between **selective** and **always**
     * - **selective**: Specifies that when false positives occur (applicable only for the *
     * wildcard), the system will add/suggest to add an explicit file type with relaxed settings
     * that avoid the false positive. This option serves as a good balance between security,
     * policy size, and ease of maintenance
     * - **always**: Specifies you would like to create a comprehensive whitelist policy that
     * includes ALL of the website file types. This option will form a large set of security
     * policy entities, which will produce a granular object-level configuration and high
     * security level, it may take more time to maintain such a policy
     * - **never**: Specifies that when false positives occur the system will suggest to relax
     * the settings of the wildcard file type
     */
    learnExplicitFiletypes?: LearnExplicit;
    /**
     * Specifies approximately the largest number of file types that Policy Builder will learn
     */
    maximumFileTypes?: number;
}

/**
 * Specifies under which circumstances the Policy Builder adds, or suggests you add,
 * explicit file types to the security policy:
 *
 * - **compact**: Specifies that the system will create a list of the most commonly used
 * file types (while enforcing all other file types with a wildcard rule), together with a
 * pre-populated list of known disallowed file types. This option serves as a good balance
 * between **selective** and **always**
 * - **selective**: Specifies that when false positives occur (applicable only for the *
 * wildcard), the system will add/suggest to add an explicit file type with relaxed settings
 * that avoid the false positive. This option serves as a good balance between security,
 * policy size, and ease of maintenance
 * - **always**: Specifies you would like to create a comprehensive whitelist policy that
 * includes ALL of the website file types. This option will form a large set of security
 * policy entities, which will produce a granular object-level configuration and high
 * security level, it may take more time to maintain such a policy
 * - **never**: Specifies that when false positives occur the system will suggest to relax
 * the settings of the wildcard file type
 *
 * Specifies under which circumstances the Policy Builder adds, or suggests you add,
 * explicit parameters to the security policy:
 *
 * - **compact**: Specifies that the system will create a list of the most commonly used
 * parameters, while enforcing all other parameters with a wildcard rule. This option serves
 * as a good balance between **selective** and **always**
 * - **selective**: Specifies that when false positives occur (applicable only for the *
 * wildcard), the system will add/suggest to add an explicit parameter with relaxed settings
 * that avoid the false positive. This option serves as a good balance between security,
 * policy size, and ease of maintenance
 * - **always**: Specifies you would like to create a comprehensive whitelist policy that
 * includes ALL of the website parameters. This option will form a large set of security
 * policy entities, which will produce a granular object-level configuration and high
 * security level, it may take more time to maintain such a policy
 * - **never**: Specifies that when false positives occur the system will suggest to relax
 * the settings of the wildcard parameter
 */
export enum LearnExplicit {
    Always = "always",
    Compact = "compact",
    Never = "never",
    Selective = "selective",
}

export interface PolicyBuilderHeader {
    maximumHosts?:   number;
    validHostNames?: boolean;
}

/**
 * Defines Policy Builder behavior for parameters
 */
export interface PolicyBuilderParameter {
    /**
     * When enabled, if the Policy Builder detects legitimate XML or JSON data to parameters
     * configured in the security policy, the Policy Builder adds XML or JSON profiles to the
     * security policy and configures their attributes according to the data it detects
     */
    classifyParameters?: boolean;
    /**
     * Defines how many common explicit parameters the Policy Builder must detect (the number of
     * occurrences) before collapsing them to one wildcard parameter.
     * The minimum number of occurrences allowed is 2.
     */
    collapseParameterOccurrences?: number;
    /**
     * When enabled, the system collapses many common parameters into one wildcard parameter.
     */
    collapseParametersIntoOneEntity?: boolean;
    /**
     * Defines the conditions under which the Policy Builder adds dynamic parameters to the
     * security policy
     * To enabled this functionality there are several prerequisites:
     * - learnExplicitParameters is **always** or **selective**
     * - learnExplicitUrls in policy-builder-url and/or learnExplicitFiletypes in
     * policy-builder-filetype is **always** or **selective**
     * - learnFromResponses is enabled in policy-builder
     * - at least one of the allHiddenFields/formParameters/linkParameters is enabled
     */
    dynamicParameters?: DynamicParameters;
    /**
     * Specifies under which circumstances the Policy Builder adds, or suggests you add,
     * explicit parameters to the security policy:
     *
     * - **compact**: Specifies that the system will create a list of the most commonly used
     * parameters, while enforcing all other parameters with a wildcard rule. This option serves
     * as a good balance between **selective** and **always**
     * - **selective**: Specifies that when false positives occur (applicable only for the *
     * wildcard), the system will add/suggest to add an explicit parameter with relaxed settings
     * that avoid the false positive. This option serves as a good balance between security,
     * policy size, and ease of maintenance
     * - **always**: Specifies you would like to create a comprehensive whitelist policy that
     * includes ALL of the website parameters. This option will form a large set of security
     * policy entities, which will produce a granular object-level configuration and high
     * security level, it may take more time to maintain such a policy
     * - **never**: Specifies that when false positives occur the system will suggest to relax
     * the settings of the wildcard parameter
     */
    learnExplicitParameters?: LearnExplicit;
    /**
     * Specifies approximately the largest number of parameters that Policy Builder will learn
     */
    maximumParameters?: number;
    /**
     * Defines how the Policy Builder determines on which level to add, or suggest you add,
     * parameters to the security policy
     *
     * - **global**: The system creates learning suggestions based on the properties of entities
     * that already exist in the security policy.
     * When manually learning a suggestion for a parameter violation, the resolve action
     * suggested by the system is based on the parameter name and level of the parameter in the
     * security policy that caused this violation.
     * When automatically building the security policy, the Policy Builder adds parameters on
     * the Global level.
     * - **url**: The system creates learning suggestions based on real traffic, and is not
     * limited to the current properties of entities that exist in the security
     * policy.
     * When manually learning a suggestion for a parameter violation, the resolve action
     * suggested by the system is based on the actual parameter name and the URL or flow on
     * which the violation was detected.
     * When automatically building the security policy, the Policy Builder adds parameters on
     * the URL level.
     * In addition, if the actual URL does not exist in the security policy, the system adds the
     * URL and file type (if it also does not exist) on which the violation was detected.
     */
    parameterLearningLevel?: ParameterLearningLevel;
    /**
     * When enabled, the Policy Builder learns integer parameters (parameters with a Data Type
     * of Integer).
     */
    parametersIntegerValue?: boolean;
}

/**
 * Defines the conditions under which the Policy Builder adds dynamic parameters to the
 * security policy
 * To enabled this functionality there are several prerequisites:
 * - learnExplicitParameters is **always** or **selective**
 * - learnExplicitUrls in policy-builder-url and/or learnExplicitFiletypes in
 * policy-builder-filetype is **always** or **selective**
 * - learnFromResponses is enabled in policy-builder
 * - at least one of the allHiddenFields/formParameters/linkParameters is enabled
 */
export interface DynamicParameters {
    /**
     * When enabled, the Policy Builder adds to the security policy all HIDDEN form input
     * parameters, seen in responses, as dynamic content value parameters
     */
    allHiddenFields?: boolean;
    /**
     * When enabled, the Policy Builder adds parameters, found in forms, to the security policy
     * as dynamic content value if a number of unique value sets are seen in responses for that
     * parameter.
     * Use uniqueValueSets to specify how many different value sets must be seen for that
     * parameter in order for the Policy Builder to consider it dynamic content value.
     * A value set is an aggregation of server-supplied value(s) of the parameter as seen in the
     * web form, for example, all the values of a radio button or select boxes taken together
     * are a value set.
     */
    formParameters?: boolean;
    /**
     * When enabled, the Policy Builder adds parameters, found in links, to the security policy
     * as dynamic content value if a number of unique values are seen in responses for that
     * parameter.
     * Use the uniqueValueSets to specify how many different values must be seen for that
     * parameter in order for the Policy Builder to consider it dynamic content value.
     */
    linkParameters?: boolean;
    /**
     * Specifies how many different values must be seen for that parameter in order for the
     * Policy Builder to consider it dynamic content value
     */
    uniqueValueSets?: number;
}

/**
 * Defines how the Policy Builder determines on which level to add, or suggest you add,
 * parameters to the security policy
 *
 * - **global**: The system creates learning suggestions based on the properties of entities
 * that already exist in the security policy.
 * When manually learning a suggestion for a parameter violation, the resolve action
 * suggested by the system is based on the parameter name and level of the parameter in the
 * security policy that caused this violation.
 * When automatically building the security policy, the Policy Builder adds parameters on
 * the Global level.
 * - **url**: The system creates learning suggestions based on real traffic, and is not
 * limited to the current properties of entities that exist in the security
 * policy.
 * When manually learning a suggestion for a parameter violation, the resolve action
 * suggested by the system is based on the actual parameter name and the URL or flow on
 * which the violation was detected.
 * When automatically building the security policy, the Policy Builder adds parameters on
 * the URL level.
 * In addition, if the actual URL does not exist in the security policy, the system adds the
 * URL and file type (if it also does not exist) on which the violation was detected.
 */
export enum ParameterLearningLevel {
    Global = "global",
    URL = "url",
}

export interface PolicyBuilderRedirectionProtection {
    learnExplicitRedirectionDomains?: LearnExplicitRedirectionDomains;
    maximumRedirectionDomains?:       number;
}

export enum LearnExplicitRedirectionDomains {
    Always = "always",
    Never = "never",
}

/**
 * Defines Policy Builder behavior for Server Technologies
 */
export interface PolicyBuilderServerTechnologies {
    /**
     * When enabled, the Policy Builder suggests to add Server Technologies that have not yet
     * been added to the policy.
     * The system learns server technologies from responses regardless of the learnFromResponses
     * flag setting in the policy-builder endpoint.
     */
    enableServerTechnologiesDetection?: boolean;
}

export interface PolicyBuilderSessionsAndLogins {
    learnLoginPage?: boolean;
}

export interface PolicyBuilderURL {
    classifyUrls?:               boolean;
    classifyWebsocketUrls?:      boolean;
    collapseUrlDepth?:           number;
    collapseUrlOccurrences?:     number;
    collapseUrlsIntoOneEntity?:  boolean;
    learnExplicitUrls?:          LearnExplicit;
    learnExplicitWebsocketUrls?: LearnExplicitWebsocketUrls;
    learnMethodsOnUrls?:         boolean;
    maximumUrls?:                number;
    maximumWebsocketUrls?:       number;
    wildcardUrlFiletypes?:       string[];
}

export enum LearnExplicitWebsocketUrls {
    Always = "always",
    Never = "never",
    Selective = "selective",
}

export interface RedirectionProtection {
    redirectionDomains?:           RedirectionDomain[];
    redirectionProtectionEnabled?: boolean;
}

export interface RedirectionDomain {
    domainName:         string;
    includeSubdomains?: boolean;
    type?:              HostNameTypeEnum;
    wildcardOrder?:     number;
}

export interface RedirectionProtectionDomain {
    domainName:         string;
    includeSubdomains?: boolean;
    type?:              HostNameTypeEnum;
    wildcardOrder?:     number;
}

export interface RequestLogger {
    destination?:    string;
    filter?:         FilterElement[];
    formatString?:   string;
    formatType?:     FormatType;
    maxMessageSize?: number;
    name:            string;
}

export interface FilterElement {
    field:   Field;
    values?: string;
}

export enum Field {
    RequestStatus = "request_status",
}

export enum FormatType {
    Arcsight = "arcsight",
    Bigiq = "bigiq",
    Default = "default",
    Splunk = "splunk",
}

/**
 * The Application Security Manager has a default blocking response page that it returns to
 * the client when the client request, or the web server response, is blocked by the
 * security policy. The system also has a login response page for login violations. You can
 * change the way the system responds to blocked logins or blocked requests. All default
 * response pages contain a variable, <%TS.request.ID()%>, that the system replaces with a
 * support ID number when it issues the page.
 */
export interface ResponsePage {
    /**
     * Which content, or URL, the system sends to the client as a response to an AJAX request
     * that does not comply with the security policy.
     * - **alert-popup**: The system opens a message as a popup screen. Type the message the
     * system displays in the popup screen, or leave the default text.
     * - **custom**: A response text that will replace the frame or page which generated the
     * AJAX request. The system provides additional options where you can type the response body
     * you prefer.
     * - **redirect**: The system redirects the user to a specific web page instead of viewing a
     * response page. Type the web page's full URL path, for example,
     * http://www.redirectpage.com.
     */
    ajaxActionType?: AjaxActionType;
    /**
     * Custom message typed by user as a response for blocked AJAX request.
     */
    ajaxCustomContent?: string;
    /**
     * When enabled, the system injects JavaScript code into responses. You must enable this
     * toggle in order to configure an Application Security Manager AJAX response page which is
     * returned when the system detects an AJAX request that does not comply with the security
     * policy.
     */
    ajaxEnabled?: boolean;
    /**
     * Default message provided by the system as a response for blocked AJAX request. Can be
     * manipulated by user, but <%TS.request.ID()%> must be included in this message.
     */
    ajaxPopupMessage?: string;
    /**
     * The system redirects the user to a specific web page instead of viewing a response page.
     * Type the web page's full URL path, for example, http://www.redirectpage.com. To redirect
     * the blocking page to a URL with a support ID in the query string, type the URL and the
     * support ID in the following format:
     * http://www.example.com/blocking_page.php?support_id=<%TS.request.ID()%>. The system
     * replaces <%TS.request.ID%> with the relevant support ID so that the blocked request is
     * redirected to the URL with the relevant support ID.
     */
    ajaxRedirectUrl?: string;
    /**
     * Which action the system takes, and which content the system sends to the client, as a
     * response when the security policy blocks the client request.
     * - **custom**: The system returns a response page with HTML code that the user defines.
     * - **default**: The system returns the system-supplied response page in HTML. No further
     * configuration is needed.
     * - **erase-cookies**:  The system deletes all client side domain cookies. This is done in
     * order to block web application users once, and not from the entire web application. The
     * system displays this text in the response page. You cannot edit this text.
     * - **redirect**: The system redirects the user to a specific web page instead of viewing a
     * response page. The system provides an additional setting where you can indicate the
     * redirect web page.
     * - **soap-fault**:  Displays the system-supplied response written in SOAP fault message
     * structure. Use this type when a SOAP request is blocked due to an XML related violation.
     * You cannot edit this text.
     */
    responseActionType?: ResponseActionType;
    /**
     * The content the system sends to the client in response to an illegal blocked request.
     */
    responseContent?: string;
    /**
     * The response headers that the system sends to the client as a response to an illegal
     * blocked request.
     */
    responseHeader?: string;
    /**
     * The different types of blocking response pages which are available from the system:
     * - **ajax**: The system sends the AJAX Blocking Response Page when the security policy
     * blocks an AJAX request that does not comply with the security policy.
     * - **ajax-login**: The system sends the AJAX Login Page Response after the user sends an
     * AJAX request that attempts to directly access a URL that is allowed to be accessed only
     * after visiting a login page.
     * - **captcha**: The system sends the CAPTCHA response page when the system suspects that a
     * session is being run by a bot rather than a human, especially in the case of a brute
     * force attack.
     * - **captcha-fail**: The system sends the CAPTCHA fail response page to a failed CAPTCHA
     * challenge.
     * - **default**: The system sends the default response when the security policy blocks a
     * client request.
     * - **failed-login-honeypot**: The Honeypot page is used for attacker deception. The page
     * should look like an application failed login page. Unlike with the Blocking page, when
     * the Honeypot page is sent an attacker is not able to distinguish a failed login response
     * from a mitigation.
     * - **failed-login-honeypot-ajax**: The Honeypot page is used for attacker deception
     * sending AJAX request. The page should look like an application failed login page. Unlike
     * with the Blocking page, when the Honeypot page is sent an attacker is not able to
     * distinguish a failed login response from a mitigation.
     * - **hijack**: The system sends the cookie hijacking response page when the system detects
     * that an attacker tried to hijack the session.
     * - **leaked-credentials**: The system sends the leaked credentials response when the
     * system detects the use of stolen credentials.
     * - **leaked-credentials-ajax**: The system sends the leaked credentials response following
     * an AJAX request which includes usage of stolen credentials.
     * - **mobile**: The system sends the mobile application response page when the system
     * detects that a session is being run by a bot rather than a human.
     * - **persistent-flow**: The system sends the login page response after the user violates
     * one of the preconditions when requesting the target URL of a configured login page.
     * - **xml**: The system sends the XML response page when the security policy blocks a
     * client request that contains XML content that does not comply with the settings of an XML
     * profile configured in the security policy.
     */
    responsePageType: ResponsePageType;
    /**
     * The particular URL to which the system redirects the user. To redirect the blocking page
     * to a URL with a support ID in the query string, type the URL and the support ID in the
     * following format:
     * http://www.example.com/blocking_page.php?support_id=<%TS.request.ID()%>. The system
     * replaces <%TS.request.ID%> with the relevant support ID so that the blocked request is
     * redirected to the URL with the relevant support ID.
     */
    responseRedirectUrl?: string;
}

/**
 * Which content, or URL, the system sends to the client as a response to an AJAX request
 * that does not comply with the security policy.
 * - **alert-popup**: The system opens a message as a popup screen. Type the message the
 * system displays in the popup screen, or leave the default text.
 * - **custom**: A response text that will replace the frame or page which generated the
 * AJAX request. The system provides additional options where you can type the response body
 * you prefer.
 * - **redirect**: The system redirects the user to a specific web page instead of viewing a
 * response page. Type the web page's full URL path, for example,
 * http://www.redirectpage.com.
 */
export enum AjaxActionType {
    AlertPopup = "alert-popup",
    Custom = "custom",
    Redirect = "redirect",
}

/**
 * Which action the system takes, and which content the system sends to the client, as a
 * response when the security policy blocks the client request.
 * - **custom**: The system returns a response page with HTML code that the user defines.
 * - **default**: The system returns the system-supplied response page in HTML. No further
 * configuration is needed.
 * - **erase-cookies**:  The system deletes all client side domain cookies. This is done in
 * order to block web application users once, and not from the entire web application. The
 * system displays this text in the response page. You cannot edit this text.
 * - **redirect**: The system redirects the user to a specific web page instead of viewing a
 * response page. The system provides an additional setting where you can indicate the
 * redirect web page.
 * - **soap-fault**:  Displays the system-supplied response written in SOAP fault message
 * structure. Use this type when a SOAP request is blocked due to an XML related violation.
 * You cannot edit this text.
 */
export enum ResponseActionType {
    Custom = "custom",
    Default = "default",
    EraseCookies = "erase-cookies",
    Redirect = "redirect",
    SoapFault = "soap-fault",
}

/**
 * The different types of blocking response pages which are available from the system:
 * - **ajax**: The system sends the AJAX Blocking Response Page when the security policy
 * blocks an AJAX request that does not comply with the security policy.
 * - **ajax-login**: The system sends the AJAX Login Page Response after the user sends an
 * AJAX request that attempts to directly access a URL that is allowed to be accessed only
 * after visiting a login page.
 * - **captcha**: The system sends the CAPTCHA response page when the system suspects that a
 * session is being run by a bot rather than a human, especially in the case of a brute
 * force attack.
 * - **captcha-fail**: The system sends the CAPTCHA fail response page to a failed CAPTCHA
 * challenge.
 * - **default**: The system sends the default response when the security policy blocks a
 * client request.
 * - **failed-login-honeypot**: The Honeypot page is used for attacker deception. The page
 * should look like an application failed login page. Unlike with the Blocking page, when
 * the Honeypot page is sent an attacker is not able to distinguish a failed login response
 * from a mitigation.
 * - **failed-login-honeypot-ajax**: The Honeypot page is used for attacker deception
 * sending AJAX request. The page should look like an application failed login page. Unlike
 * with the Blocking page, when the Honeypot page is sent an attacker is not able to
 * distinguish a failed login response from a mitigation.
 * - **hijack**: The system sends the cookie hijacking response page when the system detects
 * that an attacker tried to hijack the session.
 * - **leaked-credentials**: The system sends the leaked credentials response when the
 * system detects the use of stolen credentials.
 * - **leaked-credentials-ajax**: The system sends the leaked credentials response following
 * an AJAX request which includes usage of stolen credentials.
 * - **mobile**: The system sends the mobile application response page when the system
 * detects that a session is being run by a bot rather than a human.
 * - **persistent-flow**: The system sends the login page response after the user violates
 * one of the preconditions when requesting the target URL of a configured login page.
 * - **xml**: The system sends the XML response page when the security policy blocks a
 * client request that contains XML content that does not comply with the settings of an XML
 * profile configured in the security policy.
 */
export enum ResponsePageType {
    Ajax = "ajax",
    AjaxLogin = "ajax-login",
    CAPTCHA = "captcha",
    CAPTCHAFail = "captcha-fail",
    Default = "default",
    FailedLoginHoneypot = "failed-login-honeypot",
    FailedLoginHoneypotAjax = "failed-login-honeypot-ajax",
    Hijack = "hijack",
    LeakedCredentials = "leaked-credentials",
    LeakedCredentialsAjax = "leaked-credentials-ajax",
    Mobile = "mobile",
    PersistentFlow = "persistent-flow",
    XML = "xml",
}

/**
 * This section defines sensitive parameters.
 * The contents of these parameters are not visible in logs nor in the user interfaces.
 * Instead of actual values a string of asterisks is shown for these parameters.
 * Use these parameters to protect sensitive user input, such as a password or a credit card
 * number, in a validated request.
 * Sensitive parameter "password" always defined by default.
 */
export interface SensitiveParameter {
    /**
     * Name of a parameter whose values the system should consider sensitive.
     */
    name: string;
}

/**
 * The server technology is a server side application, framework, Web Server or Operating
 * System type that is configured in the policy in order to adapt the policy to the checks
 * needed for the respective technology.
 */
export interface ServerTechnology {
    /**
     * Specifies the name of the selected policy. For example, PHP will add attack signatures
     * that cover known PHP vulnerabilities.
     */
    serverTechnologyName?: string;
}

export interface SessionTracking {
    blockAll?:                     BlockAll;
    delayBlocking?:                DelayBlocking;
    logAllRequests?:               LogAllRequests;
    sessionTrackingConfiguration?: SessionTrackingConfiguration;
    violationDetectionActions?:    ViolationDetectionActions;
}

export interface BlockAll {
    checkDeviceIdThreshold?: boolean;
    checkIpThreshold?:       boolean;
    checkPeriod?:            boolean;
    checkSessionThreshold?:  boolean;
    checkUsernameThreshold?: boolean;
    deviceIdThreshold?:      number;
    ipThreshold?:            number;
    period?:                 number;
    sessionThreshold?:       number;
    urlBlockingMode?:        URLBlockingMode;
    usernameThreshold?:      number;
}

export enum URLBlockingMode {
    BlockAllUrls = "block-all-urls",
    BlockAuthenticatedUrls = "block-authenticated-urls",
}

export interface DelayBlocking {
    checkDeviceIdThreshold?: boolean;
    checkIpThreshold?:       boolean;
    checkSessionThreshold?:  boolean;
    checkUsernameThreshold?: boolean;
    deviceIdThreshold?:      number;
    ipThreshold?:            number;
    period?:                 number;
    sessionThreshold?:       number;
    usernameThreshold?:      number;
    violations?:             DelayBlockingViolation[];
}

export interface DelayBlockingViolation {
    name?: string;
}

export interface LogAllRequests {
    checkDeviceIdThreshold?: boolean;
    checkIpThreshold?:       boolean;
    checkSessionThreshold?:  boolean;
    checkUsernameThreshold?: boolean;
    deviceIdThreshold?:      number;
    ipThreshold?:            number;
    period?:                 number;
    sessionThreshold?:       number;
    usernameThreshold?:      number;
}

export interface SessionTrackingConfiguration {
    detectUsernameFromLoginPages?:             DetectUsernameFromLoginPage[];
    enableSessionAwareness?:                   boolean;
    enableTrackingSessionHijackingByDeviceId?: boolean;
    userNameSource?:                           UserNameSource;
}

export interface DetectUsernameFromLoginPage {
    loginPage: LoginPageObject;
}

/**
 * A login page is a URL in a web application that requests must pass through to get to the
 * authenticated URLs. Use login pages, for example, to prevent forceful browsing of
 * restricted parts of the web application, by defining access permissions for users. Login
 * pages also allow session tracking of user sessions.
 */
export interface LoginPageObject {
    /**
     * Access Validation define validation criteria for the login page response. If you define
     * more than one validation criteria, the response must meet all the criteria before the
     * system allows the user to access the application login URL.
     */
    accessValidation?: LoginPageAccessValidationObject;
    /**
     * Authentication Type is method the web server uses to authenticate the login URL's
     * credentials with a web user.
     *
     * - **none**: The web server does not authenticate users trying to access the web
     * application through the login URL. This is the default setting.
     * - **form**: The web application uses a form to collect and authenticate user credentials.
     * If using this option, you also need to type the user name and password parameters written
     * in the code of the HTML form.
     * - **http-basic**: The user name and password are transmitted in Base64 and stored on the
     * server in plain text.
     * - **http-digest**: The web server performs the authentication; user names and passwords
     * are not transmitted over the network, nor are they stored in plain text.
     * - **ntlm**: Microsoft LAN Manager authentication (also called Integrated Windows
     * Authentication) does not transmit credentials in plain text, but requires a continuous
     * TCP connection between the server and client.
     * - **ajax-or-json-request**: The web server uses JSON and AJAX requests to authenticate
     * users trying to access the web application through the login URL. For this option, you
     * also need to type the name of the JSON element containing the user name and password.
     */
    authenticationType?: AuthenticationType;
    /**
     * A name of parameter which will contain password string.
     */
    passwordParameterName?: string;
    /**
     * URL string used for login page.
     */
    url: LoginPageURLObject;
    /**
     * A name of parameter which will contain username string.
     */
    usernameParameterName?: string;
}

/**
 * Access Validation define validation criteria for the login page response. If you define
 * more than one validation criteria, the response must meet all the criteria before the
 * system allows the user to access the application login URL.
 */
export interface LoginPageAccessValidationObject {
    /**
     * A defined domain cookie name that the response to the login URL must match to permit user
     * access to the authenticated URL.
     */
    cookieContains?: string;
    /**
     * A header name and value that the response to the login URL must match to permit user
     * access to the authenticated URL.
     */
    headerContains?: string;
    /**
     * A header name and value that indicates a failed login attempt and prohibits user access
     * to the authenticated URL.
     */
    headerOmits?: string;
    /**
     * A parameter that must exist in the login URL's HTML body to allow access to the
     * authenticated URL.
     */
    parameterContains?: string;
    /**
     * A string that must appear in the response for the system to allow the user to access the
     * authenticated URL; for example, "Successful Login".
     */
    responseContains?: string;
    /**
     * An HTTP response code that the server must return to the user to allow access to the
     * authenticated URL; for example, "200".
     */
    responseHttpStatus?: string;
    /**
     * An HTTP response code that indicates a failed login attempt and prohibits user access to
     * the authenticated URL.
     */
    responseHttpStatusOmits?: string[];
    /**
     * A string that indicates a failed login attempt and prohibits user access to the
     * authenticated URL; for example, "Authentication failed".
     */
    responseOmits?: string;
}

/**
 * URL string used for login page.
 *
 * Reference to the URL used in login URL configuration (policy/login-pages). This login URL
 * is protected by Brute Force Protection feature.
 *
 * In a security policy, you can manually specify the HTTP URLs that are allowed (or
 * disallowed) in traffic to the web application being protected. If you are using automatic
 * policy building (and the policy includes learning URLs), the system can determine which
 * URLs to add, based on legitimate traffic. When you create a security policy, wildcard
 * URLs of * (representing all HTTP URLs) are added to the Allowed HTTP URLs lists. During
 * the enforcement readiness period, the system examines the URLs in the traffic and makes
 * learning suggestions that you can review and add the URLs to the policy as needed. This
 * way, the security policy includes the HTTP URLs that are typically used. When you think
 * all the URLs are included in the security policy, you can remove the * wildcards from the
 * allowed URLs lists.
 */
export interface LoginPageURLObject {
    /**
     * Specifies the conditions for when the browser should allow this URL to be rendered in a
     * frame or iframe.
     * Never: Specifies that this URL must never be rendered in a frame or iframe. The web
     * application instructs browsers to hide, or disable, frame and iframe parts of this URL.
     * Same Origin Only: Specifies that the browser may load the frame or iframe if the
     * referring page is from the same protocol, port, and domain as this URL. This limits the
     * user to navigate only within the same web application.
     * Only From URL: Specifies that the browser may load the frame or iframe from a specified
     * domain. Type the protocol and domain in URL format for example, http://www.mywebsite.com.
     * Do not enter a sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFrames?: AllowRenderingInFrames;
    /**
     * Specifies that the browser may load the frame or iframe from a specified domain. Type the
     * protocol and domain in URL format for example, http://www.mywebsite.com. Do not enter a
     * sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFramesOnlyFrom?: string;
    /**
     * Specifies, when true, that you want attack signatures and threat campaigns to be detected
     * on this URL and possibly override the security policy settings of an attack signature or
     * threat campaign specifically for this URL. After you enable this setting, the system
     * displays a list of attack signatures and threat campaigns.
     */
    attackSignaturesCheck?: boolean;
    canChangeDomainCookie?: boolean;
    /**
     * Specifies that the system adds the X-Frame-Options header to the domain URL's response
     * header. This is done to protect the web application against clickjacking. Clickjacking
     * occurs when an attacker lures a user to click illegitimate frames and iframes because the
     * attacker hid them on legitimate visible website buttons. Therefore, enabling this option
     * protects the web application from other web sites hiding malicious code behind them. The
     * default is disabled. After you enable this option, you can select whether, and under what
     * conditions, the browser should allow this URL to be rendered in a frame or iframe.
     */
    clickjackingProtection?: boolean;
    /**
     * Describes the URL (optional).
     */
    description?:                     string;
    disallowFileUploadOfExecutables?: boolean;
    dynamicFlows?:                    PurpleDynamicFlow[];
    /**
     * The system extracts the Origin (domain) of the request from the Origin header.
     */
    html5CrossOriginRequestsEnforcement?: PurpleHtml5CrossOriginRequestsEnforcement;
    /**
     * If *true*, the URLs allowed by the security policy.
     */
    isAllowed?: boolean;
    /**
     * A request body is mandatory. This is relevant for any method acting as POST.
     */
    mandatoryBody?: boolean;
    /**
     * To allow or disallow specific meta characters in the name of this specific URL (and thus
     * override the global meta character settings).
     */
    metacharOverrides?: PurpleMetacharOverride[];
    /**
     * Specifies, when true, that you want meta characters to be detected on this URL and
     * possibly override the security policy settings of a meta character specifically for this
     * URL. After you enable this setting, the system displays a list of meta characters.
     */
    metacharsOnUrlCheck?: boolean;
    /**
     * Unique ID of a URL with a protocol type and name. Select a Method for the URL to create
     * an API endpoint: URL + Method.
     */
    method?: URLMethod;
    /**
     * Specifies a list of methods that are allowed or disallowed for a specific URL. The list
     * overrides the list of methods allowed or disallowed globally at the policy level.
     */
    methodOverrides?: PurpleMethodOverride[];
    /**
     * Specifies, when true, that you want methods to be detected on this URL and possibly
     * override the security policy settings of a method specifically for this URL. After you
     * enable this setting, the system displays a list of methods.
     */
    methodsOverrideOnUrlCheck?: boolean;
    /**
     * Specifies an HTTP URL that the security policy allows. The available types are:
     *
     * - **Explicit**: Specifies that the URL has a specific name and is not a wildcard entity.
     * Type the name of a URL exactly as you expect it to appear in the request.
     * - **Wildcard**: Specifies that any URL that matches the listed wildcard expression should
     * be treated according to the wildcard attributes. Type a wildcard expression that matches
     * the expected URL. For example, entering the wildcard expression * specifies that any URL
     * is allowed by the security policy.
     * The syntax for wildcard entities is based on shell-style wildcard characters. The list
     * below describes the wildcard characters that you can use so that the entity name can
     * match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Note**: Wildcards do not match regular expressions. Do not use a regular expression as
     * a wildcard.
     */
    name: string;
    /**
     * The attribute operationId is used as an OpenAPI endpint identifier.
     */
    operationId?: string;
    /**
     * If *true* then any violation associated to the respective URL will not be enforced, and
     * the request will not be considered illegal.
     */
    performStaging?: boolean;
    /**
     * When checked (enabled), positional parameters are enabled in the URL.
     */
    positionalParameters?: PurplePositionalParameter[];
    /**
     * Specifies whether the protocol for the URL is HTTP or HTTPS.
     */
    protocol?: URLProtocol;
    /**
     * Array of signature overrides.
     * Specifies attack signatures whose security policy settings are overridden for this URL,
     * and which action the security policy takes when it discovers a request for this URL that
     * matches these attack signatures.
     */
    signatureOverrides?: FluffySignatureOverride[];
    /**
     * Determines the type of the **name** attribute. Only when setting the type to wildcard
     * will the special wildcard characters in the name be interpreted as such.
     */
    type?: HostNameTypeEnum;
    /**
     * Specifies how the system recognizes and enforces requests for this URL according to the
     * requests' header content. The system automatically creates a default header-based content
     * profile for HTTP, and you cannot delete it. However, requests for a URL may contain other
     * types of content, such as JSON, XML, or other proprietary formats.
     */
    urlContentProfiles?: PurpleURLContentProfile[];
    /**
     * Specifies that an asterisk in a wildcard URL matches any number of path segments
     * (separated by slashes); when cleared, specifies that an asterisk matches at most one
     * segment. For example: the wildcard /art/* matches /art/abc/index.html if the wildcard
     * match includes slashes (default value), but does not match it if the check box is
     * cleared. In that case, it matches /art/go.html (only one segment below /art).
     */
    wildcardIncludesSlash?: boolean;
    /**
     * Specifies the order index for wildcard URLs matching. Wildcard URLs with lower wildcard
     * order will get checked for a match prior to URLs with higher wildcard order.
     */
    wildcardOrder?: number;
}

export enum UserNameSource {
    AllLoginPages = "all-login-pages",
    Apm = "apm",
    LoginPages = "login-pages",
    None = "none",
}

export interface ViolationDetectionActions {
    trackViolationsAndPerformActions?: boolean;
    violationDetectionPeriod?:         number;
}

export interface SessionTrackingStatus {
    action:              SessionTrackingStatusAction;
    createdDatetime?:    string;
    expirationDatetime?: ExpirationDatetime;
    scope:               Scope;
    value:               string;
}

export enum SessionTrackingStatusAction {
    BlockAll = "block-all",
    DelayBlocking = "delay-blocking",
    LogAll = "log-all",
}

export enum ExpirationDatetime {
    NA = "N/A",
}

export enum Scope {
    Device = "device",
    IP = "ip",
    Session = "session",
    User = "user",
}

export interface SignatureRequirement {
    maxRevisionDatetime?: Date;
    minRevisionDatetime?: Date;
    tag?:                 string;
}

/**
 * Defines behavior of signature set signatures when they are detected in a request.
 */
export interface SignatureSet {
    /**
     * If enabled - when a signature from this signature set is detected in a request - the
     * request is logged.
     */
    alarm?: boolean;
    /**
     * If enabled - when a signature from this signature set is detected in a request (and the
     * signature is not in staging and the policy is in blocking mode) - the request is blocked.
     */
    block?: boolean;
    /**
     * If enabled - when a signature from this signature set is detected in a request -the
     * policy builder creates a learning suggestion to disable it.
     */
    learn?: boolean;
    /**
     * Signature set name.
     */
    name?: string;
    /**
     * Defines signature set.
     */
    signatureSet?: SignatureSetObject;
}

/**
 * Defines signature set.
 */
export interface SignatureSetObject {
    /**
     * Specifies filter that defines signature set.
     */
    filter?:     SignatureSetFilter;
    signatures?: SignatureSetSignature[];
    type?:       SignatureSetType;
}

/**
 * Specifies filter that defines signature set.
 */
export interface SignatureSetFilter {
    accuracyFilter?:    Filter;
    accuracyValue?:     Value;
    hasCve?:            HasCve;
    lastUpdatedFilter?: LastUpdatedFilter;
    lastUpdatedValue?:  string;
    name?:              string;
    riskFilter?:        Filter;
    riskValue?:         Value;
    signatureType?:     SignatureType;
    /**
     * Filter by signature tagValue.
     *
     * - **all**: no filter applied.
     * - **eq**: only signatures with a tag that equals tagValue are added to the signature set.
     * - **untagged**: only signatures without a tag are added to the signature set.
     */
    tagFilter?: TagFilter;
    /**
     * Value for the tagFilter.
     * Relevant only for the **eq** value of tagFilter.
     */
    tagValue?:          string;
    userDefinedFilter?: HasCve;
}

export enum Filter {
    All = "all",
    Eq = "eq",
    Ge = "ge",
    LE = "le",
}

export enum Value {
    All = "all",
    High = "high",
    Low = "low",
    Medium = "medium",
}

export enum HasCve {
    All = "all",
    No = "no",
    Yes = "yes",
}

export enum LastUpdatedFilter {
    After = "after",
    All = "all",
    Before = "before",
}

export enum SignatureType {
    All = "all",
    Request = "request",
    Response = "response",
}

/**
 * Filter by signature tagValue.
 *
 * - **all**: no filter applied.
 * - **eq**: only signatures with a tag that equals tagValue are added to the signature set.
 * - **untagged**: only signatures without a tag are added to the signature set.
 */
export enum TagFilter {
    All = "all",
    Eq = "eq",
    Untagged = "untagged",
}

export interface SignatureSetSignature {
    name?:        string;
    signatureId?: number;
    tag?:         string;
}

export enum SignatureSetType {
    FilterBased = "filter-based",
    Manual = "manual",
}

export interface SignatureSettings {
    attackSignatureFalsePositiveMode?:      AttackSignatureFalsePositiveMode;
    minimumAccuracyForAutoAddedSignatures?: MinimumAccuracyForAutoAddedSignatures;
    placeSignaturesInStaging?:              boolean;
    signatureStaging?:                      boolean;
}

export enum AttackSignatureFalsePositiveMode {
    Detect = "detect",
    DetectAndAllow = "detect-and-allow",
    Disabled = "disabled",
}

export enum MinimumAccuracyForAutoAddedSignatures {
    High = "high",
    Low = "low",
    Medium = "medium",
}

/**
 * This section defines the properties of signature on the policy.
 */
export interface PolicySignature {
    alarm?: boolean;
    block?: boolean;
    /**
     * Specifies, if true, that the signature is enabled on the security policy. When false, the
     * signature is disable on the security policy.
     */
    enabled?:             boolean;
    inPolicy?:            InPolicy;
    isPriorRuleEnforced?: boolean;
    learn?:               boolean;
    /**
     * The signature name, which along with the signature tag, identifies the signature.
     */
    name?: string;
    /**
     * Specifies, if true, that the signature is in staging.
     * The system does not enforce signatures in staging. Instead, the system records the
     * request information and keeps it for a period of time
     * (the Enforcement Readiness Period whose default time period is 7 days).
     * Specifies, when false, that the staging feature is not in use, and that the system
     * enforces the signatures' Learn/Alarm/Block settings immediately.
     * (Blocking is performed only if the security policy's enforcement mode is Blocking.)
     */
    performStaging?: boolean;
    /**
     * The signature ID which identifies the signature.
     */
    signatureId?: number;
    /**
     * The signature tag, which along with the signature name, identifies the signature.
     */
    tag?: string;
}

export enum InPolicy {
    False = "false",
    True = "true",
}

/**
 * Specifies the template to populate the attributes of a new policy. The template is only
 * used when creating the policy - a security policy is always created based on a
 * user-defined or system-supplied template.
 * Unlike parent policies, the templates do not affect the policy after it is created. If
 * you modify a template, policies created from it in the past are not affected.
 */
export interface Template {
    /**
     * Specifies the name of the template used for the policy creation.
     */
    name: string;
}

export interface ThreatCampaignSettings {
    threatCampaignEnforcementReadinessPeriod?: number;
    threatCampaignStaging?:                    boolean;
}

/**
 * This section defines the enforcement state for the threat campaigns in the security
 * policy.
 */
export interface ThreatCampaign {
    /**
     * If enabled - threat campaign is enforced in the security policy.
     */
    isEnabled?: boolean;
    /**
     * Name of the threat campaign.
     */
    name?: string;
    /**
     * If enabled - there will be only reporting (no blocking) for requests with a detected
     * treat campaign.
     * For this feature to work, threatCampaignStaging should be enabled in
     * threat-campaign-settings.
     * After staging period (threatCampaignEnforcementReadinessPeriod in
     * threat-campaign-settings), the system will suggest to enforce (disable staging) for the
     * threat campaign.
     */
    performStaging?: boolean;
}

/**
 * The type of policy you want to create. The default policy type is Security.
 * - **Parent:** A parent policy can be used as a basis for similar child policies. Parent
 * policy settings can be inherited to its child policies. A parent policy cannot be applied
 * to Virtual Servers. No traffic can flow through them. They are just models.
 * - **Security:** A security policy can be created from a parent policy or as a stand-alone
 * policy. Changes to a security policy do not affect other security policies. A security
 * policy can be applied to a virtual server.
 */
export enum PolicyType {
    Parent = "parent",
    Security = "security",
}

/**
 * In a security policy, you can manually specify the HTTP URLs that are allowed (or
 * disallowed) in traffic to the web application being protected. If you are using automatic
 * policy building (and the policy includes learning URLs), the system can determine which
 * URLs to add, based on legitimate traffic. When you create a security policy, wildcard
 * URLs of * (representing all HTTP URLs) are added to the Allowed HTTP URLs lists. During
 * the enforcement readiness period, the system examines the URLs in the traffic and makes
 * learning suggestions that you can review and add the URLs to the policy as needed. This
 * way, the security policy includes the HTTP URLs that are typically used. When you think
 * all the URLs are included in the security policy, you can remove the * wildcards from the
 * allowed URLs lists.
 */
export interface URLElement {
    /**
     * Specifies the conditions for when the browser should allow this URL to be rendered in a
     * frame or iframe.
     * Never: Specifies that this URL must never be rendered in a frame or iframe. The web
     * application instructs browsers to hide, or disable, frame and iframe parts of this URL.
     * Same Origin Only: Specifies that the browser may load the frame or iframe if the
     * referring page is from the same protocol, port, and domain as this URL. This limits the
     * user to navigate only within the same web application.
     * Only From URL: Specifies that the browser may load the frame or iframe from a specified
     * domain. Type the protocol and domain in URL format for example, http://www.mywebsite.com.
     * Do not enter a sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFrames?: AllowRenderingInFrames;
    /**
     * Specifies that the browser may load the frame or iframe from a specified domain. Type the
     * protocol and domain in URL format for example, http://www.mywebsite.com. Do not enter a
     * sub-URL, such as http://www.mywebsite.com/index.
     */
    allowRenderingInFramesOnlyFrom?: string;
    /**
     * Specifies, when true, that you want attack signatures and threat campaigns to be detected
     * on this URL and possibly override the security policy settings of an attack signature or
     * threat campaign specifically for this URL. After you enable this setting, the system
     * displays a list of attack signatures and threat campaigns.
     */
    attackSignaturesCheck?: boolean;
    canChangeDomainCookie?: boolean;
    /**
     * Specifies that the system adds the X-Frame-Options header to the domain URL's response
     * header. This is done to protect the web application against clickjacking. Clickjacking
     * occurs when an attacker lures a user to click illegitimate frames and iframes because the
     * attacker hid them on legitimate visible website buttons. Therefore, enabling this option
     * protects the web application from other web sites hiding malicious code behind them. The
     * default is disabled. After you enable this option, you can select whether, and under what
     * conditions, the browser should allow this URL to be rendered in a frame or iframe.
     */
    clickjackingProtection?: boolean;
    /**
     * Describes the URL (optional).
     */
    description?:                     string;
    disallowFileUploadOfExecutables?: boolean;
    dynamicFlows?:                    FluffyDynamicFlow[];
    /**
     * The system extracts the Origin (domain) of the request from the Origin header.
     */
    html5CrossOriginRequestsEnforcement?: FluffyHtml5CrossOriginRequestsEnforcement;
    /**
     * If *true*, the URLs allowed by the security policy.
     */
    isAllowed?: boolean;
    /**
     * A request body is mandatory. This is relevant for any method acting as POST.
     */
    mandatoryBody?: boolean;
    /**
     * To allow or disallow specific meta characters in the name of this specific URL (and thus
     * override the global meta character settings).
     */
    metacharOverrides?: FluffyMetacharOverride[];
    /**
     * Specifies, when true, that you want meta characters to be detected on this URL and
     * possibly override the security policy settings of a meta character specifically for this
     * URL. After you enable this setting, the system displays a list of meta characters.
     */
    metacharsOnUrlCheck?: boolean;
    /**
     * Unique ID of a URL with a protocol type and name. Select a Method for the URL to create
     * an API endpoint: URL + Method.
     */
    method?: URLMethod;
    /**
     * Specifies a list of methods that are allowed or disallowed for a specific URL. The list
     * overrides the list of methods allowed or disallowed globally at the policy level.
     */
    methodOverrides?: FluffyMethodOverride[];
    /**
     * Specifies, when true, that you want methods to be detected on this URL and possibly
     * override the security policy settings of a method specifically for this URL. After you
     * enable this setting, the system displays a list of methods.
     */
    methodsOverrideOnUrlCheck?: boolean;
    /**
     * Specifies an HTTP URL that the security policy allows. The available types are:
     *
     * - **Explicit**: Specifies that the URL has a specific name and is not a wildcard entity.
     * Type the name of a URL exactly as you expect it to appear in the request.
     * - **Wildcard**: Specifies that any URL that matches the listed wildcard expression should
     * be treated according to the wildcard attributes. Type a wildcard expression that matches
     * the expected URL. For example, entering the wildcard expression * specifies that any URL
     * is allowed by the security policy.
     * The syntax for wildcard entities is based on shell-style wildcard characters. The list
     * below describes the wildcard characters that you can use so that the entity name can
     * match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Note**: Wildcards do not match regular expressions. Do not use a regular expression as
     * a wildcard.
     */
    name: string;
    /**
     * The attribute operationId is used as an OpenAPI endpint identifier.
     */
    operationId?: string;
    /**
     * If *true* then any violation associated to the respective URL will not be enforced, and
     * the request will not be considered illegal.
     */
    performStaging?: boolean;
    /**
     * When checked (enabled), positional parameters are enabled in the URL.
     */
    positionalParameters?: FluffyPositionalParameter[];
    /**
     * Specifies whether the protocol for the URL is HTTP or HTTPS.
     */
    protocol?: URLProtocol;
    /**
     * Array of signature overrides.
     * Specifies attack signatures whose security policy settings are overridden for this URL,
     * and which action the security policy takes when it discovers a request for this URL that
     * matches these attack signatures.
     */
    signatureOverrides?: StickySignatureOverride[];
    /**
     * Determines the type of the **name** attribute. Only when setting the type to wildcard
     * will the special wildcard characters in the name be interpreted as such.
     */
    type?: HostNameTypeEnum;
    /**
     * Specifies how the system recognizes and enforces requests for this URL according to the
     * requests' header content. The system automatically creates a default header-based content
     * profile for HTTP, and you cannot delete it. However, requests for a URL may contain other
     * types of content, such as JSON, XML, or other proprietary formats.
     */
    urlContentProfiles?: FluffyURLContentProfile[];
    /**
     * Specifies that an asterisk in a wildcard URL matches any number of path segments
     * (separated by slashes); when cleared, specifies that an asterisk matches at most one
     * segment. For example: the wildcard /art/* matches /art/abc/index.html if the wildcard
     * match includes slashes (default value), but does not match it if the check box is
     * cleared. In that case, it matches /art/go.html (only one segment below /art).
     */
    wildcardIncludesSlash?: boolean;
    /**
     * Specifies the order index for wildcard URLs matching. Wildcard URLs with lower wildcard
     * order will get checked for a match prior to URLs with higher wildcard order.
     */
    wildcardOrder?: number;
}

export interface FluffyDynamicFlow {
    prefix: string;
    regexp: string;
    suffix: string;
}

/**
 * The system extracts the Origin (domain) of the request from the Origin header.
 */
export interface FluffyHtml5CrossOriginRequestsEnforcement {
    /**
     * Specifies whether requests from other web applications hosted in different domains may
     * include user credentials.
     */
    allowCredentials?: boolean;
    /**
     * Allows you to specify a list of origins allowed to share data returned by this URL.
     */
    allowOriginsEnforcementMode?: AllowOriginsEnforcementMode;
    /**
     * Allows you to specify a list of request headers that other web applications hosted in
     * different domains can use when requesting this URL. Or you can delete non-simple headers
     * returned in response to requests.
     */
    checkAllowedHeaders?: boolean;
    /**
     * Allows you to specify a list of methods that other web applications hosted in different
     * domains can use when requesting this URL.
     */
    checkAllowedMethods?: boolean;
    /**
     * If *false*, requests from other web applications hosted in different domains are not
     * allowed to include user credentials.
     */
    checkCredentials?: boolean;
    /**
     * Optionally, for Exposed Headers, select Replace with, then specify the headers that
     * JavaScript can expose and share with other applications when requesting this URL from
     * another domain.
     * Exposed headers are the headers the server returns in the response. For example, to
     * discover server side web application technology, type X-Powered-By.
     */
    checkExposedHeaders?: boolean;
    /**
     * Optionally, for Maximum Age, select Replace with, then specify the number of seconds that
     * the results of a preflight request can be cached or use the default.
     */
    checkMaximumAge?:          boolean;
    crossDomainAllowedHeader?: FluffyCrossDomainAllowedHeader[];
    /**
     * Allows you to specify a list of methods that other web applications hosted in different
     * domains can use when requesting this URL.
     */
    crossDomainAllowedMethod?: FluffyCrossDomainAllowedMethod[];
    /**
     * Allows you to specify a list of origins allowed to share data returned by this URL.
     */
    crossDomainAllowedOrigin?: FluffyCrossDomainAllowedOrigin[];
    /**
     * Exposed headers are the headers the server returns in the response. For example, to
     * discover server side web application technology, type X-Powered-By.
     */
    crossDomainExposedHeader?: FluffyCrossDomainExposedHeader[];
    /**
     * Specify the option to determine how to handle CORS requests.
     * Disabled: Do nothing related to cross-domain requests. Pass CORS requests exactly as set
     * by the server.
     * Remove all CORS headers: Remove all CORS headers from the response. The response is sent
     * to the browser, and the browser does not allow cross-origin requests.
     * Replace CORS headers: Replace the CORS header in the response with another header
     * specified on the tab, including allowed origins, allowed methods, allowed headers, and so
     * on. The browser enforces the policy. Then after Replace with specify the protocol,
     * origin, and port for replacing CORS headers.
     * Enforce on the system: Allow cross-origin resource sharing as configured in the Allowed
     * Origins setting. CORS requests are allowed from the domains specified as allowed origins.
     * The system enforces the policy. Specify the protocol, origin, and port of allowed origins
     */
    enforcementMode?: PurpleEnforcementMode;
    /**
     * Specifies how long (in seconds) to cache in the browser the results of a preflight
     * request (a special request that the browser sends to your web application to determine if
     * JavaScript from another domain may access your resource).
     */
    maximumAge?: number;
}

export interface FluffyCrossDomainAllowedHeader {
    /**
     * Optionally, for Allowed Headers, select Replace with, then type the headers that other
     * applications can use when requesting this URL from another domain.
     */
    allowedHeaderName: string;
}

export interface FluffyCrossDomainAllowedMethod {
    /**
     * Optionally, for Allowed Methods, specify which methods other applications may use when
     * requesting this URL from another domain.
     */
    methodName: string;
}

export interface FluffyCrossDomainAllowedOrigin {
    /**
     * If *true*, sub-domains of the allowed origin are also allowed to receive data from your
     * web application.
     */
    includeSubDomains?: boolean;
    /**
     * Type the domain name or IP address with which the URL can share data.
     * Wildcards are allowed in the names. For example: *.f5.com will match b.f5.com; however it
     * will not match a.b.f5.com.
     */
    originName: string;
    /**
     * Select the port that other web applications can use to request data from your web
     * application, or use the * wildcard for all ports.
     */
    originPort: OriginPortEnum | number;
    /**
     * Select the appropriate protocol for the allowed origin.
     */
    originProtocol: OriginProtocol;
}

export interface FluffyCrossDomainExposedHeader {
    /**
     * Optionally, for Exposed Headers, select Replace with, then specify the headers that
     * JavaScript can expose and share with other applications when requesting this URL from
     * another domain.
     */
    exposedHeaderName: string;
}

export interface FluffyMetacharOverride {
    /**
     * If *true*, metacharacters and other characters are allowed in a URL.
     */
    isAllowed?: boolean;
    /**
     * ASCII representation of the character in Hex format
     */
    metachar: string;
}

export interface FluffyMethodOverride {
    /**
     * Specifies that the system allows you to override allowed methods for this URL. When
     * selected, the global policy settings for methods are listed, and you can change what is
     * allowed or disallowed for this URL.
     */
    allowed?: boolean;
    /**
     * Specifies a list of existing HTTP methods. All security policies accept standard HTTP
     * methods by default.
     */
    method: MethodOverrideMethod;
}

export interface FluffyPositionalParameter {
    parameter: FluffyParameter;
    /**
     * Select which to add: Text or Parameter and enter your desired segments. You can add
     * multiple text and parameter segments.
     */
    urlSegmentIndex: number;
}

/**
 * This section defines parameters that the security policy permits in requests.
 */
export interface FluffyParameter {
    /**
     * Determines whether an empty value is allowed for a parameter.
     */
    allowEmptyValue?: boolean;
    /**
     * Determines whether multiple parameter instances with the same name are allowed in one
     * request.
     */
    allowRepeatedParameterName?: boolean;
    /**
     * Specifies type of serialization for array of primitives parameter.
     * Serialization defines how multiple values are delimited - format that can be transmitted
     * and reconstructed later:
     * - **pipe**: pipe-separated values. Array color=["blue","black"] -> color=blue|black.
     * - **form**: ampersand-separated values. Array color=["blue","black"] ->
     * color=blue,black.
     * - **matrix**: semicolon-prefixed values. Array color=["blue","black"] ->
     * ;color=blue,black.
     * - **tsv**: tab-separated values. Aarray color=["blue","black"] -> color=blue\tblack.
     * - **csv**: comma-separated values. Array color=["blue","black"] -> color=blue,black.
     * - **label**: dot-prefixed values. Array color=["blue","black"] -> .blue.black.
     * - **multi**: multiple parameter instances rather than multiple values. Array
     * color=["blue","black"] -> color=blue&color=black.
     * - **ssv**: space-separated values. Array color=["blue","black"] -> color=blue black.
     * - **multipart**: defines array of files.
     *
     * **Notes**:
     * - This attribute is relevant only for parameters with **array** *valueType*.
     * - **multi** and **form** serializations can be defined for parameter with *query*,
     * *form-data* or *cookie* locations only.
     * - **multipart** serialization can be defined for parameter with *form-data* location
     * only.
     * - **matrix** and **label** serializations can be defined for parameter with *path*
     * location only.
     */
    arraySerializationFormat?: ArraySerializationFormat;
    /**
     * Determines whether items in an array parameter must be unique.
     * This attribute is relevant only for parameters with **array** *valueType*.
     */
    arrayUniqueItemsCheck?: boolean;
    /**
     * Determines whether attack signatures and threat campaigns must be detected in a
     * parameter's value.
     * This attribute is relevant only for parameters with **alpha-numeric** or **binary**
     * *dataType*.
     */
    attackSignaturesCheck?: boolean;
    /**
     * Determines whether an array parameter has a restricted maximum number of items.
     * This attribute is relevant only for parameters with **array** *valueType*.
     */
    checkMaxItemsInArray?: boolean;
    /**
     * Determines whether the parameter has a restricted maximum value.
     * This attribute is relevant only for parameters with **integer** or **decimal** *dataType*.
     */
    checkMaxValue?: boolean;
    /**
     * Determines whether a parameter has a restricted maximum length for value.
     */
    checkMaxValueLength?: boolean;
    /**
     * Determines whether disallowed metacharacters must be detected in a parameter's name.
     * This attribute is relevant only for **wildcard** parameters with **alpha-numeric**
     * *dataType*.
     */
    checkMetachars?: boolean;
    /**
     * Determines whether an array parameter has a restricted minimum number of items.
     * This attribute is relevant only for parameters with **array** *valueType*.
     */
    checkMinItemsInArray?: boolean;
    /**
     * Determines whether a parameter has a restricted minimum value.
     * This attribute is relevant only for parameters with **integer** or **decimal** *dataType*.
     */
    checkMinValue?: boolean;
    /**
     * Determines whether a parameter has a restricted minimum length for value.
     */
    checkMinValueLength?: boolean;
    /**
     * Determines whether a parameter's value is a multiple of a number defined in *multipleOf*.
     * This attribute is relevant only for parameters with **integer** or **decimal** *dataType*.
     */
    checkMultipleOfValue?: boolean;
    contentProfile?:       PurpleContentProfile;
    /**
     * Specifies data type of parameter's value:
     *
     * - **none**: system data type which is used by policy builder and cannot be set manually.
     * - **alpha-numeric**: specifies that the value of parameter can be any text consisting of
     * letters, digits, and the underscore character.
     * - **binary**: specifies there is no text limit for the value of a parameter (length
     * checks only).
     * - **phone**: specifies that the value of a parameter can be text in telephone number
     * format only.
     * - **email**: specifies that the value of a parameter must be text in email format only.
     * - **boolean**: specifies that the value of a parameter must be boolean (only *true* and
     * *false* values are allowed).
     * - **integer**: specifies that the value of a parameter must be whole numbers only (no
     * decimals).
     * - **decimal**: specifies that the value of a parameter is numbers only and can include
     * decimals.
     *
     * **Notes**:
     * -  This attribute is relevant for parameters with **array** or **user-input** *valueType*
     * only.
     */
    dataType?: DataType;
    /**
     * Determines whether a parameter's value cannot have binary executable content.
     * This attribute is relevant only for parameters with **binary** *dataType*.
     */
    disallowFileUploadOfExecutables?: boolean;
    /**
     * Determines whether the parameter value includes the pattern defined in
     * *regularExpression*.
     * This attribute is relevant only for parameters with **alpha-numeric** *dataType*.
     */
    enableRegularExpression?: boolean;
    /**
     * Determines whether the maximum value defined in *maximumValue* attribute is exclusive.
     * This attribute is relevant only if *checkMaxValue* is set to **true**.
     */
    exclusiveMax?: boolean;
    /**
     * Determines whether a minimum value defined in *minimumValue* attribute is exclusive.
     * This attribute is relevant only if *checkMinValue* is set to **true**.
     */
    exclusiveMin?: boolean;
    /**
     * Specifies whether an array or object parameters should have separate values for each
     * array item or object property.
     * This attribute is relevant only if *objectSerializationStyle* is defined.
     *
     * **Notes**:
     * -  This attribute is not relevant for parameters with **deep-object**,
     * **space-delimited** or **pipe-delimited** *objectSerializationStyle*.
     */
    explodeObjectSerialization?: boolean;
    /**
     * Determines whether a parameter's value contains a Base64 encoded string.
     * If the value is indeed Base64 encoded, the system decodes this value and continues with
     * its security checks.
     * This attribute is relevant only for parameters with **alpha-numeric** or **binary**
     * *dataType*.
     */
    isBase64?: boolean;
    /**
     * Determines whether a parameter is located in the value of Cookie header.
     * *parameterLocation* attribute is ignored if **isCookie** is set to *true*.
     */
    isCookie?: boolean;
    /**
     * Determines whether a parameter is located in headers as one of the headers.
     * *parameterLocation* attribute is ignored if **isHeader** is set to *true*.
     */
    isHeader?: boolean;
    /**
     * Specifies whether the parameter is associated with a URL, a flow, or neither.
     */
    level?: Level;
    /**
     * Determines whether a parameter must exist in the request.
     */
    mandatory?: boolean;
    /**
     * Determines the restriction for the maximum length of parameter's value.
     * This attribute is relevant only if *checkMaxValueLength* is set to **true**.
     */
    maximumLength?: number;
    /**
     * Determines the restriction for the maximum value of parameter.
     * This attribute is relevant only if *checkMaxValue* is set to **true**.
     */
    maximumValue?: number;
    /**
     * Determines the restriction forthe  maximum number of items in an array parameter.
     * This attribute is relevant only if *checkMaxItemsInArray* is set to **true**.
     */
    maxItemsInArray?: number;
    /**
     * Determines whether disallowed metacharacters must be detected in a parameter's value.
     * This attribute is relevant only for parameters with **alpha-numeric** *dataType*.
     */
    metacharsOnParameterValueCheck?: boolean;
    /**
     * Determines the restriction for the minimum length of parameter's value.
     * This attribute is relevant only if *checkMinValueLength* is set to **true**.
     */
    minimumLength?: number;
    /**
     * Determines the restriction for the minimum value of a parameter.
     * This attribute is relevant only if *checkMinValue* is set to **true**.
     */
    minimumValue?: number;
    /**
     * Determines the restriction for the minimum number of items in an array parameter.
     * This attribute is relevant only if *checkMinItemsInArray* is set to **true**.
     */
    minItemsInArray?: number;
    /**
     * Determines the number by which a parameter's value is divisible without remainder.
     * This number must be positive and it may be a floating-point number.
     * This attribute is relevant only if *checkMultipleOfValue* is set to **true**.
     */
    multipleOf?: number;
    /**
     * Specifies the name of a parameter which must be permitted in requests.
     * Format of parameter name attribute differs depending on *type* attribute:
     * - **explicit** *type*: name of permitted parameter in request should literally match.
     * - **wildcard** *type*: name of permitted parameter in request should match wildcard
     * expression.
     *
     * The syntax for wildcard entities is based on shell-style wildcard characters.
     * The list below describes the wildcard characters that you can use so that the entity name
     * can match multiple objects.
     *
     * - *****: Matches all characters
     * - **?**: Matches any single character
     * - **[abcde]**: Matches exactly one of the characters listed
     * - **[!abcde]**: Matches any character not listed
     * - **[a-e]**: Matches exactly one character in the range
     * - **[!a-e]**: Matches any character not in the range
     *
     * **Notes**:
     * - Wildcards do not match regular expressions. Do not use a regular expression as a
     * wildcard.
     * - Empty parameter name is allowed for **explicit** *type*
     */
    name: string;
    /**
     * Determines metacharacters whose security policy settings are overridden for this
     * parameter, and which action the security policy takes when it discovers a request for
     * this parameter that has these metacharacters in the name.
     * This attribute is relevant only if *checkMetachars* is set to **true**.
     */
    nameMetacharOverrides?: PurpleNameMetacharOverride[];
    /**
     * Specifies the type of serialization for an object or complex array parameter.
     * Serialization defines how multiple values are delimited - format that can be transmitted
     * and reconstructed later:
     * - **pipe-delimited**: pipe-separated values. Object color={"R":100,"G":200} ->
     * color=R|100|G|200.
     * - **form**: ampersand-separated values. Object color={"R":100,"G":200} ->
     * color=R,100,G,200 if *explodeObjectSerialization* set to **false** or -> R=100&G=200 if
     * *explodeObjectSerialization* set to **true**.
     * - **space-delimited**: space-separated values. Object color={"R":100,"G":200} -> color=R
     * 100 G 200.
     * - **deep-object**: rendering nested objects. Object color={"R":100,"G":200} ->
     * color[R]=100&color[G]=200.
     * - **matrix**: semicolon-prefixed values. Object color={"R":100,"G":200} ->
     * ;color=R,100,G,200 if *explodeObjectSerialization* set to **false** or -> ;R=100;G=200 if
     * *explodeObjectSerialization* set to **true**.
     * - **simple**: comma-separated values. Object color={"R":100,"G":200} -> R,100,G,200 if
     * *explodeObjectSerialization* set to **false** or -> R=100,G=200 if
     * *explodeObjectSerialization* set to **true**.
     * - **label**: dot-prefixed values. Object color={"R":100,"G":200} -> .R.100.G.200 if
     * *explodeObjectSerialization* set to **false** or -> .R=100.G=200 if
     * *explodeObjectSerialization* set to **true**.
     *
     * **Notes**:
     * - This attribute is relevant only for parameters with **object** or **openapi-array**
     * *valueType*.
     * - **form** serialization can be defined for a parameter with *query*, *form-data* or
     * *cookie* locations only.
     * - **matrix** and **label** serializations can be defined for an array parameter with
     * *path* location only.
     * - **simple** serializations can be defined for a parameter with *path* and *header*
     * locations only.
     * - **deep-object** serialization can be defined for a parameter with *query* or
     * *form-data* locations only.
     */
    objectSerializationStyle?: ObjectSerializationStyle;
    /**
     * Determines the set of possible parameter's values.
     * This attribute is not relevant for parameters with **phone**, **email** or **binary**
     * *dataType*.
     */
    parameterEnumValues?: string[];
    /**
     * Specifies location of parameter in request:
     *
     * - **any**: in query string, in POST data (body) or in URL path.
     * - **query**: in query string.
     * - **form-data**: in POST data (body).
     * - **cookie**: in value of Cookie header.
     * - **path**: in URL path.
     * - **header**: in request headers.
     *
     * **Notes**:
     * - **path** location can be defined for parameter with **global** *level* only.
     * - **path**, **header** and **cookie** location can be defined for parameter with
     * **explicit** *type* only.
     * - **header** and **cookie** location cannot be defined for parameter with empty *name*.
     */
    parameterLocation?: ParameterLocation;
    /**
     * Determines the staging state of a parameter.
     * If you place an entity in staging, the system does not block requests for this entity.
     *
     * Tip: Use staging on wildcard entities to build the security policy without explicit
     * entities of this type, rather than configuring the wildcard entity itself to be enforced
     * with the settings found on it.
     */
    performStaging?: boolean;
    /**
     * Determines a positive regular expression (PCRE) for a parameter's value.
     * This attribute is relevant only if *enableRegularExpression* is set to **true**.
     *
     * **Notes**:
     * - The length of a regular expression is limited to 254 characters.
     */
    regularExpression?: string;
    /**
     * Determines whether a parameter is sensitive and must be not visible in logs nor in the
     * user interface.
     * Instead of actual valu,e a string of asterisks is shown for this parameter.
     * Use it to protect sensitive user input, such as a password or a credit card number, in a
     * validated request.
     */
    sensitiveParameter?: boolean;
    /**
     * Determines attack signatures whose security policy settings are overridden for this
     * parameter, and which action the security policy takes when it discovers a request for
     * this parameter that matches these attack signatures.
     * This attribute is relevant only if *signatureOverrides* is set to **true**.
     */
    signatureOverrides?: PurpleSignatureOverride[];
    /**
     * Determines the set of possible parameter's values.
     * This attribute is relevant for parameters with **static-content** *valueType* only.
     */
    staticValues?: string[];
    /**
     * Specifies the type of the *name* attribute.
     */
    type?: HostNameTypeEnum;
    url?:  PurpleURL;
    /**
     * Determines metacharacters whose security policy settings are overridden for this
     * parameter, and which action the security policy takes when it discovers a request for
     * this parameter that has these metacharacters in value.
     * This attribute is relevant only if *metacharsOnParameterValueCheck* is set to **true**.
     */
    valueMetacharOverrides?: PurpleValueMetacharOverride[];
    /**
     * Specifies type of parameter's value:
     *
     * - **object**: the parameter's value is complex object defined by JSON schema.
     * - **dynamic-content**: the parameter's content changes dynamically.
     * - **openapi-array**: the parameter's value is complex array defined by JSON schema.
     * - **ignore**: the system does not perform validity checks on the value of the parameter.
     * - **static-content**: the parameter has a static, or pre-defined, value(s).
     * - **json**: the parameter's value is JSON data.
     * - **array**: the parameter's value is array of primitives.
     * - **user-input**: the parameter's value is provided by user-input.
     * - **xml**: the parameter's value is XML data.
     * - **auto-detect**: the parameter's value can be user-inpur, XML data or JSON data. The
     * system automatically classifies the type of value.
     * - **dynamic-parameter-name**: the parameter's name changes dynamically.
     *
     * **Notes**:
     * - **dynamic-parameter-name** value type can be defined for a parameter with **flow**
     * *level* and **explicit** *type* only.
     * - **dynamic-content** value type can be defined for a parameter with **explicit** *type*
     * only.
     */
    valueType?: ValueType;
    /**
     * Specifies the order in which wildcard entities are organized.
     * Matching of an enforced parameter with a defined wildcard parameter happens based on
     * order from smaller to larger.
     */
    wildcardOrder?: number;
}

export interface StickySignatureOverride {
    /**
     * Specifies, when true, that the overridden signature is enforced
     */
    enabled?: boolean;
    /**
     * The signature name, which along with the signature tag, identifies the signature.
     */
    name?: string;
    /**
     * The signature ID which identifies the signature.
     */
    signatureId?: number;
    /**
     * The signature tag, which along with the signature name, identifies the signature.
     */
    tag?: string;
}

export interface FluffyURLContentProfile {
    contentProfile?: IndecentContentProfile;
    /**
     * Specifies an explicit header name that must appear in requests for this URL. This field
     * is not case-sensitive.
     */
    headerName: string;
    /**
     * Displays the order in which the system checks header content of requests for this URL.
     */
    headerOrder?: HeaderOrderEnum | number;
    /**
     * Specifies a simple pattern string (glob pattern matching) for the header value that must
     * appear in legal requests for this URL; for example, *json*, xml_method?, or method[0-9].
     * If the header includes this pattern, the system assumes the request contains the type of
     * data you select in the Request Body Handling setting. This field is case-sensitive.
     */
    headerValue: string;
    /**
     * Apply Content Signatures: Do not parse the content; scan the entire payload with
     * full-content attack signatures.
     * Apply Value and Content Signatures: Do not parse the content or extract parameters;
     * process the entire payload with value and full-content attack signatures.
     * Disallow: Block requests for an URL containing this header content. Log the Illegal
     * Request Content Type violation.
     * Do Nothing: Do not inspect or parse the content. Handle the header of the request as
     * specified by the security policy.
     * Form Data: Parse content as posted form data in either URL-encoded or multi-part formats.
     * Enforce the form parameters according to the policy.
     * GWT: Perform checks for data in requests, based on the configuration of the GWT (Google
     * Web Toolkit) profile associated with this URL.
     * JSON: Review JSON data using an associated JSON profile, and use value attack signatures
     * to scan the element values.
     * XML: Review XML data using an associated XML profile.
     */
    type?: URLContentProfileType;
}

export interface IndecentContentProfile {
    name?: string;
}

export interface Webhook {
    body?:         string;
    contentType?:  string;
    name:          string;
    triggerEvent?: TriggerEvent;
    url?:          string;
}

export enum TriggerEvent {
    ApplyPolicy = "apply-policy",
    ApplyPolicyFailed = "apply-policy-failed",
    HTTPRequestIllegal = "http-request-illegal",
    HTTPRequestLikelyMalicious = "http-request-likely-malicious",
    HTTPRequestNeedingExamination = "http-request-needing-examination",
    IncidentEnd = "incident-end",
    IncidentStart = "incident-start",
}

export interface WebsocketURL {
    allowBinaryMessage?:                  boolean;
    allowJsonMessage?:                    boolean;
    allowTextMessage?:                    boolean;
    binaryMessageMaxSize?:                number;
    checkBinaryMessageMaxSize?:           boolean;
    checkMessageFrameMaxCount?:           boolean;
    checkMessageFrameMaxSize?:            boolean;
    checkPayload?:                        boolean;
    description?:                         string;
    extension?:                           Extension;
    html5CrossOriginRequestsEnforcement?: WebsocketURLHtml5CrossOriginRequestsEnforcement;
    isAllowed?:                           boolean;
    jsonProfile?:                         JSONProfileObject;
    messageFrameMaxCount?:                number;
    messageFrameMaxSize?:                 number;
    metacharOverrides?:                   WebsocketURLMetacharOverride[];
    metacharsOnWebsocketUrlCheck?:        boolean;
    name:                                 string;
    performStaging?:                      boolean;
    plainTextProfile?:                    PlainTextProfileObject;
    protocol?:                            WebsocketURLProtocol;
    type?:                                HostNameTypeEnum;
    unsupportedExtensions?:               Extension;
    wildcardIncludesSlash?:               boolean;
    wildcardOrder?:                       number;
}

export enum Extension {
    Block = "block",
    Ignore = "ignore",
    Remove = "remove",
}

export interface WebsocketURLHtml5CrossOriginRequestsEnforcement {
    crossDomainAllowedOrigin?: TentacledCrossDomainAllowedOrigin[];
    enforcementMode?:          FluffyEnforcementMode;
}

export interface TentacledCrossDomainAllowedOrigin {
    includeSubDomains?: boolean;
    originName:         string;
    originPort:         OriginPortEnum | number;
    originProtocol:     OriginProtocol;
}

export enum FluffyEnforcementMode {
    Disabled = "disabled",
    Enforce = "enforce",
    RemoveAllHeaders = "remove-all-headers",
}

export interface JSONProfileObject {
    attackSignaturesCheck?:        boolean;
    defenseAttributes?:            JSONProfileDefenseAttributesObject;
    description?:                  string;
    handleJsonValuesAsParameters?: boolean;
    hasValidationFiles?:           boolean;
    metacharElementCheck?:         boolean;
    metacharOverrides?:            JSONProfileMetacharOverrideObject[];
    name:                          string;
    sensitiveData?:                JSONProfileSensitiveDatumObject[];
    signatureOverrides?:           JSONProfileSignatureOverrideObject[];
    validationFiles?:              JSONProfileValidationFileObject[];
}

export interface JSONProfileDefenseAttributesObject {
    maximumArrayLength?:           MaximumCookieHeaderLengthEnum | number;
    maximumStructureDepth?:        MaximumCookieHeaderLengthEnum | number;
    maximumTotalLengthOfJSONData?: MaximumCookieHeaderLengthEnum | number;
    maximumValueLength?:           MaximumCookieHeaderLengthEnum | number;
    tolerateJSONParsingWarnings?:  boolean;
}

export interface JSONProfileMetacharOverrideObject {
    isAllowed?: boolean;
    metachar:   string;
}

export interface JSONProfileSensitiveDatumObject {
    parameterName: string;
}

export interface JSONProfileSignatureOverrideObject {
    enabled?:     boolean;
    name?:        string;
    signatureId?: number;
    tag?:         string;
}

export interface JSONProfileValidationFileObject {
    importUrl:          string;
    isPrimary?:         boolean;
    jsonValidationFile: FluffyJSONValidationFile;
}

export interface FluffyJSONValidationFile {
    contents:  string;
    fileName:  string;
    isBase64?: boolean;
}

export interface WebsocketURLMetacharOverride {
    isAllowed?: boolean;
    metachar:   string;
}

export interface PlainTextProfileObject {
    attackSignaturesCheck?: boolean;
    defenseAttributes?:     PlainTextProfileDefenseAttributesObject;
    description?:           string;
    metacharElementCheck?:  boolean;
    metacharOverrides?:     PlainTextProfileMetacharOverrideObject[];
    name:                   string;
    signatureOverrides?:    PlainTextProfileSignatureOverrideObject[];
}

export interface PlainTextProfileDefenseAttributesObject {
    maximumLineLength?:      MaximumCookieHeaderLengthEnum | number;
    maximumTotalLength?:     MaximumCookieHeaderLengthEnum | number;
    performPercentDecoding?: boolean;
}

export interface PlainTextProfileMetacharOverrideObject {
    isAllowed?: boolean;
    metachar:   string;
}

export interface PlainTextProfileSignatureOverrideObject {
    enabled?:     boolean;
    name?:        string;
    signatureId?: number;
    tag?:         string;
}

export enum WebsocketURLProtocol {
    Ws = "ws",
    Wss = "wss",
}

/**
 * An IP address exception is an IP address that you want the system to treat in a specific
 * way for a security policy.
 * For example, you can specify IP addresses from which the system should always trust
 * traffic, IP addresses for which you do not want the system to generate learning
 * suggestions for the traffic, and IP addresses for which you want to exclude information
 * from the logs.
 * You can use the IP address exception feature to create exceptions for IP addresses of
 * internal tools that your company uses, such as penetration tools, manual or automatic
 * scanners, or web scraping tools.
 * You can add an IP address exception and instruct the system how to handle traffic coming
 * from that address.
 */
export interface WhitelistIP {
    /**
     * Specifies how the system responds to blocking requests sent from this IP address.
     * - **Policy Default:** Specifies that the Policy Blocking Settings will be used for
     * requests from this IP address.
     * - **Never Block:** Specifies that the system does not block requests sent from this IP
     * address, even if your security policy is configured to block all traffic.
     * - **Always Block:** Specifies that the system blocks requests sent from this IP address
     * on condition that IP is denylisted is set to Block under Policy Building Settings.
     */
    blockRequests?: BlockRequests;
    /**
     * Specifies a brief description of the IP address.
     */
    description?: string;
    /**
     * Specifies when enabled that the system considers this IP address legitimate and does not
     * take it into account when performing brute force prevention.
     * Specifies when disabled that the system does not consider traffic from this IP address as
     * being any safer than traffic from any other IP address. The system performs brute force
     * prevention to traffic from this IP address according to the configuration of the security
     * policy.
     */
    ignoreAnomalies?: boolean;
    /**
     * Specifies when enabled that the system considers this IP address legitimate even if it is
     * found in the IP Intelligence database (a database of questionable IP addresses).
     * Specifies when disabled that the system does not consider traffic from this IP address as
     * being any safer than traffic from any other IP address. Therefore, if the IP Intelligence
     * feature is enabled, the system checks whether this IP address matches any IP addresses in
     * the IP Intelligence database.
     */
    ignoreIpReputation?: boolean;
    /**
     * Specifies the IP address that you want the system to trust.
     */
    ipAddress: string;
    /**
     * Specifies the netmask of the exceptional IP address. This is an optional field.
     */
    ipMask: string;
    /**
     * Specifies when enabled that the system should not generate learning suggestions from
     * traffic sent from this IP address.
     * Specifies when disabled that the system should generate learning suggestions from traffic
     * sent from this IP address for violations with the Learn flag enabled on the Policy
     * Building Settings.
     */
    neverLearnRequests?: boolean;
    /**
     * Specifies when enabled that the system does not log requests or responses sent from this
     * IP address, even if the traffic is illegal, and even if your security policy is
     * configured to log all traffic.
     * Specifies when disabled that the system logs traffic sent this IP address according to
     * the settings of the security policy's Logging Profile, and the violation settings on the
     * Policy Building Settings.
     */
    neverLogRequests?: boolean;
    /**
     * Specifies when enabled the Policy Builder considers traffic from this IP address as being
     * safe.
     * The Policy Builder automatically adds to the security policy the data logged from traffic
     * sent from this IP address.
     * Specifies when disabled that the Policy Builder does not consider traffic from this IP
     * address as being any different than traffic from any other IP address.
     */
    trustedByPolicyBuilder?: boolean;
}

/**
 * Specifies how the system responds to blocking requests sent from this IP address.
 * - **Policy Default:** Specifies that the Policy Blocking Settings will be used for
 * requests from this IP address.
 * - **Never Block:** Specifies that the system does not block requests sent from this IP
 * address, even if your security policy is configured to block all traffic.
 * - **Always Block:** Specifies that the system blocks requests sent from this IP address
 * on condition that IP is denylisted is set to Block under Policy Building Settings.
 */
export enum BlockRequests {
    Always = "always",
    Never = "never",
    PolicyDefault = "policy-default",
}

export interface XMLProfile {
    attachmentsInSoapMessages?:  boolean;
    attackSignaturesCheck?:      boolean;
    defenseAttributes?:          XMLProfileDefenseAttributes;
    description?:                string;
    enableWss?:                  boolean;
    followSchemaLinks?:          boolean;
    inspectSoapAttachments?:     boolean;
    metacharAttributeCheck?:     boolean;
    metacharElementCheck?:       boolean;
    metacharOverrides?:          XMLProfileMetacharOverride[];
    name:                        string;
    sensitiveData?:              XMLProfileSensitiveDatum[];
    signatureOverrides?:         XMLProfileSignatureOverride[];
    soapMethods?:                SoapMethod[];
    useXmlResponsePage?:         boolean;
    validationFiles?:            XMLProfileValidationFile[];
    validationSoapActionHeader?: boolean;
    wssConfiguration?:           WssConfiguration;
}

export interface XMLProfileDefenseAttributes {
    allowCDATA?:                  boolean;
    allowDTDs?:                   boolean;
    allowExternalReferences?:     boolean;
    allowProcessingInstructions?: boolean;
    maximumAttributesPerElement?: MaximumCookieHeaderLengthEnum | number;
    maximumAttributeValueLength?: MaximumCookieHeaderLengthEnum | number;
    maximumChildrenPerElement?:   MaximumCookieHeaderLengthEnum | number;
    maximumDocumentDepth?:        MaximumCookieHeaderLengthEnum | number;
    maximumDocumentSize?:         MaximumCookieHeaderLengthEnum | number;
    maximumElements?:             MaximumCookieHeaderLengthEnum | number;
    maximumNameLength?:           MaximumCookieHeaderLengthEnum | number;
    maximumNamespaceLength?:      MaximumCookieHeaderLengthEnum | number;
    maximumNSDeclarations?:       MaximumCookieHeaderLengthEnum | number;
    tolerateCloseTagShorthand?:   boolean;
    tolerateLeadingWhiteSpace?:   boolean;
    tolerateNumericNames?:        boolean;
}

export interface XMLProfileMetacharOverride {
    isAllowed?: boolean;
    metachar:   string;
}

export interface XMLProfileSensitiveDatum {
    namespace: string;
    paramName: string;
    paramType: string;
}

export interface XMLProfileSignatureOverride {
    enabled?:     boolean;
    name?:        string;
    signatureId?: number;
    tag?:         string;
}

export interface SoapMethod {
    action?:    string;
    isAllowed?: boolean;
    name:       string;
    namespace:  string;
}

export interface XMLProfileValidationFile {
    importUrl:         string;
    isPrimary?:        boolean;
    xmlValidationFile: XMLValidationFile;
}

export interface XMLValidationFile {
    contents:  string;
    fileName:  string;
    isBase64?: boolean;
}

export interface WssConfiguration {
    addTimestamp?:                             boolean;
    applyActionToDefinedRequestElements?:      boolean;
    applyActionToDefinedResponseElements?:     boolean;
    applyActionToEntireResponseBodyValue?:     boolean;
    clientCertificates?:                       ClientCertificate[];
    decryptAll?:                               boolean;
    elements?:                                 Element[];
    enableRequestRole?:                        boolean;
    enableResponseRole?:                       boolean;
    encryptionAlgorithm?:                      EncryptionAlgorithm;
    enforceTimestampInRequest?:                boolean;
    keyTransportAlgorithm?:                    KeyTransportAlgorithm;
    maxTimestampInterval?:                     number;
    name?:                                     string;
    namespaceMapping?:                         NamespaceMapping[];
    responseAction?:                           ResponseAction;
    roles?:                                    RoleElement[];
    signatureAlgorithm?:                       SignatureAlgorithm;
    soapBodyInRequestMustBeSignedAndVerified?: boolean;
    verifyAll?:                                boolean;
}

export interface ClientCertificate {
    name?: string;
}

export interface Element {
    applyTo:        ApplyTo;
    encryptedPart?: EncryptedPart;
    xPathName:      string;
}

export enum ApplyTo {
    Request = "request",
    Response = "response",
}

export enum EncryptedPart {
    Content = "content",
    Element = "element",
}

export enum EncryptionAlgorithm {
    Aes128 = "aes128",
    Aes256 = "aes256",
    Tripledes = "tripledes",
}

export enum KeyTransportAlgorithm {
    RSA1_5 = "rsa-1_5",
    RSAOaep = "rsa-oaep",
}

export interface NamespaceMapping {
    namespace?: string;
    prefix:     string;
}

export enum ResponseAction {
    Encrypt = "encrypt",
    EncryptThenSign = "encrypt-then-sign",
    Sign = "sign",
    SignThenEncrypt = "sign-then-encrypt",
}

export interface RoleElement {
    applyTo: ApplyTo;
    role:    RoleEnum;
}

export enum RoleEnum {
    Next = "next",
    None = "none",
    UltimateReceiver = "ultimateReceiver",
}

export enum SignatureAlgorithm {
    HmacSha1 = "hmac-sha1",
    RSASha1 = "rsa-sha1",
}

export interface XMLValidationFileElement {
    contents:  string;
    fileName:  string;
    isBase64?: boolean;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPolicyD(json: string): any[] | boolean | number | number | null | PolicyDObject | string {
        return cast(JSON.parse(json), u(a("any"), true, 3.14, 0, null, r("PolicyDObject"), ""));
    }

    public static policyDToJson(value: any[] | boolean | number | number | null | PolicyDObject | string): string {
        return JSON.stringify(uncast(value, u(a("any"), true, 3.14, 0, null, r("PolicyDObject"), "")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "PolicyDObject": o([
        { json: "policy", js: "policy", typ: u(undefined, r("Policy")) },
    ], "any"),
    "Policy": o([
        { json: "antivirus", js: "antivirus", typ: u(undefined, r("Antivirus")) },
        { json: "applicationLanguage", js: "applicationLanguage", typ: u(undefined, r("ApplicationLanguage")) },
        { json: "behavioral-enforcement", js: "behavioral-enforcement", typ: u(undefined, r("BehavioralEnforcement")) },
        { json: "blocking-settings", js: "blocking-settings", typ: u(undefined, r("BlockingSettings")) },
        { json: "bot-defense", js: "bot-defense", typ: u(undefined, r("BotDefense")) },
        { json: "brute-force-attack-preventions", js: "brute-force-attack-preventions", typ: u(undefined, a(r("BruteForceAttackPrevention"))) },
        { json: "caseInsensitive", js: "caseInsensitive", typ: u(undefined, true) },
        { json: "character-sets", js: "character-sets", typ: u(undefined, a(r("CharacterSet"))) },
        { json: "cookie-settings", js: "cookie-settings", typ: u(undefined, r("CookieSettings")) },
        { json: "cookies", js: "cookies", typ: u(undefined, a(r("Cooky"))) },
        { json: "csrf-protection", js: "csrf-protection", typ: u(undefined, r("CSRFProtection")) },
        { json: "csrf-urls", js: "csrf-urls", typ: u(undefined, a(r("CSRFURL"))) },
        { json: "data-guard", js: "data-guard", typ: u(undefined, r("DataGuard")) },
        { json: "database-protection", js: "database-protection", typ: u(undefined, r("DatabaseProtection")) },
        { json: "deception-response-pages", js: "deception-response-pages", typ: u(undefined, a(r("DeceptionResponsePage"))) },
        { json: "deception-settings", js: "deception-settings", typ: u(undefined, r("DeceptionSettings")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "disabled-action-items", js: "disabled-action-items", typ: u(undefined, a(r("DisabledActionItem"))) },
        { json: "disallowed-geolocations", js: "disallowed-geolocations", typ: u(undefined, a(r("DisallowedGeolocation"))) },
        { json: "enablePassiveMode", js: "enablePassiveMode", typ: u(undefined, true) },
        { json: "enforcementMode", js: "enforcementMode", typ: u(undefined, r("PolicyEnforcementMode")) },
        { json: "filetypes", js: "filetypes", typ: u(undefined, a(r("Filetype"))) },
        { json: "fullPath", js: "fullPath", typ: u(undefined, "") },
        { json: "general", js: "general", typ: u(undefined, r("General")) },
        { json: "gwt-profiles", js: "gwt-profiles", typ: u(undefined, a(r("GWTProfile"))) },
        { json: "header-settings", js: "header-settings", typ: u(undefined, r("HeaderSettings")) },
        { json: "headers", js: "headers", typ: u(undefined, a(r("Header"))) },
        { json: "host-names", js: "host-names", typ: u(undefined, a(r("HostName"))) },
        { json: "ip-intelligence", js: "ip-intelligence", typ: u(undefined, r("IPIntelligence")) },
        { json: "json-profiles", js: "json-profiles", typ: u(undefined, a(r("JSONProfile"))) },
        { json: "json-validation-files", js: "json-validation-files", typ: u(undefined, a(r("JSONValidationFile"))) },
        { json: "login-enforcement", js: "login-enforcement", typ: u(undefined, r("LoginEnforcement")) },
        { json: "login-pages", js: "login-pages", typ: u(undefined, a(r("LoginPage"))) },
        { json: "methods", js: "methods", typ: u(undefined, a(r("MethodElement"))) },
        { json: "microservices", js: "microservices", typ: u(undefined, a(r("Microservice"))) },
        { json: "name", js: "name", typ: "" },
        { json: "navigation-parameters", js: "navigation-parameters", typ: u(undefined, a(r("NavigationParameter"))) },
        { json: "open-api-files", js: "open-api-files", typ: u(undefined, a(r("OpenAPIFile"))) },
        { json: "parameters", js: "parameters", typ: u(undefined, a(r("ParameterElement"))) },
        { json: "plain-text-profiles", js: "plain-text-profiles", typ: u(undefined, a(r("PlainTextProfile"))) },
        { json: "policy-builder", js: "policy-builder", typ: u(undefined, r("PolicyBuilder")) },
        { json: "policy-builder-central-configuration", js: "policy-builder-central-configuration", typ: u(undefined, r("PolicyBuilderCentralConfiguration")) },
        { json: "policy-builder-cookie", js: "policy-builder-cookie", typ: u(undefined, r("PolicyBuilderCookie")) },
        { json: "policy-builder-filetype", js: "policy-builder-filetype", typ: u(undefined, r("PolicyBuilderFiletype")) },
        { json: "policy-builder-header", js: "policy-builder-header", typ: u(undefined, r("PolicyBuilderHeader")) },
        { json: "policy-builder-parameter", js: "policy-builder-parameter", typ: u(undefined, r("PolicyBuilderParameter")) },
        { json: "policy-builder-redirection-protection", js: "policy-builder-redirection-protection", typ: u(undefined, r("PolicyBuilderRedirectionProtection")) },
        { json: "policy-builder-server-technologies", js: "policy-builder-server-technologies", typ: u(undefined, r("PolicyBuilderServerTechnologies")) },
        { json: "policy-builder-sessions-and-logins", js: "policy-builder-sessions-and-logins", typ: u(undefined, r("PolicyBuilderSessionsAndLogins")) },
        { json: "policy-builder-url", js: "policy-builder-url", typ: u(undefined, r("PolicyBuilderURL")) },
        { json: "protocolIndependent", js: "protocolIndependent", typ: u(undefined, true) },
        { json: "redirection-protection", js: "redirection-protection", typ: u(undefined, r("RedirectionProtection")) },
        { json: "redirection-protection-domains", js: "redirection-protection-domains", typ: u(undefined, a(r("RedirectionProtectionDomain"))) },
        { json: "request-loggers", js: "request-loggers", typ: u(undefined, a(r("RequestLogger"))) },
        { json: "response-pages", js: "response-pages", typ: u(undefined, a(r("ResponsePage"))) },
        { json: "sensitive-parameters", js: "sensitive-parameters", typ: u(undefined, a(r("SensitiveParameter"))) },
        { json: "server-technologies", js: "server-technologies", typ: u(undefined, a(r("ServerTechnology"))) },
        { json: "session-tracking", js: "session-tracking", typ: u(undefined, r("SessionTracking")) },
        { json: "session-tracking-statuses", js: "session-tracking-statuses", typ: u(undefined, a(r("SessionTrackingStatus"))) },
        { json: "signature-requirements", js: "signature-requirements", typ: u(undefined, a(r("SignatureRequirement"))) },
        { json: "signature-sets", js: "signature-sets", typ: u(undefined, a(r("SignatureSet"))) },
        { json: "signature-settings", js: "signature-settings", typ: u(undefined, r("SignatureSettings")) },
        { json: "signatures", js: "signatures", typ: u(undefined, a(r("PolicySignature"))) },
        { json: "softwareVersion", js: "softwareVersion", typ: u(undefined, "") },
        { json: "template", js: "template", typ: r("Template") },
        { json: "threat-campaign-settings", js: "threat-campaign-settings", typ: u(undefined, r("ThreatCampaignSettings")) },
        { json: "threat-campaigns", js: "threat-campaigns", typ: u(undefined, a(r("ThreatCampaign"))) },
        { json: "type", js: "type", typ: u(undefined, r("PolicyType")) },
        { json: "urls", js: "urls", typ: u(undefined, a(r("URLElement"))) },
        { json: "webhooks", js: "webhooks", typ: u(undefined, a(r("Webhook"))) },
        { json: "websocket-urls", js: "websocket-urls", typ: u(undefined, a(r("WebsocketURL"))) },
        { json: "whitelist-ips", js: "whitelist-ips", typ: u(undefined, a(r("WhitelistIP"))) },
        { json: "xml-profiles", js: "xml-profiles", typ: u(undefined, a(r("XMLProfile"))) },
        { json: "xml-validation-files", js: "xml-validation-files", typ: u(undefined, a(r("XMLValidationFileElement"))) },
    ], "any"),
    "Antivirus": o([
        { json: "inspectHttpUploads", js: "inspectHttpUploads", typ: u(undefined, true) },
    ], "any"),
    "BehavioralEnforcement": o([
        { json: "behavioralEnforcementViolations", js: "behavioralEnforcementViolations", typ: u(undefined, a(r("BehavioralEnforcementViolation"))) },
        { json: "enableBehavioralEnforcement", js: "enableBehavioralEnforcement", typ: u(undefined, true) },
        { json: "enableBlockingCveSignatures", js: "enableBlockingCveSignatures", typ: u(undefined, true) },
        { json: "enableBlockingHighAccuracySignatures", js: "enableBlockingHighAccuracySignatures", typ: u(undefined, true) },
        { json: "enableBlockingLikelyMaliciousTransactions", js: "enableBlockingLikelyMaliciousTransactions", typ: u(undefined, true) },
        { json: "enableBlockingSuspiciousTransactions", js: "enableBlockingSuspiciousTransactions", typ: u(undefined, true) },
        { json: "enableBlockingViolations", js: "enableBlockingViolations", typ: u(undefined, true) },
    ], "any"),
    "BehavioralEnforcementViolation": o([
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "BlockingSettings": o([
        { json: "evasions", js: "evasions", typ: u(undefined, a(r("Evasion"))) },
        { json: "http-protocols", js: "http-protocols", typ: u(undefined, a(r("HTTPProtocol"))) },
        { json: "violations", js: "violations", typ: u(undefined, a(r("BlockingSettingsViolation"))) },
        { json: "web-services-securities", js: "web-services-securities", typ: u(undefined, a(r("WebServicesSecurity"))) },
    ], "any"),
    "Evasion": o([
        { json: "description", js: "description", typ: r("EvasionDescription") },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "learn", js: "learn", typ: u(undefined, true) },
        { json: "maxDecodingPasses", js: "maxDecodingPasses", typ: u(undefined, 0) },
    ], "any"),
    "HTTPProtocol": o([
        { json: "description", js: "description", typ: r("HTTPProtocolDescription") },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "learn", js: "learn", typ: u(undefined, true) },
        { json: "maxHeaders", js: "maxHeaders", typ: u(undefined, 0) },
        { json: "maxParams", js: "maxParams", typ: u(undefined, 0) },
    ], "any"),
    "BlockingSettingsViolation": o([
        { json: "alarm", js: "alarm", typ: u(undefined, true) },
        { json: "block", js: "block", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "learn", js: "learn", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "WebServicesSecurity": o([
        { json: "description", js: "description", typ: r("WebServicesSecurityDescription") },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "learn", js: "learn", typ: u(undefined, true) },
    ], "any"),
    "BotDefense": o([
        { json: "mitigations", js: "mitigations", typ: u(undefined, r("Mitigations")) },
        { json: "settings", js: "settings", typ: u(undefined, r("Settings")) },
    ], "any"),
    "Mitigations": o([
        { json: "classes", js: "classes", typ: u(undefined, a(r("Class"))) },
        { json: "signatures", js: "signatures", typ: u(undefined, a(r("MitigationsSignature"))) },
    ], "any"),
    "Class": o([
        { json: "action", js: "action", typ: u(undefined, r("ClassAction")) },
        { json: "name", js: "name", typ: r("ClassName") },
    ], "any"),
    "MitigationsSignature": o([
        { json: "action", js: "action", typ: u(undefined, r("ClassAction")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Settings": o([
        { json: "isEnabled", js: "isEnabled", typ: u(undefined, true) },
    ], "any"),
    "BruteForceAttackPrevention": o([
        { json: "bruteForceProtectionForAllLoginPages", js: "bruteForceProtectionForAllLoginPages", typ: u(undefined, true) },
        { json: "captchaBypassCriteria", js: "captchaBypassCriteria", typ: u(undefined, r("CAPTCHABypassCriteria")) },
        { json: "clientSideIntegrityBypassCriteria", js: "clientSideIntegrityBypassCriteria", typ: u(undefined, r("ClientSideIntegrityBypassCriteria")) },
        { json: "detectionCriteria", js: "detectionCriteria", typ: u(undefined, r("DetectionCriteria")) },
        { json: "leakedCredentialsCriteria", js: "leakedCredentialsCriteria", typ: u(undefined, r("LeakedCredentialsCriteria")) },
        { json: "loginAttemptsFromTheSameDeviceId", js: "loginAttemptsFromTheSameDeviceId", typ: u(undefined, r("LoginAttemptsFromTheSameDeviceID")) },
        { json: "loginAttemptsFromTheSameIp", js: "loginAttemptsFromTheSameIp", typ: u(undefined, r("LoginAttemptsFromTheSameIP")) },
        { json: "loginAttemptsFromTheSameUser", js: "loginAttemptsFromTheSameUser", typ: u(undefined, r("LoginAttemptsFromTheSameUser")) },
        { json: "measurementPeriod", js: "measurementPeriod", typ: u(undefined, 0) },
        { json: "preventionDuration", js: "preventionDuration", typ: u(undefined, u(r("PreventionDurationEnum"), 0)) },
        { json: "reEnableLoginAfter", js: "reEnableLoginAfter", typ: u(undefined, 0) },
        { json: "sourceBasedProtectionDetectionPeriod", js: "sourceBasedProtectionDetectionPeriod", typ: u(undefined, 0) },
        { json: "url", js: "url", typ: r("BruteForceAttackPreventionURL") },
    ], "any"),
    "CAPTCHABypassCriteria": o([
        { json: "action", js: "action", typ: u(undefined, r("CAPTCHABypassCriteriaAction")) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "threshold", js: "threshold", typ: u(undefined, 0) },
    ], "any"),
    "ClientSideIntegrityBypassCriteria": o([
        { json: "action", js: "action", typ: u(undefined, r("ClientSideIntegrityBypassCriteriaAction")) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "threshold", js: "threshold", typ: u(undefined, 0) },
    ], "any"),
    "DetectionCriteria": o([
        { json: "action", js: "action", typ: u(undefined, r("DetectionCriteriaAction")) },
        { json: "credentialsStuffingMatchesReached", js: "credentialsStuffingMatchesReached", typ: u(undefined, 0) },
        { json: "detectCredentialsStuffingAttack", js: "detectCredentialsStuffingAttack", typ: u(undefined, true) },
        { json: "detectDistributedBruteForceAttack", js: "detectDistributedBruteForceAttack", typ: u(undefined, true) },
        { json: "failedLoginAttemptsRateReached", js: "failedLoginAttemptsRateReached", typ: u(undefined, 0) },
    ], "any"),
    "LeakedCredentialsCriteria": o([
        { json: "action", js: "action", typ: u(undefined, r("LeakedCredentialsCriteriaAction")) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
    ], "any"),
    "LoginAttemptsFromTheSameDeviceID": o([
        { json: "action", js: "action", typ: u(undefined, r("LoginAttemptsFromTheSameDeviceIDAction")) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "threshold", js: "threshold", typ: u(undefined, 0) },
    ], "any"),
    "LoginAttemptsFromTheSameIP": o([
        { json: "action", js: "action", typ: u(undefined, r("LoginAttemptsFromTheSameDeviceIDAction")) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "threshold", js: "threshold", typ: u(undefined, 0) },
    ], "any"),
    "LoginAttemptsFromTheSameUser": o([
        { json: "action", js: "action", typ: u(undefined, r("LoginAttemptsFromTheSameUserAction")) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "threshold", js: "threshold", typ: u(undefined, 0) },
    ], "any"),
    "BruteForceAttackPreventionURL": o([
        { json: "allowRenderingInFrames", js: "allowRenderingInFrames", typ: u(undefined, r("AllowRenderingInFrames")) },
        { json: "allowRenderingInFramesOnlyFrom", js: "allowRenderingInFramesOnlyFrom", typ: u(undefined, "") },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "canChangeDomainCookie", js: "canChangeDomainCookie", typ: u(undefined, true) },
        { json: "clickjackingProtection", js: "clickjackingProtection", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "dynamicFlows", js: "dynamicFlows", typ: u(undefined, a(r("PurpleDynamicFlow"))) },
        { json: "html5CrossOriginRequestsEnforcement", js: "html5CrossOriginRequestsEnforcement", typ: u(undefined, r("PurpleHtml5CrossOriginRequestsEnforcement")) },
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "mandatoryBody", js: "mandatoryBody", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("PurpleMetacharOverride"))) },
        { json: "metacharsOnUrlCheck", js: "metacharsOnUrlCheck", typ: u(undefined, true) },
        { json: "method", js: "method", typ: u(undefined, r("URLMethod")) },
        { json: "methodOverrides", js: "methodOverrides", typ: u(undefined, a(r("PurpleMethodOverride"))) },
        { json: "methodsOverrideOnUrlCheck", js: "methodsOverrideOnUrlCheck", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "operationId", js: "operationId", typ: u(undefined, "") },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "positionalParameters", js: "positionalParameters", typ: u(undefined, a(r("PurplePositionalParameter"))) },
        { json: "protocol", js: "protocol", typ: u(undefined, r("URLProtocol")) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("FluffySignatureOverride"))) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "urlContentProfiles", js: "urlContentProfiles", typ: u(undefined, a(r("PurpleURLContentProfile"))) },
        { json: "wildcardIncludesSlash", js: "wildcardIncludesSlash", typ: u(undefined, true) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "PurpleDynamicFlow": o([
        { json: "prefix", js: "prefix", typ: "" },
        { json: "regexp", js: "regexp", typ: "" },
        { json: "suffix", js: "suffix", typ: "" },
    ], "any"),
    "PurpleHtml5CrossOriginRequestsEnforcement": o([
        { json: "allowCredentials", js: "allowCredentials", typ: u(undefined, true) },
        { json: "allowOriginsEnforcementMode", js: "allowOriginsEnforcementMode", typ: u(undefined, r("AllowOriginsEnforcementMode")) },
        { json: "checkAllowedHeaders", js: "checkAllowedHeaders", typ: u(undefined, true) },
        { json: "checkAllowedMethods", js: "checkAllowedMethods", typ: u(undefined, true) },
        { json: "checkCredentials", js: "checkCredentials", typ: u(undefined, true) },
        { json: "checkExposedHeaders", js: "checkExposedHeaders", typ: u(undefined, true) },
        { json: "checkMaximumAge", js: "checkMaximumAge", typ: u(undefined, true) },
        { json: "crossDomainAllowedHeader", js: "crossDomainAllowedHeader", typ: u(undefined, a(r("PurpleCrossDomainAllowedHeader"))) },
        { json: "crossDomainAllowedMethod", js: "crossDomainAllowedMethod", typ: u(undefined, a(r("PurpleCrossDomainAllowedMethod"))) },
        { json: "crossDomainAllowedOrigin", js: "crossDomainAllowedOrigin", typ: u(undefined, a(r("PurpleCrossDomainAllowedOrigin"))) },
        { json: "crossDomainExposedHeader", js: "crossDomainExposedHeader", typ: u(undefined, a(r("PurpleCrossDomainExposedHeader"))) },
        { json: "enforcementMode", js: "enforcementMode", typ: u(undefined, r("PurpleEnforcementMode")) },
        { json: "maximumAge", js: "maximumAge", typ: u(undefined, 0) },
    ], "any"),
    "PurpleCrossDomainAllowedHeader": o([
        { json: "allowedHeaderName", js: "allowedHeaderName", typ: "" },
    ], "any"),
    "PurpleCrossDomainAllowedMethod": o([
        { json: "methodName", js: "methodName", typ: "" },
    ], "any"),
    "PurpleCrossDomainAllowedOrigin": o([
        { json: "includeSubDomains", js: "includeSubDomains", typ: u(undefined, true) },
        { json: "originName", js: "originName", typ: "" },
        { json: "originPort", js: "originPort", typ: u(r("OriginPortEnum"), 0) },
        { json: "originProtocol", js: "originProtocol", typ: r("OriginProtocol") },
    ], "any"),
    "PurpleCrossDomainExposedHeader": o([
        { json: "exposedHeaderName", js: "exposedHeaderName", typ: "" },
    ], "any"),
    "PurpleMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "PurpleMethodOverride": o([
        { json: "allowed", js: "allowed", typ: u(undefined, true) },
        { json: "method", js: "method", typ: r("MethodOverrideMethod") },
    ], "any"),
    "PurpleURL": o([
        { json: "allowRenderingInFrames", js: "allowRenderingInFrames", typ: u(undefined, r("AllowRenderingInFrames")) },
        { json: "allowRenderingInFramesOnlyFrom", js: "allowRenderingInFramesOnlyFrom", typ: u(undefined, "") },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "canChangeDomainCookie", js: "canChangeDomainCookie", typ: u(undefined, true) },
        { json: "clickjackingProtection", js: "clickjackingProtection", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "dynamicFlows", js: "dynamicFlows", typ: u(undefined, a(r("PurpleDynamicFlow"))) },
        { json: "html5CrossOriginRequestsEnforcement", js: "html5CrossOriginRequestsEnforcement", typ: u(undefined, r("PurpleHtml5CrossOriginRequestsEnforcement")) },
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "mandatoryBody", js: "mandatoryBody", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("PurpleMetacharOverride"))) },
        { json: "metacharsOnUrlCheck", js: "metacharsOnUrlCheck", typ: u(undefined, true) },
        { json: "method", js: "method", typ: u(undefined, r("URLMethod")) },
        { json: "methodOverrides", js: "methodOverrides", typ: u(undefined, a(r("PurpleMethodOverride"))) },
        { json: "methodsOverrideOnUrlCheck", js: "methodsOverrideOnUrlCheck", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "operationId", js: "operationId", typ: u(undefined, "") },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "positionalParameters", js: "positionalParameters", typ: u(undefined, a(r("PurplePositionalParameter"))) },
        { json: "protocol", js: "protocol", typ: u(undefined, r("URLProtocol")) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("FluffySignatureOverride"))) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "urlContentProfiles", js: "urlContentProfiles", typ: u(undefined, a(r("PurpleURLContentProfile"))) },
        { json: "wildcardIncludesSlash", js: "wildcardIncludesSlash", typ: u(undefined, true) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "PurpleParameter": o([
        { json: "allowEmptyValue", js: "allowEmptyValue", typ: u(undefined, true) },
        { json: "allowRepeatedParameterName", js: "allowRepeatedParameterName", typ: u(undefined, true) },
        { json: "arraySerializationFormat", js: "arraySerializationFormat", typ: u(undefined, r("ArraySerializationFormat")) },
        { json: "arrayUniqueItemsCheck", js: "arrayUniqueItemsCheck", typ: u(undefined, true) },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "checkMaxItemsInArray", js: "checkMaxItemsInArray", typ: u(undefined, true) },
        { json: "checkMaxValue", js: "checkMaxValue", typ: u(undefined, true) },
        { json: "checkMaxValueLength", js: "checkMaxValueLength", typ: u(undefined, true) },
        { json: "checkMetachars", js: "checkMetachars", typ: u(undefined, true) },
        { json: "checkMinItemsInArray", js: "checkMinItemsInArray", typ: u(undefined, true) },
        { json: "checkMinValue", js: "checkMinValue", typ: u(undefined, true) },
        { json: "checkMinValueLength", js: "checkMinValueLength", typ: u(undefined, true) },
        { json: "checkMultipleOfValue", js: "checkMultipleOfValue", typ: u(undefined, true) },
        { json: "contentProfile", js: "contentProfile", typ: u(undefined, r("PurpleContentProfile")) },
        { json: "dataType", js: "dataType", typ: u(undefined, r("DataType")) },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "enableRegularExpression", js: "enableRegularExpression", typ: u(undefined, true) },
        { json: "exclusiveMax", js: "exclusiveMax", typ: u(undefined, true) },
        { json: "exclusiveMin", js: "exclusiveMin", typ: u(undefined, true) },
        { json: "explodeObjectSerialization", js: "explodeObjectSerialization", typ: u(undefined, true) },
        { json: "isBase64", js: "isBase64", typ: u(undefined, true) },
        { json: "isCookie", js: "isCookie", typ: u(undefined, true) },
        { json: "isHeader", js: "isHeader", typ: u(undefined, true) },
        { json: "level", js: "level", typ: u(undefined, r("Level")) },
        { json: "mandatory", js: "mandatory", typ: u(undefined, true) },
        { json: "maximumLength", js: "maximumLength", typ: u(undefined, 0) },
        { json: "maximumValue", js: "maximumValue", typ: u(undefined, 3.14) },
        { json: "maxItemsInArray", js: "maxItemsInArray", typ: u(undefined, 0) },
        { json: "metacharsOnParameterValueCheck", js: "metacharsOnParameterValueCheck", typ: u(undefined, true) },
        { json: "minimumLength", js: "minimumLength", typ: u(undefined, 0) },
        { json: "minimumValue", js: "minimumValue", typ: u(undefined, 3.14) },
        { json: "minItemsInArray", js: "minItemsInArray", typ: u(undefined, 0) },
        { json: "multipleOf", js: "multipleOf", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: "" },
        { json: "nameMetacharOverrides", js: "nameMetacharOverrides", typ: u(undefined, a(r("PurpleNameMetacharOverride"))) },
        { json: "objectSerializationStyle", js: "objectSerializationStyle", typ: u(undefined, r("ObjectSerializationStyle")) },
        { json: "parameterEnumValues", js: "parameterEnumValues", typ: u(undefined, a("")) },
        { json: "parameterLocation", js: "parameterLocation", typ: u(undefined, r("ParameterLocation")) },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "regularExpression", js: "regularExpression", typ: u(undefined, "") },
        { json: "sensitiveParameter", js: "sensitiveParameter", typ: u(undefined, true) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("PurpleSignatureOverride"))) },
        { json: "staticValues", js: "staticValues", typ: u(undefined, a("")) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "url", js: "url", typ: u(undefined, r("PurpleURL")) },
        { json: "valueMetacharOverrides", js: "valueMetacharOverrides", typ: u(undefined, a(r("PurpleValueMetacharOverride"))) },
        { json: "valueType", js: "valueType", typ: u(undefined, r("ValueType")) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "PurplePositionalParameter": o([
        { json: "parameter", js: "parameter", typ: r("PurpleParameter") },
        { json: "urlSegmentIndex", js: "urlSegmentIndex", typ: 0 },
    ], "any"),
    "FluffySignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "PurpleURLContentProfile": o([
        { json: "contentProfile", js: "contentProfile", typ: u(undefined, r("TentacledContentProfile")) },
        { json: "headerName", js: "headerName", typ: "" },
        { json: "headerOrder", js: "headerOrder", typ: u(undefined, u(r("HeaderOrderEnum"), 0)) },
        { json: "headerValue", js: "headerValue", typ: "" },
        { json: "type", js: "type", typ: u(undefined, r("URLContentProfileType")) },
    ], "any"),
    "TentacledContentProfile": o([
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "PurpleContentProfile": o([
        { json: "contentProfile", js: "contentProfile", typ: u(undefined, r("FluffyContentProfile")) },
    ], "any"),
    "FluffyContentProfile": o([
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "PurpleNameMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "PurpleSignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "PurpleValueMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "CharacterSet": o([
        { json: "characterSet", js: "characterSet", typ: u(undefined, a(r("CharacterSetElement"))) },
        { json: "characterSetType", js: "characterSetType", typ: r("CharacterSetType") },
    ], "any"),
    "CharacterSetElement": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "CookieSettings": o([
        { json: "maximumCookieHeaderLength", js: "maximumCookieHeaderLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
    ], "any"),
    "Cooky": o([
        { json: "accessibleOnlyThroughTheHttpProtocol", js: "accessibleOnlyThroughTheHttpProtocol", typ: u(undefined, true) },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "enforcementType", js: "enforcementType", typ: u(undefined, r("EnforcementType")) },
        { json: "insertSameSiteAttribute", js: "insertSameSiteAttribute", typ: u(undefined, r("InsertSameSiteAttribute")) },
        { json: "isBase64", js: "isBase64", typ: u(undefined, true) },
        { json: "maskValueInLogs", js: "maskValueInLogs", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "securedOverHttpsConnection", js: "securedOverHttpsConnection", typ: u(undefined, true) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("CookySignatureOverride"))) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "CookySignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "CSRFProtection": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "expirationTimeInSeconds", js: "expirationTimeInSeconds", typ: u(undefined, u(r("ExpirationTime"), 0)) },
        { json: "sslOnly", js: "sslOnly", typ: u(undefined, true) },
    ], "any"),
    "CSRFURL": o([
        { json: "enforcementAction", js: "enforcementAction", typ: u(undefined, r("EnforcementAction")) },
        { json: "method", js: "method", typ: u(undefined, r("CSRFURLMethod")) },
        { json: "parametersList", js: "parametersList", typ: u(undefined, a("")) },
        { json: "requiredParameters", js: "requiredParameters", typ: u(undefined, r("RequiredParameters")) },
        { json: "url", js: "url", typ: "" },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "DataGuard": o([
        { json: "creditCardNumbers", js: "creditCardNumbers", typ: u(undefined, true) },
        { json: "customPatterns", js: "customPatterns", typ: u(undefined, true) },
        { json: "customPatternsList", js: "customPatternsList", typ: u(undefined, a("")) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "enforcementMode", js: "enforcementMode", typ: u(undefined, r("DataGuardEnforcementMode")) },
        { json: "enforcementUrls", js: "enforcementUrls", typ: u(undefined, a("")) },
        { json: "exceptionPatterns", js: "exceptionPatterns", typ: u(undefined, true) },
        { json: "exceptionPatternsList", js: "exceptionPatternsList", typ: u(undefined, a("")) },
        { json: "fileContentDetection", js: "fileContentDetection", typ: u(undefined, true) },
        { json: "fileContentDetectionFormats", js: "fileContentDetectionFormats", typ: u(undefined, a(r("FileContentDetectionFormat"))) },
        { json: "lastCcnDigitsToExpose", js: "lastCcnDigitsToExpose", typ: u(undefined, 0) },
        { json: "lastSsnDigitsToExpose", js: "lastSsnDigitsToExpose", typ: u(undefined, 0) },
        { json: "maskData", js: "maskData", typ: u(undefined, true) },
        { json: "usSocialSecurityNumbers", js: "usSocialSecurityNumbers", typ: u(undefined, true) },
    ], "any"),
    "FileContentDetectionFormat": o([
        { json: "name", js: "name", typ: u(undefined, r("FileContentDetectionFormatName")) },
    ], "any"),
    "DatabaseProtection": o([
        { json: "databaseProtectionEnabled", js: "databaseProtectionEnabled", typ: u(undefined, true) },
        { json: "userSource", js: "userSource", typ: u(undefined, r("UserSource")) },
    ], "any"),
    "DeceptionResponsePage": o([
        { json: "responseBody", js: "responseBody", typ: u(undefined, "") },
        { json: "responseHeaders", js: "responseHeaders", typ: u(undefined, "") },
        { json: "responseStatusCode", js: "responseStatusCode", typ: "" },
    ], "any"),
    "DeceptionSettings": o([
        { json: "enableCustomResponses", js: "enableCustomResponses", typ: u(undefined, true) },
        { json: "enableResponsePageByAttackType", js: "enableResponsePageByAttackType", typ: u(undefined, true) },
        { json: "responseStatusCodes", js: "responseStatusCodes", typ: u(undefined, a("")) },
        { json: "serverTechnologyName", js: "serverTechnologyName", typ: u(undefined, "") },
    ], "any"),
    "DisabledActionItem": o([
        { json: "type", js: "type", typ: r("DisabledActionItemType") },
    ], "any"),
    "DisallowedGeolocation": o([
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
        { json: "countryName", js: "countryName", typ: r("CountryName") },
    ], "any"),
    "Filetype": o([
        { json: "allowed", js: "allowed", typ: u(undefined, true) },
        { json: "checkPostDataLength", js: "checkPostDataLength", typ: u(undefined, true) },
        { json: "checkQueryStringLength", js: "checkQueryStringLength", typ: u(undefined, true) },
        { json: "checkRequestLength", js: "checkRequestLength", typ: u(undefined, true) },
        { json: "checkUrlLength", js: "checkUrlLength", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "postDataLength", js: "postDataLength", typ: u(undefined, 0) },
        { json: "queryStringLength", js: "queryStringLength", typ: u(undefined, 0) },
        { json: "requestLength", js: "requestLength", typ: u(undefined, 0) },
        { json: "responseCheck", js: "responseCheck", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "urlLength", js: "urlLength", typ: u(undefined, 0) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "General": o([
        { json: "allowedResponseCodes", js: "allowedResponseCodes", typ: u(undefined, a(0)) },
        { json: "customXffHeaders", js: "customXffHeaders", typ: u(undefined, a("")) },
        { json: "dynamicSessionIdDescription", js: "dynamicSessionIdDescription", typ: u(undefined, "") },
        { json: "dynamicSessionIdInUrl", js: "dynamicSessionIdInUrl", typ: u(undefined, "") },
        { json: "enableEventCorrelation", js: "enableEventCorrelation", typ: u(undefined, true) },
        { json: "enforcementReadinessPeriod", js: "enforcementReadinessPeriod", typ: u(undefined, 0) },
        { json: "maskCreditCardNumbersInRequest", js: "maskCreditCardNumbersInRequest", typ: u(undefined, true) },
        { json: "pathParameterHandling", js: "pathParameterHandling", typ: u(undefined, r("PathParameterHandling")) },
        { json: "triggerAsmIruleEvent", js: "triggerAsmIruleEvent", typ: u(undefined, r("TriggerASMIruleEvent")) },
        { json: "trustXff", js: "trustXff", typ: u(undefined, true) },
        { json: "useDynamicSessionIdInUrl", js: "useDynamicSessionIdInUrl", typ: u(undefined, true) },
    ], "any"),
    "GWTProfile": o([
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "defenseAttributes", js: "defenseAttributes", typ: u(undefined, r("GWTProfileDefenseAttributes")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "metacharElementCheck", js: "metacharElementCheck", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("GWTProfileMetacharOverride"))) },
        { json: "name", js: "name", typ: "" },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("GWTProfileSignatureOverride"))) },
    ], "any"),
    "GWTProfileDefenseAttributes": o([
        { json: "maximumTotalLengthOfGWTData", js: "maximumTotalLengthOfGWTData", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumValueLength", js: "maximumValueLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "tolerateGWTParsingWarnings", js: "tolerateGWTParsingWarnings", typ: u(undefined, true) },
    ], "any"),
    "GWTProfileMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "GWTProfileSignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "HeaderSettings": o([
        { json: "maximumHttpHeaderLength", js: "maximumHttpHeaderLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
    ], "any"),
    "Header": o([
        { json: "allowRepeatedOccurrences", js: "allowRepeatedOccurrences", typ: u(undefined, true) },
        { json: "base64Decoding", js: "base64Decoding", typ: u(undefined, true) },
        { json: "checkSignatures", js: "checkSignatures", typ: u(undefined, true) },
        { json: "htmlNormalization", js: "htmlNormalization", typ: u(undefined, true) },
        { json: "mandatory", js: "mandatory", typ: u(undefined, true) },
        { json: "maskValueInLogs", js: "maskValueInLogs", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "normalizationViolations", js: "normalizationViolations", typ: u(undefined, true) },
        { json: "percentDecoding", js: "percentDecoding", typ: u(undefined, true) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("HeaderSignatureOverride"))) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "urlNormalization", js: "urlNormalization", typ: u(undefined, true) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "HeaderSignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "HostName": o([
        { json: "includeSubdomains", js: "includeSubdomains", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "IPIntelligence": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "ipIntelligenceCategories", js: "ipIntelligenceCategories", typ: u(undefined, a(r("IPIntelligenceCategory"))) },
    ], "any"),
    "IPIntelligenceCategory": o([
        { json: "alarm", js: "alarm", typ: u(undefined, true) },
        { json: "block", js: "block", typ: u(undefined, true) },
        { json: "category", js: "category", typ: r("Category") },
        { json: "description", js: "description", typ: u(undefined, r("IPIntelligenceCategoryDescription")) },
    ], "any"),
    "JSONProfile": o([
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "defenseAttributes", js: "defenseAttributes", typ: u(undefined, r("JSONProfileDefenseAttributes")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "handleJsonValuesAsParameters", js: "handleJsonValuesAsParameters", typ: u(undefined, true) },
        { json: "hasValidationFiles", js: "hasValidationFiles", typ: u(undefined, true) },
        { json: "metacharElementCheck", js: "metacharElementCheck", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("JSONProfileMetacharOverride"))) },
        { json: "name", js: "name", typ: "" },
        { json: "sensitiveData", js: "sensitiveData", typ: u(undefined, a(r("JSONProfileSensitiveDatum"))) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("JSONProfileSignatureOverride"))) },
        { json: "validationFiles", js: "validationFiles", typ: u(undefined, a(r("JSONProfileValidationFile"))) },
    ], "any"),
    "JSONProfileDefenseAttributes": o([
        { json: "maximumArrayLength", js: "maximumArrayLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumStructureDepth", js: "maximumStructureDepth", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumTotalLengthOfJSONData", js: "maximumTotalLengthOfJSONData", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumValueLength", js: "maximumValueLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "tolerateJSONParsingWarnings", js: "tolerateJSONParsingWarnings", typ: u(undefined, true) },
    ], "any"),
    "JSONProfileMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "JSONProfileSensitiveDatum": o([
        { json: "parameterName", js: "parameterName", typ: "" },
    ], "any"),
    "JSONProfileSignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "JSONProfileValidationFile": o([
        { json: "importUrl", js: "importUrl", typ: "" },
        { json: "isPrimary", js: "isPrimary", typ: u(undefined, true) },
        { json: "jsonValidationFile", js: "jsonValidationFile", typ: r("PurpleJSONValidationFile") },
    ], "any"),
    "PurpleJSONValidationFile": o([
        { json: "contents", js: "contents", typ: "" },
        { json: "fileName", js: "fileName", typ: "" },
        { json: "isBase64", js: "isBase64", typ: u(undefined, true) },
    ], "any"),
    "JSONValidationFile": o([
        { json: "contents", js: "contents", typ: "" },
        { json: "fileName", js: "fileName", typ: "" },
        { json: "isBase64", js: "isBase64", typ: u(undefined, true) },
    ], "any"),
    "LoginEnforcement": o([
        { json: "authenticatedUrls", js: "authenticatedUrls", typ: u(undefined, a("")) },
        { json: "expirationTimePeriod", js: "expirationTimePeriod", typ: u(undefined, u(r("ExpirationTime"), 0)) },
        { json: "logoutUrls", js: "logoutUrls", typ: u(undefined, a(r("LogoutURL"))) },
    ], "any"),
    "LogoutURL": o([
        { json: "requestContains", js: "requestContains", typ: u(undefined, "") },
        { json: "requestOmits", js: "requestOmits", typ: u(undefined, "") },
        { json: "url", js: "url", typ: r("LogoutURLURL") },
    ], "any"),
    "LogoutURLURL": o([
        { json: "allowRenderingInFrames", js: "allowRenderingInFrames", typ: u(undefined, r("AllowRenderingInFrames")) },
        { json: "allowRenderingInFramesOnlyFrom", js: "allowRenderingInFramesOnlyFrom", typ: u(undefined, "") },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "canChangeDomainCookie", js: "canChangeDomainCookie", typ: u(undefined, true) },
        { json: "clickjackingProtection", js: "clickjackingProtection", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "dynamicFlows", js: "dynamicFlows", typ: u(undefined, a(r("PurpleDynamicFlow"))) },
        { json: "html5CrossOriginRequestsEnforcement", js: "html5CrossOriginRequestsEnforcement", typ: u(undefined, r("PurpleHtml5CrossOriginRequestsEnforcement")) },
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "mandatoryBody", js: "mandatoryBody", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("PurpleMetacharOverride"))) },
        { json: "metacharsOnUrlCheck", js: "metacharsOnUrlCheck", typ: u(undefined, true) },
        { json: "method", js: "method", typ: u(undefined, r("URLMethod")) },
        { json: "methodOverrides", js: "methodOverrides", typ: u(undefined, a(r("PurpleMethodOverride"))) },
        { json: "methodsOverrideOnUrlCheck", js: "methodsOverrideOnUrlCheck", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "operationId", js: "operationId", typ: u(undefined, "") },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "positionalParameters", js: "positionalParameters", typ: u(undefined, a(r("PurplePositionalParameter"))) },
        { json: "protocol", js: "protocol", typ: u(undefined, r("URLProtocol")) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("FluffySignatureOverride"))) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "urlContentProfiles", js: "urlContentProfiles", typ: u(undefined, a(r("PurpleURLContentProfile"))) },
        { json: "wildcardIncludesSlash", js: "wildcardIncludesSlash", typ: u(undefined, true) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "LoginPage": o([
        { json: "accessValidation", js: "accessValidation", typ: u(undefined, r("LoginPageAccessValidation")) },
        { json: "authenticationType", js: "authenticationType", typ: u(undefined, r("AuthenticationType")) },
        { json: "passwordParameterName", js: "passwordParameterName", typ: u(undefined, "") },
        { json: "url", js: "url", typ: r("LoginPageURL") },
        { json: "usernameParameterName", js: "usernameParameterName", typ: u(undefined, "") },
    ], "any"),
    "LoginPageAccessValidation": o([
        { json: "cookieContains", js: "cookieContains", typ: u(undefined, "") },
        { json: "headerContains", js: "headerContains", typ: u(undefined, "") },
        { json: "headerOmits", js: "headerOmits", typ: u(undefined, "") },
        { json: "parameterContains", js: "parameterContains", typ: u(undefined, "") },
        { json: "responseContains", js: "responseContains", typ: u(undefined, "") },
        { json: "responseHttpStatus", js: "responseHttpStatus", typ: u(undefined, "") },
        { json: "responseHttpStatusOmits", js: "responseHttpStatusOmits", typ: u(undefined, a("")) },
        { json: "responseOmits", js: "responseOmits", typ: u(undefined, "") },
    ], "any"),
    "LoginPageURL": o([
        { json: "allowRenderingInFrames", js: "allowRenderingInFrames", typ: u(undefined, r("AllowRenderingInFrames")) },
        { json: "allowRenderingInFramesOnlyFrom", js: "allowRenderingInFramesOnlyFrom", typ: u(undefined, "") },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "canChangeDomainCookie", js: "canChangeDomainCookie", typ: u(undefined, true) },
        { json: "clickjackingProtection", js: "clickjackingProtection", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "dynamicFlows", js: "dynamicFlows", typ: u(undefined, a(r("PurpleDynamicFlow"))) },
        { json: "html5CrossOriginRequestsEnforcement", js: "html5CrossOriginRequestsEnforcement", typ: u(undefined, r("PurpleHtml5CrossOriginRequestsEnforcement")) },
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "mandatoryBody", js: "mandatoryBody", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("PurpleMetacharOverride"))) },
        { json: "metacharsOnUrlCheck", js: "metacharsOnUrlCheck", typ: u(undefined, true) },
        { json: "method", js: "method", typ: u(undefined, r("URLMethod")) },
        { json: "methodOverrides", js: "methodOverrides", typ: u(undefined, a(r("PurpleMethodOverride"))) },
        { json: "methodsOverrideOnUrlCheck", js: "methodsOverrideOnUrlCheck", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "operationId", js: "operationId", typ: u(undefined, "") },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "positionalParameters", js: "positionalParameters", typ: u(undefined, a(r("PurplePositionalParameter"))) },
        { json: "protocol", js: "protocol", typ: u(undefined, r("URLProtocol")) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("FluffySignatureOverride"))) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "urlContentProfiles", js: "urlContentProfiles", typ: u(undefined, a(r("PurpleURLContentProfile"))) },
        { json: "wildcardIncludesSlash", js: "wildcardIncludesSlash", typ: u(undefined, true) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "MethodElement": o([
        { json: "actAsMethod", js: "actAsMethod", typ: u(undefined, r("ActAsMethod")) },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "Microservice": o([
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "enforcementMode", js: "enforcementMode", typ: u(undefined, r("MicroserviceEnforcementMode")) },
        { json: "evasionOverrides", js: "evasionOverrides", typ: u(undefined, a(r("EvasionOverride"))) },
        { json: "hostName", js: "hostName", typ: "" },
        { json: "hostNameType", js: "hostNameType", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "httpProtocolOverrides", js: "httpProtocolOverrides", typ: u(undefined, a(r("HTTPProtocolOverride"))) },
        { json: "urlName", js: "urlName", typ: "" },
        { json: "urlType", js: "urlType", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "violationOverrides", js: "violationOverrides", typ: u(undefined, a(r("ViolationOverride"))) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
        { json: "wildcardUrlIncludesSlash", js: "wildcardUrlIncludesSlash", typ: u(undefined, true) },
    ], "any"),
    "EvasionOverride": o([
        { json: "description", js: "description", typ: u(undefined, r("EvasionDescription")) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "learn", js: "learn", typ: u(undefined, true) },
        { json: "maxDecodingPasses", js: "maxDecodingPasses", typ: u(undefined, 0) },
    ], "any"),
    "HTTPProtocolOverride": o([
        { json: "description", js: "description", typ: u(undefined, r("HTTPProtocolDescription")) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "learn", js: "learn", typ: u(undefined, true) },
        { json: "maxHeaders", js: "maxHeaders", typ: u(undefined, 0) },
        { json: "maxParams", js: "maxParams", typ: u(undefined, 0) },
    ], "any"),
    "ViolationOverride": o([
        { json: "alarm", js: "alarm", typ: u(undefined, true) },
        { json: "block", js: "block", typ: u(undefined, true) },
        { json: "learn", js: "learn", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "NavigationParameter": o([
        { json: "name", js: "name", typ: "" },
        { json: "urlName", js: "urlName", typ: "" },
    ], "any"),
    "OpenAPIFile": o([
        { json: "link", js: "link", typ: "" },
    ], "any"),
    "ParameterElement": o([
        { json: "allowEmptyValue", js: "allowEmptyValue", typ: u(undefined, true) },
        { json: "allowRepeatedParameterName", js: "allowRepeatedParameterName", typ: u(undefined, true) },
        { json: "arraySerializationFormat", js: "arraySerializationFormat", typ: u(undefined, r("ArraySerializationFormat")) },
        { json: "arrayUniqueItemsCheck", js: "arrayUniqueItemsCheck", typ: u(undefined, true) },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "checkMaxItemsInArray", js: "checkMaxItemsInArray", typ: u(undefined, true) },
        { json: "checkMaxValue", js: "checkMaxValue", typ: u(undefined, true) },
        { json: "checkMaxValueLength", js: "checkMaxValueLength", typ: u(undefined, true) },
        { json: "checkMetachars", js: "checkMetachars", typ: u(undefined, true) },
        { json: "checkMinItemsInArray", js: "checkMinItemsInArray", typ: u(undefined, true) },
        { json: "checkMinValue", js: "checkMinValue", typ: u(undefined, true) },
        { json: "checkMinValueLength", js: "checkMinValueLength", typ: u(undefined, true) },
        { json: "checkMultipleOfValue", js: "checkMultipleOfValue", typ: u(undefined, true) },
        { json: "contentProfile", js: "contentProfile", typ: u(undefined, r("StickyContentProfile")) },
        { json: "dataType", js: "dataType", typ: u(undefined, r("DataType")) },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "enableRegularExpression", js: "enableRegularExpression", typ: u(undefined, true) },
        { json: "exclusiveMax", js: "exclusiveMax", typ: u(undefined, true) },
        { json: "exclusiveMin", js: "exclusiveMin", typ: u(undefined, true) },
        { json: "explodeObjectSerialization", js: "explodeObjectSerialization", typ: u(undefined, true) },
        { json: "isBase64", js: "isBase64", typ: u(undefined, true) },
        { json: "isCookie", js: "isCookie", typ: u(undefined, true) },
        { json: "isHeader", js: "isHeader", typ: u(undefined, true) },
        { json: "level", js: "level", typ: u(undefined, r("Level")) },
        { json: "mandatory", js: "mandatory", typ: u(undefined, true) },
        { json: "maximumLength", js: "maximumLength", typ: u(undefined, 0) },
        { json: "maximumValue", js: "maximumValue", typ: u(undefined, 3.14) },
        { json: "maxItemsInArray", js: "maxItemsInArray", typ: u(undefined, 0) },
        { json: "metacharsOnParameterValueCheck", js: "metacharsOnParameterValueCheck", typ: u(undefined, true) },
        { json: "minimumLength", js: "minimumLength", typ: u(undefined, 0) },
        { json: "minimumValue", js: "minimumValue", typ: u(undefined, 3.14) },
        { json: "minItemsInArray", js: "minItemsInArray", typ: u(undefined, 0) },
        { json: "multipleOf", js: "multipleOf", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: "" },
        { json: "nameMetacharOverrides", js: "nameMetacharOverrides", typ: u(undefined, a(r("FluffyNameMetacharOverride"))) },
        { json: "objectSerializationStyle", js: "objectSerializationStyle", typ: u(undefined, r("ObjectSerializationStyle")) },
        { json: "parameterEnumValues", js: "parameterEnumValues", typ: u(undefined, a("")) },
        { json: "parameterLocation", js: "parameterLocation", typ: u(undefined, r("ParameterLocation")) },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "regularExpression", js: "regularExpression", typ: u(undefined, "") },
        { json: "sensitiveParameter", js: "sensitiveParameter", typ: u(undefined, true) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("TentacledSignatureOverride"))) },
        { json: "staticValues", js: "staticValues", typ: u(undefined, a("")) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "url", js: "url", typ: u(undefined, r("FluffyURL")) },
        { json: "valueMetacharOverrides", js: "valueMetacharOverrides", typ: u(undefined, a(r("FluffyValueMetacharOverride"))) },
        { json: "valueType", js: "valueType", typ: u(undefined, r("ValueType")) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "StickyContentProfile": o([
        { json: "contentProfile", js: "contentProfile", typ: u(undefined, r("IndigoContentProfile")) },
    ], "any"),
    "IndigoContentProfile": o([
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "FluffyNameMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "TentacledSignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "FluffyURL": o([
        { json: "allowRenderingInFrames", js: "allowRenderingInFrames", typ: u(undefined, r("AllowRenderingInFrames")) },
        { json: "allowRenderingInFramesOnlyFrom", js: "allowRenderingInFramesOnlyFrom", typ: u(undefined, "") },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "canChangeDomainCookie", js: "canChangeDomainCookie", typ: u(undefined, true) },
        { json: "clickjackingProtection", js: "clickjackingProtection", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "dynamicFlows", js: "dynamicFlows", typ: u(undefined, a(r("PurpleDynamicFlow"))) },
        { json: "html5CrossOriginRequestsEnforcement", js: "html5CrossOriginRequestsEnforcement", typ: u(undefined, r("PurpleHtml5CrossOriginRequestsEnforcement")) },
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "mandatoryBody", js: "mandatoryBody", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("PurpleMetacharOverride"))) },
        { json: "metacharsOnUrlCheck", js: "metacharsOnUrlCheck", typ: u(undefined, true) },
        { json: "method", js: "method", typ: u(undefined, r("URLMethod")) },
        { json: "methodOverrides", js: "methodOverrides", typ: u(undefined, a(r("PurpleMethodOverride"))) },
        { json: "methodsOverrideOnUrlCheck", js: "methodsOverrideOnUrlCheck", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "operationId", js: "operationId", typ: u(undefined, "") },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "positionalParameters", js: "positionalParameters", typ: u(undefined, a(r("PurplePositionalParameter"))) },
        { json: "protocol", js: "protocol", typ: u(undefined, r("URLProtocol")) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("FluffySignatureOverride"))) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "urlContentProfiles", js: "urlContentProfiles", typ: u(undefined, a(r("PurpleURLContentProfile"))) },
        { json: "wildcardIncludesSlash", js: "wildcardIncludesSlash", typ: u(undefined, true) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "FluffyValueMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "PlainTextProfile": o([
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "defenseAttributes", js: "defenseAttributes", typ: u(undefined, r("PlainTextProfileDefenseAttributes")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "metacharElementCheck", js: "metacharElementCheck", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("PlainTextProfileMetacharOverride"))) },
        { json: "name", js: "name", typ: "" },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("PlainTextProfileSignatureOverride"))) },
    ], "any"),
    "PlainTextProfileDefenseAttributes": o([
        { json: "maximumLineLength", js: "maximumLineLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumTotalLength", js: "maximumTotalLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "performPercentDecoding", js: "performPercentDecoding", typ: u(undefined, true) },
    ], "any"),
    "PlainTextProfileMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "PlainTextProfileSignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "PolicyBuilder": o([
        { json: "autoApply", js: "autoApply", typ: u(undefined, r("AutoApply")) },
        { json: "enableFullPolicyInspection", js: "enableFullPolicyInspection", typ: u(undefined, true) },
        { json: "enableTrustedTrafficSiteChangeTracking", js: "enableTrustedTrafficSiteChangeTracking", typ: u(undefined, true) },
        { json: "enableUntrustedTrafficSiteChangeTracking", js: "enableUntrustedTrafficSiteChangeTracking", typ: u(undefined, true) },
        { json: "fullyAutomatic", js: "fullyAutomatic", typ: u(undefined, true) },
        { json: "inactiveEntityInactivityDurationInDays", js: "inactiveEntityInactivityDurationInDays", typ: u(undefined, 3.14) },
        { json: "learnFromResponses", js: "learnFromResponses", typ: u(undefined, true) },
        { json: "learnInactiveEntities", js: "learnInactiveEntities", typ: u(undefined, true) },
        { json: "learningMode", js: "learningMode", typ: u(undefined, r("LearningMode")) },
        { json: "learnOnlyFromNonBotTraffic", js: "learnOnlyFromNonBotTraffic", typ: u(undefined, true) },
        { json: "responseStatusCodes", js: "responseStatusCodes", typ: u(undefined, a("")) },
        { json: "trafficTighten", js: "trafficTighten", typ: u(undefined, r("TrafficTighten")) },
        { json: "trustAllIps", js: "trustAllIps", typ: u(undefined, true) },
        { json: "trustedTrafficLoosen", js: "trustedTrafficLoosen", typ: u(undefined, r("TrustedTrafficLoosen")) },
        { json: "trustedTrafficSiteChangeTracking", js: "trustedTrafficSiteChangeTracking", typ: u(undefined, r("TrustedTrafficSiteChangeTracking")) },
        { json: "untrustedTrafficLoosen", js: "untrustedTrafficLoosen", typ: u(undefined, r("UntrustedTrafficLoosen")) },
        { json: "untrustedTrafficSiteChangeTracking", js: "untrustedTrafficSiteChangeTracking", typ: u(undefined, r("UntrustedTrafficSiteChangeTracking")) },
    ], "any"),
    "AutoApply": o([
        { json: "applyAtAllTimes", js: "applyAtAllTimes", typ: u(undefined, true) },
        { json: "applyOnAllDays", js: "applyOnAllDays", typ: u(undefined, true) },
        { json: "applyOnFridays", js: "applyOnFridays", typ: u(undefined, true) },
        { json: "applyOnMondays", js: "applyOnMondays", typ: u(undefined, true) },
        { json: "applyOnSaturdays", js: "applyOnSaturdays", typ: u(undefined, true) },
        { json: "applyOnSundays", js: "applyOnSundays", typ: u(undefined, true) },
        { json: "applyOnThursdays", js: "applyOnThursdays", typ: u(undefined, true) },
        { json: "applyOnTuesdays", js: "applyOnTuesdays", typ: u(undefined, true) },
        { json: "applyOnWednesdays", js: "applyOnWednesdays", typ: u(undefined, true) },
        { json: "endTime", js: "endTime", typ: u(undefined, "") },
        { json: "frequency", js: "frequency", typ: u(undefined, r("Frequency")) },
        { json: "startTime", js: "startTime", typ: u(undefined, "") },
    ], "any"),
    "TrafficTighten": o([
        { json: "maxModificationSuggestionScore", js: "maxModificationSuggestionScore", typ: u(undefined, 0) },
        { json: "minDaysBetweenSamples", js: "minDaysBetweenSamples", typ: u(undefined, 3.14) },
        { json: "totalRequests", js: "totalRequests", typ: u(undefined, 0) },
    ], "any"),
    "TrustedTrafficLoosen": o([
        { json: "differentSources", js: "differentSources", typ: u(undefined, 0) },
        { json: "maxDaysBetweenSamples", js: "maxDaysBetweenSamples", typ: u(undefined, 3.14) },
        { json: "minHoursBetweenSamples", js: "minHoursBetweenSamples", typ: u(undefined, 3.14) },
    ], "any"),
    "TrustedTrafficSiteChangeTracking": o([
        { json: "differentSources", js: "differentSources", typ: u(undefined, 0) },
        { json: "maxDaysBetweenSamples", js: "maxDaysBetweenSamples", typ: u(undefined, 3.14) },
        { json: "minMinutesBetweenSamples", js: "minMinutesBetweenSamples", typ: u(undefined, 3.14) },
    ], "any"),
    "UntrustedTrafficLoosen": o([
        { json: "differentSources", js: "differentSources", typ: u(undefined, 0) },
        { json: "maxDaysBetweenSamples", js: "maxDaysBetweenSamples", typ: u(undefined, 3.14) },
        { json: "minHoursBetweenSamples", js: "minHoursBetweenSamples", typ: u(undefined, 3.14) },
    ], "any"),
    "UntrustedTrafficSiteChangeTracking": o([
        { json: "differentSources", js: "differentSources", typ: u(undefined, 0) },
        { json: "maxDaysBetweenSamples", js: "maxDaysBetweenSamples", typ: u(undefined, 3.14) },
        { json: "minMinutesBetweenSamples", js: "minMinutesBetweenSamples", typ: u(undefined, 3.14) },
    ], "any"),
    "PolicyBuilderCentralConfiguration": o([
        { json: "buildingMode", js: "buildingMode", typ: u(undefined, r("Mode")) },
        { json: "centralPbAddresses", js: "centralPbAddresses", typ: u(undefined, a(r("CentralPbAddress"))) },
        { json: "eventCorrelationMode", js: "eventCorrelationMode", typ: u(undefined, r("Mode")) },
    ], "any"),
    "CentralPbAddress": o([
        { json: "hostName", js: "hostName", typ: u(undefined, "") },
        { json: "ipAddress", js: "ipAddress", typ: "" },
        { json: "order", js: "order", typ: u(undefined, 0) },
        { json: "port", js: "port", typ: 0 },
        { json: "verifyCertificate", js: "verifyCertificate", typ: u(undefined, true) },
    ], "any"),
    "PolicyBuilderCookie": o([
        { json: "collapseCookieOccurrences", js: "collapseCookieOccurrences", typ: u(undefined, 0) },
        { json: "collapseCookiesIntoOneEntity", js: "collapseCookiesIntoOneEntity", typ: u(undefined, true) },
        { json: "enforceUnmodifiedCookies", js: "enforceUnmodifiedCookies", typ: u(undefined, true) },
        { json: "learnExplicitCookies", js: "learnExplicitCookies", typ: u(undefined, r("LearnExplicitCookies")) },
        { json: "maximumCookies", js: "maximumCookies", typ: u(undefined, 0) },
    ], "any"),
    "PolicyBuilderFiletype": o([
        { json: "learnExplicitFiletypes", js: "learnExplicitFiletypes", typ: u(undefined, r("LearnExplicit")) },
        { json: "maximumFileTypes", js: "maximumFileTypes", typ: u(undefined, 0) },
    ], "any"),
    "PolicyBuilderHeader": o([
        { json: "maximumHosts", js: "maximumHosts", typ: u(undefined, 0) },
        { json: "validHostNames", js: "validHostNames", typ: u(undefined, true) },
    ], "any"),
    "PolicyBuilderParameter": o([
        { json: "classifyParameters", js: "classifyParameters", typ: u(undefined, true) },
        { json: "collapseParameterOccurrences", js: "collapseParameterOccurrences", typ: u(undefined, 0) },
        { json: "collapseParametersIntoOneEntity", js: "collapseParametersIntoOneEntity", typ: u(undefined, true) },
        { json: "dynamicParameters", js: "dynamicParameters", typ: u(undefined, r("DynamicParameters")) },
        { json: "learnExplicitParameters", js: "learnExplicitParameters", typ: u(undefined, r("LearnExplicit")) },
        { json: "maximumParameters", js: "maximumParameters", typ: u(undefined, 0) },
        { json: "parameterLearningLevel", js: "parameterLearningLevel", typ: u(undefined, r("ParameterLearningLevel")) },
        { json: "parametersIntegerValue", js: "parametersIntegerValue", typ: u(undefined, true) },
    ], "any"),
    "DynamicParameters": o([
        { json: "allHiddenFields", js: "allHiddenFields", typ: u(undefined, true) },
        { json: "formParameters", js: "formParameters", typ: u(undefined, true) },
        { json: "linkParameters", js: "linkParameters", typ: u(undefined, true) },
        { json: "uniqueValueSets", js: "uniqueValueSets", typ: u(undefined, 0) },
    ], "any"),
    "PolicyBuilderRedirectionProtection": o([
        { json: "learnExplicitRedirectionDomains", js: "learnExplicitRedirectionDomains", typ: u(undefined, r("LearnExplicitRedirectionDomains")) },
        { json: "maximumRedirectionDomains", js: "maximumRedirectionDomains", typ: u(undefined, 0) },
    ], "any"),
    "PolicyBuilderServerTechnologies": o([
        { json: "enableServerTechnologiesDetection", js: "enableServerTechnologiesDetection", typ: u(undefined, true) },
    ], "any"),
    "PolicyBuilderSessionsAndLogins": o([
        { json: "learnLoginPage", js: "learnLoginPage", typ: u(undefined, true) },
    ], "any"),
    "PolicyBuilderURL": o([
        { json: "classifyUrls", js: "classifyUrls", typ: u(undefined, true) },
        { json: "classifyWebsocketUrls", js: "classifyWebsocketUrls", typ: u(undefined, true) },
        { json: "collapseUrlDepth", js: "collapseUrlDepth", typ: u(undefined, 0) },
        { json: "collapseUrlOccurrences", js: "collapseUrlOccurrences", typ: u(undefined, 0) },
        { json: "collapseUrlsIntoOneEntity", js: "collapseUrlsIntoOneEntity", typ: u(undefined, true) },
        { json: "learnExplicitUrls", js: "learnExplicitUrls", typ: u(undefined, r("LearnExplicit")) },
        { json: "learnExplicitWebsocketUrls", js: "learnExplicitWebsocketUrls", typ: u(undefined, r("LearnExplicitWebsocketUrls")) },
        { json: "learnMethodsOnUrls", js: "learnMethodsOnUrls", typ: u(undefined, true) },
        { json: "maximumUrls", js: "maximumUrls", typ: u(undefined, 0) },
        { json: "maximumWebsocketUrls", js: "maximumWebsocketUrls", typ: u(undefined, 0) },
        { json: "wildcardUrlFiletypes", js: "wildcardUrlFiletypes", typ: u(undefined, a("")) },
    ], "any"),
    "RedirectionProtection": o([
        { json: "redirectionDomains", js: "redirectionDomains", typ: u(undefined, a(r("RedirectionDomain"))) },
        { json: "redirectionProtectionEnabled", js: "redirectionProtectionEnabled", typ: u(undefined, true) },
    ], "any"),
    "RedirectionDomain": o([
        { json: "domainName", js: "domainName", typ: "" },
        { json: "includeSubdomains", js: "includeSubdomains", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "RedirectionProtectionDomain": o([
        { json: "domainName", js: "domainName", typ: "" },
        { json: "includeSubdomains", js: "includeSubdomains", typ: u(undefined, true) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "RequestLogger": o([
        { json: "destination", js: "destination", typ: u(undefined, "") },
        { json: "filter", js: "filter", typ: u(undefined, a(r("FilterElement"))) },
        { json: "formatString", js: "formatString", typ: u(undefined, "") },
        { json: "formatType", js: "formatType", typ: u(undefined, r("FormatType")) },
        { json: "maxMessageSize", js: "maxMessageSize", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "FilterElement": o([
        { json: "field", js: "field", typ: r("Field") },
        { json: "values", js: "values", typ: u(undefined, "") },
    ], "any"),
    "ResponsePage": o([
        { json: "ajaxActionType", js: "ajaxActionType", typ: u(undefined, r("AjaxActionType")) },
        { json: "ajaxCustomContent", js: "ajaxCustomContent", typ: u(undefined, "") },
        { json: "ajaxEnabled", js: "ajaxEnabled", typ: u(undefined, true) },
        { json: "ajaxPopupMessage", js: "ajaxPopupMessage", typ: u(undefined, "") },
        { json: "ajaxRedirectUrl", js: "ajaxRedirectUrl", typ: u(undefined, "") },
        { json: "responseActionType", js: "responseActionType", typ: u(undefined, r("ResponseActionType")) },
        { json: "responseContent", js: "responseContent", typ: u(undefined, "") },
        { json: "responseHeader", js: "responseHeader", typ: u(undefined, "") },
        { json: "responsePageType", js: "responsePageType", typ: r("ResponsePageType") },
        { json: "responseRedirectUrl", js: "responseRedirectUrl", typ: u(undefined, "") },
    ], "any"),
    "SensitiveParameter": o([
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "ServerTechnology": o([
        { json: "serverTechnologyName", js: "serverTechnologyName", typ: u(undefined, "") },
    ], "any"),
    "SessionTracking": o([
        { json: "blockAll", js: "blockAll", typ: u(undefined, r("BlockAll")) },
        { json: "delayBlocking", js: "delayBlocking", typ: u(undefined, r("DelayBlocking")) },
        { json: "logAllRequests", js: "logAllRequests", typ: u(undefined, r("LogAllRequests")) },
        { json: "sessionTrackingConfiguration", js: "sessionTrackingConfiguration", typ: u(undefined, r("SessionTrackingConfiguration")) },
        { json: "violationDetectionActions", js: "violationDetectionActions", typ: u(undefined, r("ViolationDetectionActions")) },
    ], "any"),
    "BlockAll": o([
        { json: "checkDeviceIdThreshold", js: "checkDeviceIdThreshold", typ: u(undefined, true) },
        { json: "checkIpThreshold", js: "checkIpThreshold", typ: u(undefined, true) },
        { json: "checkPeriod", js: "checkPeriod", typ: u(undefined, true) },
        { json: "checkSessionThreshold", js: "checkSessionThreshold", typ: u(undefined, true) },
        { json: "checkUsernameThreshold", js: "checkUsernameThreshold", typ: u(undefined, true) },
        { json: "deviceIdThreshold", js: "deviceIdThreshold", typ: u(undefined, 0) },
        { json: "ipThreshold", js: "ipThreshold", typ: u(undefined, 0) },
        { json: "period", js: "period", typ: u(undefined, 0) },
        { json: "sessionThreshold", js: "sessionThreshold", typ: u(undefined, 0) },
        { json: "urlBlockingMode", js: "urlBlockingMode", typ: u(undefined, r("URLBlockingMode")) },
        { json: "usernameThreshold", js: "usernameThreshold", typ: u(undefined, 0) },
    ], "any"),
    "DelayBlocking": o([
        { json: "checkDeviceIdThreshold", js: "checkDeviceIdThreshold", typ: u(undefined, true) },
        { json: "checkIpThreshold", js: "checkIpThreshold", typ: u(undefined, true) },
        { json: "checkSessionThreshold", js: "checkSessionThreshold", typ: u(undefined, true) },
        { json: "checkUsernameThreshold", js: "checkUsernameThreshold", typ: u(undefined, true) },
        { json: "deviceIdThreshold", js: "deviceIdThreshold", typ: u(undefined, 0) },
        { json: "ipThreshold", js: "ipThreshold", typ: u(undefined, 0) },
        { json: "period", js: "period", typ: u(undefined, 0) },
        { json: "sessionThreshold", js: "sessionThreshold", typ: u(undefined, 0) },
        { json: "usernameThreshold", js: "usernameThreshold", typ: u(undefined, 0) },
        { json: "violations", js: "violations", typ: u(undefined, a(r("DelayBlockingViolation"))) },
    ], "any"),
    "DelayBlockingViolation": o([
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "LogAllRequests": o([
        { json: "checkDeviceIdThreshold", js: "checkDeviceIdThreshold", typ: u(undefined, true) },
        { json: "checkIpThreshold", js: "checkIpThreshold", typ: u(undefined, true) },
        { json: "checkSessionThreshold", js: "checkSessionThreshold", typ: u(undefined, true) },
        { json: "checkUsernameThreshold", js: "checkUsernameThreshold", typ: u(undefined, true) },
        { json: "deviceIdThreshold", js: "deviceIdThreshold", typ: u(undefined, 0) },
        { json: "ipThreshold", js: "ipThreshold", typ: u(undefined, 0) },
        { json: "period", js: "period", typ: u(undefined, 0) },
        { json: "sessionThreshold", js: "sessionThreshold", typ: u(undefined, 0) },
        { json: "usernameThreshold", js: "usernameThreshold", typ: u(undefined, 0) },
    ], "any"),
    "SessionTrackingConfiguration": o([
        { json: "detectUsernameFromLoginPages", js: "detectUsernameFromLoginPages", typ: u(undefined, a(r("DetectUsernameFromLoginPage"))) },
        { json: "enableSessionAwareness", js: "enableSessionAwareness", typ: u(undefined, true) },
        { json: "enableTrackingSessionHijackingByDeviceId", js: "enableTrackingSessionHijackingByDeviceId", typ: u(undefined, true) },
        { json: "userNameSource", js: "userNameSource", typ: u(undefined, r("UserNameSource")) },
    ], "any"),
    "DetectUsernameFromLoginPage": o([
        { json: "loginPage", js: "loginPage", typ: r("LoginPageObject") },
    ], "any"),
    "LoginPageObject": o([
        { json: "accessValidation", js: "accessValidation", typ: u(undefined, r("LoginPageAccessValidationObject")) },
        { json: "authenticationType", js: "authenticationType", typ: u(undefined, r("AuthenticationType")) },
        { json: "passwordParameterName", js: "passwordParameterName", typ: u(undefined, "") },
        { json: "url", js: "url", typ: r("LoginPageURLObject") },
        { json: "usernameParameterName", js: "usernameParameterName", typ: u(undefined, "") },
    ], "any"),
    "LoginPageAccessValidationObject": o([
        { json: "cookieContains", js: "cookieContains", typ: u(undefined, "") },
        { json: "headerContains", js: "headerContains", typ: u(undefined, "") },
        { json: "headerOmits", js: "headerOmits", typ: u(undefined, "") },
        { json: "parameterContains", js: "parameterContains", typ: u(undefined, "") },
        { json: "responseContains", js: "responseContains", typ: u(undefined, "") },
        { json: "responseHttpStatus", js: "responseHttpStatus", typ: u(undefined, "") },
        { json: "responseHttpStatusOmits", js: "responseHttpStatusOmits", typ: u(undefined, a("")) },
        { json: "responseOmits", js: "responseOmits", typ: u(undefined, "") },
    ], "any"),
    "LoginPageURLObject": o([
        { json: "allowRenderingInFrames", js: "allowRenderingInFrames", typ: u(undefined, r("AllowRenderingInFrames")) },
        { json: "allowRenderingInFramesOnlyFrom", js: "allowRenderingInFramesOnlyFrom", typ: u(undefined, "") },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "canChangeDomainCookie", js: "canChangeDomainCookie", typ: u(undefined, true) },
        { json: "clickjackingProtection", js: "clickjackingProtection", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "dynamicFlows", js: "dynamicFlows", typ: u(undefined, a(r("PurpleDynamicFlow"))) },
        { json: "html5CrossOriginRequestsEnforcement", js: "html5CrossOriginRequestsEnforcement", typ: u(undefined, r("PurpleHtml5CrossOriginRequestsEnforcement")) },
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "mandatoryBody", js: "mandatoryBody", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("PurpleMetacharOverride"))) },
        { json: "metacharsOnUrlCheck", js: "metacharsOnUrlCheck", typ: u(undefined, true) },
        { json: "method", js: "method", typ: u(undefined, r("URLMethod")) },
        { json: "methodOverrides", js: "methodOverrides", typ: u(undefined, a(r("PurpleMethodOverride"))) },
        { json: "methodsOverrideOnUrlCheck", js: "methodsOverrideOnUrlCheck", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "operationId", js: "operationId", typ: u(undefined, "") },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "positionalParameters", js: "positionalParameters", typ: u(undefined, a(r("PurplePositionalParameter"))) },
        { json: "protocol", js: "protocol", typ: u(undefined, r("URLProtocol")) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("FluffySignatureOverride"))) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "urlContentProfiles", js: "urlContentProfiles", typ: u(undefined, a(r("PurpleURLContentProfile"))) },
        { json: "wildcardIncludesSlash", js: "wildcardIncludesSlash", typ: u(undefined, true) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "ViolationDetectionActions": o([
        { json: "trackViolationsAndPerformActions", js: "trackViolationsAndPerformActions", typ: u(undefined, true) },
        { json: "violationDetectionPeriod", js: "violationDetectionPeriod", typ: u(undefined, 0) },
    ], "any"),
    "SessionTrackingStatus": o([
        { json: "action", js: "action", typ: r("SessionTrackingStatusAction") },
        { json: "createdDatetime", js: "createdDatetime", typ: u(undefined, "") },
        { json: "expirationDatetime", js: "expirationDatetime", typ: u(undefined, r("ExpirationDatetime")) },
        { json: "scope", js: "scope", typ: r("Scope") },
        { json: "value", js: "value", typ: "" },
    ], "any"),
    "SignatureRequirement": o([
        { json: "maxRevisionDatetime", js: "maxRevisionDatetime", typ: u(undefined, Date) },
        { json: "minRevisionDatetime", js: "minRevisionDatetime", typ: u(undefined, Date) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "SignatureSet": o([
        { json: "alarm", js: "alarm", typ: u(undefined, true) },
        { json: "block", js: "block", typ: u(undefined, true) },
        { json: "learn", js: "learn", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureSet", js: "signatureSet", typ: u(undefined, r("SignatureSetObject")) },
    ], "any"),
    "SignatureSetObject": o([
        { json: "filter", js: "filter", typ: u(undefined, r("SignatureSetFilter")) },
        { json: "signatures", js: "signatures", typ: u(undefined, a(r("SignatureSetSignature"))) },
        { json: "type", js: "type", typ: u(undefined, r("SignatureSetType")) },
    ], "any"),
    "SignatureSetFilter": o([
        { json: "accuracyFilter", js: "accuracyFilter", typ: u(undefined, r("Filter")) },
        { json: "accuracyValue", js: "accuracyValue", typ: u(undefined, r("Value")) },
        { json: "hasCve", js: "hasCve", typ: u(undefined, r("HasCve")) },
        { json: "lastUpdatedFilter", js: "lastUpdatedFilter", typ: u(undefined, r("LastUpdatedFilter")) },
        { json: "lastUpdatedValue", js: "lastUpdatedValue", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "riskFilter", js: "riskFilter", typ: u(undefined, r("Filter")) },
        { json: "riskValue", js: "riskValue", typ: u(undefined, r("Value")) },
        { json: "signatureType", js: "signatureType", typ: u(undefined, r("SignatureType")) },
        { json: "tagFilter", js: "tagFilter", typ: u(undefined, r("TagFilter")) },
        { json: "tagValue", js: "tagValue", typ: u(undefined, "") },
        { json: "userDefinedFilter", js: "userDefinedFilter", typ: u(undefined, r("HasCve")) },
    ], "any"),
    "SignatureSetSignature": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "SignatureSettings": o([
        { json: "attackSignatureFalsePositiveMode", js: "attackSignatureFalsePositiveMode", typ: u(undefined, r("AttackSignatureFalsePositiveMode")) },
        { json: "minimumAccuracyForAutoAddedSignatures", js: "minimumAccuracyForAutoAddedSignatures", typ: u(undefined, r("MinimumAccuracyForAutoAddedSignatures")) },
        { json: "placeSignaturesInStaging", js: "placeSignaturesInStaging", typ: u(undefined, true) },
        { json: "signatureStaging", js: "signatureStaging", typ: u(undefined, true) },
    ], "any"),
    "PolicySignature": o([
        { json: "alarm", js: "alarm", typ: u(undefined, true) },
        { json: "block", js: "block", typ: u(undefined, true) },
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "inPolicy", js: "inPolicy", typ: u(undefined, r("InPolicy")) },
        { json: "isPriorRuleEnforced", js: "isPriorRuleEnforced", typ: u(undefined, true) },
        { json: "learn", js: "learn", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "Template": o([
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "ThreatCampaignSettings": o([
        { json: "threatCampaignEnforcementReadinessPeriod", js: "threatCampaignEnforcementReadinessPeriod", typ: u(undefined, 0) },
        { json: "threatCampaignStaging", js: "threatCampaignStaging", typ: u(undefined, true) },
    ], "any"),
    "ThreatCampaign": o([
        { json: "isEnabled", js: "isEnabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
    ], "any"),
    "URLElement": o([
        { json: "allowRenderingInFrames", js: "allowRenderingInFrames", typ: u(undefined, r("AllowRenderingInFrames")) },
        { json: "allowRenderingInFramesOnlyFrom", js: "allowRenderingInFramesOnlyFrom", typ: u(undefined, "") },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "canChangeDomainCookie", js: "canChangeDomainCookie", typ: u(undefined, true) },
        { json: "clickjackingProtection", js: "clickjackingProtection", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "dynamicFlows", js: "dynamicFlows", typ: u(undefined, a(r("FluffyDynamicFlow"))) },
        { json: "html5CrossOriginRequestsEnforcement", js: "html5CrossOriginRequestsEnforcement", typ: u(undefined, r("FluffyHtml5CrossOriginRequestsEnforcement")) },
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "mandatoryBody", js: "mandatoryBody", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("FluffyMetacharOverride"))) },
        { json: "metacharsOnUrlCheck", js: "metacharsOnUrlCheck", typ: u(undefined, true) },
        { json: "method", js: "method", typ: u(undefined, r("URLMethod")) },
        { json: "methodOverrides", js: "methodOverrides", typ: u(undefined, a(r("FluffyMethodOverride"))) },
        { json: "methodsOverrideOnUrlCheck", js: "methodsOverrideOnUrlCheck", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "operationId", js: "operationId", typ: u(undefined, "") },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "positionalParameters", js: "positionalParameters", typ: u(undefined, a(r("FluffyPositionalParameter"))) },
        { json: "protocol", js: "protocol", typ: u(undefined, r("URLProtocol")) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("StickySignatureOverride"))) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "urlContentProfiles", js: "urlContentProfiles", typ: u(undefined, a(r("FluffyURLContentProfile"))) },
        { json: "wildcardIncludesSlash", js: "wildcardIncludesSlash", typ: u(undefined, true) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "FluffyDynamicFlow": o([
        { json: "prefix", js: "prefix", typ: "" },
        { json: "regexp", js: "regexp", typ: "" },
        { json: "suffix", js: "suffix", typ: "" },
    ], "any"),
    "FluffyHtml5CrossOriginRequestsEnforcement": o([
        { json: "allowCredentials", js: "allowCredentials", typ: u(undefined, true) },
        { json: "allowOriginsEnforcementMode", js: "allowOriginsEnforcementMode", typ: u(undefined, r("AllowOriginsEnforcementMode")) },
        { json: "checkAllowedHeaders", js: "checkAllowedHeaders", typ: u(undefined, true) },
        { json: "checkAllowedMethods", js: "checkAllowedMethods", typ: u(undefined, true) },
        { json: "checkCredentials", js: "checkCredentials", typ: u(undefined, true) },
        { json: "checkExposedHeaders", js: "checkExposedHeaders", typ: u(undefined, true) },
        { json: "checkMaximumAge", js: "checkMaximumAge", typ: u(undefined, true) },
        { json: "crossDomainAllowedHeader", js: "crossDomainAllowedHeader", typ: u(undefined, a(r("FluffyCrossDomainAllowedHeader"))) },
        { json: "crossDomainAllowedMethod", js: "crossDomainAllowedMethod", typ: u(undefined, a(r("FluffyCrossDomainAllowedMethod"))) },
        { json: "crossDomainAllowedOrigin", js: "crossDomainAllowedOrigin", typ: u(undefined, a(r("FluffyCrossDomainAllowedOrigin"))) },
        { json: "crossDomainExposedHeader", js: "crossDomainExposedHeader", typ: u(undefined, a(r("FluffyCrossDomainExposedHeader"))) },
        { json: "enforcementMode", js: "enforcementMode", typ: u(undefined, r("PurpleEnforcementMode")) },
        { json: "maximumAge", js: "maximumAge", typ: u(undefined, 0) },
    ], "any"),
    "FluffyCrossDomainAllowedHeader": o([
        { json: "allowedHeaderName", js: "allowedHeaderName", typ: "" },
    ], "any"),
    "FluffyCrossDomainAllowedMethod": o([
        { json: "methodName", js: "methodName", typ: "" },
    ], "any"),
    "FluffyCrossDomainAllowedOrigin": o([
        { json: "includeSubDomains", js: "includeSubDomains", typ: u(undefined, true) },
        { json: "originName", js: "originName", typ: "" },
        { json: "originPort", js: "originPort", typ: u(r("OriginPortEnum"), 0) },
        { json: "originProtocol", js: "originProtocol", typ: r("OriginProtocol") },
    ], "any"),
    "FluffyCrossDomainExposedHeader": o([
        { json: "exposedHeaderName", js: "exposedHeaderName", typ: "" },
    ], "any"),
    "FluffyMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "FluffyMethodOverride": o([
        { json: "allowed", js: "allowed", typ: u(undefined, true) },
        { json: "method", js: "method", typ: r("MethodOverrideMethod") },
    ], "any"),
    "FluffyPositionalParameter": o([
        { json: "parameter", js: "parameter", typ: r("FluffyParameter") },
        { json: "urlSegmentIndex", js: "urlSegmentIndex", typ: 0 },
    ], "any"),
    "FluffyParameter": o([
        { json: "allowEmptyValue", js: "allowEmptyValue", typ: u(undefined, true) },
        { json: "allowRepeatedParameterName", js: "allowRepeatedParameterName", typ: u(undefined, true) },
        { json: "arraySerializationFormat", js: "arraySerializationFormat", typ: u(undefined, r("ArraySerializationFormat")) },
        { json: "arrayUniqueItemsCheck", js: "arrayUniqueItemsCheck", typ: u(undefined, true) },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "checkMaxItemsInArray", js: "checkMaxItemsInArray", typ: u(undefined, true) },
        { json: "checkMaxValue", js: "checkMaxValue", typ: u(undefined, true) },
        { json: "checkMaxValueLength", js: "checkMaxValueLength", typ: u(undefined, true) },
        { json: "checkMetachars", js: "checkMetachars", typ: u(undefined, true) },
        { json: "checkMinItemsInArray", js: "checkMinItemsInArray", typ: u(undefined, true) },
        { json: "checkMinValue", js: "checkMinValue", typ: u(undefined, true) },
        { json: "checkMinValueLength", js: "checkMinValueLength", typ: u(undefined, true) },
        { json: "checkMultipleOfValue", js: "checkMultipleOfValue", typ: u(undefined, true) },
        { json: "contentProfile", js: "contentProfile", typ: u(undefined, r("PurpleContentProfile")) },
        { json: "dataType", js: "dataType", typ: u(undefined, r("DataType")) },
        { json: "disallowFileUploadOfExecutables", js: "disallowFileUploadOfExecutables", typ: u(undefined, true) },
        { json: "enableRegularExpression", js: "enableRegularExpression", typ: u(undefined, true) },
        { json: "exclusiveMax", js: "exclusiveMax", typ: u(undefined, true) },
        { json: "exclusiveMin", js: "exclusiveMin", typ: u(undefined, true) },
        { json: "explodeObjectSerialization", js: "explodeObjectSerialization", typ: u(undefined, true) },
        { json: "isBase64", js: "isBase64", typ: u(undefined, true) },
        { json: "isCookie", js: "isCookie", typ: u(undefined, true) },
        { json: "isHeader", js: "isHeader", typ: u(undefined, true) },
        { json: "level", js: "level", typ: u(undefined, r("Level")) },
        { json: "mandatory", js: "mandatory", typ: u(undefined, true) },
        { json: "maximumLength", js: "maximumLength", typ: u(undefined, 0) },
        { json: "maximumValue", js: "maximumValue", typ: u(undefined, 3.14) },
        { json: "maxItemsInArray", js: "maxItemsInArray", typ: u(undefined, 0) },
        { json: "metacharsOnParameterValueCheck", js: "metacharsOnParameterValueCheck", typ: u(undefined, true) },
        { json: "minimumLength", js: "minimumLength", typ: u(undefined, 0) },
        { json: "minimumValue", js: "minimumValue", typ: u(undefined, 3.14) },
        { json: "minItemsInArray", js: "minItemsInArray", typ: u(undefined, 0) },
        { json: "multipleOf", js: "multipleOf", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: "" },
        { json: "nameMetacharOverrides", js: "nameMetacharOverrides", typ: u(undefined, a(r("PurpleNameMetacharOverride"))) },
        { json: "objectSerializationStyle", js: "objectSerializationStyle", typ: u(undefined, r("ObjectSerializationStyle")) },
        { json: "parameterEnumValues", js: "parameterEnumValues", typ: u(undefined, a("")) },
        { json: "parameterLocation", js: "parameterLocation", typ: u(undefined, r("ParameterLocation")) },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "regularExpression", js: "regularExpression", typ: u(undefined, "") },
        { json: "sensitiveParameter", js: "sensitiveParameter", typ: u(undefined, true) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("PurpleSignatureOverride"))) },
        { json: "staticValues", js: "staticValues", typ: u(undefined, a("")) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "url", js: "url", typ: u(undefined, r("PurpleURL")) },
        { json: "valueMetacharOverrides", js: "valueMetacharOverrides", typ: u(undefined, a(r("PurpleValueMetacharOverride"))) },
        { json: "valueType", js: "valueType", typ: u(undefined, r("ValueType")) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "StickySignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "FluffyURLContentProfile": o([
        { json: "contentProfile", js: "contentProfile", typ: u(undefined, r("IndecentContentProfile")) },
        { json: "headerName", js: "headerName", typ: "" },
        { json: "headerOrder", js: "headerOrder", typ: u(undefined, u(r("HeaderOrderEnum"), 0)) },
        { json: "headerValue", js: "headerValue", typ: "" },
        { json: "type", js: "type", typ: u(undefined, r("URLContentProfileType")) },
    ], "any"),
    "IndecentContentProfile": o([
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Webhook": o([
        { json: "body", js: "body", typ: u(undefined, "") },
        { json: "contentType", js: "contentType", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "triggerEvent", js: "triggerEvent", typ: u(undefined, r("TriggerEvent")) },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "WebsocketURL": o([
        { json: "allowBinaryMessage", js: "allowBinaryMessage", typ: u(undefined, true) },
        { json: "allowJsonMessage", js: "allowJsonMessage", typ: u(undefined, true) },
        { json: "allowTextMessage", js: "allowTextMessage", typ: u(undefined, true) },
        { json: "binaryMessageMaxSize", js: "binaryMessageMaxSize", typ: u(undefined, 0) },
        { json: "checkBinaryMessageMaxSize", js: "checkBinaryMessageMaxSize", typ: u(undefined, true) },
        { json: "checkMessageFrameMaxCount", js: "checkMessageFrameMaxCount", typ: u(undefined, true) },
        { json: "checkMessageFrameMaxSize", js: "checkMessageFrameMaxSize", typ: u(undefined, true) },
        { json: "checkPayload", js: "checkPayload", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "extension", js: "extension", typ: u(undefined, r("Extension")) },
        { json: "html5CrossOriginRequestsEnforcement", js: "html5CrossOriginRequestsEnforcement", typ: u(undefined, r("WebsocketURLHtml5CrossOriginRequestsEnforcement")) },
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "jsonProfile", js: "jsonProfile", typ: u(undefined, r("JSONProfileObject")) },
        { json: "messageFrameMaxCount", js: "messageFrameMaxCount", typ: u(undefined, 0) },
        { json: "messageFrameMaxSize", js: "messageFrameMaxSize", typ: u(undefined, 0) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("WebsocketURLMetacharOverride"))) },
        { json: "metacharsOnWebsocketUrlCheck", js: "metacharsOnWebsocketUrlCheck", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "performStaging", js: "performStaging", typ: u(undefined, true) },
        { json: "plainTextProfile", js: "plainTextProfile", typ: u(undefined, r("PlainTextProfileObject")) },
        { json: "protocol", js: "protocol", typ: u(undefined, r("WebsocketURLProtocol")) },
        { json: "type", js: "type", typ: u(undefined, r("HostNameTypeEnum")) },
        { json: "unsupportedExtensions", js: "unsupportedExtensions", typ: u(undefined, r("Extension")) },
        { json: "wildcardIncludesSlash", js: "wildcardIncludesSlash", typ: u(undefined, true) },
        { json: "wildcardOrder", js: "wildcardOrder", typ: u(undefined, 0) },
    ], "any"),
    "WebsocketURLHtml5CrossOriginRequestsEnforcement": o([
        { json: "crossDomainAllowedOrigin", js: "crossDomainAllowedOrigin", typ: u(undefined, a(r("TentacledCrossDomainAllowedOrigin"))) },
        { json: "enforcementMode", js: "enforcementMode", typ: u(undefined, r("FluffyEnforcementMode")) },
    ], "any"),
    "TentacledCrossDomainAllowedOrigin": o([
        { json: "includeSubDomains", js: "includeSubDomains", typ: u(undefined, true) },
        { json: "originName", js: "originName", typ: "" },
        { json: "originPort", js: "originPort", typ: u(r("OriginPortEnum"), 0) },
        { json: "originProtocol", js: "originProtocol", typ: r("OriginProtocol") },
    ], "any"),
    "JSONProfileObject": o([
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "defenseAttributes", js: "defenseAttributes", typ: u(undefined, r("JSONProfileDefenseAttributesObject")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "handleJsonValuesAsParameters", js: "handleJsonValuesAsParameters", typ: u(undefined, true) },
        { json: "hasValidationFiles", js: "hasValidationFiles", typ: u(undefined, true) },
        { json: "metacharElementCheck", js: "metacharElementCheck", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("JSONProfileMetacharOverrideObject"))) },
        { json: "name", js: "name", typ: "" },
        { json: "sensitiveData", js: "sensitiveData", typ: u(undefined, a(r("JSONProfileSensitiveDatumObject"))) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("JSONProfileSignatureOverrideObject"))) },
        { json: "validationFiles", js: "validationFiles", typ: u(undefined, a(r("JSONProfileValidationFileObject"))) },
    ], "any"),
    "JSONProfileDefenseAttributesObject": o([
        { json: "maximumArrayLength", js: "maximumArrayLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumStructureDepth", js: "maximumStructureDepth", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumTotalLengthOfJSONData", js: "maximumTotalLengthOfJSONData", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumValueLength", js: "maximumValueLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "tolerateJSONParsingWarnings", js: "tolerateJSONParsingWarnings", typ: u(undefined, true) },
    ], "any"),
    "JSONProfileMetacharOverrideObject": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "JSONProfileSensitiveDatumObject": o([
        { json: "parameterName", js: "parameterName", typ: "" },
    ], "any"),
    "JSONProfileSignatureOverrideObject": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "JSONProfileValidationFileObject": o([
        { json: "importUrl", js: "importUrl", typ: "" },
        { json: "isPrimary", js: "isPrimary", typ: u(undefined, true) },
        { json: "jsonValidationFile", js: "jsonValidationFile", typ: r("FluffyJSONValidationFile") },
    ], "any"),
    "FluffyJSONValidationFile": o([
        { json: "contents", js: "contents", typ: "" },
        { json: "fileName", js: "fileName", typ: "" },
        { json: "isBase64", js: "isBase64", typ: u(undefined, true) },
    ], "any"),
    "WebsocketURLMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "PlainTextProfileObject": o([
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "defenseAttributes", js: "defenseAttributes", typ: u(undefined, r("PlainTextProfileDefenseAttributesObject")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "metacharElementCheck", js: "metacharElementCheck", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("PlainTextProfileMetacharOverrideObject"))) },
        { json: "name", js: "name", typ: "" },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("PlainTextProfileSignatureOverrideObject"))) },
    ], "any"),
    "PlainTextProfileDefenseAttributesObject": o([
        { json: "maximumLineLength", js: "maximumLineLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumTotalLength", js: "maximumTotalLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "performPercentDecoding", js: "performPercentDecoding", typ: u(undefined, true) },
    ], "any"),
    "PlainTextProfileMetacharOverrideObject": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "PlainTextProfileSignatureOverrideObject": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "WhitelistIP": o([
        { json: "blockRequests", js: "blockRequests", typ: u(undefined, r("BlockRequests")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "ignoreAnomalies", js: "ignoreAnomalies", typ: u(undefined, true) },
        { json: "ignoreIpReputation", js: "ignoreIpReputation", typ: u(undefined, true) },
        { json: "ipAddress", js: "ipAddress", typ: "" },
        { json: "ipMask", js: "ipMask", typ: "" },
        { json: "neverLearnRequests", js: "neverLearnRequests", typ: u(undefined, true) },
        { json: "neverLogRequests", js: "neverLogRequests", typ: u(undefined, true) },
        { json: "trustedByPolicyBuilder", js: "trustedByPolicyBuilder", typ: u(undefined, true) },
    ], "any"),
    "XMLProfile": o([
        { json: "attachmentsInSoapMessages", js: "attachmentsInSoapMessages", typ: u(undefined, true) },
        { json: "attackSignaturesCheck", js: "attackSignaturesCheck", typ: u(undefined, true) },
        { json: "defenseAttributes", js: "defenseAttributes", typ: u(undefined, r("XMLProfileDefenseAttributes")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "enableWss", js: "enableWss", typ: u(undefined, true) },
        { json: "followSchemaLinks", js: "followSchemaLinks", typ: u(undefined, true) },
        { json: "inspectSoapAttachments", js: "inspectSoapAttachments", typ: u(undefined, true) },
        { json: "metacharAttributeCheck", js: "metacharAttributeCheck", typ: u(undefined, true) },
        { json: "metacharElementCheck", js: "metacharElementCheck", typ: u(undefined, true) },
        { json: "metacharOverrides", js: "metacharOverrides", typ: u(undefined, a(r("XMLProfileMetacharOverride"))) },
        { json: "name", js: "name", typ: "" },
        { json: "sensitiveData", js: "sensitiveData", typ: u(undefined, a(r("XMLProfileSensitiveDatum"))) },
        { json: "signatureOverrides", js: "signatureOverrides", typ: u(undefined, a(r("XMLProfileSignatureOverride"))) },
        { json: "soapMethods", js: "soapMethods", typ: u(undefined, a(r("SoapMethod"))) },
        { json: "useXmlResponsePage", js: "useXmlResponsePage", typ: u(undefined, true) },
        { json: "validationFiles", js: "validationFiles", typ: u(undefined, a(r("XMLProfileValidationFile"))) },
        { json: "validationSoapActionHeader", js: "validationSoapActionHeader", typ: u(undefined, true) },
        { json: "wssConfiguration", js: "wssConfiguration", typ: u(undefined, r("WssConfiguration")) },
    ], "any"),
    "XMLProfileDefenseAttributes": o([
        { json: "allowCDATA", js: "allowCDATA", typ: u(undefined, true) },
        { json: "allowDTDs", js: "allowDTDs", typ: u(undefined, true) },
        { json: "allowExternalReferences", js: "allowExternalReferences", typ: u(undefined, true) },
        { json: "allowProcessingInstructions", js: "allowProcessingInstructions", typ: u(undefined, true) },
        { json: "maximumAttributesPerElement", js: "maximumAttributesPerElement", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumAttributeValueLength", js: "maximumAttributeValueLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumChildrenPerElement", js: "maximumChildrenPerElement", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumDocumentDepth", js: "maximumDocumentDepth", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumDocumentSize", js: "maximumDocumentSize", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumElements", js: "maximumElements", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumNameLength", js: "maximumNameLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumNamespaceLength", js: "maximumNamespaceLength", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "maximumNSDeclarations", js: "maximumNSDeclarations", typ: u(undefined, u(r("MaximumCookieHeaderLengthEnum"), 0)) },
        { json: "tolerateCloseTagShorthand", js: "tolerateCloseTagShorthand", typ: u(undefined, true) },
        { json: "tolerateLeadingWhiteSpace", js: "tolerateLeadingWhiteSpace", typ: u(undefined, true) },
        { json: "tolerateNumericNames", js: "tolerateNumericNames", typ: u(undefined, true) },
    ], "any"),
    "XMLProfileMetacharOverride": o([
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "metachar", js: "metachar", typ: "" },
    ], "any"),
    "XMLProfileSensitiveDatum": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "paramName", js: "paramName", typ: "" },
        { json: "paramType", js: "paramType", typ: "" },
    ], "any"),
    "XMLProfileSignatureOverride": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "signatureId", js: "signatureId", typ: u(undefined, 0) },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "SoapMethod": o([
        { json: "action", js: "action", typ: u(undefined, "") },
        { json: "isAllowed", js: "isAllowed", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "namespace", js: "namespace", typ: "" },
    ], "any"),
    "XMLProfileValidationFile": o([
        { json: "importUrl", js: "importUrl", typ: "" },
        { json: "isPrimary", js: "isPrimary", typ: u(undefined, true) },
        { json: "xmlValidationFile", js: "xmlValidationFile", typ: r("XMLValidationFile") },
    ], "any"),
    "XMLValidationFile": o([
        { json: "contents", js: "contents", typ: "" },
        { json: "fileName", js: "fileName", typ: "" },
        { json: "isBase64", js: "isBase64", typ: u(undefined, true) },
    ], "any"),
    "WssConfiguration": o([
        { json: "addTimestamp", js: "addTimestamp", typ: u(undefined, true) },
        { json: "applyActionToDefinedRequestElements", js: "applyActionToDefinedRequestElements", typ: u(undefined, true) },
        { json: "applyActionToDefinedResponseElements", js: "applyActionToDefinedResponseElements", typ: u(undefined, true) },
        { json: "applyActionToEntireResponseBodyValue", js: "applyActionToEntireResponseBodyValue", typ: u(undefined, true) },
        { json: "clientCertificates", js: "clientCertificates", typ: u(undefined, a(r("ClientCertificate"))) },
        { json: "decryptAll", js: "decryptAll", typ: u(undefined, true) },
        { json: "elements", js: "elements", typ: u(undefined, a(r("Element"))) },
        { json: "enableRequestRole", js: "enableRequestRole", typ: u(undefined, true) },
        { json: "enableResponseRole", js: "enableResponseRole", typ: u(undefined, true) },
        { json: "encryptionAlgorithm", js: "encryptionAlgorithm", typ: u(undefined, r("EncryptionAlgorithm")) },
        { json: "enforceTimestampInRequest", js: "enforceTimestampInRequest", typ: u(undefined, true) },
        { json: "keyTransportAlgorithm", js: "keyTransportAlgorithm", typ: u(undefined, r("KeyTransportAlgorithm")) },
        { json: "maxTimestampInterval", js: "maxTimestampInterval", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "namespaceMapping", js: "namespaceMapping", typ: u(undefined, a(r("NamespaceMapping"))) },
        { json: "responseAction", js: "responseAction", typ: u(undefined, r("ResponseAction")) },
        { json: "roles", js: "roles", typ: u(undefined, a(r("RoleElement"))) },
        { json: "signatureAlgorithm", js: "signatureAlgorithm", typ: u(undefined, r("SignatureAlgorithm")) },
        { json: "soapBodyInRequestMustBeSignedAndVerified", js: "soapBodyInRequestMustBeSignedAndVerified", typ: u(undefined, true) },
        { json: "verifyAll", js: "verifyAll", typ: u(undefined, true) },
    ], "any"),
    "ClientCertificate": o([
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Element": o([
        { json: "applyTo", js: "applyTo", typ: r("ApplyTo") },
        { json: "encryptedPart", js: "encryptedPart", typ: u(undefined, r("EncryptedPart")) },
        { json: "xPathName", js: "xPathName", typ: "" },
    ], "any"),
    "NamespaceMapping": o([
        { json: "namespace", js: "namespace", typ: u(undefined, "") },
        { json: "prefix", js: "prefix", typ: "" },
    ], "any"),
    "RoleElement": o([
        { json: "applyTo", js: "applyTo", typ: r("ApplyTo") },
        { json: "role", js: "role", typ: r("RoleEnum") },
    ], "any"),
    "XMLValidationFileElement": o([
        { json: "contents", js: "contents", typ: "" },
        { json: "fileName", js: "fileName", typ: "" },
        { json: "isBase64", js: "isBase64", typ: u(undefined, true) },
    ], "any"),
    "ApplicationLanguage": [
        "auto-detect",
        "big5",
        "euc-jp",
        "euc-kr",
        "gb18030",
        "gb2312",
        "gbk",
        "iso-8859-1",
        "iso-8859-10",
        "iso-8859-13",
        "iso-8859-15",
        "iso-8859-16",
        "iso-8859-2",
        "iso-8859-3",
        "iso-8859-4",
        "iso-8859-5",
        "iso-8859-6",
        "iso-8859-7",
        "iso-8859-8",
        "iso-8859-9",
        "koi8-r",
        "shift_jis",
        "utf-8",
        "windows-1250",
        "windows-1251",
        "windows-1252",
        "windows-1253",
        "windows-1255",
        "windows-1256",
        "windows-1257",
        "windows-874",
    ],
    "EvasionDescription": [
        "Apache whitespace",
        "Bad unescape",
        "Bare byte decoding",
        "Directory traversals",
        "IIS backslashes",
        "IIS Unicode codepoints",
        "Multiple decoding",
        "%u decoding",
    ],
    "HTTPProtocolDescription": [
        "Bad HTTP version",
        "Bad host header value",
        "Bad multipart/form-data request parsing",
        "Bad multipart parameters parsing",
        "Body in GET or HEAD requests",
        "CRLF characters before request start",
        "Check maximum number of headers",
        "Check maximum number of parameters",
        "Chunked request with Content-Length header",
        "Content length should be a positive number",
        "Header name with no header value",
        "High ASCII characters in headers",
        "Host header contains IP address",
        "Multiple host headers",
        "No Host header in HTTP/1.1 request",
        "Null in request",
        "POST request with Content-Length: 0",
        "Several Content-Length headers",
        "Unescaped space in URL",
        "Unparsable request content",
    ],
    "WebServicesSecurityDescription": [
        "Certificate Error",
        "Certificate Expired",
        "Decryption Error",
        "Encryption Error",
        "Expired Timestamp",
        "Internal Error",
        "Invalid Timestamp",
        "Malformed Error",
        "Missing Timestamp",
        "Signing Error",
        "Timestamp expiration is too far in the future",
        "UnSigned Timestamp",
        "Verification Error",
    ],
    "ClassAction": [
        "alarm",
        "block",
        "detect",
        "ignore",
    ],
    "ClassName": [
        "malicious",
        "trusted",
        "untrusted",
    ],
    "CAPTCHABypassCriteriaAction": [
        "alarm-and-blocking-page",
        "alarm-and-drop",
        "alarm-and-honeypot-page",
    ],
    "ClientSideIntegrityBypassCriteriaAction": [
        "alarm-and-captcha",
    ],
    "DetectionCriteriaAction": [
        "alarm",
        "alarm-and-captcha",
        "alarm-and-client-side-integrity",
        "alarm-and-client-side-integrity-captcha",
    ],
    "LeakedCredentialsCriteriaAction": [
        "alarm",
        "alarm-and-blocking-page",
        "alarm-and-honeypot-page",
        "alarm-and-leaked-credentials-response-page",
    ],
    "LoginAttemptsFromTheSameDeviceIDAction": [
        "alarm",
        "alarm-and-blocking-page",
        "alarm-and-captcha",
        "alarm-and-client-side-integrity",
        "alarm-and-drop",
        "alarm-and-honeypot-page",
    ],
    "LoginAttemptsFromTheSameUserAction": [
        "alarm",
        "alarm-and-captcha",
        "alarm-and-client-side-integrity",
    ],
    "PreventionDurationEnum": [
        "90000",
    ],
    "AllowRenderingInFrames": [
        "never",
        "only-from",
        "only-same",
    ],
    "AllowOriginsEnforcementMode": [
        "replace-with",
        "unmodified",
    ],
    "OriginPortEnum": [
        "all",
    ],
    "OriginProtocol": [
        "http",
        "http/https",
        "https",
    ],
    "PurpleEnforcementMode": [
        "disabled",
        "enforce",
        "remove-all-headers",
        "replace-headers",
    ],
    "URLMethod": [
        "ACL",
        "BCOPY",
        "BDELETE",
        "BMOVE",
        "BPROPFIND",
        "BPROPPATCH",
        "CHECKIN",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "*",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "MERGE",
        "MKCOL",
        "MKWORKSPACE",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POLL",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PUT",
        "RPC_IN_DATA",
        "RPC_OUT_DATA",
        "REPORT",
        "SEARCH",
        "SUBSCRIBE",
        "TRACE",
        "TRACK",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE",
        "VERSION_CONTROL",
        "X-MS-ENUMATTS",
    ],
    "MethodOverrideMethod": [
        "ACL",
        "BCOPY",
        "BDELETE",
        "BMOVE",
        "BPROPFIND",
        "BPROPPATCH",
        "CHECKIN",
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LINK",
        "LOCK",
        "MERGE",
        "MKCOL",
        "MKWORKSPACE",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POLL",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PUT",
        "RPC_IN_DATA",
        "RPC_OUT_DATA",
        "REPORT",
        "SEARCH",
        "SUBSCRIBE",
        "TRACE",
        "TRACK",
        "UNLINK",
        "UNLOCK",
        "UNSUBSCRIBE",
        "VERSION_CONTROL",
        "X-MS-ENUMATTS",
    ],
    "URLProtocol": [
        "http",
        "https",
    ],
    "HostNameTypeEnum": [
        "explicit",
        "wildcard",
    ],
    "HeaderOrderEnum": [
        "default",
    ],
    "URLContentProfileType": [
        "apply-content-signatures",
        "apply-value-and-content-signatures",
        "disallow",
        "do-nothing",
        "form-data",
        "gwt",
        "json",
        "xml",
    ],
    "ArraySerializationFormat": [
        "csv",
        "form",
        "label",
        "matrix",
        "multi",
        "multipart",
        "pipe",
        "ssv",
        "tsv",
    ],
    "DataType": [
        "alpha-numeric",
        "binary",
        "boolean",
        "decimal",
        "email",
        "integer",
        "none",
        "phone",
    ],
    "Level": [
        "flow",
        "global",
        "url",
    ],
    "ObjectSerializationStyle": [
        "deep-object",
        "form",
        "label",
        "matrix",
        "pipe-delimited",
        "simple",
        "space-delimited",
    ],
    "ParameterLocation": [
        "any",
        "cookie",
        "form-data",
        "header",
        "path",
        "query",
    ],
    "ValueType": [
        "array",
        "auto-detect",
        "dynamic-content",
        "dynamic-parameter-name",
        "ignore",
        "json",
        "object",
        "openapi-array",
        "static-content",
        "user-input",
        "xml",
    ],
    "CharacterSetType": [
        "gwt-content",
        "header",
        "json-content",
        "parameter-name",
        "parameter-value",
        "plain-text-content",
        "url",
        "xml-content",
    ],
    "MaximumCookieHeaderLengthEnum": [
        "any",
    ],
    "EnforcementType": [
        "allow",
        "enforce",
    ],
    "InsertSameSiteAttribute": [
        "lax",
        "none",
        "none-value",
        "strict",
    ],
    "ExpirationTime": [
        "disabled",
    ],
    "EnforcementAction": [
        "none",
        "verify-csrf-token",
        "verify-origin",
    ],
    "CSRFURLMethod": [
        "any",
        "GET",
        "POST",
    ],
    "RequiredParameters": [
        "at-least-one",
        "from-parameters-list",
        "ignore",
    ],
    "DataGuardEnforcementMode": [
        "enforce-urls-in-list",
        "ignore-urls-in-list",
    ],
    "FileContentDetectionFormatName": [
        "ELF - binary file format for Unix",
        "MS Office 2007 or later",
        "MS Office 97-2003 document",
        "Mach-O - Mach object file format - used in Mac OS X",
        "PDF - Adobe Portable Document Format",
        "PE - Portable Executable for Windows",
    ],
    "UserSource": [
        "apm",
        "login-pages",
    ],
    "DisabledActionItemType": [
        "cookie-staging",
        "default-parameter",
        "filetype-staging",
        "modified-policy",
        "parameter-staging",
        "policy-validation",
        "scanner-vulnerabilities",
        "signature-staging",
        "threat-campaign-staging",
        "transparent-policy",
        "url-staging",
        "websocket-url-staging",
    ],
    "CountryName": [
        "Afghanistan",
        "Aland Islands",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Anonymous Proxy",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, The Democratic Republic of the",
        "Cook Islands",
        "Costa Rica",
        "Cote D'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands (Malvinas)",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "France, Metropolitan",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (Vatican City State)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran, Islamic Republic of",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea, Democratic People's Republic of",
        "Korea, Republic of",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libyan Arab Jamahiriya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia, Federated States of",
        "Moldova, Republic of",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "N/A",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Other",
        "Pakistan",
        "Palau",
        "Palestinian Territory",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn Islands",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "San Marino",
        "Saint Barthelemy",
        "Saint Helena",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "Sao Tome and Principe",
        "Satellite Provider",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Virgin Islands, British",
        "Virgin Islands, U.S.",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ],
    "PolicyEnforcementMode": [
        "blocking",
        "transparent",
    ],
    "PathParameterHandling": [
        "as-parameters",
        "as-url",
        "ignore",
    ],
    "TriggerASMIruleEvent": [
        "disabled",
        "enabled-compatibility",
        "enabled-normal",
    ],
    "Category": [
        "Anonymous Proxy",
        "BotNets",
        "Cloud-based Services",
        "Denial of Service",
        "Infected Sources",
        "Mobile Threats",
        "Phishing Proxies",
        "Scanners",
        "Spam Sources",
        "Tor Proxies",
        "Web Attacks",
        "Windows Exploits",
    ],
    "IPIntelligenceCategoryDescription": [
        "The Anonymous Proxy category includes IP addresses that provide proxy and anonymizing services.",
        "The Botnets category includes Botnet C&C channels and an infected zombie machine controlled by a Bot master.",
        "The Cloud-based Services category includes IP addresses and networks that are used by cloud providers.",
        "The Denial of Services category includes DOS, DDOS, anomalous syn flood, and anomalous traffic detection.",
        "The Infected Sources category includes IP addresses currently known to be infected with malware, and IP addresses with an average low Reputation Index score. Enabling this category prevents access from sources identified to contact malware distribution points.",
        "The Mobile Threats category includes IP addresses of malicious and unwanted mobile applications.",
        "The Phishing Proxies category includes IP addresses hosting phishing sites, and other kind of fraud activities such as Ad Click Fraud and Gaming fraud.",
        "The Scanners category includes all reconnaissance, such as probes, host scan, domain scan, and password brute force.",
        "The Spam Sources category includes Tunneling Spam messages through proxy, anomalous SMTP activities, and Forum Spam activities.",
        "The Tor Proxies category includes IP addresses acting as exit nodes for the Tor Network. Exit nodes are the last point along the proxy chain and make a direct connection to the originatorâ\u0080\u0099s intended destination.",
        "The Web Attacks category includes cross site scripting, iFrame injection, SQL injection, cross domain injection, and domain password brute force.",
        "The Windows Exploits category includes active IP address offering or distributing malware, shell code, rootkits, worms, and viruses.",
    ],
    "AuthenticationType": [
        "ajax-or-json-request",
        "form",
        "http-basic",
        "http-digest",
        "ntlm",
        "none",
    ],
    "ActAsMethod": [
        "GET",
        "POST",
    ],
    "MicroserviceEnforcementMode": [
        "blocking",
        "policy-default",
        "transparent",
    ],
    "Frequency": [
        "never",
        "real-time",
        "scheduled",
    ],
    "LearningMode": [
        "automatic",
        "disabled",
        "manual",
    ],
    "Mode": [
        "central",
        "local",
    ],
    "LearnExplicitCookies": [
        "never",
        "selective",
    ],
    "LearnExplicit": [
        "always",
        "compact",
        "never",
        "selective",
    ],
    "ParameterLearningLevel": [
        "global",
        "url",
    ],
    "LearnExplicitRedirectionDomains": [
        "always",
        "never",
    ],
    "LearnExplicitWebsocketUrls": [
        "always",
        "never",
        "selective",
    ],
    "Field": [
        "request_status",
    ],
    "FormatType": [
        "arcsight",
        "bigiq",
        "default",
        "splunk",
    ],
    "AjaxActionType": [
        "alert-popup",
        "custom",
        "redirect",
    ],
    "ResponseActionType": [
        "custom",
        "default",
        "erase-cookies",
        "redirect",
        "soap-fault",
    ],
    "ResponsePageType": [
        "ajax",
        "ajax-login",
        "captcha",
        "captcha-fail",
        "default",
        "failed-login-honeypot",
        "failed-login-honeypot-ajax",
        "hijack",
        "leaked-credentials",
        "leaked-credentials-ajax",
        "mobile",
        "persistent-flow",
        "xml",
    ],
    "URLBlockingMode": [
        "block-all-urls",
        "block-authenticated-urls",
    ],
    "UserNameSource": [
        "all-login-pages",
        "apm",
        "login-pages",
        "none",
    ],
    "SessionTrackingStatusAction": [
        "block-all",
        "delay-blocking",
        "log-all",
    ],
    "ExpirationDatetime": [
        "N/A",
    ],
    "Scope": [
        "device",
        "ip",
        "session",
        "user",
    ],
    "Filter": [
        "all",
        "eq",
        "ge",
        "le",
    ],
    "Value": [
        "all",
        "high",
        "low",
        "medium",
    ],
    "HasCve": [
        "all",
        "no",
        "yes",
    ],
    "LastUpdatedFilter": [
        "after",
        "all",
        "before",
    ],
    "SignatureType": [
        "all",
        "request",
        "response",
    ],
    "TagFilter": [
        "all",
        "eq",
        "untagged",
    ],
    "SignatureSetType": [
        "filter-based",
        "manual",
    ],
    "AttackSignatureFalsePositiveMode": [
        "detect",
        "detect-and-allow",
        "disabled",
    ],
    "MinimumAccuracyForAutoAddedSignatures": [
        "high",
        "low",
        "medium",
    ],
    "InPolicy": [
        "false",
        "true",
    ],
    "PolicyType": [
        "parent",
        "security",
    ],
    "TriggerEvent": [
        "apply-policy",
        "apply-policy-failed",
        "http-request-illegal",
        "http-request-likely-malicious",
        "http-request-needing-examination",
        "incident-end",
        "incident-start",
    ],
    "Extension": [
        "block",
        "ignore",
        "remove",
    ],
    "FluffyEnforcementMode": [
        "disabled",
        "enforce",
        "remove-all-headers",
    ],
    "WebsocketURLProtocol": [
        "ws",
        "wss",
    ],
    "BlockRequests": [
        "always",
        "never",
        "policy-default",
    ],
    "ApplyTo": [
        "request",
        "response",
    ],
    "EncryptedPart": [
        "content",
        "element",
    ],
    "EncryptionAlgorithm": [
        "aes128",
        "aes256",
        "tripledes",
    ],
    "KeyTransportAlgorithm": [
        "rsa-1_5",
        "rsa-oaep",
    ],
    "ResponseAction": [
        "encrypt",
        "encrypt-then-sign",
        "sign",
        "sign-then-encrypt",
    ],
    "RoleEnum": [
        "next",
        "none",
        "ultimateReceiver",
    ],
    "SignatureAlgorithm": [
        "hmac-sha1",
        "rsa-sha1",
    ],
};
