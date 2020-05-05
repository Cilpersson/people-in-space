import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Footer } from "./Footer";

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

  return (
    <Main id="more-information">
      <Wrapper>
        <Title>
          {textStyling(allAstronauts)}{" "}
          {allAstronauts.length === 1 ? "is" : "are"} currently in space, here
          are some facts about them.
        </Title>
        {allAstronauts.map((astronaut) => (
          <WrapperRow key={uuidv4()}>
            <Wrapper>
              <Img
                margin="10px 15px 10px 0"
                width="100px"
                src={astronaut.biophoto}
                alt={astronaut.name}
              />
            </Wrapper>
            <Wrapper>
              <P>
                <Text>Name:</Text>
                {`${" "}
                  ${astronaut.name}
                `}
              </P>
              <P>
                <Text>Title:</Text>
                {`${" "}
                  ${astronaut.title}
                `}
              </P>
              <P>
                <Text>Origin:</Text>
                <Img
                  margin="0 0 -5px 5px"
                  width="50px"
                  src={astronaut.countryflag}
                  alt={`${astronaut.country}'s flag`}
                />
              </P>
              <P>
                <Text>Current location:</Text>
                {`${" "}
                  ${
                    astronaut.location === "International Space Station"
                      ? "ISS"
                      : astronaut.location
                  }
                `}
              </P>
              <P>
                <Text>About:</Text>
                {`${" "}${astronaut.bio}`}
              </P>
              <P>
                <Text>{astronaut.twitter !== "" ? "Twitter:" : ""}</Text>{" "}
                {astronaut.twitter && (
                  <A href={astronaut.twitter}>
                    Check out {astronaut.name}'s twitter
                  </A>
                )}
              </P>
            </Wrapper>
          </WrapperRow>
        ))}
      </Wrapper>
      <Footer />
    </Main>
  );
};

const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #000;

  min-height: 100vh;

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 668px) {
    width: fit-content;
  }
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  width: 60%;

  @media (max-width: 668px) {
    width: fit-content;
    margin: 20px;
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const Text = styled.span`
  position: relative;
  display: inline-block;
  z-index: 25;
  color: #e0d6f0;
  font-size: 25px;
  font-family: "Righteous", cursive;
  letter-spacing: 5px;
  text-shadow: -1px -1px 0px #3b2563, 1px 1px 0px #4a3969;
  text-decoration: underline;

  @media (max-width: 668px) {
    font-size: 18px;
    letter-spacing: 2px;
    text-shadow: none;
  }
`;

const Title = styled.h1`
  position: relative;
  display: inline-block;
  text-align: center;
  z-index: 25;
  color: #e0d6f0;
  font-size: 30px;
  letter-spacing: 5px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  text-align: justify;

  margin: 40px auto 0;
  width: 60%;

  @media (max-width: 668px) {
    font-size: 18px;
    letter-spacing: 2px;
    width: fit-content;
    padding: 20px;
    margin: 20px auto 0;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const Img = styled.img`
  width: ${(props) => props.width};
  border-radius: 5px;
  margin: ${(props) => props.margin};
`;

const P = styled.span`
  display: inline-block;
  text-shadow: none;
  font-size: 25px;

  position: relative;
  display: inline-block;
  z-index: 25;
  color: #e0d6f0;
  letter-spacing: 2px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 668px) {
    font-size: 14px;
    letter-spacing: 2px;
  }
`;

const A = styled.a` display: inline-block;
text-shadow: none;
font-size: 25px;

position: relative;
display: inline-block;
z-index: 25;
    color: #e0d6f0;
font-family: "Righteous", cursive;
letter-spacing: 2px;
font-family: "Montserrat", sans-serif;

@media (max-width: 668px) {
  font-size: 14px;
  letter-spacing: 2px;`;
/*
box-shadow: -3px -3px 0px #a69cb9, -6px -6px 0px #3b2563;
*/
