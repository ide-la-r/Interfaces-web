import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import "./index.css"

const root = createRoot(document.getElementById('root'))
/*
  //esto es un componente, para en vez de estar repitiendo lo mismo pues luego lo podemos llamar varias veces
  //Los nombres de los componentes siempre tienen que ir en Pascal case porque si no los confunden con elementos html
  const Button = ({text}) => {
    return(
      <button>{text}</button>
    )
  }

  root.render(
    //unir varios elementos porque solo puede renderizar uno
    <React.Fragment>
      <Button text="Button 1" />
      <Button text="Button 2" />
      <Button text="Button 3" />
    </React.Fragment>
  )
*/

root.render(
  <App />
)