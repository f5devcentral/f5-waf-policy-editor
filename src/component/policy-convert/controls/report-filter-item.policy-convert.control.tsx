import React from "react";
import { styled } from "@mui/system";

export type ReportFilterItemPolicyConvertProps = {
  value?: number;
  text: string;
  color?: string;
  active: boolean;
  onClick: () => void;
};

const ItemContainer = styled("div")(({ color }) => {
  return {
    width: "150px",
    height: "60px",
    border: "1px solid #F7F8FA",
    background: "#FFFFFF",
    boxSizing: "border-box",
    boxShadow:
      "0px 0px 2px rgba(72, 86, 101, 0.24), 0px 2px 4px rgba(72, 86, 101, 0.12)",
    borderRadius: "4px",
    textAlign: "center",
    paddingTop: "7px",
    marginLeft: "24px",
    marginTop: "8px",
    cursor: "pointer",
  };
});

type NumberSpanProps = {
  color?: string;
};

const NumberSpan = styled("span")<NumberSpanProps>(({ color }) => {
  return {
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "24px",
    color: color ?? "#122159",
  };
});

const TextSpan = styled("span")({
  fontSize: "10px",
  lineHeight: "12px",
  color: "122159",
});

export const ReportFilterItemPolicyConvertControl: React.FunctionComponent<ReportFilterItemPolicyConvertProps> =
  ({ value, text, color, active, onClick }) => {
    const hasValue = value !== undefined && value > 0;

    return (
      <ItemContainer onClick={() => onClick()}>
        <NumberSpan color={active ? (hasValue ? color : undefined) : "#C4C4C4"}>
          {hasValue ? value : "--"}
        </NumberSpan>
        <br /> <TextSpan>{text}</TextSpan>
      </ItemContainer>
    );
  };
