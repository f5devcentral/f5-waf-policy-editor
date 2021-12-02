import React from "react";
import { PolicyEditorPageEnum } from "../../../store/policy-editor/policy-editor.types";
import { PolicyEditorPageFactory } from "./policy-editor.page.factory";

export type CombinedPageComponentProps = {
  pages: PolicyEditorPageEnum[];
};

export const CombinedPageComponent: React.FunctionComponent<CombinedPageComponentProps> =
  ({ pages }) => {
    const pageFactory = new PolicyEditorPageFactory();

    const pageComponents = pages.map((p) => {
      return <div>{pageFactory.createPage(p)}</div>;
    });

    return <React.Fragment>{pageComponents}</React.Fragment>;
  };
