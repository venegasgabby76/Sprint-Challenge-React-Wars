import React, {useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from '../src/components/Character';
import styled from "styled-components";


const Body = styled.div `
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
padding: 18px;
text-align: center;
padding-top: 3px;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters , setCharacters] = useState([]); 

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data);
      setCharacters(response.data.results);
    })
    .catch(err => {
      console.log(err, "existance is pain!");
    });

  }, []);

  return (
    <Body>
        {characters.map(character => {
            return(<Character key={character.id} 
              image={character.image} 
              name={character.name} 
              status={character.status} 
              species={character.species} 
              gender={character.gender} />)
        })}     
    </Body>




      
   
  );
}

export default App;
