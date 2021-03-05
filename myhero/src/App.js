import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from './constants/indexMyHero'
import Character from './components/Character'

const App = () => {
 
  const[character, setCharacter] = useState([])
 
  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(res => {
      setCharacter(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  },[])

  return (
    <div className="App">
      <h1 className="Header">REACT WARS {'>'} </h1>
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


export default App;