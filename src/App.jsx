import React from 'react'

import './App.css'

import FirstComponent from '../src/components/FirstComponent'
import ParameterComponent from '../src/components/ParameterComponent'
import ChildrenComponent from '../src/components/ChildrenComponent'
import Card from '../src/components/layout/Card'
import RepetitionComponent from '../src/components/RepetitionComponent'

const App = () => {
    return(
        <div className='app'>
            <Card title='#01 - First Component'>
                <FirstComponent />
            </Card>

            <Card title='#02 - Parameter Component'>
                <ParameterComponent
                    title='This is the first Title'
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

            <Card title='#04 - Repetition Component'>
                <RepetitionComponent />
            </Card>
        </div>
    )
}

export default App
