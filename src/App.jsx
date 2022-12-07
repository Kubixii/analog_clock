import './App.css'

import Clock from './components/Clock';
import React from 'react';

function App() {

  const clocksSettings = [
    {
      backgroundColor: 'transparent',
      numbersColor: 'white',
      numbersShadowColor: 'black',
      border: false,
      handsColor: 'blue',
      showNumbers: true
    },
    {
      backgroundColor: 'yellow',
      numbersColor: 'black',
      numbersShadowColor: 'white',
      border: true,
      borderColor: 'green',
      handsColor: 'blue',
      showNumbers: true
    },
    {
      backgroundColor: 'lime',
      border: false,
      handsColor: 'blue',
      showNumbers: false
    },
    {
      backgroundColor: 'transparent',
      border: true,
      handsColor: 'blue',
      showNumbers: false
    },
    {
      backgroundColor: 'transparent',
      border: false,
      handsColor: 'blue',
      showNumbers: false
    }
  ]

  const clocks = clocksSettings.map((item, index) => {
    return (
      <div className='clock' key={index}>
        <Clock clockSettings={item} />
      </div>
    )
  })

  return (
    <div className='app'>
      <div className='clocksWrapper'>
        {clocks}
      </div>
    </div>
  )
}

export default App
