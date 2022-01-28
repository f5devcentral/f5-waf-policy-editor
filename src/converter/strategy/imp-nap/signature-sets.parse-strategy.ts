import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { BlockingSettingsViolation } from "../../../model/policy-schema/policy.definitions";

const supportedSignatureSets: string[] = [
  "Other Application Attacks Signatures",
  "High Accuracy Detection Evasion Signatures",
  "Vulnerability Scan Signatures",
  "Authentication/Authorization Attack Signatures",
  "Buffer Overflow Signatures",
  "Predictable Resource Location Signatures",
  "Information Leakage Signatures",
  "Directory Indexing Signatures",
  "Path Traversal Signatures",
  "XPath Injection Signatures",
  "Server Side Code Injection Signatures",
  "Command Execution Signatures",
  "SQL Injection Signatures",
  "Cross Site Scripting Signatures",
  "Denial of Service Signatures",
  "HTTP Response Splitting Signatures",
  "Generic Detection Signatures",
  "Generic Detection Signatures (High Accuracy)",
  "Generic Detection Signatures (High/Medium Accuracy)",
];

export class SignatureSetsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    let anyNotSupportedFlag = false;
    policyObj.forEach((x: BlockingSettingsViolation) => {
      if (supportedSignatureSets.includes(x.name ?? "")) {
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.success,
            x.name
          )
        );
      } else {
        anyNotSupportedFlag = true;
        this.context.strategyLog.add(
          new StrategyLogItemModel(
            fullPath,
            KeyParsingResultEnum.notSupported,
            x.name
          )
        );
      }
    });

    this.context.strategyLog.add(
      new StrategyLogItemModel(
        fullPath,
        anyNotSupportedFlag
          ? KeyParsingResultEnum.partially
          : KeyParsingResultEnum.success
      )
    );

    return Promise.resolve();
  }
}
