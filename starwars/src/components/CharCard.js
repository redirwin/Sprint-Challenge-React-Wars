import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3),
    0 6px 20px 0 rgba(255, 255, 255, 0.3);
  width: 15rem;
  min-width: 250px;
  background-color: #d6c178;
  margin: 1rem;
  @media screen and (max-width: 400px) {
    width: 100%;
    box-shadow: none;
    border-radius: none;
  }

  h2 {
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: 5px 5px 0 0;
    margin: 0;
    padding: 1rem;
    @media screen and (max-width: 400px) {
      width: 100%;
      border-radius: none;
    }
  }

  .stats {
    color: #000;
    border-radius: 0 0 5px 5px;
    padding: 1rem;
  }
`;

export default function CharCard(props) {
  console.log(props);
  return (
    <Card className="character-card">
      <h2 className="heading">{props.char.name}</h2>
      <div className="stats">
        <h3>Stats</h3>
        <p>Born: {props.char.birth_year}</p>
        <p>Gender: {props.char.gender}</p>
        <p>Height: {props.char.height}</p>
        <p>Weight: {props.char.mass} kg</p>
      </div>
    </Card>
  );
}
