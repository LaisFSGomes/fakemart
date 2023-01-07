import React from "react";
import { Container } from "./PageResponsiveFlex.styles";

interface PageResponsiveFlexProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageResponsiveFlex: React.FC<PageResponsiveFlexProps> = ({
  className,
  children,
}) => {
  return (
    <Container className={className}>
        {children}
    </Container>
  );
};
