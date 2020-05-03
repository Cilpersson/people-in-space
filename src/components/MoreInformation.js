import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import backgroundPattern from "../images/concrete.png";

export const MoreInformation = () => {
  const allAstronauts = useSelector((store) => store.astronauts.all.people);

  const textStyling = (array) => {
    let styledText = "";
    array.forEach((word, index) => {
      if (array.length - index === 1) {
        styledText += `${word.name}`;
      } else if (array.length - index > 2) {
        styledText += `${word.name}, `;
      } else {
        styledText += `${word.name} & `;
      }
    });
    return styledText;
  };

  console.log(allAstronauts);
  return (
    <Main id="more-information">
      <Wrapper>
        {allAstronauts.map((astronaut) => (
          <WrapperRow>
            <Img src={astronaut.biophoto} alt={astronaut.name} />
            <Wrapper>
              <Text>{`Name: ${astronaut.name}`} </Text>
              <Text>{`Title: ${astronaut.title}`} </Text>
              <Text>
                {`Location: ${
                  astronaut.location === "International Space Station"
                    ? "ISS"
                    : astronaut.location
                }`}{" "}
              </Text>
            </Wrapper>
          </WrapperRow>
        ))}
      </Wrapper>
    </Main>
  );
};

const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #25074c;
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

  min-height: 100vh;
  width: 100vw;

  box-shadow: inset 0px 30px 60px 60px #000000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

const Text = styled.h2`
  position: relative;
  z-index: 25;
  color: #e0d6f0;
  margin: 0 0 10px 0;
  font-size: 2vw;
  font-weight: bolder;
  font-family: "Righteous", cursive;
  letter-spacing: 5px;
  text-shadow: -2px -2px 0px #3b2563, 2px 2px 0px #4a3969;
`;

const Img = styled.img`
  height: 150px;
  border-radius: 10px;
  margin-right: 15px;
`;
