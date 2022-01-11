import LinearProgress from "@mui/material/LinearProgress";
import React from "react";
import { usePolicyConvertState } from "../../../store/policy-convert/policy-convert.hooks";
import Typography from "@mui/material/Typography";

export const ConvertProgressPage: React.VoidFunctionComponent = () => {
  const { convertPercentage } = usePolicyConvertState();
  return (
    <div>
      <Typography>Exporting... Please wait!</Typography>
      <LinearProgress variant="determinate" value={convertPercentage} />
    </div>
  );
};
