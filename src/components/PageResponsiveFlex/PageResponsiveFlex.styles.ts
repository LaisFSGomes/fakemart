import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "row",
  padding: "1rem 5rem",
  gap: "5rem",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 1200px)": {},
  "@media (max-width: 900px)": {},
  "@media (max-width: 560px)": {},
  "@media (max-width: 360px)": {},
});
