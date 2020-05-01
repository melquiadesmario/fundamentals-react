import React from 'react'

const ParameterComponent = props => {
    return(
        <div>
            <h2>Parameter Component</h2>
            <h3>{ props.title }</h3>
            <p>{ props.subtitle }</p>
        </div>
    )
}

export default ParameterComponent
