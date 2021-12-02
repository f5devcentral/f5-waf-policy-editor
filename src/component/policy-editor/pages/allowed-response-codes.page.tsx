import { useStyles } from "../../../utils/styles.hook";
import { useVisitor } from "../../../store/policy-editor/visitor/interface/base.visitor";
import { usePolicyEditorState } from "../../../store/policy-editor/policy-editor.hooks";
import { Box } from "@mui/material";
import { GridTableValueControl } from "../controls/grid.table-value.control";
import * as React from "react";
import { ResponseCodesFactory } from "../../../store/policy-editor/visitor/imp/response-codes.factory";
import { ResponseCodesVisitorFactory } from "../../../store/policy-editor/visitor/factory/imp/response-codes.visitor-factory";
import { ExpandMore } from "@mui/icons-material";
import { useRef, useState } from "react";
import { MenuSearchPopupControl } from "../controls/menu-search-popup.control";
import { allServerResponseCodes } from "../../../model/nginx-const/response-codes.const";
import { ToolbarPageControl } from "../controls/page-controls/toolbar.page-control";
import { ToolbarButtonPageControl } from "../controls/page-controls/toolbar-button.page-control";
import { ContentPageControl } from "../controls/page-controls/content.page-control";

export const AllowedResponseCodesPage: React.VoidFunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const fieldFactory = useVisitor(ResponseCodesFactory);
  const visitorFactory = useVisitor(ResponseCodesVisitorFactory);

  const { showDefaultPolicy } = usePolicyEditorState();
  const btnRef = useRef<null | HTMLDivElement>(null);

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
      <ToolbarPageControl headerText="Response codes">
        <div ref={btnRef}>
          <ToolbarButtonPageControl
            variant="contained"
            color="primary"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            endIcon={<ExpandMore />}
          >
            Add Response Code
          </ToolbarButtonPageControl>
        </div>
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
      </ToolbarPageControl>
      <ContentPageControl>
        <GridTableValueControl
          titles={titles}
          visitors={showDefaultPolicy ? [...visitors, ...defValues] : visitors} //.sort((a, b) => stringCompare(a.key(), b.key()))}
          onAddItem={() => btnRef.current && setAnchorEl(btnRef.current)}
          addItemInscription="add Response Code"
        />
      </ContentPageControl>
    </Box>
  );
};
