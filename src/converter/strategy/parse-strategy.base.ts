import { AthenaAction } from "../model/athena-common.model";
import { ParseContextModel } from "../model/parse-context.model";

export abstract class ParseStrategyBase {
  public constructor(
    protected context: ParseContextModel,
    protected overrideAction?: AthenaAction
  ) {}

  abstract parse(policyObj: any, fullPath: string): Promise<void>;
}
