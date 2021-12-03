import React from "react";
import { PolicyEditorPageEnum } from "../../../store/policy-editor/policy-editor.types";
import { PolicyEditorPageFactory } from "./policy-editor.page.factory";
import { Divider } from "@mui/material";

export type CombinedPageComponentProps = {
  pages: PolicyEditorPageEnum[];
};

export const CombinedPageComponent: React.FunctionComponent<CombinedPageComponentProps> =
  ({ pages }) => {
    const pageFactory = new PolicyEditorPageFactory();

    const pageComponents = pages.map((p, index) => {
      return (
        <div>
          {pageFactory.createPage(p)}
          {index === pages.length - 1 ? undefined : (
            <Divider sx={{ margin: "8px" }} />
          )}
        </div>
      );
    });

    return <React.Fragment>{pageComponents}</React.Fragment>;
  };
