import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  margin-top: 3rem;
  margin-bottom: -1rem;
  @media screen and (max-width: 400px) {
    margin-top: 5rem;
    margin-bottom: -2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 95%;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
    </HeaderContainer>
  );
}
