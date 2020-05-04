import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        <a
          href="https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
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
