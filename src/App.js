import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Navbar, PokemonList, PokemonDetail} from './components'
import './App.css'

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Route exact path = '/'>
                    <PokemonList />
                </Route>
                <Route exact path = '/pokemon/:id'>
                    <PokemonDetail/>
                </Route>
            </div>
        </Router>
    )
}

export default App
