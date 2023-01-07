import { Button } from './../Register/Register.styles';
import { styled, Typography, Box } from "@mui/material";

export const ProductImage = styled("img")({
    width: "20%",
});
export const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "50%",
    alignItems: "center",
});
export const ProductName = styled(Typography)({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#000",
});
export const ProductDescription = styled(Typography)({
    fontSize: "1rem",
    color: "#000",
    padding: "1rem 3rem",
});
export const ProductPrice = styled(Typography)({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#000",
});
export const ProductButton = styled(Button)({
    width: "40%",
    height: "3rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#F80032",
    "&:hover": {
        backgroundColor: "#da0033",
    },
})