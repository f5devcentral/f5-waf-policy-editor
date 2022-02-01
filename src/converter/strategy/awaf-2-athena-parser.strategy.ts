import { PassOverParseStrategy } from "./pass-over.parse-strategy";
import { ParseContextModel } from "../model/parse-context.model";
import { WaitEventEnum } from "./imp-nap/wait-event.enum";
import { WaitEventUtil } from "../../utils/wait-event.util";
import { PolicyContainerType } from "../model/policy-container.type";
import { EnsureDefaultParseStrategy } from "./ensure-default.parse-strategy";

export class Awaf2AthenaParserStrategy {
  constructor(private context: ParseContextModel) {}

  async parse(policy: PolicyContainerType) {
    this.context.waitEvents[WaitEventEnum.enforcementMode] =
      new WaitEventUtil();

    const passOverStrategy = new PassOverParseStrategy(this.context);
    await passOverStrategy.parse(policy, "");

    const ensureDefault = new EnsureDefaultParseStrategy(this.context);
    await ensureDefault.parse(undefined, "");

    await Promise.all(
      Object.values(this.context.waitEvents).map((x) => x.waitEvent())
    );
  }
}
