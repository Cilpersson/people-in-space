import React from "react";
import styled, { keyframes } from "styled-components";

/* Skapa metod som säger hur många astros du vill ha på sidan 
testa vad som händer som 150-ish astros*/

export const BackgroundIcons = ({
  width,
  zIndex,
  opacity,
  src,
  display,
  alt,
  mobileWidth,
}) => {
  const getRandomInt = (min, max, val) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = `${Math.floor(Math.random() * (max - min + 1)) + min}${val}`;
    return random;
  };

  const getRandomDeg = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random % 2 === 0) {
      return "360deg";
    } else {
      return "-360deg";
    }
  };
  return (
    <ImgContainer
      width={width}
      zIndex={zIndex}
      opacity={opacity}
      src={src}
      display={display}
      alt={alt}
      mobileWidth={mobileWidth}
      positionTop={getRandomInt(10, 80, "%")}
      positionLeft={getRandomInt(10, 80, "%")}
      y={getRandomDeg(0, 10)}
      a={getRandomInt(10, 90, "%")}
      b={getRandomInt(10, 90, "%")}
      c={getRandomInt(10, 90, "%")}
      d={getRandomInt(10, 90, "%")}
      e={getRandomInt(10, 90, "%")}
    />
  );
};

const rotating = (y) => keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(${y});
}`;

const movement = (a, b, c, d, e) => keyframes`
0% {
  left: ${a});
  top: ${e});
}
20% {
  left: ${b};
  top: ${d};
}
40% {
  left: ${d};
   top: ${b};
}
60% {
  left: ${e};
  top: ${c};
}
80% {
  left: ${c};
  top: ${d};
}
100% {
  left: ${a};
  top: ${e};
}
`;

const ImgContainer = styled.img`
  margin: 20px;
  width: ${(props) => props.width};
  position: absolute;
  animation: ${(props) => rotating(props.y)} 45s linear infinite,
    ${(props) => movement(props.a, props.b, props.c, props.d, props.e)} 555s
      linear infinite;
  top: ${(props) => props.positionTop};
  left: ${(props) => props.positionLeft};
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
  @media (max-width: 1024px) {
    display: ${(props) => props.display};
  }
  @media (max-width: 668px) {
    width: ${(props) => props.mobileWidth};
  }
`;
