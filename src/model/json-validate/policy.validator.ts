import { Validator } from "jsonschema";
import * as wafSchema from "../policy-schema/policy-schema.json";

export type PolicyValidationError = {
  message: string;
  path: any[];
};

export class PolicyValidator {
  validate(policy: any): PolicyValidationError[] {
    console.log("validate");

    const validator = new Validator();

    const errors = validator.validate(
      policy,
      wafSchema.properties.policy as any,
      {
        nestedErrors: true,
      }
    ).errors;

    return errors.map(
      (x) =>
        ({
          message: x.message,
          path: x.path,
        } as PolicyValidationError)
    );
  }
}
