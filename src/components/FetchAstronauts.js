import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onStart } from "../reducers/astronauts";
import { Information } from "./Information";
import { MoreInformation } from "./MoreInformation";
import { LoadingSpinner } from "./LoadingSpinner";
import styled, { keyframes } from "styled-components";
import backgroundImg from "../images/background/pattern.svg";
import backgroundPattern from "../images/concrete.png";
import img1 from "../images/003-Asteroid.svg";
import img2 from "../images/005-astronomy.svg";
import img3 from "../images/007-comet.svg";
import img4 from "../images/009-earth.svg";
import img5 from "../images/017-moon.svg";
import img6 from "../images/020-orbit.svg";
import img7 from "../images/022-planet.svg";
import img8 from "../images/029-spaceship.svg";
import img9 from "../images/031-star.svg";
import { BackgroundIcons } from "./BackgroundIcons";

export const FetchAstronauts = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading);

  const handleOnClick = () => {
    dispatch(onStart());
    setClicked(!clicked);
  };

  return (
    <Main>
      {!clicked && (
        <Button onClick={() => handleOnClick()}>get astro facts</Button>
      )}
      {!isLoading && clicked && <Information />}
      {!isLoading && clicked && <MoreInformation />}
      {isLoading && <LoadingSpinner />}
    </Main>
  );
};

const breathing = keyframes`
0% {
  transform: scale(1);
}

50% {
  transform: scale(0.9);
}

100% {
  transform: scale(1);
}

`;

const Button = styled.button`
  position: relative;
  z-index: 20;
  color: #ffffff95;
  text-align: center;
  margin: 0 auto;
  font-size: 12vw;
  font-weight: bolder;
  text-shadow: -2px -2px 0px #b39ddb, -4px -4px 0px #4a3969, 4px 4px 0px #4a3969,
    5px 5px 0px #d6cfe1;
  background: none;
  border: none;
  animation: ${breathing} 2s ease-in-out infinite;
  cursor: pointer;
  font-family: "Righteous", cursive;

  @media (max-width: 668px) {
    text-shadow: -1px -1px 0px #b39ddb, -2px -2px 0px #4a3969,
      2px 2px 0px #4a3969, 3px 3px 0px #d6cfe1;
  }
`;

const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    url(${backgroundPattern}), url(${backgroundImg});
  background-repeat: repeat;
  background-position: center;

  box-shadow: inset 0px -100px 200px 0px #000000,
    inset 0px 100px 200px 0px #000000, inset -100px 0px 200px 0px #000000,
    inset 100px 0px 200px 0px #000000;

  min-height: 100vh;

  @media (max-width: 668px) {
    box-shadow: inset 0px -50px 100px 0px #000000,
      inset 0px 50px 100px 0px #000000, inset -50px 0px 100px 0px #000000,
      inset 50px 0px 100px 0px #000000;
  }
`;
