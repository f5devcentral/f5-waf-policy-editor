import { AthenaAction } from "../../model/athena-common.model";

export function transparentBlockUtil(
  obj: any,
  isBlockingEnforcementMode: boolean
) {
  if (!isBlockingEnforcementMode) return AthenaAction.NEXT_POLICY;

  if (obj.allowed || (obj.disallowed !== undefined && obj.disallowed === false))
    return AthenaAction.NEXT_POLICY;
  if (obj.disallowed || (obj.allowed !== undefined && obj.allowed === false))
    return AthenaAction.DENY;

  return AthenaAction.NEXT_POLICY;
}
