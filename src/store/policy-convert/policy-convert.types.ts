import { Action } from "redux";
import { ReducerHandler } from "../reducer.base";
import { StrategyLogModel } from "../../converter/model/strategy-log.model";

export enum PolicyConvertStageEnum {
  convertNotStarted,
  convertPending,
  convertSuccess,
  convertError,
}

export type PolicyConvertState = {
  convertStage: PolicyConvertStageEnum;
  convertPercentage: number;
  convertMessage?: string;
  log?: StrategyLogModel;
  collection?: string;
};

export interface PolicyConvertAction
  extends Action,
  Partial<{
    convertStage: PolicyConvertStageEnum;
    convertMessage: string;
    convertPercentage: number;
    log: StrategyLogModel;
    collection: string;
  }> { }

export type PolicyConvertDispatch = (
  args: PolicyConvertAction
) => PolicyConvertAction;
export type PolicyConvertReducerHandler = ReducerHandler<
  PolicyConvertAction,
  PolicyConvertState
>;
