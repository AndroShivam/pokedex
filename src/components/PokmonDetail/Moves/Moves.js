import React from 'react'
import './Moves.css'

const Moves = ({pokemon}) => {

    return (
        <div className = "moves">
            {pokemon.map(poke => (
                <div key = {poke.id} className="moves-container">
                    {poke.moves.slice(0,10).map(move => (
                        <small key={move.move.name}>{(move.move.name).replace('-', ' ')}</small>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Moves
