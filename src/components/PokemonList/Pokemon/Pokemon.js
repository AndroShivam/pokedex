import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from './Card/Card'
import './Pokemon.css'

const Pokemon = ({ pokemons, gotoNextPage }) => {

    const checkHasMore = () => pokemons.length < 1100

    const scrollToTop = () => window.scrollTo(0,0)

    if(pokemons.length === 1){
        return <Card pokemons={pokemons}/>
    }else {
        return (
            <InfiniteScroll 
                dataLength = {pokemons.length} 
                next= {gotoNextPage} 
                hasMore={checkHasMore()} 
                loader={
                <div className="load-container">
                    <img className="load-img" src = "https://i.imgur.com/aMz1Qtu.gif" alt="loading" />
                </div>}>
                <img className = "scroll-top" onClick={() => scrollToTop()} src="https://img.icons8.com/windows/64/000000/circled-up-2.png"/>
                <Card pokemons={pokemons}/>        
            </InfiniteScroll>
        )
    }
  
}

export default Pokemon
