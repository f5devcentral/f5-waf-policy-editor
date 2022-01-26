import { StrategyLogItemModel } from "./strategy-log-item.model";

export class StrategyLogModel {
  private readonly _log: StrategyLogItemModel[];

  constructor() {
    this._log = [] as StrategyLogItemModel[];
  }

  add(item: StrategyLogItemModel) {
    this._log.push(item);
  }

  data(): StrategyLogItemModel[] {
    return this._log;
  }

  count(predicate: (model: StrategyLogItemModel) => boolean): number {
    return this._log.reduce((r, v) => {
      if (predicate(v)) r++;

      return r;
    }, 0);
  }
}
