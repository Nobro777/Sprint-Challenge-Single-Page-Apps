import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSpan = styled.span`
text-decoration: none;
color: black;
cursor: pointer;
display: flex;
justify-content: center;
margin: 10% 25% 10% 25%;
font-size: 2rem;
border: 1px solid black;
border-radius: 1rem;
background-color: blue;
color: white;
&:hover {
  font-weight: bold;
  text-decoration: none;
}
`


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the Ultimate Fan Site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to={'/characters'}><StyledSpan>Click here...</StyledSpan></Link>
      </header>
    </section>
  );
}
