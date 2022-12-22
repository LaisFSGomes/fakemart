import { AppBar } from "components/AppBar";
import { Banner } from "components/Banner";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Banner />
      <h1>Home</h1>
    </div>
  );
};
