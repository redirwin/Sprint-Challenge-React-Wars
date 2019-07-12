import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import DisplayChars from "./DisplayChars";
import testData from "../testData";

const UtilityContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .button-container {
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

const Button = styled.div`
  width: 10rem;
  padding: 0.5rem 0;
  background-color: #d6c178;
  color: black;
  font-weight: 600;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3),
    0 6px 20px 0 rgba(255, 255, 255, 0.3);

  &: active {
    box-shadow: none;
  }
  @media screen and (max-width: 400px) {
    margin-top: 0.5rem;
  }
`;

export default function GetChars() {
  const [charList, updateCharList] = useState();
  const [pageStart, updatePageStart] = useState(1);

  console.log(pageStart);

  const prevPageStart = usePrevious(pageStart);

  function usePrevious(value) {
    // This function researched and borrowed from https://usehooks.com/usePrevious
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();

    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes

    // Return previous value (happens before update in useEffect above)
    return ref.current;
  }

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageStart}`)
      .then(res => updateCharList(res.data))

      .catch(err => console.log(err));
  }, [pageStart]);

  return !charList || prevPageStart !== pageStart ? (
    <UtilityContainer>
      <div className="button-container">
        <div className="loader">
          <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
        </div>
      </div>
    </UtilityContainer>
  ) : (
    <UtilityContainer>
      <div className="button-single">
        {pageStart === 1 ? (
          <div className="button-container">
            <Button
              type="submit"
              onClick={() => {
                updatePageStart(pageStart + 1);
              }}
            >
              Next Page
            </Button>
          </div>
        ) : (
          <div className="button-container">
            <Button
              type="submit"
              onClick={() => {
                pageStart === 1
                  ? updatePageStart(pageStart)
                  : updatePageStart(pageStart - 1);
              }}
            >
              Previous Page
            </Button>
            <Button
              type="submit"
              onClick={() => {
                updatePageStart(pageStart + 1);
              }}
            >
              Next Page
            </Button>
          </div>
        )}
      </div>
      <div className="button-double">
        {<DisplayChars charList={charList.results} />}
      </div>
    </UtilityContainer>
  );
}
