import React from 'react'

const ParameterComponent = props => {
    return(
        <div>
            <h2>Component with Parameter</h2>
            <h3>{ props.title }</h3>
            <p>{ props.subtitle }</p>
        </div>
    )
}

export default ParameterComponent
