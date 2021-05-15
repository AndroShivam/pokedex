import React from 'react'
import { Link } from 'react-router-dom'
import { SiPokemon as PokemonIconAlt} from 'react-icons/si'
import './Navbar.css'

function Navbar() {
    return (
        <nav className = "navbar">
            <div className = "navbar-container container">
                <Link to = '/' className = "navbar-logo">
                    <PokemonIconAlt className = "navbar-icon" size="140px" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar