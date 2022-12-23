import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const HomeMain = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  padding: "1rem 4rem",
  "@media (max-width: 1200px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@media (max-width: 510px)": {
    gridTemplateColumns: "1fr",
  },
});