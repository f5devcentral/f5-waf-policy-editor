import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { GridFieldValue } from "./grid-field-value.type";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import ErrorIcon from "@material-ui/icons/Error";
import { InputAdornment, Theme, withStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";

export type GridFieldValueProps = {
  rows: GridFieldValue[];
};

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

export const GridFieldValueControl: React.FunctionComponent<GridFieldValueProps> =
  ({ rows }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const { jsonValidationErrors } = usePolicyEditorState();

    return (
      <Grid container spacing={1}>
        <Grid container item spacing={1} xs={12}>
          {rows.map((row, index) => {
            const error = jsonValidationErrors.filter((x) =>
              row.errorPath
                ? row.errorPath.find((err) => err === x.property)
                : false
            );
            const hasError = error.length;

            const startAdornment = hasError ? (
              <InputAdornment position="start">
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <ErrorText>{error[0].message}</ErrorText>
                    </React.Fragment>
                  }
                >
                  <ErrorIcon style={{ color: "red", cursor: "pointer" }} />
                </HtmlTooltip>
              </InputAdornment>
            ) : undefined;

            return (
              <React.Fragment key={index}>
                <Grid container item alignItems={"center"} xs={3}>
                  <Typography
                    color={selectedIndex === index ? "primary" : undefined}
                    variant="body2"
                  >
                    {row.title}
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  {row.controlInfo.createControl({
                    error: hasError,
                    InputProps: {
                      startAdornment: hasError ? startAdornment : undefined,
                    },
                    fullWidth: true,
                    hiddenLabel: true,
                    variant: "filled",
                    margin: "dense",
                    onSelect: () => setSelectedIndex(index),
                    onBlur: () => setSelectedIndex(-1),
                  })}
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    );
  };
