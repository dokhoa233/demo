import React, { useState } from 'react'
import '../App.css'

function VeOco({ mauOco, char }) {
    const [colorState, setState] = useState(mauOco);
    const change = () => {
        setState('pink');
    }
    return (
        <div className="oco" style={{ backgroundColor: mauOco }}> {char}
        </div>
    )
}
export default VeOco