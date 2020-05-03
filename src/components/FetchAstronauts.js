import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onStart } from "../reducers/astronauts";
import { Information } from "./Information";
import { LoadingSpinner } from "./LoadingSpinner";
import styled from "styled-components";
import backgroundImg from "../images/background/pattern.svg";
import backgroundPattern from "../images/concrete.png";

export const FetchAstronauts = () => {
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
      {isLoading && <LoadingSpinner />}
    </Main>
  );
};

const Button = styled.button`
  font-size: 50px;
  color: #fff;
  background: #000;
`;

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
    url(${backgroundPattern}), url(${backgroundImg});
  background-repeat: repeat;
  background-position: center;

  height: 100vh;
`;
