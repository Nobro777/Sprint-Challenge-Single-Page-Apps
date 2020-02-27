import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';



const FlexThis = styled.div`
margin: 0 10% 0 10%; 
`
const StyledH1 = styled.h1`
display: flex;
justify-content: center;
margin: 5% 0 5% 0;
`
const StyledSpan = styled.span`
display: flex;
justify-content: center;
margin: 0 30% 5% 30%;
padding: .5% 0 .5% 0;
font-size: 1rem;
border: 1px solid black;
opacity: .8;
background-color: lightpink;
color: white;
border-radius: 3%;
font-weight: bold;
text-decoration: none;
&:hover{
  opacity: 1;
  text-decoration: none;
}
`

export default function CharacterList() {
const [characters, setCharacters] = useState([]);
const [data, setData] = useState([]);

const search = elem => {
  setData(elem);
}

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
    .then(resp => {
      console.log(resp)
      setCharacters(resp.data.results)
      setData(resp.data.results)
    })
    .catch(error => {
      console.log("Oh no! Error: ", error)
    })
  }, []);

  return (
    <section className="character-list">
      <FlexThis>
      <StyledH1>-Character List-</StyledH1>
      <StyledSpan>
      <Link to={"/"}> Home </Link>
      </StyledSpan>
      <SearchForm search={search} characters={characters} />
      {data.map(char => {
        return <CharacterCard key={char.id} character={char} />
      })}
      </FlexThis>
    </section>
  );
}
