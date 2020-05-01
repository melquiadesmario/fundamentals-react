import React from 'react'

const ChildrenComponent = props => {
    return(
        <div>
            <h2>Children Components</h2>
            <div>
                { props.children }
            </div>
        </div>
    )
}

export default ChildrenComponent
