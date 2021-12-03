import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { GridFieldValue } from "./grid-field-value.type";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { ErrorFieldControlAdornment } from "./field-control/error.field-control-adornment";

export type GridFieldValueProps = {
  rows: GridFieldValue[];
};

export const GridFieldValueControl: React.FunctionComponent<GridFieldValueProps> =
  ({ rows }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const { jsonValidationErrors } = usePolicyEditorState();

    return (
      <div
        style={{
          paddingLeft: "24px",
        }}
      >
        <Grid container spacing={1}>
          <Grid container item spacing={1} xs={12}>
            {rows.map((row, index) => {
              const error = jsonValidationErrors.filter((x) =>
                row.errorPath
                  ? row.errorPath.find((err) => err === x.property)
                  : false
              );
              const hasError: boolean = error && error.length > 0;

              const startAdornment = hasError ? (
                <ErrorFieldControlAdornment errorMessage={error[0].message} />
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
                      startAdornment: hasError ? startAdornment : undefined,
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
      </div>
    );
  };
