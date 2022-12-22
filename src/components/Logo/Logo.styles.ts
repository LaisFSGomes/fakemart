import { styled } from "@mui/system";
// import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

export const LogoWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  width: "180px",
  cursor: "pointer",
  "& svg": {
    color: "#FF002F",
    fontSize: "2em",
  },
  "&:hover": {
    "& svg": {
      transition: "all 0.5s",
      color: "#DD0032",
    },
    "& p": {
      transition: "all 0.5s",
      color: "#DD0032",
    },
  },
  "@media (min-width: 0px) and (max-width: 830px)": {
    flexDirection: "column",
    width: "100px",
    "& img": {
      width: "30px",
    },
    "& p": {
      fontSize: "15px",
    },
  },
});
export const LogoText = styled(Typography)({
  fontSize: 24,
  fontWeight: 800,
  color: "#FF002F",
  lineHeight: "30px",
  maxWidth: "84px",
  marginLeft: "5px",
});
