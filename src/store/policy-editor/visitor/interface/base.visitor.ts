import { PolicyEditorDispatch } from "../../policy-editor.types";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../policy-editor.hooks";

export abstract class BaseVisitor {
  constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {}
}

export function useVisitor<T extends BaseVisitor>(TVisitor: {
  new (dispatch: PolicyEditorDispatch, json: any): T;
}) {
  const { jsonCurrentPolicy } = usePolicyEditorState();
  return new TVisitor(usePolicyEditorDispatch(), jsonCurrentPolicy);
}
