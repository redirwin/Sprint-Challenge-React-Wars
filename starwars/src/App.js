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
  transform: scaleX(-1);
  position: fixed;
  top: 20%;
  left: 20%;
  z-index: -1;
  width: 70%;
  animation-name: fly;
  animation-duration: 3s;
}

@keyframes fly {
  from {
    width: 10%;
    top: 2%;
    left: 2%;
  }
  to {
    width: 70%;
    top: 20%;
    left: 20%;
  }
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes fly {
  from {
    width: 10%;
    top: 2%;
    left: 2%;
  }
  to {
    width: 70%;
    top: 20%;
    left: 20%;
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
