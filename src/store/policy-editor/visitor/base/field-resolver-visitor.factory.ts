import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { BaseFieldResolverVisitorFactory } from "../factory/interface/base.field-resolver-visitor-factory";
import { PolicyEditorDispatch } from "../../policy-editor.types";
import { get as _get } from "lodash";
import { createDefaultValues } from "../factory/default-values.factory";

export class FieldResolverVisitorFactory<
  T extends FieldResolverVisitor
> extends BaseFieldResolverVisitorFactory {
  constructor(
    protected TResolver: {
      new (rowNumber: number, dispatch: PolicyEditorDispatch, json: any): T;
    },
    protected dispatch: PolicyEditorDispatch,
    protected json: any,
    protected titles: string[],
    protected policyPath: string,
    protected keyField?: ((json: any) => string) | string
  ) {
    super(dispatch, json);
  }

  getResolvers(): {
    titles: string[];
    visitors: FieldResolverVisitor[];
    default: FieldResolverVisitor[];
  } {
    const anomalies = _get(this.json, this.policyPath);
    const visitors: FieldResolverVisitor[] = anomalies
      ? anomalies.map((e: any, index: number) => {
          return new this.TResolver(index, this.dispatch, e);
        })
      : [];

    const defValues: FieldResolverVisitor[] = createDefaultValues(
      this.json,
      this.policyPath,
      this.keyField,
      (json: any) => new this.TResolver(-1, this.dispatch, json)
    );

    return {
      titles: this.titles,
      visitors,
      default: defValues,
    };
  }
}
