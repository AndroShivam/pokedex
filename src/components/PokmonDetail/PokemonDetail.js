import React from 'react'
import {useHistory, useLocation, Route, Link} from 'react-router-dom'
import './PokemonDetail.css'

const DetailNavbar = () => {
    const location = useLocation()
    const history = useHistory()

    const handleAboutClick = () => history.push('/detail/about', {
        pokemon: location.state.pokemon,
        colors: location.state.colors
    }) 

    const handleStatsClick = () => history.push('/detail/stats',{
        pokemon: location.state.pokemon, 
        colors: location.state.colors
    })

    const handleEvolutionClick = () => history.push('/detail/evolution', {
        pokemon: location.state.pokemon,
        colors: location.state.colors
    })

    const handleMovesClick = () => history.push('/detail/moves', {
        pokemon: location.state.pokemon,
        colors: location.state.colors
    })

    return (
        <nav className="detail-nav">
            <ul className="detail-nav-items">
                <li className="detail-nav-links" onClick={handleAboutClick}>About</li>
                <li className="detail-nav-links" onClick={handleStatsClick}>Stats</li>
                <li className="detail-nav-links" onClick={handleEvolutionClick}>Evolution</li>
                <li className="detail-nav-links" onClick={handleMovesClick}>Moves</li>
            </ul>
        </nav>
    )
}

const PokemonDetail = (props) => {
    const location = useLocation()
    const getRand = (types) => Math.floor(Math.random() * types)

    return (
        <div className="poke-detail-container">
            {location.state.pokemon.map(poke => (
                <div key={poke.id} className="poke-detail-card">
                    <div 
                        className="detail-img-container"
                        style ={{ backgroundColor: location.state.colors[poke.types[getRand(poke.types.length)].type.name]}}>
                        <img src={poke.img} alt="pokemon" draggable={false} />
                    </div>
                    <div className="detail-info-container">
                        <div className="detail-name">
                            <h1>{poke.name}</h1>
                            <div className="detail-type">
                                {poke.types.map((type, index) => (
                                    <h4 style={{backgroundColor: location.state.colors[type.type.name]}} key={index}>{type.type.name}</h4>
                                ))}
                            </div>
                        </div>
                        <div className="detail-nav-container">
                            <DetailNavbar />
                        </div>
                        <div className="detail-info-render">
                            {props.children}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PokemonDetail
