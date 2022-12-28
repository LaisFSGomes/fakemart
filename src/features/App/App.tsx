import React from "react";
import { Router } from "components";
import { Box } from "@mui/system";
import { CartProvider } from "contexts";

export const App: React.FC = () => (
  <Box>
    <CartProvider>
      <Router />
    </CartProvider>
  </Box>
);
