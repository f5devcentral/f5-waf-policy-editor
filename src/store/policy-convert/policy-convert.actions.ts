import {
  PolicyConvertAction,
  PolicyConvertStageEnum,
} from "./policy-convert.types";
import {
  POLICY_CONVERT_COLLECTION_SET,
  POLICY_CONVERT_LOG_SET,
  POLICY_CONVERT_SET_PROGRESS,
  POLICY_CONVERT_STAGE_SET,
} from "../action-types";
import { StrategyLogModel } from "../../converter/model/strategy-log.model";

export function policyConvertProgressSet(
  progress: number
): Pick<PolicyConvertAction, "type" | "convertPercentage"> {
  return {
    type: POLICY_CONVERT_SET_PROGRESS,
    convertPercentage: progress,
  };
}

export function policyConvertSetStage(
  stage: PolicyConvertStageEnum,
  message?: string
): Pick<PolicyConvertAction, "type" | "convertStage" | "convertMessage"> {
  return {
    type: POLICY_CONVERT_STAGE_SET,
    convertStage: stage,
    convertMessage: message,
  };
}

export function policyConvertSetLog(
  log: StrategyLogModel
): Pick<PolicyConvertAction, "type" | "log"> {
  return {
    type: POLICY_CONVERT_LOG_SET,
    log,
  };
}

export function policyConvertSetPostman(
  collection: string
): Pick<PolicyConvertAction, "type" | "collection"> {
  return {
    type: POLICY_CONVERT_COLLECTION_SET,
    collection,
  };
}
