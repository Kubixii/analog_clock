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
      indicatorType: 'numbers',
    },
    {
      backgroundColor: 'yellow',
      numbersColor: 'black',
      numbersShadowColor: 'white',
      border: true,
      borderColor: 'green',
      handsColor: 'blue',
      indicatorType: 'numbers',
    },
    {
      backgroundColor: 'lime',
      border: false,
      handsColor: 'blue',
      indicatorType: 'none',
    },
    {
      backgroundColor: 'transparent',
      border: true,
      handsColor: 'blue',
      lineColor: 'black',
      lineThicness: '2px',
      indicatorType: 'lines',
    },
    {
      backgroundColor: 'transparent',
      border: false,
      handsColor: 'blue',
      indicatorType: 'lines',
    },
    {}
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
