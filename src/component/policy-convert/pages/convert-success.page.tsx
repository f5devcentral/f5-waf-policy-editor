import Typography from "@mui/material/Typography";
import React from "react";
import Button from "@mui/material/Button";
import { policyConvertStrategy } from "../../../store/policy-convert/strategy/policy-convert.strategy";
import { useDispatch } from "react-redux";
import Link from "@mui/material/Link";

export const ConvertSuccessPage: React.VoidFunctionComponent = () => {
  const thunkDispatch = useDispatch();

  return (
    <div>
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            thunkDispatch(policyConvertStrategy());
          }}
        >
          Restart Convert
        </Button>
      </div>
      <div
        style={{
          marginTop: "14px",
        }}
      >
        <Typography>Export is successfully completed</Typography>
      </div>
      <div
        style={{
          marginTop: "14px",
        }}
      >
        <div>
          To download the conversion result click <Link>here</Link>
        </div>
        <div>
          To get the the conversion report click <Link>here</Link>
        </div>
      </div>
    </div>
  );
};
