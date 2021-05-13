export function objectCombine(original: any, partial: any): any {
  const rValue = { ...original };
  Object.keys(partial).forEach(
    (key) => partial[key] !== undefined && (rValue[key] = partial[key])
  );
  return rValue;
}
