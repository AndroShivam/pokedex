import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pokemon from './Pokemon/Pokemon'
import Error from './Error/Error'
import './PokemonList.css'

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState(null)
    const [search, setSearch] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchPokemons()
    }, [currentPageUrl])

    const fetchPokemons = async () => {
        const response = await axios.get(currentPageUrl)
        const results = await Promise.all(response.data.results.map(res => axios.get(res.url)))
        setNextPageUrl(response.data.next)
        setError(false)
        setPokemons(currentPokemons => {
            return [
                ...currentPokemons,
                ...results.map(res => (
                    {
                        id: res.data.id,
                        name : res.data.name,
                        img: res.data.sprites.other.dream_world.front_default,
                        abilities : res.data.abilities,
                        types : res.data.types,
                        height : res.data.height,
                        weight : res.data.weight,
                        moves : res.data.moves,
                        stats : res.data.stats,
                        species : res.data.species,
                        base_experience : res.data.base_experience
                    }
                ))
            ]
        })
    }

    const gotoNextPage = () => {
        setTimeout(() => {
            setCurrentPageUrl(nextPageUrl)
        }, 1500)
    }

    const handleSearch = () => {
        if(search.length === 0) return 
        const url = `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
        axios.get(url).then(results => {
        setPokemons([{
            name: results.data.name,
            img: results.data.sprites.other.dream_world.front_default,
            abilities : results.data.abilities,
            types : results.data.types,
            height : results.data.height,
            weight : results.data.weight,
            moves : results.data.moves,
            stats : results.data.stats,
            species : results.data.species,
            base_experience : results.data.base_experience
        }])
        }).catch(err => {
            setError(true)
        })
    }


    return (
        <>
            <div className="input-container">
                <input type="text" placeholder="Search Pokemons" autoComplete="off" onChange={(e) => setSearch(e.target.value)}/>
                <input type="submit" className="btn" onClick={handleSearch} value="Search" />
            </div>
            {!error && <Pokemon pokemons = {pokemons} gotoNextPage={gotoNextPage}/>}
            {error && <Error name = {search} fetchPokemons = {fetchPokemons} />}
        </>
    )
}

export default PokemonList
