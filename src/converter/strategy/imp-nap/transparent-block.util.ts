import { AthenaAction } from "../../model/athena-common.model";

export function transparentBlockUtil(
  obj: any,
  isBlockingEnforcementMode: boolean,
  allowAction: AthenaAction
) {
  if (!isBlockingEnforcementMode) return allowAction;

  if (obj.allowed || (obj.disallowed !== undefined && obj.disallowed === false))
    return allowAction;
  if (obj.disallowed || (obj.allowed !== undefined && obj.allowed === false))
    return AthenaAction.DENY;

  return allowAction;
}
