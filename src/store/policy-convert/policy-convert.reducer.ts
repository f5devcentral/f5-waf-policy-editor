import {
  PolicyConvertStageEnum,
  PolicyConvertAction,
  PolicyConvertState,
} from "./policy-convert.types";
import { ReducerBase } from "../reducer.base";
import { policyConvertProgressSetHandler } from "./handlers/policy-convert-progress-set.handler";
import { policyConvertStageSetHandler } from "./handlers/policyconvert-stage-set.handler";
import {
  POLICY_CONVERT_COLLECTION_SET,
  POLICY_CONVERT_LOG_SET,
  POLICY_CONVERT_SET_PROGRESS,
  POLICY_CONVERT_STAGE_SET,
} from "../action-types";
import { policyConvertLogSetHandler } from "./handlers/policy-convert-log-set.handler";
import { policyConvertPostmanSetHandler } from "./handlers/policy-convert-postman-set.handler";

export function policyConvertStateInit(): PolicyConvertState {
  return {
    convertStage: PolicyConvertStageEnum.convertNotStarted,
    convertPercentage: 0,
  };
}

class PolicyConvertReducerHandlerFactory extends ReducerBase<
  PolicyConvertAction,
  PolicyConvertState
> {
  constructor(state: PolicyConvertState) {
    super(state, {
      [POLICY_CONVERT_STAGE_SET]: policyConvertStageSetHandler,
      [POLICY_CONVERT_SET_PROGRESS]: policyConvertProgressSetHandler,
      [POLICY_CONVERT_LOG_SET]: policyConvertLogSetHandler,
      [POLICY_CONVERT_COLLECTION_SET]: policyConvertPostmanSetHandler,
    });
  }
}

export const PolicyConvertReducer = (
  state: PolicyConvertState = policyConvertStateInit(),
  action: PolicyConvertAction
): PolicyConvertState => {
  const reducerFactory = new PolicyConvertReducerHandlerFactory(state);

  return reducerFactory.process(action);
};
