import {
  PolicyConvertReducerHandler,
  PolicyConvertStageEnum,
} from "../policy-convert.types";

export const policyConvertStageSetHandler: PolicyConvertReducerHandler = (
  currentState,
  action
) => {
  console.log("policyConvertStageSetHandler");
  currentState.convertStage =
    action.convertStage ?? PolicyConvertStageEnum.convertNotStarted;
  return currentState;
};
