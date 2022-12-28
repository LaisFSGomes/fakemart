import { Link } from "react-router-dom";
import { Box, IconButton, Menu, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const AppBarWrapper = styled(Box)({
  height: "80px",
  background: "#FFFFFF",
  display: "flex",
  padding: "0 20px",
  "@media (max-width: 600px)": {
    height: "60px",
  },
  "@media (max-width: 775px)": {
    // justifyContent: "space-between",
  },
});
export const AppBarComputer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 775px)": {
    display: "none",
  },
});
export const InfoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "50px",
  "@media (max-width: 1300px)": {
    gap: "30px",
  },
  "@media (max-width: 1100px)": {
    gap: "20px",
  },
  "@media (max-width: 860px)": {
    gap: "10px",
  },
});
export const CategoriesTypography = styled(Typography)({
  fontSize: "18px",
  fontWeight: 600,
  color: "#FF002F",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontFamily: "Raleway, sans-serif",
  "&:hover": {
    color: "#DD0032",
  },
  "@media (max-width: 1300px)": {
    fontSize: "16px",
    letterSpacing: "0.05em",
  },
  "@media (max-width: 1000px)": {
    fontSize: "14px",
    letterSpacing: "0.01em",
  },
});
export const IconsWrapper = styled(Box)({
  display: "flex",
});
export const Icon = styled(Box)({
  cursor: "pointer",
  "& svg": {
    color: "#FF002F",
  },
  "& .MuiBadge-badge": {
    backgroundColor: "#DD0032",
  },
  "&:hover": {
    "& svg": {
      color: "#DD0032",
    },
    "& .MuiBadge-badge": {
      backgroundColor: "#FF002F",
    },
  },
});
export const Login = styled(Link)({
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  textDecoration: "none",
  "@media (max-width: 1100px)": {
    paddingLeft: "15px",
  },
  "@media (max-width: 1000px)": {
    paddingLeft: "10px",
  },
});
export const LoginTypography = styled(Typography)({
  fontSize: "18px",
  fontWeight: 600,
  color: "#FF002F",
  cursor: "pointer",
  fontFamily: "Raleway, sans-serif",
  textTransform: "uppercase",
  letterSpacing: "0.01em",
  "&:hover": {
    color: "#DD0032",
  },
  "@media (max-width: 1300px)": {
    fontSize: "16px",
    letterSpacing: "0.05em",
  },
  "@media (max-width: 1000px)": {
    fontSize: "14px",
    letterSpacing: "0.01em",
  },
});

export const AppBarMobile = styled(Box)({
  display: "none",
  "@media (max-width: 775px)": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
});
export const ButtonBarr = styled(IconButton)({
  "& svg": {
    color: "#C71D1D",
  },
  "&:hover": {
    background: "#FFFFFF",
  },
});
export const MenuMobile = styled(Menu)({});
