import { VisitorFactoryBase } from "../../../store/policy-editor/visitor/base/visitor-factory.base";
import { BaseFieldResolverVisitorFactory } from "../../../store/policy-editor/visitor/factory/interface/base.field-resolver-visitor-factory";
import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "./grid.table-value.control";

export type GridValuesPageProps = {
  fieldFactory: VisitorFactoryBase<any>;
  fieldsVisitorFactory: BaseFieldResolverVisitorFactory;
  addButtonTitle: string;
  settingsName: string;
  defaultValueFactory: () => any;
};

export const GridValuesPageControl: React.FunctionComponent<GridValuesPageProps> =
  ({
    fieldFactory,
    fieldsVisitorFactory,
    addButtonTitle,
    settingsName,
    defaultValueFactory,
  }) => {
    const classes = useStyles();

    const {
      titles,
      visitors,
      default: defValues,
    } = fieldsVisitorFactory.getResolvers();

    const { showDefaultPolicy } = usePolicyEditorState();

    return (
      <Box className={classes.pageContent}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => fieldFactory.create(defaultValueFactory())}
        >
          {addButtonTitle}
        </Button>
        <Box>
          <GridTableValueControl
            titles={titles}
            visitors={
              showDefaultPolicy ? [...visitors, ...defValues] : visitors
            }
            settingsName={settingsName}
          />
        </Box>
      </Box>
    );
  };
