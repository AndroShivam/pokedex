import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pokemon from './Pokemon/Pokemon'
import './PokemonList.css'

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchPokemons()
    }, [currentPageUrl])

    useEffect(() => {
        let cancel
        const url = `https://pokeapi.co/api/v2/pokemon/${search}`
        axios.get(url, {cancelToken: new axios.CancelToken(c => cancel = c)}).then(results => {
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
            if(axios.isCancel(err)) return
        })
        return () => cancel()
    }, [search])


    const fetchPokemons = async () => {
        const response = await axios.get(currentPageUrl)
        const results = await Promise.all(response.data.results.map(res => axios.get(res.url)))
        setNextPageUrl(response.data.next)
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

    return (
        <>
            <div className="input-container">
                <input type="text" placeholder="Search Pokemons" autoComplete="off" value={search}  onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            </div>
            <Pokemon pokemons = {pokemons} gotoNextPage={gotoNextPage} search = {search}/>
        </>
    )
}

export default PokemonList
