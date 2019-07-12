import React from "react";
import "./styles/App.css";
import styled from "styled-components";

import GetChars from "./components/GetChars";
import Header from "./components/Header";
import falcon from "./assets/melfalcon.png";
import star from "./assets/death_star.png";
import vader from "./assets/vader.png";

const Content = styled.div`
width: 80%
max-width: 980px;
margin: 0 auto 25rem;
@media screen and (max-width: 400px) {margin-top: -2rem;}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;

.falcon {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 80%;
  padding-top: 15rem;
  margin-left: 15rem;
  transform: scaleX(-1);
  transition: padding 1.5s;
  transition: margin .8s;
  transtion: width 1.5s;
  margin: 1s;
  @media screen and (max-width: 780px) {
    padding-top: 10rem;
    margin-left: 15rem;
    width: 60%
  }
  @media screen and (max-width: 400px) {
    width: 50%;
    margin-left: -10rem;
    margin-top: -10rem;
  }
}

.star {
  transform: rotate(20deg);
  width: 20rem;
  position: fixed;
  z-index: -2
  top: -5rem;
  left: -5rem;
  }

  .vader {
    position: fixed;
    bottom: 0;
    left: 5rem;
    width: 25rem;

    @media screen and (max-width: 600px) {
     z-index: -1;
    }
  }

`;

const App = () => {
  return (
    <Content className="App">
      <img className="star" src={star} alt="Death Star" />
      <img className="falcon" src={falcon} alt="Mellinium Falcon" />
      <img className="vader" src={vader} alt="Darth Vader" />
      <Header />
      <GetChars />
    </Content>
  );
};

export default App;
