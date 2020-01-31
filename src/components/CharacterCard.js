import React from "react";
import styled from 'styled-components';
import { Card } from 'reactstrap';

const StyledImg = styled.img`
width: 100%;
height: auto;
margin: 5% 0% 2% 0%;
`
const StyledBody = styled.div`
display: flex;
justify-content: space-evenly;
margin: 2% 0 2% 0;
`
const StyledSubtitle = styled.h4`
display: flex;
`
const StyledTitle = styled.h1`
margin: 10% 50% 10% 0;
padding: 5% 10% 10% 0;
width: 100%;
`
const Flex = styled.div`
display: flex;
flex-direction: column;
margin: 0 0 0 25%;
`
const Flex1 = styled.div`
display: flex;
flex-direction: column;
`
const StyledCard = styled.div`
background-color: lightblue;
border-radius: 2%;
`




export default function CharacterCard(props) {
  return (
    <StyledCard>
      <StyledBody>
        <Flex1>
      <StyledImg src={props.character.image} />
      <StyledSubtitle>ID: {props.character.id}</StyledSubtitle>
      </Flex1>
        <Flex>
          <StyledTitle>{props.character.name}</StyledTitle>
          <StyledSubtitle>{props.character.species}</StyledSubtitle>
          <StyledSubtitle>{props.character.gender}</StyledSubtitle>
        </Flex>
      </StyledBody>
    </StyledCard>
  )
}
