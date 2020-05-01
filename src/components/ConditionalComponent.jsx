import React from 'react'

const ConditionalComponent = props => {
    return(
        <div>
            <h3>Conditional Component - Version_1</h3>
            <h4>The number is { props.number }</h4>
            { props.number % 2 == 0 
                ? <span>Pair</span>
                : <span>Odd</span>
            }
        </div>
    )
}

export default ConditionalComponent
