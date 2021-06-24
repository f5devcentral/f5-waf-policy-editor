import React from "react";
import { InputAdornment, Theme, withStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import ErrorIcon from "@material-ui/icons/Error";

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
