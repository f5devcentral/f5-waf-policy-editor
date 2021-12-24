import {
  unset as _unset,
  isArray as _isArray,
  isString as _isString,
  isObject as _isObject,
  get as _get,
} from "lodash";

type DeleteItemInfo = {
  path: string;
  isArray: boolean;
  arrayIndex?: number;
};

function objectCollapseDeep(
  obj: any,
  currentPath: string,
  arrayItem: boolean,
  keysToDelete: DeleteItemInfo[],
  arrayIndex?: number
) {
  console.log("objectCollapseDeep: ");
  console.log(JSON.stringify(obj), currentPath, arrayItem, arrayIndex);

  if (obj === null || obj === undefined) {
    keysToDelete.push({
      path: currentPath,
      isArray: arrayItem,
      arrayIndex: arrayIndex,
    });
    return;
  }

  if (_isArray(obj) && obj.length === 0) {
    keysToDelete.push({
      path: currentPath,
      isArray: arrayItem,
      arrayIndex: arrayIndex,
    });
    return;
  }

  if (_isObject(obj) && Object.keys(obj).length === 0) {
    keysToDelete.push({
      path: currentPath,
      isArray: arrayItem,
      arrayIndex: arrayIndex,
    });
    return;
  }

  Object.keys(obj).forEach((k) => {
    let path =
      currentPath === ""
        ? k
        : arrayItem
        ? `${currentPath}[${arrayIndex}]`
        : `${currentPath}.${k}`;
    if (!_isString(obj[k])) {
      if (_isArray(obj[k])) {
        let index = 0;
        for (let item of obj[k]) {
          // check for item
          objectCollapseDeep(item, path, true, keysToDelete, index);
          index++;
        }
        if (index === 0) {
          // if no items then call to delete empty array
          objectCollapseDeep(obj[k], path, false, keysToDelete);
        }
      } else {
        // go deep by the object key
        objectCollapseDeep(obj[k], path, false, keysToDelete);
      }
    }
  });
}

export function objectCollapseUtil(obj: any) {
  let keysToDelete: DeleteItemInfo[] = [] as DeleteItemInfo[];
  let iteration = 0;
  do {
    iteration++;
    console.log(
      "---------------------------- ",
      iteration,
      " --------------------------"
    );
    keysToDelete = [] as DeleteItemInfo[];
    objectCollapseDeep(obj, "", false, keysToDelete);
    keysToDelete.reverse();

    console.log(keysToDelete);

    keysToDelete.forEach((k) => {
      if (k.isArray) {
        const arr: any = _get(obj, k.path);
        arr.splice(k.arrayIndex, 1);
      } else {
        _unset(obj, k.path);
      }
    });

    if (iteration > 10) break;
  } while (keysToDelete.length > 0);
}
