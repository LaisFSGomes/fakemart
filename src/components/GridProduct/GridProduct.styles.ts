import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const CardWrapper = styled(Box)({
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  margin: "1rem",
  background: "#FFFFFF",
  padding: "1rem",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  "&:hover": {
    transition: "all 0.5s",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
    "& h1": {
      color: "#DD0032",
    },
    "& p + p": {
      fontWeight: 550,
    },
  },
});
export const Image = styled("img")({
  height: 210,
  width: 200,
  cursor: "pointer",
});
export const ProductTitle = styled(Typography)({
  fontFamily: "Raleway, s",
  fontWeight: 600,
  fontSize: "1.1em",
  color: "#000000",
  textAlign: "justify",
  margin: "1em 0em",
});
export const ProductDescription = styled(Typography)({
  fontWeight: 300,
  fontSize: "1em",
  lineHeight: "1rem",
  letterSpacing: 0,
  textAlign: "left",
  color: "#272727",
});
export const ProductPrice = styled(Typography)({
  fontSize: 18,
  fontWeight: 500,
  lineHeight: "29px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#222",
  margin: "0.5em 0em",
});
export const Button = styled("button")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  background: "#FF002F",
  flexGrow: 0,
  height: "51px",
  width: "80%",
  border: "none",
  borderRadius: "10px",
  color: "#FFFFFF",
  fontFamily: "Raleway, sans-serif",
  fontWeight: 600,
  fontSize: "18px",
  padding: "0em 10%",
  "&:hover": {
    transition: "all 0.5s",
    fontWeight: 700,
    background: "#DD0032",
    cursor: "pointer",
    textShadow: "1px 1px 1px #555",
  },
});
