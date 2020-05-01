import React from 'react'

const ChildrenComponent = props => {
    return(
        <div>
            <h2>Children Component</h2>
            { props.children }
        </div>
    )
}

export default ChildrenComponent
