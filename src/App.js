import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar, PokemonList} from './components'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path = "/" exact component = {Navbar}/>
                </Switch>
            </Router>
            <PokemonList />
        </div>
    )
}

export default App
