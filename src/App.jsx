import './App.css'

import Clock from './components/Clock';
import React from 'react';

function App() {

  const clockSettings = {
    backgroundColor: 'lime',
    numbersColor: 'red',
    numbersShadowColor: 'white',
    border: false,
    handsColor: 'blue'
  }

  return (
    <div className='app'>
      <Clock clockSettings={clockSettings} />
      <Clock clockSettings={clockSettings} />
      <Clock clockSettings={clockSettings} />
      <Clock clockSettings={clockSettings} />
      <Clock clockSettings={clockSettings} />
    </div>
  )
}

export default App
