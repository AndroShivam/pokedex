import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
