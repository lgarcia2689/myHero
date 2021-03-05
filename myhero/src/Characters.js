import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from './constants/indexMyHero'
import Character from './components/CharacterInfo'

const Characters = () => {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(res => {
      setCharacter(res.data.result)
      console.log(res.data.result)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  
  return (
    <div className="App">
      <div className = 'container'>
      {
        character.map( fr =>{
          return <Character character={fr}/>
        }
        )
      }
      </div>
    </div>
  );
}
export default Characters;