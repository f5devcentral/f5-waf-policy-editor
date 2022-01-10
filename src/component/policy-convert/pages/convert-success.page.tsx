import Typography from "@mui/material/Typography";
import React from "react";
import Button from "@mui/material/Button";

export const ConvertSuccessPage: React.VoidFunctionComponent = () => {
  return (
    <div>
      <div>
        <Typography>Success</Typography>
      </div>
      <div>
        <Button variant="contained">Get Policy</Button>
      </div>
      <div>
        <Button variant="contained">Get Report</Button>
      </div>
    </div>
  );
};
