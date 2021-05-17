import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import './About.css'

const About = () => {
    const location = useLocation()
    const pokemon = location.state.pokemon

    const [flavorText, setFlavorText] = useState([])

    useEffect(() => {
        const fetchFlavorText = async () => {
            const resposne = await axios.get(pokemon[0].species.url)
            const enText = await resposne.data.flavor_text_entries.filter(text => text.language.name === "en")
            setFlavorText(enText)
        }
        fetchFlavorText()
    },[])
    
    const decimeterToFeet = (dec) => (dec / 3.048).toFixed(2)

    return (
        <div className="about-container">
            <h3>
                {flavorText.length !== 0 && flavorText[Math.floor(Math.random() * flavorText.length)].flavor_text}
            </h3>

            {pokemon.map(poke => (
                <div key={poke.id} className="about-info-container">
                    <div className="about-info">
                        <h4>Base Experience : </h4>
                        <span>{poke.base_experience}</span>
                    </div>
                    <div className="about-info">
                        <h4>Height : </h4>
                        <span>{decimeterToFeet(poke.height)}</span>
                    </div>
                    <div className="about-info">
                        <h4>Weight : </h4>
                        <span>{decimeterToFeet(poke.weight)}</span>
                    </div>    
                    <div className="about-info">
                        <h4>Abilities : </h4>
                        <div>
                        {poke.abilities.map(ability => (
                            <span>{ability.ability.name}, </span>
                        ))}  
                        </div>
                    </div> 
                </div>
            ))}
        </div>
    )
}


export default About
