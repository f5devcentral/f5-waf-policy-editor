import {
  PolicyConvertAction,
  PolicyConvertReducerHandler,
  PolicyConvertState,
} from "../policy-convert.types";
import { Draft } from "immer";

export const policyConvertProgressSetHandler: PolicyConvertReducerHandler = (
  currentState: Draft<PolicyConvertState>,
  action: PolicyConvertAction
) => {
  console.log("policyConvertProgressSetHandler");
  currentState.convertPercentage = action.convertPercentage ?? 0;
  return currentState;
};
