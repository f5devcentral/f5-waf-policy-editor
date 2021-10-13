import { get as _get, unset as _unset } from "lodash";

export function policyJsonFieldRemover(
  currentJson: any,
  basePath: string,
  rowIndex: number
) {
  _get(currentJson, `policy.${basePath}`).splice(rowIndex, 1);
  if (_get(currentJson, `policy.${basePath}`).length === 0) {
    _unset(currentJson, `policy.${basePath}`);
  }

  _get(currentJson, `policy.${basePath}`).forEach((x: any, index: number) => {
    if (x.wildcardOrder !== undefined) {
      x.wildcardOrder = index;
    }
  });
}
