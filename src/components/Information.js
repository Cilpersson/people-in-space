import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import { v4 as uuidv4 } from "uuid";
import backgroundPattern from "../images/concrete.png";
import backgroundImg from "../images/background/pattern.svg";
import downbutton from "../images/030-spaceship.svg";
import astronautImg from "../images/004-astronaut.svg";
import img1 from "../images/003-Asteroid.svg";
import img2 from "../images/005-astronomy.svg";
import img3 from "../images/007-comet.svg";
import img4 from "../images/009-earth.svg";
import img5 from "../images/017-moon.svg";
import img6 from "../images/020-orbit.svg";
import img7 from "../images/022-planet.svg";
import img8 from "../images/029-spaceship.svg";
import img9 from "../images/031-star.svg";

export const Information = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const allAstronauts = useSelector((store) => store.astronauts.all.people);

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

  const titleText = (allAstronauts) => {
    const nbrOfAstronauts = allAstronauts.length;
    if (nbrOfAstronauts === 0) {
      return "There are no earthlings in space right now.".toUpperCase();
    } else if (nbrOfAstronauts === 1) {
      return `There is ${nbrOfAstronauts} astronaut in space right now!`.toUpperCase();
    } else {
      return `There are ${nbrOfAstronauts} astronauts in space right now!`.toUpperCase();
    }
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Title width="fit-content" height="fit-content">
            {titleText(allAstronauts)}
          </Title>
        </Container>
        {images.map((img) => (
          <ImgContainer
            width="45px"
            zIndex="5"
            opacity="0.7"
            src={img}
            display="block"
            alt="Space cartoon"
            mobileWidth="30px"
            key={uuidv4()}
            positionTop={getRandomInt(10, 80, "%")}
            positionLeft={getRandomInt(10, 80, "%")}
            y={getRandomDeg(0, 10)}
            a={getRandomInt(10, 90, "%")}
            b={getRandomInt(10, 90, "%")}
            c={getRandomInt(10, 90, "%")}
            d={getRandomInt(10, 90, "%")}
            e={getRandomInt(10, 90, "%")}
          />
        ))}
        {images.map((img) => (
          <ImgContainer
            width="45px"
            zIndex="5"
            opacity="0.7"
            src={img}
            display="none"
            alt="Space cartoon"
            key={uuidv4()}
            positionTop={getRandomInt(10, 80, "%")}
            positionLeft={getRandomInt(10, 80, "%")}
            y={getRandomDeg(0, 10)}
            a={getRandomInt(10, 90, "%")}
            b={getRandomInt(10, 90, "%")}
            c={getRandomInt(10, 90, "%")}
            d={getRandomInt(10, 90, "%")}
            e={getRandomInt(10, 90, "%")}
          />
        ))}
        <Container width="100%" height="100%">
          {allAstronauts.map((astronaut, index) => (
            <ImgContainer
              width="130px"
              zIndex="20"
              opacity="1"
              src={astronautImg}
              display="block"
              alt="Cartoon astronaut"
              mobileWidth="90px"
              key={uuidv4()}
              positionTop={getRandomInt(10, 80, "%")}
              positionLeft={getRandomInt(10, 80, "%")}
              y={getRandomDeg(0, 10)}
              a={getRandomInt(10, 90, "%")}
              b={getRandomInt(10, 90, "%")}
              c={getRandomInt(10, 90, "%")}
              d={getRandomInt(10, 90, "%")}
              e={getRandomInt(10, 90, "%")}
            />
          ))}
        </Container>
      </Wrapper>
      {allAstronauts.length !== 0 && (
        <A zIndex="30">
          <Link to="more-information" smooth={true}>
            <Img src={downbutton} alt="rocket" />
          </Link>
        </A>
      )}
    </>
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

const scale = keyframes`
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

const Wrapper = styled.section`
  padding: 30px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;

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

  @media (max-width: 668px) {
    box-shadow: inset 0px -50px 100px 0px #000000,
      inset 0px 50px 100px 0px #000000, inset -50px 0px 100px 0px #000000,
      inset 50px 0px 100px 0px #000000;
  }
`;

const Container = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const Title = styled.h1`
  position: relative;
  z-index: 20;
  color: #ffffff95;
  text-align: center;
  margin: 0 auto;
  font-size: 6vw;
  font-weight: bolder;
  font-family: "Righteous", cursive;
  text-shadow: -2px -2px 0px #b39ddb, -4px -4px 0px #4a3969, 4px 4px 0px #4a3969,
    5px 5px 0px #d6cfe1;

  @media (max-width: 668px) {
    text-shadow: -1px -1px 0px #b39ddb, -2px -2px 0px #4a3969,
      2px 2px 0px #4a3969, 3px 3px 0px #d6cfe1;
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

const Img = styled.img`
  width: 90px;
  transform: rotate(180deg);

  @media (max-width: 668px) {
    width: 50px;
  }
`;

const floating = keyframes`
0% {
  bottom: 0;
}

50% {
  bottom: 15px;
}

100% {
  bottom: 0;
}

`;

const A = styled.div`
  position: absolute;
  z-index: ${(props) => props.zIndex};
  bottom: 0;

  background: none;
  border: none;
  cursor: pointer;
  animation: ${floating} 2s ease-in-out infinite;

  &:hover {
    animation: ${scale} 1s linear infinite, ${floating} 2s ease-in-out infinite;
  }
`;
