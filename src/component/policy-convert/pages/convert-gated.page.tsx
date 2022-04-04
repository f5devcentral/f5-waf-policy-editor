import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useStyles } from "../../../utils/styles.hook";
import {
  OperationResultBoxControl,
  OperationResultBoxIcon,
} from "../../controls/operation-result-box.control";
import { ContentPageControl } from "../../policy-editor/controls/page-controls/content.page-control";
import { ToolbarButtonControl } from "../../controls/toobar-button.component";
import { usePolicyConvertDispatch } from "../../../store/policy-convert/policy-convert.hooks";
import { policyConvertSetStage } from "../../../store/policy-convert/policy-convert.actions";
import { PolicyConvertStageEnum } from "../../../store/policy-convert/policy-convert.types";

export const ConvertGatedPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const [pass, setPass] = useState<string>();
  const [isPassError, setPassError] = useState<boolean>(false);

  const policyConvertDispatch = usePolicyConvertDispatch();

  return (
    <Box className={classes.pageContent}>
      <ContentPageControl>
        <OperationResultBoxControl
          icon={OperationResultBoxIcon.password}
          header="Gated access"
          text="Please, enter the passworrd to unlock the feature"
        />
        <Paper
          elevation={3}
          style={{
            margin: "24px",
            height: "calc(100% - 50px)",
            minHeight: "180px",
            padding: "10px",
            overflow: "scroll",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "block",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography>Enter password:</Typography>

            <p>
              <TextField
                type="password"
                onChange={(e) => setPass(e.target.value)}
              />

              <ToolbarButtonControl
                variant="contained"
                onClick={() => {
                  const origPassword = (
                    process.env.REACT_APP_COVERTER_PASSWORD ?? ""
                  ).trim();
                  if (origPassword === pass) {
                    policyConvertDispatch(
                      policyConvertSetStage(
                        PolicyConvertStageEnum.convertNotStarted
                      )
                    );
                  } else {
                    setPassError(true);
                  }
                }}
              >
                Unlock
              </ToolbarButtonControl>
            </p>
            {isPassError ? (
              <Typography color="red" variant="caption">
                Password error
              </Typography>
            ) : undefined}
          </div>
        </Paper>
      </ContentPageControl>
    </Box>
  );
};
