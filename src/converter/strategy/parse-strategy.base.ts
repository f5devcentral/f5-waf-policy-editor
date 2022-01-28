import { ParseContextModel } from "../model/parse-context.model";

export abstract class ParseStrategyBase {
  public constructor(protected context: ParseContextModel) {}

  abstract parse(policyObj: any, fullPath: string): Promise<void>;
}
