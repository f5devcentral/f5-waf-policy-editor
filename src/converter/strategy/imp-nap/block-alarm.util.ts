export function blockAlarmUtil(obj: any, isBlockingEnforcementMode: boolean) {
  if (obj.block === undefined && obj.alarm === undefined) {
    return isBlockingEnforcementMode;
  }
  
  if (obj.block && isBlockingEnforcementMode) return true;
  if (obj.alarm && !isBlockingEnforcementMode) return true;

  return false;
}
