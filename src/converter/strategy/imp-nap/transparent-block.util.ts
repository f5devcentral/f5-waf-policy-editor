import { AthenaAction } from "../../model/athena-common.model";

export function transparentBlockUtil(obj: any, isBlockingEnforcementMode: boolean) {
    if (!isBlockingEnforcementMode) return AthenaAction.ALLOW

    if ((obj.allowed) || (obj.disallowed !== undefined && obj.disallowed === false)) return AthenaAction.ALLOW;
    if (obj.disallowed || (obj.allowed !== undefined && obj.allowed === false)) return AthenaAction.DENY;

    return AthenaAction.ALLOW;
}