import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../../index";
import {
  PolicyConvertDispatch,
  PolicyConvertStageEnum,
} from "../policy-convert.types";
import {
  policyConvertProgressSet,
  policyConvertSetLog,
  policyConvertSetStage,
} from "../policy-convert.actions";
import { Nap2AthenaParserStrategy } from "../../../converter/strategy/nap-2-athena-parser.strategy";
import { ParseContextModel } from "../../../converter/model/parse-context.model";

export function policyConvertStrategy(): ThunkAction<
  any,
  ApplicationState,
  any,
  any
> {
  return (dispatch: PolicyConvertDispatch, getState) => {
    dispatch(policyConvertProgressSet(0));
    dispatch(policyConvertSetStage(PolicyConvertStageEnum.convertPending));
    let counter = 0;
    const interval = setInterval(() => {
      dispatch(policyConvertProgressSet(counter * 10));
      counter++;

      if (counter === 11) {
        clearInterval(interval);

        const state = getState();
        const fullPolicy = JSON.parse(state.policyEditorState.strCurrentPolicy);

        const context = new ParseContextModel(fullPolicy);
        const napParser = new Nap2AthenaParserStrategy(context);
        napParser.parse(fullPolicy);

        dispatch(policyConvertSetLog(context.strategyLog));
        dispatch(policyConvertSetStage(PolicyConvertStageEnum.convertSuccess));
      }
    }, 300);
  };
}
