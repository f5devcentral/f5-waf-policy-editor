import { Validator } from "jsonschema";
import * as wafSchema from "../policy-schema/policy-schema.json";

export type PolicyValidationError = {
  message: string;
  property: string;
  path: any[];
};

export class PolicyValidator {
  validate(policy: any): PolicyValidationError[] {
    try {
      const validator = new Validator();

      const errors = validator.validate(
        policy,
        wafSchema.properties.policy as any,
        {
          nestedErrors: true,
        }
      ).errors;

      return errors.map((x) => {
        if (x.name === "required") {
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
