import React from "react";
import { LogoText, LogoWrapper } from "./Logo.styles";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
export const Logo: React.FC = () => {
  return (
    <LogoWrapper >
    <WhatshotRoundedIcon />
    <LogoText variant="body1" >Fakemart</LogoText>
  </LogoWrapper>
  );
};