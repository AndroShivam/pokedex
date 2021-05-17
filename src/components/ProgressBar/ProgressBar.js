import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({bgColor, completed}) => {
    return (
        <div className="progress-container">
            <div className = "progress-filler" style ={{width: `${completed}%`, backgroundColor: bgColor}}>
                <span className = "progress-label ">{`${completed}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar;