import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({bgColor, completed}) => {
    return (
        <div className="progress-container">
            <div className = "progress-filler" style ={{width: `${completed}%`, backgroundColor: bgColor}}>
                <small className = "progress-label ">{`${completed}%`}</small>
            </div>
        </div>
    )
}

export default ProgressBar;