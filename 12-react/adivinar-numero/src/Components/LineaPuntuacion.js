import React from 'react'

export default function LineaPuntuacion({etiqueta, id, numero}) {
  return (
    <div>
      <p>{etiqueta} <span id = {id}>{numero}</span></p>
    </div>
  )
}
