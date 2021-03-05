import React from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'

export default function Home() {
  
    const history = useHistory()
  
    const routeToCharacters = () => {
      console.log(history);
      history.push('/Characters')
    }
  
    return (
      <div className='home-wrapper'>
        <button
          onClick={routeToCharacters}
          className='button'
        >
          View Characters!
        </button>
      </div>
    )
  }