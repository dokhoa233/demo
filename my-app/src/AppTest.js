import React, { useState } from 'react';

import './App.css';
import VeOco from './components/Oco2'

function App() {
  const list = []
  const [colorState, setColorState] = useState()
  const change1 = () => {
    setColorState('blue')
  }
  for (let i = 1; i <= 64; i++) {
    let color = ''
    const row = Math.ceil(i / 8)
    const check = row + i
    const col = (i - 1) % 8
    let char = String.fromCharCode(col + 65)
    if (check % 2 === 1) color = 'black'
    else color = 'white'
    list.push(<VeOco mauOco={colorState == 'blue' ? colorState : color} char={col + char}></VeOco>)
  }

  return (
    <div className="banco" onClick={() => change1()}>{list} </div>
  )
}

export default App;