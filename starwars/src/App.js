import React from "react";
import "./styles/App.css";
import styled from "styled-components";

import GetChars from "./components/GetChars";
import Header from "./components/Header";
import falcon from "./assets/melfalcon.png";
import star from "./assets/death_star.png";
import vader from "./assets/vader.png";
import yoda from "./assets/yoda2.png";

const Content = styled.div`
width: 100%
max-width: 1200px;
margin: 0 auto 5rem;
@media screen and (max-width: 400px) {margin-top: -2rem;}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;

.falcon {
  transform: scaleX(-1); 
  position: fixed;
  z-index: -1;  
  animation-name: fly;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}

@keyframes fly {
  from {
    width: 10%;
    top: 4%;
    left: -10%;
  }
  to {
    width: 70%;
    top: 15%;
    left: 25%;   
  }
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes fly {
  from {
    width: 10%;
    top: 4%;
    left: -5%;
  }
  to {
    width: 70%;
    top: 15%;
    left: 25%;   
  }
}

.star {
  transform: rotate(20deg);
  width: 50%;
  position: fixed;
  z-index: -2
  top: -10rem;
  left: -15rem;
  }

.vader {
  transform: scaleX(-1); 
  position: fixed;
  bottom: 0;
  left: 10rem;
  width: 25rem;

  @media screen and (max-width: 1800px) {
    z-index: -1;
    left: -5rem;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
}

.yoda {
  position: fixed;
  bottom: 0;
  right: 10rem;
  width: 25rem;
  height: 600px;
  width: auto;

  @media screen and (max-width: 1800px) {
    z-index: -1
    right: -5rem;
  }

  .falcon {
    transform: scaleX(-1); 
    position: fixed;
    z-index: -1;  
    animation-name: fly;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
  }
  
  @keyframes fly {
    from {
      width: 10%;
      top: 4%;
      left: -10%;
    }
    to {
      width: 70%;
      top: 20%;
      left: 15%;   
    }
  }
  
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes fly {
    from {
      width: 10%;
      top: 4%;
      left: -5%;
    }
    to {
      width: 70%;
      top: 15%;
      left: 15%;   
    }
  }


}

`;

const App = () => {
  return (
    <Content className="App">
      <img className="star" src={star} alt="Death Star" />
      <img className="falcon" src={falcon} alt="Millennium Falcon" />
      <img className="vader" src={vader} alt="Darth Vader" />
      <img className="yoda" src={yoda} alt="Yoda" />
      <Header />
      <GetChars />
    </Content>
  );
};

export default App;
