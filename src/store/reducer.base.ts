import { Action } from "redux";
import produce, { Draft } from "immer";

export type ReducerHandler<
  PolicyEditorAction extends Action,
  PolicyEditorState
> = (
  currentState: Draft<PolicyEditorState>,
  action: PolicyEditorAction
) => Draft<PolicyEditorState>;

export abstract class ReducerBase<
  PolicyEditorAction extends Action,
  PolicyEditorState
> {
  protected constructor(
    private _currentState: PolicyEditorState,
    private _reducerFactory: {
      [key: string]: ReducerHandler<PolicyEditorAction, PolicyEditorState>;
    }
  ) {}

  process(action: PolicyEditorAction): PolicyEditorState {
    const processor = this._reducerFactory[action.type];
    if (!processor) return this._currentState;

    return produce<PolicyEditorState>(this._currentState, (draft) =>
      processor(draft, action)
    );
  }
}
