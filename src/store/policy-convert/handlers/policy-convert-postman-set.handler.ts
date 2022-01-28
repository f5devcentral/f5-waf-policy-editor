import {
  PolicyConvertAction,
  PolicyConvertReducerHandler,
  PolicyConvertState,
} from "../policy-convert.types";
import { Draft } from "immer";

export const policyConvertPostmanSetHandler: PolicyConvertReducerHandler = (
  currentState: Draft<PolicyConvertState>,
  action: PolicyConvertAction
) => {
  currentState.collection = action.collection;
  return currentState;
};
