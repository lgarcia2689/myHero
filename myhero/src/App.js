import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import Characters from './Characters'
import './App.css'

const App = () => {
  return (
    <Router>
    <div>
      <div className = 'mainHeader'/>
      <Router>
      <nav>
        <div className='Banner'>
          <div className='navLinks'>
          {/* Links to navigate us Home (`/`) and Characters (`/Characters`) */}
          <button id = 'homeButton' className = 'homeButton'><Link to="/">Home </Link></button>
          <button id = 'characterButton' className = 'characterButton'><Link to="/Characters">Characters</Link></button>
          </div>
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
</Router>
    </div>
    </Router>
  );
};
export default App;