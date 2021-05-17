import React from 'react'
import {useHistory} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import './Pokemon.css'

const colors = {
    bug : "rgba(148,188,74,0.5)",
    dark : "rgba(115,108,117,0.5)", 
    dragon : "rgba(106,123,175,0.5)",
    electric: "rgba(229,197,49,0.5)",
    fairy: "rgba(227,151,209,0.5)",
    fighting: "rgba(203,95,72,0.5)",
    fire: "rgba(234,122,60, 0.5)",
    flying: "rgba(125,166,222, 0.5)",
    ghost: "rgba(132,106,182, 0.5)",
    grass: "rgba(113,197,88, 0.5)",
    ground: "rgba(204,159,79, 0.5)",
    ice: "rgba(112,203,212, 0.5)",
    normal: "rgba(170,176,159, 0.5)",
    poison: "rgba(180,104,183, 0.5)",
    psychic: "rgba(229,112,155, 0.5)",
    rock: "rgba(178,160,97, 0.5)",
    steel: "rgba(137,161,176, 0.5)",
    water: "rgba(83,154,226, 0.5)"
}

const Pokemon = ({ pokemons, gotoNextPage, search }) => {
    const history = useHistory()

    const handleOnClick = (id) => {
        const pokemon = pokemons.filter(p => p.id === id)
        history.push("/detail", {
            pokemon : pokemon,
            colors: colors 
        })
    }

    const getRand = (types) => Math.floor(Math.random() * types)

    return (
        <InfiniteScroll 
            dataLength = {pokemons.length} 
            next= {gotoNextPage} 
            hasMore={true} 
            loader={
            <div className="load-container" style ={{ display: search.length !== 0 ? "none" : "flex"}}>
                <img className="load-img" src = "https://i.imgur.com/aMz1Qtu.gif" alt="loading" />
            </div>}>
            <div className = "poke-container" >
                {pokemons.map(pokemon => (
                    <div key={pokemon.id} className="poke-card" 
                        style={{backgroundColor: colors[pokemon.types[getRand(pokemon.types.length)].type.name]}} 
                        onClick = {() => handleOnClick(pokemon.id)}>
                        <div className="poke-img-container">
                            <img className = "poke-img" src={pokemon.img} alt="pokemon" />
                        </div>
                        <div className="poke-name-container">
                            <h4 className = "poke-name" >{pokemon.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </InfiniteScroll>
    )
}

export default Pokemon
