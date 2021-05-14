import { PolicyEditorDispatch, PolicyEditorState } from "./policy-editor.types";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../index";

export const usePolicyEditorDispatch = () =>
  useDispatch<PolicyEditorDispatch>();
export const usePolicyEditorState: () => PolicyEditorState = () =>
  useSelector((state: ApplicationState) => state.policyEditorState);
