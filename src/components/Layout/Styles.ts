import { Typography as MuiButton, Box as MuiBox } from "@mui/material";
import { styled } from "@stitches/react";

export const Title = styled(MuiButton, {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#fff",
  textTransform: "uppercase",
  textAlign: "center",
  margin: "0 auto",
  padding: "0.5rem",
  cursor: "pointer",
  "&:hover": {
    color: "#b5caf5",
    fontStyle: "revert",
  },
});

export const Button = styled(MuiButton, {
  color: "#6A8FD9",
  cursor: "pointer",
  transition: "color 0.3s",
  padding: "0.5rem 1rem 0.5rem 1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "1.5rem",
  width: "auto",

  "&:hover": {
    color: "#b5caf5",
    fontWeight: "bold",
    borderRadius: "10%",
    border: "1px solid #6A8FD9",
    backgroundColor: "rgba(153, 184, 191, 0.1)",
    transition: "border 0.3s",
  },

  variants: {
    isSelected: {
      true: {
        color: "#99B8BF",
        fontWeight: "bold",
      },
    },
  },
});

export const MainContent = styled(MuiBox, {
  display: "flex",
  position: "absolute",
  top: "0px",
  left: "0px",
  right: "0px",
  bottom: "0px",
  backgroundColor: "#303240",
});
