import React from 'react'
import '../App.css';

export default function Contenedor({ nombre = "nadie", apellido = "", dinero, color, seleccionar }) {

    const desaparecer = (e) => {
        e.target.parentNode.style.display = "none";
    }

    return (
        <div className='contenedor' style={{ backgroundColor: color }}>
            <p>{nombre} {apellido}</p>
            <br />
            <button onClick={desaparecer}> Seleccionar</button>
        </div>
    )
}
