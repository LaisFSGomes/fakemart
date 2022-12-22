import { AppBar } from "components/AppBar";
import { Banner } from "components/Banner";
import React from "react";

export const Category: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Banner />
      <h1>Category</h1>
    </div>
  );
};
