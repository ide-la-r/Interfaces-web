import React from 'react'
import '../App.css';
import Contenedor from './Contenedor';

export default function Contenedores({ famosos}) {
    return (
        <div className='contenedores'>
            <Contenedor nombre={famosos[0].nombre} apellido={famosos[0].apellido} dinero={famosos[0].dinero} color={famosos[0].color} />
            <Contenedor nombre={famosos[1].nombre} apellido={famosos[1].apellido} dinero={famosos[1].dinero} color={famosos[1].color} />
            <Contenedor nombre={famosos[2].nombre} apellido={famosos[2].apellido} dinero={famosos[2].dinero} color={famosos[2].color} />
            <Contenedor nombre={famosos[3].nombre} apellido={famosos[3].apellido} dinero={famosos[3].dinero} color={famosos[3].color} />
            <Contenedor nombre={famosos[4].nombre} apellido={famosos[4].apellido} dinero={famosos[4].dinero} color={famosos[4].color} />
            <Contenedor nombre={famosos[5].nombre} apellido={famosos[5].apellido} dinero={famosos[5].dinero} color={famosos[5].color} />
        </div>
    )
}
