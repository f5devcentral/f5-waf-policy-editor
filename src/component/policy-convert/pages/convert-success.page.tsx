import Typography from "@mui/material/Typography";
import React from "react";
import Button from "@mui/material/Button";
import { policyConvertStrategy } from "../../../store/policy-convert/strategy/policy-convert.strategy";
import { useDispatch } from "react-redux";
import Link from "@mui/material/Link";
import { usePolicyConvertState } from "../../../store/policy-convert/policy-convert.hooks";

export const ConvertSuccessPage: React.VoidFunctionComponent = () => {
  const thunkDispatch = useDispatch();
  const { log } = usePolicyConvertState();

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
      <div>
        <table>
          <thead>
            <td>index</td>
            <td>time</td>
            <td>result</td>
            <td>path</td>
            <td>data</td>
          </thead>
          {!log?.data
            ? undefined
            : log?.data().map((x, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td>{x.timestamp ? x.timestamp.toLocaleString() : ""}</td>
                    <td>{x.keyParsingResultEnum.toString()}</td>
                    <td>{x.policyKeyPath}</td>
                    <td>{x.data}</td>
                  </tr>
                );
              })}
        </table>
      </div>
    </div>
  );
};
