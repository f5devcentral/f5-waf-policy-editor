import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../../store/policy-editor/policy-editor.hooks";
import { Box } from "@mui/material";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { policyEditorJsonVisit } from "../../../store/policy-editor/policy-editor.actions";
import { PolicyJsonReorderServices } from "../../../store/policy-editor/visitor/services/policy-json.reorder.services";
import { CookiesFieldFactory } from "../../../store/policy-editor/visitor/imp/cookies-field.factory";
import { CookiesFieldVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/cookies-field.visitor-factory";
import AddIcon from "@mui/icons-material/Add";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const CookiesPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();

  const cookiesFieldFactory = useVisitor(CookiesFieldFactory);
  const cookiesVisitorsFactory = useVisitor(CookiesFieldVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = cookiesVisitorsFactory.getResolvers();

  const dispatch = usePolicyEditorDispatch();

  return (
    <Box className={classes.pageContent}>
      <ToolbarPageControl headerText="Cookies">
        <ToolbarButtonPageControl
          variant="contained"
          color="primary"
          onClick={() => cookiesFieldFactory.create(undefined)}
          startIcon={<AddIcon />}
        >
          Add Cookie
        </ToolbarButtonPageControl>
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          settingsName="Cookies"
          dnd={true}
          onAddItem={() => cookiesFieldFactory.create(undefined)}
          addItemInscription="add Cookie"
          onDragEnd={(result) =>
            dispatch(
              policyEditorJsonVisit((currentJson) => {
                const urlServices = new PolicyJsonReorderServices(
                  currentJson.policy
                );
                urlServices.changeOrder(
                  "cookies",
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
