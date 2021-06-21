import React from 'react'
import { Helmet } from 'react-helmet'

const TitleComponent = ({ title }) => {
    
    const defaultTitle = "Pokédex"

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }
    
    return (
        <Helmet>
            <title>{title ? `${defaultTitle} | ${title.capitalize(  )}` : defaultTitle}</title>
        </Helmet>
    )
}

export default TitleComponent
