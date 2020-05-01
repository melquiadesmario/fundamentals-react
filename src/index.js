import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import FirstComponent from './components/FirstComponent'
// import ParameterComponent from './components/ParameterComponent'
// import ChildrenComponent from './components/ChildrenComponent'
import Card from './components/layout/Card'

ReactDOM.render(
    // <div>
    //     <FirstComponent />
    //     <ParameterComponent
    //         title='This is the firt Title'
    //         subtitle='This is the first Subtitle'
    //     />
    //     <ParameterComponent
    //         title='This is the second Title'
    //         subtitle='This is the second Subtitle'
    //     />
    // </div>

    // <div>
    //     <ChildrenComponent>
    //         <ul>
    //             <li>Melquíades</li>
    //             <li>Annyelle</li>
    //             <li>Ilza</li>
    //             <li>Juciara</li>
    //             <li>John</li>
    //         </ul>
    //     </ChildrenComponent>
    // </div>
    <div>
        <Card title='First Component'>
            <FirstComponent />
        </Card>
        <Card title='Exercise X'>
            Content
        </Card>
    </div>,
    document.getElementById('root')
)