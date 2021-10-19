import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { Box, Button } from "@material-ui/core";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import * as React from "react";
import { ResponseCodesFactory } from "../../../store/policy-editor/visitor/imp/response-codes.factory";
import { ResponseCodesVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/response-codes.visitor-factory";
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import { MenuSearchPopupControl } from "../controls/menu-search-popup.control";
import { allServerResponseCodes } from "../../../model/nginx-const/response-codes.const";

export const AllowedResponseCodesPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const fieldFactory = useVisitor(ResponseCodesFactory);
  const visitorFactory = useVisitor(ResponseCodesVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();

  const {
    titles,
    visitors,
    default: defValues,
  } = visitorFactory.getResolvers();

  function handleSelect(item: number) {
    fieldFactory.create(item);
    setAnchorEl(null);
  }

  return (
    <Box className={classes.pageContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Add Response Code
        <ExpandMore />
      </Button>
      <MenuSearchPopupControl
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        items={allServerResponseCodes.map(
          (x) => `${x.code} - ${x.description}`
        )}
        onClose={() => {
          setAnchorEl(null);
        }}
        onSelect={(_, index) =>
          handleSelect(allServerResponseCodes[index].code)
        }
      />

      <Box>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors} //.sort((a, b) => stringCompare(a.key(), b.key()))}
        />
      </Box>
    </Box>
  );
};
