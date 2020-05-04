import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        <A
          href="https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </A>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: white;
  background: #000;
  width: 100%;
  text-align: center;
`;
const A = styled.a`
  display: inline-block;
  position: relative;
  display: inline-block;
  z-index: 25;
  color: #e0d6f0;
  font-size: 2vw;
  font-weight: bolder;
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
