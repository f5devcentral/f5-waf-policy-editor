import { useDispatch, useSelector } from "react-redux";
import { PolicyConvertDispatch } from "./policy-convert.types";
import { ApplicationState } from "../index";

export const usePolicyConvertDispatch = () =>
  useDispatch<PolicyConvertDispatch>();
export const usePolicyConvertState = () =>
  useSelector((state: ApplicationState) => state.policyConvertState);
