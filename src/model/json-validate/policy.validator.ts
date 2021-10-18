import { Validator } from "jsonschema";
import { PolicySchemaService } from "../policy-schema/policy-schema.service";

export type PolicyValidationError = {
  message: string;
  property: string;
  path: any[];
};

export class PolicyValidator {
  validate(policy: any): PolicyValidationError[] {
    try {
      const schemaService = new PolicySchemaService();
      const schema = schemaService.getSchema();

      const validator = new Validator();
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
      return [];
    }
  }
}
