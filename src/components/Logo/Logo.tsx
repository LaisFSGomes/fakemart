import React from "react";
import { LogoText, LogoWrapper } from "./Logo.styles";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import { PagesRoutes } from "features/constants";
export const Logo: React.FC = () => {
  return (
    <LogoWrapper to = {PagesRoutes.home}>
    <WhatshotRoundedIcon />
    <LogoText variant="body1" >Fakemart</LogoText>
  </LogoWrapper>
  );
};