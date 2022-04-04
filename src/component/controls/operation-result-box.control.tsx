import React from "react";
import { styled } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { CircularProgress } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export enum OperationResultBoxIcon {
  success,
  failed,
  pending,
  password,
}

export type OperationResultBoxProps = {
  icon: OperationResultBoxIcon;
  header: string;
  text: string;
};

type FrameProps = {
  icon: OperationResultBoxIcon;
};

const Container = styled("div")({
  marginLeft: "24px",
  marginRight: "24px",
  borderRadius: "8px",
  borderTop: "1px solid #F7F8FA",
  borderRight: "1px solid #F7F8FA",
  boxShadow:
    "0px 0px 2px rgba(72, 86, 101, 0.24), 0px 2px 4px rgba(72, 86, 101, 0.12)",
});

const Frame = styled("div")<FrameProps>(({ icon }) => ({
  display: "flex",
  minHeight: "60px",
  minWidth: "475px",
  borderRadius: "4px",
  borderLeft:
    icon === OperationResultBoxIcon.success
      ? "11px solid #25BD57"
      : icon === OperationResultBoxIcon.failed
      ? "11px solid #F94627"
      : "11px solid #4152B4;",
}));

const Header = styled("div")({
  color: "#0F1E57",
  fontSize: "14px",
  fontWeight: "bold",
  marginTop: "9px",
});
const Text = styled("div")({
  color: "#6C778C",
  fontSize: "12px",
  lineHeight: "20px",
});

export const OperationResultBoxControl: React.FunctionComponent<OperationResultBoxProps> =
  ({ icon, header, text }) => {
    return (
      <Container>
        <Frame icon={icon}>
          <div style={{ width: "43px", paddingLeft: "9px", paddingTop: "8px" }}>
            {icon === OperationResultBoxIcon.success && (
              <CheckCircleIcon sx={{ color: "#35D068" }} />
            )}
            {icon === OperationResultBoxIcon.failed && (
              <ErrorIcon sx={{ color: "#F94627" }} />
            )}
            {icon === OperationResultBoxIcon.pending && (
              <CircularProgress size={24} />
            )}
            {icon === OperationResultBoxIcon.password && <LockIcon />}
          </div>
          <div>
            <Header>{header}</Header>
            <Text>{text}</Text>
          </div>
        </Frame>
      </Container>
    );
  };
