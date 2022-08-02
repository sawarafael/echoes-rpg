import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";
import { styled } from "@stitches/react";

export const StyledBox = styled(MuiBox, {
  width: "100%",
  height: "",
  wordBreak: "normal",
  wordWrap: "break-word",
  backgroundColor: "transparent",
  margin: 0,
  padding: 0,
  marginTop: "25rem",
  border: 0,
  outline: 0,
});

export const Title = styled(MuiTypography, {
  color: "#fff",
  textAlign: "center",
  textShadow: "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000",
});

export const Subtitle = styled(MuiTypography, {
  color: "#fff",
  textAlign: "justify",
  lineHeight: "1.5",
  width: "928px",
  height: "72px",
  textShadow: "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000",
});

export const ContentBox = styled(MuiBox, {
  width: "auto",
  height: "1107px",
  marginTop: "80px;",
});

export const BackgroundChar = styled("img", {
  width: "auto",
  display: "block",
  float: "right",
  height: "450px",
  webKitBoxShadow: "0 0 0 0 rgba(0, 0, 0, 0.5)",
  mozBoxShadow: "0 0 0 0 rgba(0, 0, 0, 0.5)",
});

export const BackDesenvChar = styled("img", {});
