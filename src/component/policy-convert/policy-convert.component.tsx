import React, { useEffect, useState } from "react";
import { useStyles } from "../../utils/styles.hook";
import { CurrentPolicyPaneComponent } from "../shared/current-policy-pane.component";
import SplitPane, { Pane } from "react-split-pane";
import { usePolicyEditorState } from "../../store/policy-editor/policy-editor.hooks";
import { usePolicyConvertState } from "../../store/policy-convert/policy-convert.hooks";
import { ConvertErrorPage } from "./pages/convert-error.page";
import { PolicyConvertStageEnum } from "../../store/policy-convert/policy-convert.types";
import { StartConvertPage } from "./pages/start-convert.page";
import { ConvertProgressPage } from "./pages/convert-progress.page";
import { ConvertSuccessPage } from "./pages/convert-success.page";
import { ToolbarButtonControl } from "../controls/toobar-button.component";
import { policyConvertStrategy } from "../../store/policy-convert/strategy/policy-convert.strategy";
import { useDispatch } from "react-redux";
import TransformIcon from "@mui/icons-material/Transform";
import { ConvertGatedPage } from "./pages/convert-gated.page";

export const PolicyConvertComponent: React.FunctionComponent = () => {
  const styles = useStyles();
  const thunkDispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState<any>();
  const { convertStage } = usePolicyConvertState();
  const { showDefaultPolicy } = usePolicyEditorState();
  const [pageHeight, setPageHeight] = useState<number>(500);
  const [maxSize, setMaxSize] = useState<number>(window.innerHeight - 200);

  useEffect(() => {
    const cp = (() => {
      switch (convertStage) {
        case PolicyConvertStageEnum.convertGated:
          return <ConvertGatedPage />;
        case PolicyConvertStageEnum.convertError:
          return <ConvertErrorPage />;
        case PolicyConvertStageEnum.convertNotStarted:
          return <StartConvertPage />;
        case PolicyConvertStageEnum.convertPending:
          return <ConvertProgressPage />;
        case PolicyConvertStageEnum.convertSuccess:
          return <ConvertSuccessPage />;
        default:
          return <StartConvertPage />;
      }
    })();

    setCurrentPage(cp);
  }, [convertStage]);

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
        <Pane style={{ overflowY: "scroll" }}>{currentPage}</Pane>
        <Pane
          style={{
            height: `calc(100vh - 122px - ${pageHeight}px)`,
            overflowY: "scroll",
          }}
        >
          <CurrentPolicyPaneComponent
            title="Policy JSON"
            fullPolicy={showDefaultPolicy}
            toolbarComponent={
              <div style={{ textAlign: "right", width: "100%" }}>
                <ToolbarButtonControl
                  disabled={
                    convertStage === PolicyConvertStageEnum.convertGated
                  }
                  startIcon={<TransformIcon sx={{ minWidth: "15px" }} />}
                  variant="contained"
                  onClick={() => {
                    thunkDispatch(policyConvertStrategy());
                  }}
                >
                  Convert
                </ToolbarButtonControl>
              </div>
            }
          />
        </Pane>
      </SplitPane>
    </React.Fragment>
  );
};
