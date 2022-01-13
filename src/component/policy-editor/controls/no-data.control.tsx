import Box from "@mui/material/Box";
import React from "react";

import { ReactComponent as NoDataImg } from "../../../resources/img/no-data.svg";
import { Link } from "@mui/material";

export type NoDataControlProps = {
  text?: string;
  addItemInscription?: string;
  onAddItem?: () => void;
};

export const NoDataControl: React.FunctionComponent<NoDataControlProps> = ({
  text,
  addItemInscription,
  onAddItem,
}) => {
  return (
    <Box
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box
          style={{
            flex: "auto",
          }}
        />
        <Box>
          <NoDataImg />
        </Box>
        <Box style={{ alignSelf: "center" }}>
          <div
            style={{
              fontSize: "20px",
              lineHeight: "26px",
              paddingLeft: "58px",
              color: "#485665",
              fontWeight: "500",
            }}
          >
            No Data
          </div>
          {text ? (
            <div
              style={{
                paddingLeft: "58px",
                color: "#485665",
              }}
            >
              {text}
            </div>
          ) : (
            <div
              style={{
                paddingLeft: "58px",
                color: "#485665",
              }}
            >
              To start,{" "}
              <Link
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (onAddItem) {
                    onAddItem();
                  }
                }}
              >
                {addItemInscription}
              </Link>
            </div>
          )}
        </Box>
        <Box
          style={{
            flex: "auto",
          }}
        />
      </Box>
    </Box>
  );
};
