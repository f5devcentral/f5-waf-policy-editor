import React, { useEffect, useState } from "react";
import { useStyles } from "../../utils/styles.hook";
import { CurrentPolicyPaneComponent } from "../shared/current-policy-pane.component";
import SplitPane, { Pane } from "react-split-pane";
import { usePolicyEditorState } from "../../store/policy-editor/policy-editor.hooks";

export const PolicyConvertComponent: React.FunctionComponent = () => {
  const styles = useStyles();

  const { showDefaultPolicy } = usePolicyEditorState();
  const [pageHeight, setPageHeight] = useState<number>(500);
  const [maxSize, setMaxSize] = useState<number>(window.innerHeight - 200);

  useEffect(() => {
    function handleResize() {
      setMaxSize(window.innerHeight - 200);
      setPageHeight(Math.min(window.innerHeight - 200, pageHeight));
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <React.Fragment>
      <div className={styles.editorContainer}></div>
      <SplitPane
        defaultSize={500}
        maxSize={maxSize}
        split="horizontal"
        onChange={(newSize) => {
          setPageHeight(newSize);
        }}
      >
        <Pane style={{ overflow: "scroll" }}></Pane>
        <Pane
          style={{
            height: `calc(100vh - 122px - ${pageHeight}px)`,
            overflow: "scroll",
          }}
        >
          <CurrentPolicyPaneComponent
            title="JSON to Convert"
            fullPolicy={showDefaultPolicy}
          />
        </Pane>
      </SplitPane>
    </React.Fragment>
  );
};
