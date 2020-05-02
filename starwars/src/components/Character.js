// Write your Character component here
import React from 'react';
import styled from "styled-components";



const Card = styled.div `
  background: black;
  color: white;
  width: 285px;
  max-height: 1700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  margin-bottom: 20px;
`;


const CharacterImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: scale;
`;

const Character = props => {
    return (
        <Card>
      <h3>{props.name}</h3>
    <CharacterImage src= {props.image} alt="characters"/>
    <p>{props.gender}</p>
    <p>{props.status}</p>
    <p>{props.species}</p>
    
  
    </Card>
    );
};

export default Character;