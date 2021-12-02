import React from "react";
import { Box, Button } from "@mui/material";
import { useStyles } from "../../../utils/styles.hook";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { UrlsFieldFactory } from "../../../store/policy-editor/visitor/imp/urls-field.factory";
import { UrlsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/urls.visitor-factory";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../../store/policy-editor/policy-editor.hooks";
import { policyEditorJsonVisit } from "../../../store/policy-editor/policy-editor.actions";
import { PolicyJsonReorderServices } from "../../../store/policy-editor/visitor/services/policy-json.reorder.services";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const UrlsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const urlsFieldFactory = useVisitor(UrlsFieldFactory);
  const urlsVisitorFactory = useVisitor(UrlsVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = urlsVisitorFactory.getResolvers();

  const dispatch = usePolicyEditorDispatch();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="URLs">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => urlsFieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add URL
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          settingsName="URLs"
          dnd={true}
          onAddItem={() => urlsFieldFactory.create(undefined)}
          addItemInscription="add URL"
          onDragEnd={(result) =>
            dispatch(
              policyEditorJsonVisit((currentJson) => {
                const urlServices = new PolicyJsonReorderServices(
                  currentJson.policy
                );
                urlServices.changeOrder(
                  "urls",
                  "wildcardOrder",
                  result.source.index,
                  result.destination?.index ?? 0
                );
              })
            )
          }
        />
      </ContentPageControl>
    </Box>
  );
};
