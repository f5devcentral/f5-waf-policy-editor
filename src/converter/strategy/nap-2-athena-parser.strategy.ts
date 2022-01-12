import { Policy } from "../../model/policy-schema/policy.definitions";
import { PassOverParseStrategy } from "./pass-over.parse-strategy";
import { ParseContextModel } from "../model/parse-context.model";

export class Nap2AthenaParserStrategy {
  constructor(private context: ParseContextModel) {}
  parse(policy: Policy) {
    const passOverStrategy = new PassOverParseStrategy(this.context);
    passOverStrategy.parse(policy, "");
  }
}
