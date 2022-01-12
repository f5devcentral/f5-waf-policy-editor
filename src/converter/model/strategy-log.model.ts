import {StrategyLogItemModel} from "./strategy-log-item.model";

export class StrategyLogModel {
    private readonly _log: StrategyLogItemModel[]

    constructor() {
        this._log = [] as StrategyLogItemModel[];
    }

    add(item: StrategyLogItemModel) {
        this._log.push(item);
    }

    data():  StrategyLogItemModel[] {
        return this._log;
    }
}