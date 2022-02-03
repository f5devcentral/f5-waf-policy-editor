import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../../index";
import {
  PolicyConvertDispatch,
  PolicyConvertStageEnum,
} from "../policy-convert.types";
import {
  policyConvertProgressSet,
  policyConvertSetLog,
  policyConvertSetPostman,
  policyConvertSetStage,
} from "../policy-convert.actions";
import { Nap2AthenaParserStrategy } from "../../../converter/strategy/nap-2-athena-parser.strategy";
import { ParseContextModel } from "../../../converter/model/parse-context.model";
import { PostmanCollectionBuilder } from "../../../converter/builder/postman-collection.builder";
import { Awaf2AthenaParserStrategy } from "../../../converter/strategy/awaf-2-athena-parser.strategy";

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
        const policyType = state.policyEditorState.policyType;

        const context = new ParseContextModel(fullPolicy);
        const parser =
          policyType === "App Protect"
            ? new Nap2AthenaParserStrategy(context)
            : new Awaf2AthenaParserStrategy(context);

        parser.parse(fullPolicy).then(() => {
          const collection: any = {};
          const collectionBuilder = new PostmanCollectionBuilder(collection);

          collectionBuilder.initCollection();
          collectionBuilder.callFirewallCreate(
            context.athenaFirewallDto,
            context.athenaFirewallMetadataDto
          );

          dispatch(policyConvertSetLog(context.strategyLog));
          dispatch(
            policyConvertSetPostman(JSON.stringify(collection, null, 2))
          );

          dispatch(
            policyConvertSetStage(PolicyConvertStageEnum.convertSuccess)
          );
        });
      }
    }, 300);
  };
}
