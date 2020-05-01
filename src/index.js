import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import FirstComponent from './components/FirstComponent'
import ParameterComponent from './components/ParameterComponent'

ReactDOM.render(
    <div>
        <FirstComponent />
        <ParameterComponent
            title='This is the firt Title'
            subtitle='This is the first Subtitle'
        />
        <ParameterComponent
            title='This is the second Title'
            subtitle='This is the second Subtitle'
        />
    </div>,
    document.getElementById('root')
)