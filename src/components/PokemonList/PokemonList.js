import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pokemon from './Pokemon/Pokemon'
import './PokemonList.css'

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState(null)
    const [search, setSearch] = useState(null)

    useEffect(() => {
        fetchPokemons()
    }, [currentPageUrl])

    useEffect(() => {
        if(search != null){
            fetchPokemons()
        }
    },[search])

    useEffect(() => {
        let cancel
        const url = `https://pokeapi.co/api/v2/pokemon/${search}`
        axios.get(url, {cancelToken: new axios.CancelToken(c => cancel = c)}).then(results => {
        setPokemons([])
        setPokemons([{
            name: results.data.name,
            img: results.data.sprites.other.dream_world.front_default,
            type : results.data.types[getRandom(results.data.types.length)].type.name
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
                        name : res.data.name,
                        img: res.data.sprites.other.dream_world.front_default,
                        type : res.data.types[getRandom(res.data.types.length)].type.name
                    }
                ))
            ]
        })
    }

    const getRandom = (num) => {
        return  Math.floor(Math.random() * num)
    }

    const gotoNextPage = () => {
        setTimeout(() => {
            setCurrentPageUrl(nextPageUrl)
        }, 1500)
    }

    return (
        <>
            <div className="input-container">
                <input type="text" placeholder="Search Pokemons" autoComplete="off" value={search}  onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <Pokemon pokemons = {pokemons} gotoNextPage={gotoNextPage} />
        </>
    )
}

export default PokemonList
