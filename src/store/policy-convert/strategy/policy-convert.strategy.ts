import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../../index";
import {
  PolicyConvertDispatch,
  PolicyConvertStageEnum,
} from "../policy-convert.types";
import {
  policyConvertProgressSet,
  policyConvertSetStage,
} from "../policy-convert.actions";

export function policyConvertStrategy(): ThunkAction<
  any,
  ApplicationState,
  any,
  any
> {
  return (dispatch: PolicyConvertDispatch) => {
    dispatch(policyConvertProgressSet(0));
    dispatch(policyConvertSetStage(PolicyConvertStageEnum.convertPending));
    let counter = 0;
    const interval = setInterval(() => {
      dispatch(policyConvertProgressSet(counter * 10));
      counter++;
      if (counter === 11) {
        clearInterval(interval);
        dispatch(policyConvertSetStage(PolicyConvertStageEnum.convertSuccess));
      }
    }, 1000);
  };
}
