import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import Characters from './Characters'
import './App.css'

const App = () => {
  return (
    <Router>
    <div>
      <h1 className = 'mainHeader'>My Hero Academia</h1>

      <nav>
        <div className='navLinks'>
          {/* Links to navigate us Home (`/`) and Characters (`/Characters`) */}
          <button id = 'homeButton' className = 'homeButton'><Link to="/">Home </Link></button>
          <button id = 'characterButton' className = 'characterButton'><Link to="/Characters">Characters</Link></button>
        </div>
      </nav>
      
        <Switch>
          <Route path="/Characters">
            <Characters/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        

    </div>
    </Router>
  );
};
export default App;