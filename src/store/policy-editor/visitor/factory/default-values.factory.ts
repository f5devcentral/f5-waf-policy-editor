import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { get as _get } from "lodash";
import defaultPolicy from "../../../../model/nginx-const/defaut-policy.nginx.json";

export function createDefaultValues<T extends FieldResolverVisitor>(
  json: any,
  path: string,
  keyField: string,
  resolverFactory: (json: any) => T
): T[] {
  return _get(defaultPolicy, path)
    .reduce((r: any, v: any) => {
      const item = _get(json, path);
      if (
        !item ||
        item.find((x: any) => {
          return _get(v, keyField) === _get(x, keyField);
        }) === undefined
      ) {
        r.push(v);
      }
      return r;
    }, [] as any)
    .map((s: any) => {
      return resolverFactory(s);
    });
}
