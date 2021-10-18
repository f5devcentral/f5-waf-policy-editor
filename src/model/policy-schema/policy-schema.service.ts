import { merge as _merge } from "lodash";
import * as customPolicy from "./custom-updates.policy-schema.json";
import * as wafSchema from "./policy-schema.json";

export class PolicySchemaService {
  private readonly _schema: any;

  constructor() {
    this._schema = _merge(
      customPolicy.properties.policy,
      wafSchema.properties.policy
    );
  }

  getSchema(): any {
    return this._schema;
  }

  private _getNextPropertyInfo(
    currentRoot: any,
    keys: string[],
    index: number
  ): any {
    const isArray = keys[index].includes("[");
    const currentKey = isArray
      ? keys[index].substring(0, keys[index].indexOf("["))
      : keys[index];

    if (index === keys.length - 1) {
      return isArray ? currentRoot[currentKey].items : currentRoot[currentKey];
    }

    const nextProperty = isArray
      ? currentRoot[currentKey].items.properties
      : currentRoot[currentKey].properties;
    return this._getNextPropertyInfo(nextProperty, keys, index + 1);
  }

  isFieldRequired(path: string): boolean {
    if (!path) return false;
    const keys = path.split(".");

    const propertyInfo = this._getNextPropertyInfo(
      this._schema.properties,
      keys.slice(0, keys.length - 1),
      0
    );

    if (
      propertyInfo.required !== undefined &&
      Array.isArray(propertyInfo.required)
    ) {
      const isRequired = propertyInfo.required.includes(keys[keys.length - 1]);
      return isRequired;
    }

    return false;
  }

  shrinkToRequired(obj: any, basePath: string) {
    const rValue: any = {};

    Object.keys(obj).forEach((k) => {
      const fullPath = `${basePath}.${k}`;
      if (this.isFieldRequired(fullPath)) {
        rValue[k] = obj[k];
      }
    });

    return rValue;
  }
}
