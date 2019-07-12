import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import DisplayChars from "./DisplayChars";

const UtilityContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .loader-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 400px) {
      justify-content: center;
    }

    .loader {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;


export default function GetChars() {
  const [charList, updateCharList] = useState();
  const [pageStart, updatePageStart] = useState(1);

  console.log(pageStart);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageStart}`)
      .then(res => updateCharList(res.data))

      .catch(err => console.log(err));
  }, [pageStart]);

  function getPage(e) {
    e.target.value === "previous"
      ? updatePageStart(pageStart - 1)
      : updatePageStart(pageStart + 1);
  }

  console.log(charList);

  return !charList ? (
    <UtilityContainer>
      <div className="loader-container">
        <div className="loader">
          <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
        </div>
      </div>
    </UtilityContainer>
  ) : (
    <div className="buttons-container">
      <button className={charList.previous === null  ? "none" : "button" } onClick={getPage} value="previous">
        Previous Page
      </button>
      <button className={charList.next === null  ? "none" : "button" } onClick={getPage} value="next">
        Next Page
      </button>
      {<DisplayChars charList={charList.results} />}
    </div>
  );
}
