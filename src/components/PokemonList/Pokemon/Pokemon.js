import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from './Card/Card'
import './Pokemon.css'

const Pokemon = ({ pokemons, gotoNextPage }) => {

    if(pokemons.length === 1){
        return <Card pokemons={pokemons}/>
    }else {
        return (
            <InfiniteScroll 
                dataLength = {pokemons.length} 
                next= {gotoNextPage} 
                hasMore={true} 
                loader={
                <div className="load-container">
                    <img className="load-img" src = "https://i.imgur.com/aMz1Qtu.gif" alt="loading" />
                </div>}>
                <Card pokemons={pokemons}/>        
            </InfiniteScroll>
        )
    }
  
}

export default Pokemon
