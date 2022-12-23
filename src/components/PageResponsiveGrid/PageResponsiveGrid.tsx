import React from "react";
import { Container } from "./PageResponsiveGrid.styles";

interface PageResponsiveGridProps {
  className?: string;
  children?: React.ReactNode;
}
export const PageResponsiveGrid: React.FC<PageResponsiveGridProps> = ({
  className,
  children,
}) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
};
