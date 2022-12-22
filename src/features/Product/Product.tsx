import { AppBar } from "components/AppBar";
import { Banner } from "components/Banner";
import React from "react";

export const Product: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Banner />
      <h1>Product</h1>
    </div>
  );
};
