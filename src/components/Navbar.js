import React from 'react'
import { Link } from 'react-router-dom'
import {CgPokemon as PokemonIcon} from 'react-icons/cg'
// import { SiPokemon as PokemonIconAlt} from 'react-icons/si'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <div className = "navbar">
                <div className = "navbar-container container">
                    <Link to = '/' className = "navbar-logo">
                        <PokemonIcon className = "navbar-icon" />
                        Pokémon 
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
