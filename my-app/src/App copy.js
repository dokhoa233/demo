import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blue from './components/Blue';
import Red from './components/Red';
function App() {
  const list = ['Red.js','Blue.js','3','4']
  return list.map((item) =>{
    return <div className='banco'>item</div>
  })
  return (
    <div className="App">
      <Blue colorText={'blue'}></Blue>
      <Red colorText={'white'}></Red>
      <Blue></Blue>
    </div>
  );
}

export default App;
