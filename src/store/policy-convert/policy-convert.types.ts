import { Action } from "redux";
import { ReducerHandler } from "../reducer.base";

export enum PolicyConvertStageEnum {
  convertNotStarted,
  convertPending,
  convertSuccess,
  convertError,
}

export type PolicyConvertState = {
  convertStage: PolicyConvertStageEnum;
  convertPercentage: number;
};

export interface PolicyConvertAction
  extends Action,
    Partial<{
      convertStage: PolicyConvertStageEnum;
      convertPercentage: number;
    }> {}

export type PolicyConvertDispatch = (
  args: PolicyConvertAction
) => PolicyConvertAction;
export type PolicyConvertReducerHandler = ReducerHandler<
  PolicyConvertAction,
  PolicyConvertState
>;
