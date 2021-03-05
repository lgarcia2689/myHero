//Character component 
import React from 'react';

// function Character(props){
//     const {character}= props
//     return (
//         <div className = 'individual'>
//             <h1>{character.name}</h1>
//             <p>affiliation: {character.affiliation}</p>
//             <p>birthday: {character.birthday}</p>
//             <p>gender: {character.gender}</p>
//             <p>quirk: {character.quirk}</p>
//             <p>status: {character.status}</p>
//             <p>occupation: {character.occupation}</p>
//             <p>description: {character.description}</p>
//         </div>
//     );
// }

function Character(props) {
    const {character}= props
    return (
        <div className = 'individual'>
            <h1>{character.name}</h1>
            <p>gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>BirthYear: {character.birth_year}</p>
            <p>Eye Color: {character.gender}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
        </div>
    );
}

export default Character;