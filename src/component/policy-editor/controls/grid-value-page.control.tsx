import { VisitorFactoryBase } from "../../../store/policy-editor/visitor/base/visitor-factory.base";
import { BaseFieldResolverVisitorFactory } from "../../../store/policy-editor/visitor/factory/interface/base.field-resolver-visitor-factory";
import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { Box } from "@mui/material";
import { GridTableValueControl } from "./grid.table-value.control";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarPageControl } from "./page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "./page-controls/toolbar-button.page-control";
import { ContentPageControl } from "./page-controls/content.page-control";

export type GridValuesPageProps = {
  fieldFactory: VisitorFactoryBase<any>;
  fieldsVisitorFactory: BaseFieldResolverVisitorFactory;
  addButtonTitle: string;
  settingsName: string;
  defaultValueFactory: any;
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
        <ToolbarPageControl headerText={settingsName}>
          <ToolbarButtonPageControl
            variant="contained"
            color="primary"
            onClick={() => fieldFactory.create(undefined)}
            startIcon={<AddIcon />}
          >
            {addButtonTitle}
          </ToolbarButtonPageControl>
        </ToolbarPageControl>

        <ContentPageControl>
          <GridTableValueControl
            onAddItem={() => fieldFactory.create(undefined)}
            addItemInscription={`add ${settingsName}`}
            titles={titles}
            visitors={
              showDefaultPolicy ? [...visitors, ...defValues] : visitors
            }
            settingsName={settingsName}
          />
        </ContentPageControl>
      </Box>
    );
  };
