import { Validator } from "jsonschema";
import * as wafSchema from "../policy-schema/policy-schema.json";
import * as customPolicy from "../policy-schema/custom-updates.policy-schema.json";

import { merge as _merge } from "lodash";

export type PolicyValidationError = {
  message: string;
  property: string;
  path: any[];
};

export class PolicyValidator {
  validate(policy: any): PolicyValidationError[] {
    try {
      const schema = _merge(
        customPolicy.properties.policy,
        wafSchema.properties.policy
      );

      const validator = new Validator();
      validator.addSchema(customPolicy.properties.policy as any);
      const errors = validator.validate(policy, schema as any, {
        nestedErrors: true,
      }).errors;

      return errors.map((x) => {
        const customMessage = (x.schema as any).message
          ? (x.schema as any).message[x.name]
          : undefined;

        if (customMessage) {
          return {
            message: customMessage,
            path: x.path,
            property: x.property,
          };
        } else if (x.name === "required") {
          return {
            message: x.message,
            path: x.path,
            property: `${x.property}.${x.argument}`,
          } as PolicyValidationError;
        } else {
          return {
            message: x.message,
            path: x.path,
            property: x.property,
          } as PolicyValidationError;
        }
      });
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
