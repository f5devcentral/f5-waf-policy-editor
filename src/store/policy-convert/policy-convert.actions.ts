import {
  PolicyConvertAction,
  PolicyConvertStageEnum,
} from "./policy-convert.types";
import {
  POLICY_CONVERT_SET_PROGRESS,
  POLICY_CONVERT_STAGE_SET,
} from "../action-types";

export function policyConvertProgressSet(
  progress: number
): Pick<PolicyConvertAction, "type" | "convertPercentage"> {
  return {
    type: POLICY_CONVERT_SET_PROGRESS,
    convertPercentage: progress,
  };
}

export function policyConvertSetStage(
  stage: PolicyConvertStageEnum
): Pick<PolicyConvertAction, "type" | "convertStage"> {
  return {
    type: POLICY_CONVERT_STAGE_SET,
    convertStage: stage,
  };
}
