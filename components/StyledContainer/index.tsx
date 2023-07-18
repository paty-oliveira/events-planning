import React from "react";
import { Container } from "./styles";
import { StyledContainerProps } from "./types";

const StyledContainer: React.FunctionComponent<StyledContainerProps> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};

export default StyledContainer;
