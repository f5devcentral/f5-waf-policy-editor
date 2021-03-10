export default function setToValue(obj, path, value) {
    var stringToPath = function (path) {
        if (typeof path !== 'string') return path;
        var output = [];
        path.split('.').forEach(function (item, index) {
            item.split(/\[([^}]+)\]/g).forEach(function (key) {
                if (key.length > 0) {
                    output.push(key);
                }
            });
        });
        return output;
    };
    path = stringToPath(path);
    for (var i = 0; i < path.length - 1; i++) {
        obj = obj[path[i]];
    }
    obj[path[path.length - 1]] = value;
};

export function isJSON(text) {
    if (typeof text !== "string") {
        return false;
    }
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }
}