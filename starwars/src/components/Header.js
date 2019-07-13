import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 400px) {
    margin-top: 7rem;
    margin-bottom: -2;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      // font-size: 4rem;
    }

    img {
      width: 95%;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <h1>The Characters</h1>
    </HeaderContainer>
  );
}
