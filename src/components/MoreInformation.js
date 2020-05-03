import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import backgroundPattern from "../images/concrete.png";

export const MoreInformation = () => {
  const allAstronauts = useSelector((store) => store.astronauts.all.people);

  console.log(allAstronauts);
  return <Main></Main>;
};

const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #020646;
  background-image: radial-gradient(
      #00000099,
      #00000099,
      #00000030,
      #00000099,
      #00000099,
      #00000030,
      #00000099,
      #00000099
    ),
    url(${backgroundPattern});
  background-repeat: repeat;
  background-position: center;

  height: 100vh;
  width: 100vw;

  box-shadow: inset 0px 30px 60px 60px #000000;
`;
