import React from 'react'
import {useLocation} from 'react-router-dom'
import './Moves.css'

const Moves = () => {
    const location = useLocation()
    const pokemon = location.state.pokemon

    return (
        <div className = "moves">
            {pokemon.map(poke => (
               <div key={poke.id} className="moves-container">
                    {poke.moves.map(move => (
                        <div className="move-name" key = {move.move.name}>
                            <p>{move.move.name}</p>
                        </div>
                    ))}
               </div>
            ))}
        </div>
    )
}

export default Moves
