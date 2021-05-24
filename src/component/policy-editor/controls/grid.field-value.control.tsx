import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

export interface IControlInfo {
  createControl: (props?: any) => JSX.Element;
  createCell: (children: JSX.Element, props?: any) => JSX.Element;
}

export type GridFieldValue = {
  title: string;
  controlInfo: IControlInfo;
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
                  {row.controlInfo.createControl({
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
