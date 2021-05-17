import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
    return (
      <Grid container spacing={1}>
        <Grid container item spacing={1} xs={12}>
          {rows.map((r, index) => (
            <React.Fragment key={index}>
              <Grid item xs={4}>
                <Typography>{r.title}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{r.value}</Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    );
  };
