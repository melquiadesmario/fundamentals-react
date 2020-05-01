import React from 'react'

import FirstComponent from './FirstComponent'
// import ParameterComponent from './ParameterComponent'
// import ChildrenComponent from './ChildrenComponent'
import Card from './layout/Card'

const App = () => {
    return(
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
    </div>
    )
}

export default App
