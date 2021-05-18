import React from 'react'
import {useLocation} from 'react-router-dom'
import './Moves.css'

const Moves = () => {
    const location = useLocation()
    const pokemon = location.state.pokemon

    return (
        <div className = "moves">
            {pokemon.map(poke => (
                <div className="moves-container">
                    {poke.moves.slice(0,10).map((move, index) => (
                        <small key={move.move.name}>{move.move.name}</small>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Moves
