import './App.css'

import Clock from './components/Clock';
import React from 'react';

function App() {

  const clocksSettings = [
    // {
    //   backgroundColor: 'transparent',
    //   numbersColor: 'white',
    //   numbersShadowColor: 'black',
    //   border: false,
    //   handsColor: 'blue'
    // }
    {
      backgroundColor: 'lime',
      numbersColor: 'red',
      numbersShadowColor: 'white',
      border: false,
      handsColor: 'blue'
    }
    // {
    //   backgroundColor: 'lime',
    //   numbersColor: 'red',
    //   numbersShadowColor: 'white',
    //   border: false,
    //   handsColor: 'blue'
    // },
    // {
    //   backgroundColor: 'lime',
    //   numbersColor: 'red',
    //   numbersShadowColor: 'white',
    //   border: false,
    //   handsColor: 'blue'
    // },
    // {
    //   backgroundColor: 'lime',
    //   numbersColor: 'red',
    //   numbersShadowColor: 'white',
    //   border: false,
    //   handsColor: 'blue'
    // }
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
      {clocks}
    </div>
  )
}

export default App
