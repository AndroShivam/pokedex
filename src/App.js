import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Navbar, PokemonList, PokemonDetail, About, Stats, Evolution, Moves} from './components'
import './App.css'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Route exact path = '/'>
                    <Navbar/>
                    <PokemonList />
                </Route>
                <Route exact path = '/detail'>
                    <PokemonDetail>
                        <About/>
                    </PokemonDetail>
                </Route>
                <Route exact path='/detail/about'>
                    <PokemonDetail >
                        <About/>
                    </PokemonDetail>
                </Route>

                <Route exact path='/detail/stats'>
                    <PokemonDetail>
                        <Stats/>
                    </PokemonDetail>
                </Route>

                <Route exact path='/detail/evolution'>
                    <PokemonDetail>
                        <Evolution/>
                    </PokemonDetail>
                </Route>

                <Route exact path='/detail/moves'>
                    <PokemonDetail>
                        <Moves/>
                    </PokemonDetail>
                </Route>
            </div>
        </Router>
    )
}

export default App
