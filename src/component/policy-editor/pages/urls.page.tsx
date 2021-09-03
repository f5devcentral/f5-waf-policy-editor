import React from "react";
import { Box, Button } from "@material-ui/core";
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
import { JsonUrlsServices } from "../../../store/policy-editor/visitor/services/json-urls.services";
import { stringCompare } from "../../../utils/string-compare.util";

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => urlsFieldFactory.create()}
      >
        Add URL
      </Button>
      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors}
          settingsName="URLs"
          dnd={true}
          onDragEnd={(result) =>
            dispatch(
              policyEditorJsonVisit((currentJson) => {
                const urlServices = new JsonUrlsServices(currentJson.policy);
                urlServices.changeOrder(
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
