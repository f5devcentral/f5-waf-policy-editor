import { ParseContextModel } from "../model/parse-context.model";

export class RawLogBuilder {
  create(context: ParseContextModel): string[] {
    return context.strategyLog
      .data()
      .map(
        (x, index) =>
          `${index}:${x.timestamp}:${
            x.policyKeyPath
          }:${x.keyParsingResultEnum.toString()}:${x.data}`
      );
  }
}
