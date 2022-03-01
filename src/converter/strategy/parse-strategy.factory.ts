import { ParseContextModel } from "../model/parse-context.model";
import { ParseStrategyBase } from "./parse-strategy.base";
import { StrategyLogItemModel } from "../model/strategy-log-item.model";
import { KeyParsingResultEnum } from "../model/key-parsing-result.enum";
import { WhitelistIpsParseStrategy } from "./imp-nap/whitelist-ips.parse-strategy";
import { PassOverParseStrategy } from "./pass-over.parse-strategy";
import { ResponsePagesParseStrategy } from "./imp-nap/response-pages.parse-strategy";
import { EnforcementModeParseStrategy } from "./imp-nap/enforcement-mode.parse-strategy";
import { ParametersParseStrategy } from "./imp-nap/parameters.parse-strategy";
import { SensitiveParametersParseStrategy } from "./imp-nap/sensitive-parameters.parse-strategy";
import { ViolationsParseStrategy } from "./imp-nap/violations.parse-strategy";
import { IgnoreParseStrategy } from "./ignore.parse-strategy";
import { PolicyNameParseStrategy } from "./imp-nap/policy-name.parse-strategy";
import { PolicyDescriptionParseStrategy } from "./imp-nap/policy-description.parse-strategy";

type TFactory = (context: ParseContextModel) => ParseStrategyBase;

export class ParseStrategyFactory {
  private readonly factory: { [key: string]: TFactory };

  constructor() {
    this.factory = {
      ".policy": (c) => new PassOverParseStrategy(c),
      ".policy.name": (c) => new PolicyNameParseStrategy(c),
      ".policy.description": (c) => new PolicyDescriptionParseStrategy(c),
      ".policy.applicationLanguage": (c) => new IgnoreParseStrategy(c),
      ".policy.template": (c) => new IgnoreParseStrategy(c),
      ".policy.caseInsensitive": (c) => new IgnoreParseStrategy(c),
      ".policy.enablePassiveMode": (c) => new IgnoreParseStrategy(c),
      ".policy.softwareVersion": (c) => new IgnoreParseStrategy(c),
      ".policy.protocolIndependent": (c) => new IgnoreParseStrategy(c),
      ".policy.type": (c) => new IgnoreParseStrategy(c),
      ".policy.whitelist-ips": (c) => new WhitelistIpsParseStrategy(c),
      ".policy.filetypes": (c) => new IgnoreParseStrategy(c),
      ".policy.response-pages": (c) => new ResponsePagesParseStrategy(c),
      ".policy.enforcementMode": (c) => new EnforcementModeParseStrategy(c),
      ".policy.parameters": (c) => new ParametersParseStrategy(c),
      ".policy.sensitive-parameters": (c) =>
        new SensitiveParametersParseStrategy(c),
      ".policy.thread-campaigns": (c) => new IgnoreParseStrategy(c),
      ".policy.signature-sets": (c) => new IgnoreParseStrategy(c),
      //--------------------------------------------
      ".policy.general": (c) => new PassOverParseStrategy(c),
      ".policy.general.allowedResponseCodes": (c) => new IgnoreParseStrategy(c),
      //--------------------------------------------
      ".policy.blocking-settings": (c) => new PassOverParseStrategy(c),
      ".policy.blocking-settings.violations": (c) =>
        new ViolationsParseStrategy(c),
      ".policy.blocking-settings.http-protocols": (c) =>
        new IgnoreParseStrategy(c),
      ".policy.blocking-settings.evasions": (c) => new IgnoreParseStrategy(c),
    };
  }

  create(
    context: ParseContextModel,
    key: string
  ): ParseStrategyBase | undefined {
    if (this.factory[key]) return this.factory[key](context);

    context.strategyLog.add(
      new StrategyLogItemModel(key, KeyParsingResultEnum.notSupported)
    );

    return undefined;
  }
}
