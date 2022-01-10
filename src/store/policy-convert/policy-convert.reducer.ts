import {
  PolicyConvertStageEnum,
  PolicyConvertAction,
  PolicyConvertState,
} from "./policy-convert.types";
import { ReducerBase } from "../reducer.base";

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
    super(state, {});
  }
}

export const PolicyConvertReducer = (
  state: PolicyConvertState = policyConvertStateInit(),
  action: PolicyConvertAction
): PolicyConvertState => {
  const reducerFactory = new PolicyConvertReducerHandlerFactory(state);

  return reducerFactory.process(action);
};
