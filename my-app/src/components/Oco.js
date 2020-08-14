import React, {useState} from 'react'
import '../App.css'

function VeOco({mauOco}){
    const [colorState, setColorState] = useState(mauOco);
    const change =() =>{
        setColorState('orange');
    }
    return (
        <div className="oco" style={{backgroundColor:colorState}}>
            <div type="button" onClick={() => change()}>Butt0n</div>
        </div> 
    )
}
export default VeOco