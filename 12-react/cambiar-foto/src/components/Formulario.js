import React, { useState } from 'react'

export default function Formulario({ saludar }) {

    const saludo = () => {
        saludar(nombre, edad);
    }

    const [nombre, setNombre] = useState();
    const [edad, setEdad] = useState();

    const modificarNombre = (e) => {
        setNombre(e.target.value);
    }

    const modificarEdad = (e) => {
        setEdad(e.target.value);
    }

    return (
        <div>
            <input onChange={modificarNombre} value={nombre} type="text" id="guess" placeholder="Nombre" min="1" max="20" />
            <input onChange={modificarEdad} value={edad} type="number" id="guess" placeholder="Edad" min="1" max="3" />
            <button onClick={saludo}>Saludar!</button>
        </div>
    )
}