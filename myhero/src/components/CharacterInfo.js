//Character component 
import React from 'react';

function Character(props){
    const {character}= props
    return (
        <div className = 'individual'>
            <h2>{character.id}</h2>
            <p>affiliation: {character.affiliation}</p>
            <p>birthday: {character.birthday}</p>
            <p>gender: {character.gender}</p>
            <p>quirk: {character.quirk}</p>
            <p>status: {character.status}</p>
            <p>occupation: {character.occupation}</p>
            <p>description: {character.description}</p>
        </div>
    );
}

export default Character;