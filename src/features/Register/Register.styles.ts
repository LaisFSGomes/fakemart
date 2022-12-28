import { styled } from "@mui/system";
import { Box, Typography} from "@mui/material";
import { Link } from "react-router-dom";

export const RegisterWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#FF002F",
  width: "100%",
  height: "calc(100vh - 80px)",
  "@media (max-width: 600px)": {
    height: "calc(100vh - 60px)",
  },
});
export const Container = styled(Box)({
  width: "50%",
  height: "auto",
  background: "#FFFFFF",
  borderRadius: "10px",
  padding: "5rem 5rem 1rem 5rem",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 1000px)": {
    padding: "3rem",
    width: "70%",
  },
  "@media (max-width: 800px)": {
    padding: "3rem",
    width: "80%",
  },
  "@media (max-width: 500px)": {
    width: "90%",
    padding: "4rem 5%",
  },
});
export const Form = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem 3rem",
  justifyItems: "center",
  "@media (max-width: 800px)": {
    gap: "0.5rem",
  },
  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
  },
});
export const Button = styled("button")({
  gridColumnStart: 1,
  gridColumnEnd: 3,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  background: "#FF002F",
  flexGrow: 0,
  height: "51px",
  width: "40%",
  border: "none",
  borderRadius: "10px",
  color: "#FFFFFF",
  fontFamily: "Raleway, sans-serif",
  fontWeight: 600,
  fontSize: "18px",
  padding: "0em 10%",
  marginTop: "2rem",
  "&:hover": {
    transition: "all 0.5s",
    fontWeight: 700,
    background: "#DD0032",
    cursor: "pointer",
    textShadow: "1px 1px 1px #555",
  },
  "@media (max-width: 600px)": {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    width: "80%",
  },
});
export const LoginWrapper = styled(Typography)({
  alignSelf: "flex-end",
  marginTop: "1.5rem",
  color: "#BD0034",
});
export const LoginLink = styled(Link)({
  color: "#BD0034",
  fontWeight: 600,
  textDecoration: "underline",
});