import { FieldResolverVisitor } from "../../interface/field-resolver.visitor";
import { BaseVisitor } from "../../interface/base.visitor";

export abstract class BaseFieldResolverVisitorFactory extends BaseVisitor {
  abstract getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
  };
}
