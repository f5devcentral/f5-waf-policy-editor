import React from "react";
import { usePolicyConvertState } from "../../../store/policy-convert/policy-convert.hooks";

export const ConvertProgressPage: React.VoidFunctionComponent = () => {
  const { convertPercentage } = usePolicyConvertState();
  return <div>{convertPercentage}</div>;
};
