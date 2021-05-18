import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
          {rows.map((row, index) => {
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
                  <TextField
                    fullWidth
                    hiddenLabel
                    variant="filled"
                    margin="dense"
                    value={row?.value ?? ""}
                    onSelect={(_) => setSelectedIndex(index)}
                    onBlur={(_) => setSelectedIndex(-1)}
                    onChange={(e) =>
                      row && row.onChange && row.onChange(e.target.value)
                    }
                  />
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    );
  };
