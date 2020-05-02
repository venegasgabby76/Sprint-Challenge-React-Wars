// Write your Character component here
import React from 'react';




const Character = props => {
    return (
        <div className="card">
    <h1>{props.name}</h1>
    <p>{props.name}</p>
    <img scr={props.imgage} alt='Charcters'/>
    <p>{props.gender}</p>
    <p>{props.status}</p>
    <p>{props.species}</p>
    </div>
    );
};

export default Character;