import React from "react";
import styled, { keyframes } from "styled-components";
import spinner from "../images/034-uranus.svg";

export const LoadingSpinner = () => {
  return <Loader src={spinner} />;
};

const rotating = keyframes`
100% {
  transform: rotate(360deg);
}

}`;

const Loader = styled.img`
  width: 100px;
  animation: ${rotating} 2.5s linear infinite;
`;
