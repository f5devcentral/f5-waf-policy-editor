import {
  PolicyConvertReducerHandler,
  PolicyConvertStageEnum,
} from "../policy-convert.types";

export const policyConvertStageSetHandler: PolicyConvertReducerHandler = (
  currentState,
  action
) => {
  currentState.convertStage =
    action.convertStage ??
    PolicyConvertStageEnum.convertNotStarted;
  currentState.convertMessage = action.convertMessage;

  return currentState;
};
