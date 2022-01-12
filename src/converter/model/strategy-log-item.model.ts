import { KeyParsingResultEnum } from "./key-parsing-result.enum";

export class StrategyLogItemModel {
  timestamp: Date;

  constructor(
    public policyKeyPath: string,
    public keyParsingResultEnum: KeyParsingResultEnum,
    public data?: string
  ) {
    this.timestamp = new Date();
  }
}
