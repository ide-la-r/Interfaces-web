import React from 'react'

export default function Formulario({comparar}) {
  
    const comprobar =()=>{
        
    }
    
    return (
    <div>
      <div className="guess-section">
        <input type="number" id="guess" placeholder="Número" min="1" max="20"/>
        <button onClick="comprobar()">Check!</button>
    </div>
    </div>
  )
}
