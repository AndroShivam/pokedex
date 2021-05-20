import React from 'react'
import './Error.css'

const Error = ({name}) => {
    return (
        <div className="error-container">
            <h4>Sorry! We Could not found "{name}"</h4>
            <button className="error-btn" onClick={() => window.location.reload()}>Home</button>
        </div>
    )
}

export default Error
