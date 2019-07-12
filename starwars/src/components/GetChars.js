import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
// import styled from 'styled-components'
import DisplayChars from "./DisplayChars";

export default function GetChars() {
  const [charList, updateCharList] = useState();
  const [pageStart, updatePageStart] = useState(1);
  console.log(charList);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageStart}`)
      .then(res => updateCharList(res.data))

      .catch(err => console.log(err));
  }, [pageStart]);

  return !charList ? (
    <div>
      <p>Loading...</p>
      <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
    </div>
  ) : (
    <div>{<DisplayChars charList={charList.results} />}</div>
  );
}
