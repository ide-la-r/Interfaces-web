import React from 'react'

export default function Imagen(method, src, width) {
  return (
    <img onClick={method} src={src} width={width}/>
  )
}