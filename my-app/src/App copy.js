import React from 'react';
import logo from './logo.svg';
import './App.css';
import VeOco from './components/Oco'

function App () {
  const list=[]
  for(let i=1;i<=64;i++){
    let color =''
    const row= Math.ceil(i/8)
    const check= row+i
    if(check%2===1) color='black'
    else color='white'
    list.push(<VeOco mauOco={color}></VeOco>)
  }
  return(
   <div className="banco">
     {list}
   </div>
 )
}

export default App;
