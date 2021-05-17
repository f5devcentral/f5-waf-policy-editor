import * as React from "react";

import { useStyles } from "../../../utils/styles.hook";
import Box from "@material-ui/core/Box";
import { GridFieldValueControl } from "../controls/grid-field-value.control";

export const GeneralSettingsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageContent}>
      <GridFieldValueControl
        rows={[
          {
            title: "Policy Name",
            value: "policy name",
          },
          {
            title: "Application Language",
            value: "utf-8",
          },
          {
            title: "Enforcement Mode",
            value: "blocking",
          },
          {
            title: "Template",
            value: "POLICY_TEMPLATE_NGINX_BASE",
          },
        ]}
      />
    </Box>
  );
};
