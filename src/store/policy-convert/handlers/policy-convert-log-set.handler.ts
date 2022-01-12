import {
  PolicyConvertAction,
  PolicyConvertReducerHandler,
  PolicyConvertState,
} from "../policy-convert.types";
import { Draft } from "immer";

export const policyConvertLogSetHandler: PolicyConvertReducerHandler = (
  currentState: Draft<PolicyConvertState>,
  action: PolicyConvertAction
) => {
  currentState.log = action.log;
  return currentState;
};
