import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Container = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  padding: "1rem 5rem",
  "@media (max-width: 1200px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr 1fr",
    padding: "1rem",
  },
  "@media (max-width: 560px)": {
    gridTemplateColumns: "1fr",
    padding: "1rem 2rem",
  },
  "@media (max-width: 360px)": {
    gridTemplateColumns: "1fr",
    padding: "0.5rem 0.2rem",
  },
});
