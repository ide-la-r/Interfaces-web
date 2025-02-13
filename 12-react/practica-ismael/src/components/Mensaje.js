import React from 'react'

export default function Mensaje({nombre = "nadie", apellido = "", dinero}) {

  return (
    <div>
      <h1>Cenar con {nombre} {apellido} vale {dinero}€</h1>
    </div>
  )
}
