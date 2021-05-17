import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import FilledInput from "@material-ui/core/FilledInput";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

export type GridFieldValue = {
  title: string;
  value?: string;
  onChange?: (value: string) => void;
};

export type GridFieldValueProps = {
  rows: GridFieldValue[];
};

export const GridFieldValueControl: React.FunctionComponent<GridFieldValueProps> =
  ({ rows }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
      <Grid container spacing={1}>
        <Grid container item spacing={1} xs={12}>
          {rows.map((r, index) => (
            <React.Fragment key={index}>
              <Grid container item alignItems={"center"} xs={3}>
                <Typography
                  color={selectedIndex === index ? "primary" : undefined}
                  variant="body2"
                >
                  {r.title}
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  hiddenLabel
                  variant="filled"
                  margin="dense"
                  onSelect={(e) => setSelectedIndex(index)}
                  onBlur={(e) => setSelectedIndex(-1)}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    );
  };
