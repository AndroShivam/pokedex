import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Navbar, PokemonList, PokemonDetail} from './components'
import './App.css'

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Route exact path = '/' component={PokemonList}/>
                <Route exact path = '/pokemon/:id' component={PokemonDetail} />
            </div>
        </Router>
    )
}

export default App
