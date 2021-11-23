import React from "react";
import { InputAdornment, Theme } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import ErrorIcon from "@mui/icons-material/Error";

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 800,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const ErrorText = withStyles((theme: Theme) => ({
  root: {
    "&:first-letter": {
      textTransform: "capitalize",
    },
  },
}))(Box);

export type ErrorFieldControlAdornmentProps = {
  errorMessage: string;
};

export const ErrorFieldControlAdornment: React.FunctionComponent<ErrorFieldControlAdornmentProps> =
  ({ errorMessage }) => {
    return (
      <InputAdornment position="start">
        <HtmlTooltip
          title={
            <React.Fragment>
              <ErrorText>{errorMessage}</ErrorText>
            </React.Fragment>
          }
        >
          <ErrorIcon style={{ color: "red", cursor: "pointer" }} />
        </HtmlTooltip>
      </InputAdornment>
    );
  };
