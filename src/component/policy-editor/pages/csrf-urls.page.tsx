import React from "react";
import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { CsrfUrlsVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/csrf-urls.visitor-factory";
import { CsrfUrlsFieldFactory } from "../../../store/policy-editor/visitor/imp/csrf-urls-field.factory";
import {
  usePolicyEditorDispatch,
  usePolicyEditorState,
} from "../../../store/policy-editor/policy-editor.hooks";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import { policyEditorJsonVisit } from "../../../store/policy-editor/policy-editor.actions";
import { PolicyJsonReorderServices } from "../../../store/policy-editor/visitor/services/policy-json.reorder.services";

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => csrfUrlsFieldFactory.create(undefined)}
      >
        Add CSRF URL
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          settingsName="CSRF URLs"
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
