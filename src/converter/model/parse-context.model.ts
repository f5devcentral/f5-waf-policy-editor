import {Policy} from "../../model/policy-schema/policy.definitions";
import {StrategyLogModel} from "./strategy-log.model";

export class ParseContextModel {
    public strategyLog: StrategyLogModel

    constructor(
        public policy: Policy,
    ) {
        this.strategyLog = new StrategyLogModel();
    }
}