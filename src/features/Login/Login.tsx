import { AppBar } from "components/AppBar";
import { Banner } from "components/Banner";
import React from "react";

export const Login: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Banner />
      <h1>Login</h1>
    </div>
  );
};
