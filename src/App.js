import React from 'react'

import './App.css'

import FirstComponent from '../src/components/FirstComponent'
import ParameterComponent from '../src/components/ParameterComponent'
import ChildrenComponent from '../src/components/ChildrenComponent'
import Card from '../src/components/layout/Card'

const App = () => {
    return(
        <div className='app'>
            <Card title='#01 - First Component'>
                <FirstComponent />
            </Card>

            <Card title='#02 - Parameter Component'>
                <ParameterComponent
                    title='This is the firt Title'
                    subtitle='This is the first Subtitle'
                />
            </Card>

            <Card title='#03 - Children Component'>
                <ChildrenComponent>
                    <ul>
                        <li>Melquíades</li>
                        <li>Annyelle</li>
                        <li>Ilza</li>
                        <li>Juciara</li>
                        <li>John</li>
                    </ul>
                </ChildrenComponent>
            </Card>
        </div>
    )
}

export default App
