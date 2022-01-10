import React from "react";
import { Button } from "@mui/material";
import { policyConvertStrategy } from "../../../store/policy-convert/strategy/policy-convert.strategy";
import { useDispatch } from "react-redux";

export const StartConvertPage: React.VoidFunctionComponent = () => {
  const thunkDispatch = useDispatch();

  return (
    <div>
      <Button
        variant={"contained"}
        onClick={() => {
          thunkDispatch(policyConvertStrategy());
        }}
      >
        Start Convert
      </Button>
    </div>
  );
};
