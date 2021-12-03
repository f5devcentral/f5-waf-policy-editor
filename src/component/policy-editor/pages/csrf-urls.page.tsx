import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { CsrfUrlsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/csrf-urls.visitor-factory";
import { CsrfUrlsFieldFactory } from "../../../store/policy-editor/visitor/imp/csrf-urls-field.factory";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../../store/policy-editor/policy-editor.hooks";
import { Box } from "@mui/material";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { policyEditorJsonVisit } from "../../../store/policy-editor/policy-editor.actions";
import { PolicyJsonReorderServices } from "../../../store/policy-editor/visitor/services/policy-json.reorder.services";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";

export const CsrfUrlsPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const csrfUrlsFieldFactory = useVisitor(CsrfUrlsFieldFactory);
  const csrfUrlsVisitorsFactory = useVisitor(CsrfUrlsVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = csrfUrlsVisitorsFactory.getResolvers();

  const dispatch = usePolicyEditorDispatch();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="CSRF URLs">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => csrfUrlsFieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add CSRF URL
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          settingsName="CSRF URLs"
          onAddItem={() => csrfUrlsFieldFactory.create(undefined)}
          addItemInscription="add CSRF URL"
          dnd={true}
          onDragEnd={(result) =>
            dispatch(
              policyEditorJsonVisit((currentJson) => {
                const urlServices = new PolicyJsonReorderServices(
                  currentJson.policy
                );
                urlServices.changeOrder(
                  "csrf-urls",
                  "wildcardOrder",
                  result.source.index,
                  result.destination?.index ?? 0
                );
              })
            )
          }
        />
      </Box>
    </Box>
  );
};
