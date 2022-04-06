import { AthenaAction } from "../../model/athena-common.model";

export function transparentBlockUtil(obj: any, isBlockingEnforcementMode: boolean) {
    if (!isBlockingEnforcementMode) return AthenaAction.ALLOW

    if (obj.allowed) return AthenaAction.ALLOW;
    if (obj.disallowed) return AthenaAction.DENY;

    return AthenaAction.ALLOW;
}