import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: white;
  position: fixed;
  bottom: 2%;
  right: 2%;
  text-decoration: none;
  font-size: 0.8rem;
`;

export default function Footer() {
  return (
    <Link href="https://github.com/redirwin/Sprint-Challenge-React-Wars">
      About
    </Link>
  );
}
