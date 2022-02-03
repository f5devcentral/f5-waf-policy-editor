import { ParseStrategyBase } from "../parse-strategy.base";
import { KeyParsingResultEnum } from "../../model/key-parsing-result.enum";
import { StrategyLogItemModel } from "../../model/strategy-log-item.model";
import { supportedAttackSignatures } from "../athena.const";
import { blockAlarmUtil } from "./block-alarm.util";
import { set as _set } from "lodash";

export class SignatureSetsParseStrategy extends ParseStrategyBase {
  parse(policyObj: any, fullPath: string) {
    for (const signatureSet of policyObj) {
      if (
        blockAlarmUtil(signatureSet, !!this.context.athenaFirewallDto.blocking)
      ) {
        if (supportedAttackSignatures[signatureSet.name]) {
          this.context.markSupportedAttackSignature(
            supportedAttackSignatures[signatureSet.name]
          );
          this.context.strategyLog.add(
            new StrategyLogItemModel(
              fullPath,
              KeyParsingResultEnum.success,
              policyObj.name
            )
          );
        } else {
          switch (signatureSet.name) {
            case "Generic Detection Signatures": {
              _set(
                this.context.athenaFirewallDto,
                "detection_settings.signature_selection_setting.high_medium_low_accuracy_signatures",
                {}
              );
              this.context.strategyLog.add(
                new StrategyLogItemModel(
                  fullPath,
                  KeyParsingResultEnum.success,
                  policyObj.name
                )
              );
              break;
            }
            case "Generic Detection Signatures (High Accuracy)":
            case "High Accuracy Signatures": {
              _set(
                this.context.athenaFirewallDto,
                "detection_settings.signature_selection_setting.only_high_accuracy_signatures",
                {}
              );
              this.context.strategyLog.add(
                new StrategyLogItemModel(
                  fullPath,
                  KeyParsingResultEnum.success,
                  policyObj.name
                )
              );
              break;
            }
            case "Generic Detection Signatures (High/Medium Accuracy)": {
              _set(
                this.context.athenaFirewallDto,
                "detection_settings.signature_selection_setting.high_medium_accuracy_signatures",
                {}
              );
              this.context.strategyLog.add(
                new StrategyLogItemModel(
                  fullPath,
                  KeyParsingResultEnum.success,
                  policyObj.name
                )
              );
              break;
            }
            default: {
              this.context.strategyLog.add(
                new StrategyLogItemModel(
                  fullPath,
                  KeyParsingResultEnum.notSupported,
                  policyObj.name
                )
              );
            }
          }
        }
      }
    }

    return Promise.resolve();
  }
}
