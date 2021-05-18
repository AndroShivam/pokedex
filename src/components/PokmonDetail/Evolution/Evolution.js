import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

const Evolution = () => {
    const location = useLocation()
    const pokemon = location.state.pokemon

    return (
        <div>
            <h1>Evolution</h1>
        </div>
    )
}

export default Evolution
