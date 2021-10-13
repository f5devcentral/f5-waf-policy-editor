import { FieldResolverVisitor } from "../interface/field-resolver.visitor";
import { get as _get } from "lodash";
import defaultPolicy from "../../../../model/nginx-const/defaut-policy.nginx.json";

export function createDefaultValues<T extends FieldResolverVisitor>(
  json: any,
  path: string,
  keyField: ((json: any) => string) | string | undefined,
  resolverFactory: (json: any) => T
): T[] {
  if (!_get(defaultPolicy, path)) return [];

  const resolvedKey: string | undefined =
    keyField !== undefined
      ? typeof keyField === "function"
        ? keyField(json)
        : keyField
      : undefined;

  return _get(defaultPolicy, path)
    .reduce((r: any, v: any) => {
      const item = _get(json, path);
      if (
        !item ||
        item.find((x: any) => {
          return (
            (resolvedKey === undefined ? v : _get(v, resolvedKey)) ===
            (resolvedKey === undefined ? x : _get(x, resolvedKey))
          );
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
