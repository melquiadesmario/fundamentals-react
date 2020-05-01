import React from 'react'

import If from './If'

const ConditionalWithIFComponent = props => {
    return(
        <div>
            <h3>Conditional Component - Version_2</h3>
            <h4>The number is { props.number }</h4>
            <If test={ props.number % 2 == 0 }>
                <span>Pair</span>
            </If>
            <If test={ props.number % 2 == 1 }>
                <span>Odd</span>
            </If>
        </div>
    )
}

export default ConditionalWithIFComponent
