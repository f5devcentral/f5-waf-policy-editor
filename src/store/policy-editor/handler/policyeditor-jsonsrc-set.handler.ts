import {PolicyEditorReducerHandler} from "../policy-editor.types";


export const policyEditorJsonSrcSetHandler: PolicyEditorReducerHandler = (
    currentState,
        action
) => {
    if (action.strPolicy === undefined || action.policySrcUrl === undefined)
        return currentState;

    currentState.strCurrentPolicy = action.strPolicy;
    currentState.policySrcUrl = action.policySrcUrl;

    return currentState;
}